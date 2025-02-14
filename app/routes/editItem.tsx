import type {Route} from "./+types/home";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import GroceryItemForm from "~/components/form/GroceryItemForm";
import type {GroceryItem} from "~/types/grocery";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Ajouter - Check&Shop"},
        {name: "description", content: "Bienvenue sur Check&Shop"},
    ];
}

export default function EditItem({ params }: Route.ComponentProps) {
    const { id } = params;

    const item: GroceryItem = {id: 1, name: "Pomme", description: "Une pomme", checked: false};

    return (
        <div className="container mx-auto pt-28 flex flex-col items-center justify-center w-1/2">
            <div className="w-full">
                <GroceryItemForm item={item} />
            </div>
        </div>
    );
}
