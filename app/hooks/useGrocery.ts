import {useContext} from "react";
import type {GroceryContextType} from "~/types/context/groceryContext";
import {GroceryContext} from "~/context/GroceryContext";

/**
 * Hook to use the game context
 */
export const useGrocery = (): GroceryContextType => {
    const context = useContext(GroceryContext);
    if (!context) {
        throw new Error('useGrocery must be used within a GroceryProvider');
    }
    return context;
};