import React from 'react';
import GroceryListItem from "~/components/grocery/list/item/GroceryListItem";
import {useGrocery} from "~/hooks/useGrocery";

type Props = {
    listId: number | null;
}

const GroceryList = ({ listId }: Props) => {
    const { groceryList } = useGrocery();

    return (
        <div>
            <ul>
                {groceryList.filter((item) => item.listId === listId).length === 0 ? (
                    <p className="text-gray-400">Il n'y a rien dans cette liste...</p>
                ) : (
                    groceryList.filter((item) => item.listId === listId).map((item, index) => (
                        <GroceryListItem item={item} key={index} />
                    ))
                )}
            </ul>
        </div>
    );
};

export default GroceryList;