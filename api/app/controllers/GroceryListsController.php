<?php

namespace App\Controllers;

use App\Models\GroceryList;

class GroceryListsController extends Controller
{
    public function add() {
        $data = request()->get(['name', 'color']);

        $list = new GroceryList;
        $list->name = $data['name'];
        $list->color = $data['color'];

        $list->save();

        response()->json([
            'message' => 'Created',
            'data' => $list,
            'status' => 201
        ], 201);
    }

    public function getList() {
        $lists = GroceryList::with(['items'])->get();

        response()->json([
            'data' => $lists,
            'status' => 200
        ]);
    }

    public function getById($id) {
        $list = GroceryList::with(['items'])->find($id);

        if (!$list) {
            response()->json([
                'message' => 'Not Found',
                'status' => 404
            ], 404);
        }

        response()->json([
            'data' => $list,
            'status' => 200
        ]);
    }

    public function update($id) {
        $data = request()->get(['name', 'color']);

        $list = GroceryList::find($id);

        if (!$list) {
            response()->json([
                'message' => 'Not Found',
                'status' => 404
            ], 404);
        }

        $list->name = $data['name'];
        $list->color = $data['color'];

        $list->save();

        response()->json([
            'message' => 'Updated',
            'data' => $list,
            'status' => 200
        ]);
    }

    public function deleteById($id) {
        $list = GroceryList::find($id);

        if (!$list) {
            response()->json([
                'message' => 'Not Found',
                'status' => 404
            ], 404);
        }

        $list->delete();

        response()->json([
            'message' => 'Deleted',
            'status' => 200
        ]);
    }
}
