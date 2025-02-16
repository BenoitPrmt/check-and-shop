import type {GroceryList} from "~/types/grocery";

export const DEFAULT_GROCERY_LIST_NAME = "Liste par défaut";

export const DEFAULT_GROCERY_LIST: GroceryList = { id: null, name: DEFAULT_GROCERY_LIST_NAME, color: "coal", items: [] };