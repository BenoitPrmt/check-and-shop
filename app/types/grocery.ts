export type GroceryItem = {
    id: number;
    name: string;
    description?: string;
    checked: boolean;
}

export type PartialGroceryItem = {
    name: string;
    description?: string;
    checked: boolean;
}

export type GroceryList = {
    id: number;
    name: string;
    color: string;
}

export type PartialGroceryList = {
    name: string;
    color: string;
}