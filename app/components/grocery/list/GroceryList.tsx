import React from 'react';
import GroceryListItem from "~/components/grocery/list/item/GroceryListItem";
import type {GroceryItem} from "~/types/grocery";

const GroceryList = () => {

    const items: GroceryItem[] = [
        {id: 1, name: "Pomme", description: "Une pomme", checked: false},
        {id: 2, name: "Poire", description: "Une poire", checked: false},
        {id: 3, name: "Banane", description: "Une banane", checked: false},
        {id: 4, name: "Orange", description: "Une orange", checked: false},
    ]

    return (
        <div>
            <ul>
                {items.map(item => (
                    <GroceryListItem item={item} />
                ))}
            </ul>
        </div>
    );
};

export default GroceryList;