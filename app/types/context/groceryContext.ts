import type {GroceryItem, PartialGroceryItem} from "~/types/grocery";

export interface GroceryContextType {
    groceryList: GroceryItem[];
    addGroceryItem: (item: PartialGroceryItem) => void;
    deleteGroceryItem: (id: number) => void;
    toggleGroceryItem: (item: GroceryItem) => void;
    updateGroceryItem: (item: GroceryItem) => void;
}