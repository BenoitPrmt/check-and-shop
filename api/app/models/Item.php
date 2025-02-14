<?php

namespace App\Models;

class Item extends Model
{
    protected $table = 'items';
    protected $primaryKey = 'id';

    protected $relations = [
        'list' => [
            'type' => 'belongsTo',
            'model' => 'GroceryList',
            'foreign_key' => 'listId'
        ]
    ];

    protected $fillable = ['name', 'description', 'checked'];

    public function list()
    {
        return $this->belongsTo('GroceryList', 'listId');
    }
}
