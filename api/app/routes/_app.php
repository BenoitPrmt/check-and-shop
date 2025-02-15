<?php

app()->get('/', function () {
    response()->json(['message' => 'Bienvenue sur l\'API de Check&Shop']);
});

app()->group('/grocery/item', function () {
    app()->get('/all', 'ItemsController@getList');
    app()->get('/{id}', 'ItemsController@getById');
    app()->post('/', 'ItemsController@add');
    app()->put('/{id}', 'ItemsController@update');
    app()->delete('/{id}', 'ItemsController@deleteById');
});

app()->group('/grocery/list', function () {
    app()->get('/all', 'GroceryListsController@getList');
    app()->get('/{id}', 'GroceryListsController@getById');
    app()->post('/', 'GroceryListsController@add');
    app()->put('/{id}', 'GroceryListsController@update');
    app()->delete('/{id}', 'GroceryListsController@deleteById');
});

