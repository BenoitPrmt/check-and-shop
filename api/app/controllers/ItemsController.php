<?php

namespace App\Controllers;

use App\Models\Item;

class ItemsController extends Controller
{
    public function add() {
        $data = request()->get(['name', 'description', 'checked', 'listId']);

        $item = new Item;
        $item->name = $data['name'];
        $item->description = $data['description'];
        $item->checked = $data['checked'];
        $item->listId = $data['listId'];

        $item->save();

        response()->json([
            'message' => 'Created',
            'data' => $item,
            'status' => 201
        ], 201);
    }

    public function getList() {
        $items = Item::all();

        response()->json([
            'data' => $items,
            'status' => 200
        ]);
    }

    public function getById($id) {
        $item = Item::find($id);

        if (!$item) {
            response()->json([
                'message' => 'Not Found',
                'status' => 404
            ], 404);
        }

        response()->json([
            'data' => $item,
            'status' => 200
        ]);
    }

    public function update($id) {
        $data = request()->get(['name', 'description', 'checked']);

        $item = Item::find($id);

        if (!$item) {
            response()->json([
                'message' => 'Not Found',
                'status' => 404
            ], 404);
        }

        $item->name = $data['name'];
        $item->description = $data['description'];
        $item->checked = $data['checked'];
        $item->listId = $data['listId'];

        $item->save();

        response()->json([
            'message' => 'Updated',
            'data' => $item,
            'status' => 200
        ]);
    }

    public function deleteById($id) {
        $item = Item::find($id);

        if (!$item) {
            response()->json([
                'message' => 'Not Found',
                'status' => 404
            ], 404);
        }

        $item->delete();

        response()->json([
            'message' => 'Deleted',
            'status' => 200
        ]);
    }
}
