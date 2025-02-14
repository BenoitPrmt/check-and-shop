import type {Route} from "./+types/home";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import GroceryItemForm from "~/components/form/GroceryItemForm";
import type {GroceryItem} from "~/types/grocery";
import {useEffect, useState} from "react";
import {getItem} from "~/api/grocery/item";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Modifier - Check&Shop"},
        {name: "description", content: "Bienvenue sur Check&Shop"},
    ];
}

export default function EditItem({ params }: Route.ComponentProps) {
    const { id } = params;

    const [item, setItem] = useState<GroceryItem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            getItem(id)
                .then((item) => {
                    setItem(item);
                    setLoading(false);
                });
        }
    }, []);

    return (
        <div className="container mx-auto pt-28 flex flex-col items-center justify-center w-1/2">
            <div className="w-full">
                {loading && <p>Chargement des données...</p>}
                {item && !loading && <GroceryItemForm item={item} />}
            </div>
        </div>
    );
}
