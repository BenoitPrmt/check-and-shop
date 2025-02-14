import {Button} from "~/components/ui/button";
import {PenIcon, Trash, TrashIcon} from "lucide-react";
import {Link} from "react-router";
import React from "react";
import type {GroceryItem} from "~/types/grocery";
import {deleteItem} from "~/api/grocery";

type Props = {
    item: GroceryItem;
    onDelete: () => void;
}

const GroceryListItem = ({ item, onDelete }: Props) => {
    const handleDelete = () => {
        deleteItem(item.id);
        onDelete();
    }

    return (
        <li className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 items-center">
                <div>
                    <p className="font-bold">{item.name}</p>
                    <p>{item.description}</p>
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <Link to={`/grocery/item/edit/${item.id}`} className="w-3/4 max-w-sm">
                    <Button type={"submit"} variant={"outline"} className="w-full cursor-pointer">
                        <PenIcon /> Modifier
                    </Button>
                </Link>
                <Button type={"submit"} variant={"destructive"} className="w-3/4 max-w-sm cursor-pointer" onClick={handleDelete}>
                    <TrashIcon />
                </Button>
            </div>
        </li>
    );
};

export default GroceryListItem;