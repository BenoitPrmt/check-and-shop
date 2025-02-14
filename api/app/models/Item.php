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
            'foreign_key' => 'list_id'
        ]
    ];

    protected $fillable = ['name', 'description', 'checked'];
}
