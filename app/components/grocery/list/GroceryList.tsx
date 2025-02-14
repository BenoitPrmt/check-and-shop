import React, {useEffect, useState} from 'react';
import GroceryListItem from "~/components/grocery/list/item/GroceryListItem";
import type {GroceryItem} from "~/types/grocery";
import {getList} from "~/api/grocery";

const GroceryList = () => {
    const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (groceryItems.length <= 0) {
            getList().then((items) => {
                setGroceryItems(items);
                setLoading(false);
            });
        }
    }, [groceryItems]);

    const handleDelete = (id: number) => {
        setGroceryItems((items) => items.filter((item) => item.id !== id));
    }

    return (
        <div>
            {loading && <p>Chargement des données...</p>}
            <ul>
                {groceryItems.map(item => (
                    <GroceryListItem item={item} onDelete={() => handleDelete(item.id)} />
                ))}
            </ul>
        </div>
    );
};

export default GroceryList;