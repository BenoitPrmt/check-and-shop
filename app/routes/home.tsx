import type {Route} from "./+types/home";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";

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
                            <Button>
                                Ajouter un item
                            </Button>
                        </div>
                    </CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li>Abc</li>
                        <li>Abc</li>
                        <li>Abc</li>
                        <li>Abc</li>
                        <li>Abc</li>
                    </ul>
                </CardContent>
            </Card>

        </div>
    );
}
