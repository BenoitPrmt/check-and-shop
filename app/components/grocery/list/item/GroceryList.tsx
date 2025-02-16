import React from 'react';
import GroceryListItem from "~/components/grocery/list/item/GroceryListItem";
import {useGrocery} from "~/hooks/useGrocery";
import {Button} from "~/components/ui/button";
import {PlusIcon} from "lucide-react";
import {Link} from "react-router";

type Props = {
    listId: number | null;
}

const GroceryList = ({ listId }: Props) => {
    const { groceryList } = useGrocery();

    return (
        <div>
            <ul className={"flex flex-col gap-2"}>
                {groceryList.filter((item) => item.listId === listId).length === 0 ? (
                    <div className={"flex flex-col gap-2 items-center justify-center"}>
                        <p className="text-gray-400">Il n'y a rien dans cette liste...</p>
                        <Link to={`/grocery/item/add?list=${listId}`}>
                            <Button className="cursor-pointer" variant="secondary">
                                <PlusIcon /> Ajouter un item
                            </Button>
                        </Link>
                    </div>
                ) : (
                    groceryList.filter((item) => item.listId === listId).map((item, index) => (
                        <GroceryListItem item={item} key={index} />
                    ))
                )}
            </ul>
        </div>
    );
};

export default GroceryList;