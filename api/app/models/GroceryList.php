<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;

class GroceryList extends Model
{
    protected $table = 'grocery_lists';
    protected $primaryKey = 'id';

    protected $fillable = ['name', 'description'];

    public function items(): HasMany
    {
        return $this->hasMany(Item::class, 'list_id');
    }
}
