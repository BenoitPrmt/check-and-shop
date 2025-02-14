<?php

app()->get('/', function () {
    response()->json(['message' => 'Congrats!! You\'re on Leaf MVC']);
});

app()->group('/grocery', function () {
    app()->get('/items', 'ItemsController@getList');
    app()->get('/item/{id}', 'ItemsController@getById');
    app()->post('/item', 'ItemsController@add');
    app()->put('/item/{id}', 'ItemsController@update');
    app()->delete('/item/{id}', 'ItemsController@deleteById');
});
