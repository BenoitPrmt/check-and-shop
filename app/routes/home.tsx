import type {Route} from "./+types/home";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import {Link} from "react-router";
import {PlusIcon} from "lucide-react";
import GroceryList from "~/components/grocery/list/item/GroceryList";
import GroceryLists from "~/components/grocery/list/GroceryLists";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Check&Shop"},
        {name: "description", content: "Bienvenue sur Check&Shop"},
    ];
}

export default function Home() {
    return (
        <div className="container mx-auto pt-28 flex flex-col gap-5 items-center justify-center w-2/3">
            <Card className={"w-full"}>
                <CardHeader>
                    <CardTitle>
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-2xl">Listes personnalisées</h2>
                            <Link to={"/grocery/list/add"}>
                                <Button className="cursor-pointer">
                                    <PlusIcon /> Créer une liste
                                </Button>
                            </Link>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <GroceryLists />
                </CardContent>
            </Card>

            <Card className={"w-full"}>
                <CardHeader>
                    <CardTitle>
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-2xl">Liste de courses</h2>
                            <Link to={"/grocery/item/add"}>
                                <Button className="cursor-pointer">
                                    <PlusIcon /> Ajouter un item
                                </Button>
                            </Link>
                        </div>
                    </CardTitle>
                    <CardDescription>
                        Liste par défaut
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <GroceryList />
                </CardContent>
            </Card>

        </div>
    );
}
