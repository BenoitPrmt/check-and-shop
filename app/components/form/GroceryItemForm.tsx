import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import type {GroceryItem} from "~/types/grocery";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {ArrowLeftFromLineIcon, ArrowLeftIcon, PlusIcon} from "lucide-react";
import {Link} from "react-router";

type Props = {
    item?: GroceryItem;
}

const GroceryItemForm = ({ item }: Props) => {
    return (
        <div>
            <Card className={"w-full"}>
                <CardHeader>
                    <CardTitle>
                        <div className="flex justify-between items-center">
                            <h2>
                                {item ? "Modifier" : "Ajouter"} un item
                            </h2>
                        </div>
                    </CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-3 items-center">
                        <div className="grid w-3/4 max-w-sm items-center gap-1.5">
                            <Label htmlFor="name">Nom du produit</Label>
                            <Input type="text" id="name" name="name" defaultValue={item?.name} />
                        </div>

                        <div className="grid w-3/4 max-w-sm items-center gap-1.5">
                            <Label htmlFor="description">Description</Label>
                            <Input type="text" id="description" name="description" defaultValue={item?.description} />
                        </div>

                        <Button type={"submit"} className="w-3/4 max-w-sm cursor-pointer">
                            <PlusIcon /> {item ? "Modifier" : "Ajouter"}
                        </Button>
                        <Link to={"/"} className="w-3/4 max-w-sm">
                            <Button type={"submit"} variant={"outline"} className="w-full cursor-pointer">
                                <ArrowLeftIcon /> Annuler
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default GroceryItemForm;