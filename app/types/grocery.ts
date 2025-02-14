export type PartialGroceryItem = {
    name: string;
    description?: string;
    checked: boolean;
    listId: number | null;
}

export type GroceryItem = PartialGroceryItem & {
    id: number;
}

export type PartialGroceryList = {
    name: string;
    color: string;
}

export type GroceryList = PartialGroceryList & {
    id: number | null;
    items?: GroceryItem[];
}

export type GroceryListColor = {
    text: string;
    bg: string;
}