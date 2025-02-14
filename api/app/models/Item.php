<?php

namespace App\Models;

class Item extends Model
{
    protected $table = 'items';
    protected $primaryKey = 'id';

    protected $fillable = ['name', 'description', 'checked'];
}
