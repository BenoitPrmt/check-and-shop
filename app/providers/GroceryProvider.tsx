import {type ReactNode, useEffect, useState} from "react";
import {GroceryContext} from "~/context/GroceryContext";
import type {GroceryItem, GroceryList, PartialGroceryItem, PartialGroceryList} from "~/types/grocery";
import {createItem, deleteItem, getList, updateItem} from "~/api/grocery/item";
import {createList, deleteList, getAllLists, updateList} from "~/api/grocery/list";

export const GroceryProvider = ({children}: { children: ReactNode }) => {

    const [groceryList, setGroceryList] = useState<GroceryItem[]>([]);
    const [groceryLists, setGroceryLists] = useState<GroceryList[]>([
        { id: null, name: "Liste par défaut", color: "coal", items: [] },
    ]);

    useEffect(() => {
        getList().then((groceryItems) => {
            setGroceryList(groceryItems.map((item: any) => ({...item, listId: item.list_id})));
            getAllLists().then((lists) => {
                const defaultListItems = groceryItems.filter((item: any) => item.list_id === null);
                setGroceryLists([{ id: null, name: "Liste par défaut", color: "coal", items: defaultListItems }, ...lists]);
            });
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

    const addGroceryList = (item: PartialGroceryList) => {
        createList(item).then((newItem) => {
            setGroceryLists((items) => [...items, newItem]);
        });
    }

    const deleteGroceryList = (id: number) => {
        deleteList(id).then(() => {
            setGroceryLists((items) => items.filter((item) => item.id !== id));
        });
    }

    const updateGroceryList = (item: GroceryList) => {
        updateList(item).then(() => {
            setGroceryLists((items) => items.map((i) => i.id === item.id ? item : i));
        });
    }
     
    const value = {
        groceryList,
        addGroceryItem,
        deleteGroceryItem,
        toggleGroceryItem,
        updateGroceryItem,

        groceryLists,
        addGroceryList,
        updateGroceryList,
        deleteGroceryList,
    };

    return <GroceryContext.Provider value={value}>{children}</GroceryContext.Provider>;
};