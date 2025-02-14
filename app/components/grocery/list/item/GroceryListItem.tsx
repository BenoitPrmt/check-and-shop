import {Button} from "~/components/ui/button";
import {Circle, CircleCheck, CircleCheckIcon, PenIcon, TrashIcon} from "lucide-react";
import {Link} from "react-router";
import React from "react";
import type {GroceryItem} from "~/types/grocery";
import {useGrocery} from "~/hooks/useGrocery";

type Props = {
    item: GroceryItem;
}

const GroceryListItem = ({ item }: Props) => {
    const { deleteGroceryItem, toggleGroceryItem } = useGrocery();

    return (
        <li className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 items-center">
                {item.checked ? (
                    <CircleCheckIcon
                        className="w-6 h-6 text-gray-500 cursor-pointer"
                        onClick={() => toggleGroceryItem(item)}
                    />
                ) : (
                    <Circle
                        className="w-6 h-6 text-gray-500 cursor-pointer"
                        onClick={() => toggleGroceryItem(item)}
                    />
                )}
                <div>
                    <p className={`font-bold ${item.checked ? 'line-through' : ''}`}>{item.name}</p>
                    <p className={`text-sm text-gray-500 ${item.checked ? 'line-through' : ''}`}>{item.description}</p>
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <Link to={`/grocery/item/edit/${item.id}`} className="w-3/4 max-w-sm">
                    <Button type={"submit"} variant={"outline"} className="w-full cursor-pointer">
                        <PenIcon />
                    </Button>
                </Link>
                <Button type={"submit"} variant={"destructive"} className="w-3/4 max-w-sm cursor-pointer" onClick={() => deleteGroceryItem(item.id)}>
                    <TrashIcon />
                </Button>
            </div>
        </li>
    );
};

export default GroceryListItem;