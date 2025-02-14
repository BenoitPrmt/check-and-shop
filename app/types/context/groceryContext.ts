import type {GroceryItem, GroceryList, PartialGroceryItem, PartialGroceryList} from "~/types/grocery";

export interface GroceryContextType {
    groceryList: GroceryItem[];
    addGroceryItem: (item: PartialGroceryItem) => void;
    deleteGroceryItem: (id: number) => void;
    toggleGroceryItem: (item: GroceryItem) => void;
    updateGroceryItem: (item: GroceryItem) => void;

    groceryLists: GroceryList[];
    addGroceryList: (item: PartialGroceryList) => void;
    updateGroceryList: (item: GroceryList) => void;
    deleteGroceryList: (id: number) => void;
}