import {type ReactNode, useEffect, useState} from "react";
import {GroceryContext} from "~/context/GroceryContext";
import type {GroceryItem, GroceryList, PartialGroceryItem, PartialGroceryList} from "~/types/grocery";
import {createItem, deleteItem, getItemList, updateItem} from "~/api/grocery/item";
import {createList, deleteList, getAllLists, updateList} from "~/api/grocery/list";
import {DEFAULT_GROCERY_LIST, DEFAULT_GROCERY_LIST_NAME} from "~/constants/GroceryList";

export const GroceryProvider = ({children}: { children: ReactNode }) => {

    const [groceryList, setGroceryList] = useState<GroceryItem[]>([]);
    const [groceryLists, setGroceryLists] = useState<GroceryList[]>([
        DEFAULT_GROCERY_LIST,
    ]);

    useEffect(() => {
        getItemList().then((groceryItems) => {
            setGroceryList(groceryItems);
            getAllLists().then((lists) => {
                const defaultListItems = groceryItems.filter((item) => item.listId === null);
                setGroceryLists([{ id: null, name: DEFAULT_GROCERY_LIST_NAME, color: "coal", items: defaultListItems }, ...lists]);
            });
        });
    }, []);

    useEffect(() => {
        setGroceryLists((lists) => lists.map((list) => ({...list, items: groceryList.filter((item) => item.listId === list.id)})));
    }, [groceryList]);

    const addGroceryItem = (item: PartialGroceryItem) => {
        console.log("item", item);
        createItem(item).then((newItem) => {
            console.log("newItem", newItem);
            setGroceryList((items) => [...items, newItem]);
        });
    }

    const deleteGroceryItem = (id: number) => {
        deleteItem(id).then(() => {
            setGroceryList((items) => items.filter((item) => item.id !== id));
            setGroceryLists((lists) => lists.map((list) => ({...list, items: list.items?.filter((item) => item.id !== id)})));
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