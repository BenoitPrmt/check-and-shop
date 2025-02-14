import {type ReactNode, useEffect, useState} from "react";
import {GroceryContext} from "~/context/GroceryContext";
import type {GroceryItem, PartialGroceryItem} from "~/types/grocery";
import {createItem, deleteItem, getList, updateItem} from "~/api/grocery";

export const GroceryProvider = ({children}: { children: ReactNode }) => {

    const [groceryList, setGroceryList] = useState<GroceryItem[]>([]);

    useEffect(() => {
        getList().then((items) => {
            setGroceryList(items);
        });
    }, []);

    const addGroceryItem = (item: PartialGroceryItem) => {
        createItem(item).then((newItem) => {
            setGroceryList((items) => [...items, newItem]);
        });
    }

    const deleteGroceryItem = (id: number) => {
        deleteItem(id).then(() => {
            setGroceryList((items) => items.filter((item) => item.id !== id));
        });
    }

    const toggleGroceryItem = (item: GroceryItem) => {
        const toggledItem = {...item, checked: !item.checked};

        updateItem(toggledItem).then(() => {
            setGroceryList((items) => (
                items
                    .sort((a, b) => a.checked === b.checked ? 0 : a.checked ? 1 : -1)
                    .map((item) => item.id === toggledItem.id ? toggledItem : item)
            ));
        });
    }

    const updateGroceryItem = (item: GroceryItem) => {
        updateItem(item).then(() => {
            setGroceryList((items) => items.map((i) => i.id === item.id ? item : i));
        });
    }
     
    const value = {
        groceryList,
        addGroceryItem,
        deleteGroceryItem,
        toggleGroceryItem,
        updateGroceryItem
    };

    return <GroceryContext.Provider value={value}>{children}</GroceryContext.Provider>;
};