import type {Route} from "./+types/home";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import GroceryItemForm from "~/components/form/GroceryItemForm";
import GroceryListForm from "~/components/form/GroceryListForm";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Ajouter - Check&Shop"},
        {name: "description", content: "Bienvenue sur Check&Shop"},
    ];
}

export default function AddList() {
    return (
        <div className="container mx-auto pt-28 flex flex-col items-center justify-center w-11/12 md:w-3/4 lg:w-1/2">
            <div className="w-full">
                <GroceryListForm />
            </div>
        </div>
    );
}
