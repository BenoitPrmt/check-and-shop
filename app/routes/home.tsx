import type {Route} from "./+types/home";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import {Link} from "react-router";
import {PlusIcon, SettingsIcon} from "lucide-react";
import ListAccordion from "~/components/grocery/list/ListAccordion";
import {useGrocery} from "~/hooks/useGrocery";
import {DialogTrigger, DialogHeader, DialogContent, DialogTitle, DialogDescription, Dialog} from "~/components/ui/dialog";
import ManageListsModal from "~/components/modal/ManageListsModal";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Check&Shop"},
        {name: "description", content: "Bienvenue sur Check&Shop"},
    ];
}

export default function Home() {
    const { groceryLists } = useGrocery();

    return (
        <div className="container mx-auto pt-28 flex flex-col gap-5 items-center justify-center w-11/12 md:w-3/4 lg:w-1/2">
            <Card className={"w-full"}>
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center flex-col gap-2 justify-center md:flex-row md:justify-between">
                            <h2 className="font-bold text-2xl">Listes personnalisées</h2>
                            <div className={"flex gap-2"}>
                                <ManageListsModal />
                                <Link to={"/grocery/list/add"}>
                                    <Button className="cursor-pointer">
                                        <PlusIcon /> Créer une liste
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardTitle>
                    <CardDescription>
                        {groceryLists.length} liste{(groceryLists.length || 0) > 1 ? 's' : ''} créée{(groceryLists.length || 0) > 1 ? 's' : ''}
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className={"w-full"}>
                <CardHeader>
                    <CardTitle>
                        <div className="flex items-center flex-col gap-2 justify-center md:flex-row md:justify-between">
                            <h2 className="font-bold text-2xl">Liste de courses</h2>
                            <Link to={"/grocery/item/add"}>
                                <Button className="cursor-pointer">
                                    <PlusIcon /> Ajouter un item
                                </Button>
                            </Link>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ListAccordion />
                </CardContent>
            </Card>

        </div>
    );
}
