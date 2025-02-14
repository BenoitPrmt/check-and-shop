import {createContext} from 'react';
import type {GroceryContextType} from "~/types/context/groceryContext";

export const GroceryContext = createContext<GroceryContextType | undefined>(undefined);