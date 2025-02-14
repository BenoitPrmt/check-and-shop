import React from 'react';
import GroceryListItem from "~/components/grocery/list/item/GroceryListItem";
import {useGrocery} from "~/hooks/useGrocery";

const GroceryList = () => {
    const { groceryList } = useGrocery();

    return (
        <div>
            <ul>
                {groceryList.map((item, index) => (
                    <GroceryListItem item={item} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default GroceryList;