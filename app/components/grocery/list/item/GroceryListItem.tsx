import {Button} from "~/components/ui/button";
import {PenIcon} from "lucide-react";
import {Link} from "react-router";
import React from "react";
import type {GroceryItem} from "~/types/grocery";

type Props = {
    item: GroceryItem;
}

const GroceryListItem = ({ item }: Props) => {
    return (
        <li className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 items-center">
                <div>
                    <p className="font-bold">{item.name}</p>
                    <p>{item.description}</p>
                </div>
            </div>
            <div>
                <Link to={`/grocery/item/edit/${item.id}`} className="w-3/4 max-w-sm">
                    <Button type={"submit"} variant={"outline"} className="w-full cursor-pointer">
                        <PenIcon /> Modifier
                    </Button>
                </Link>
            </div>
        </li>
    );
};

export default GroceryListItem;