<?php

namespace App\Models;

class GroceryList extends Model
{
    protected $table = 'grocery_lists';
    protected $primaryKey = 'id';

    protected $fillable = ['name', 'description'];
}
