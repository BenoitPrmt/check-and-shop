export type GroceryItem = {
    id: number;
    name: string;
    description?: string;
    checked: boolean;
    listId: number | null;
}

export type PartialGroceryItem = {
    name: string;
    description?: string;
    checked: boolean;
    listId: number | null;
}

export type GroceryList = {
    id: number | null;
    name: string;
    color: string;
    items?: GroceryItem[];
}

export type PartialGroceryList = {
    name: string;
    color: string;
}