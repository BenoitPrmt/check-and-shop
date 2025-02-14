import type {Route} from "./+types/home";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import {Link} from "react-router";
import {PlusIcon} from "lucide-react";
import GroceryList from "~/components/grocery/list/GroceryList";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Check&Shop"},
        {name: "description", content: "Bienvenue sur Check&Shop"},
    ];
}

export default function Home() {
    return (
        <div className="container mx-auto pt-28 flex flex-col items-center justify-center w-1/2">
            <Card className={"w-full"}>
                <CardHeader>
                    <CardTitle>
                        <div className="flex justify-between items-center">
                            <h2>Liste de courses</h2>
                            <Link to={"/grocery/item/add"}>
                                <Button className="cursor-pointer">
                                    <PlusIcon /> Ajouter un item
                                </Button>
                            </Link>
                        </div>
                    </CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <GroceryList />
                </CardContent>
            </Card>

        </div>
    );
}
