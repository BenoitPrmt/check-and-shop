import type {Route} from "./+types/home";
import type {GroceryList} from "~/types/grocery";
import {useEffect, useState} from "react";
import GroceryListForm from "~/components/form/GroceryListForm";
import {getList} from "~/api/grocery/list";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Modifier - Check&Shop"},
        {name: "description", content: "Bienvenue sur Check&Shop"},
    ];
}

export default function EditItem({ params }: Route.ComponentProps) {
    const { id } = params;

    const [list, setList] = useState<GroceryList | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            getList(id)
                .then((groceryList) => {
                    setList(groceryList);
                    setLoading(false);
                });
        }
    }, []);

    return (
        <div className="container mx-auto pt-28 flex flex-col items-center justify-center w-2/3">
            <div className="w-full">
                {loading && <p>Chargement des données...</p>}
                {list && !loading && <GroceryListForm list={list} />}
            </div>
        </div>
    );
}
