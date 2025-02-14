import React from 'react';
import {useGrocery} from "~/hooks/useGrocery";
import {COLORS} from "~/constants/GroceryListColor";

const GroceryList = () => {
    const {groceryLists} = useGrocery();

    return (
        <div>
            <ul>
                {groceryLists.length === 0 ? (
                    <p className="text-gray-400">Vous n'avez aucune liste personnalisée</p>
                ) : (
                    groceryLists.map((item, index) => {
                        return (
                            <p key={index} className={COLORS[item.color] ? COLORS[item.color].text : ''}>{item.name}</p>
                        )
                    })
                )}
            </ul>
        </div>
    );
};

export default GroceryList;