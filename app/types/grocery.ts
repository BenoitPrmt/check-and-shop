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