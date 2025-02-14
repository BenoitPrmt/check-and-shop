import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import type {GroceryItem, PartialGroceryItem} from "~/types/grocery";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {ArrowLeftIcon, PlusIcon} from "lucide-react";
import {Link, useNavigate} from "react-router";
import {useGrocery} from "~/hooks/useGrocery";
import {Checkbox} from "~/components/ui/checkbox";

type Props = {
    item?: GroceryItem;
}

const GroceryItemForm = ({ item }: Props) => {
    const navigate = useNavigate();
    const { addGroceryItem, updateGroceryItem } = useGrocery();

    const [itemForm, setItemForm] = React.useState<PartialGroceryItem>({
        name: item?.name || "",
        description: item?.description,
        checked: item?.checked || false
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (item) {
            updateGroceryItem({
                id: item.id,
                name: itemForm.name,
                description: itemForm.description,
                checked: itemForm.checked
            });
        } else {
            addGroceryItem({
                name: itemForm.name,
                description: itemForm.description,
                checked: false
            })
        }

        navigate("/");
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="grid w-3/4 max-w-sm items-center gap-1.5">
                                <Label htmlFor="name">Nom du produit</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={itemForm.name}
                                    onChange={(e) => setItemForm((itemForm) => ({
                                        ...itemForm,
                                        name: e.target.value
                                    }))}
                                />
                            </div>

                            <div className="grid w-3/4 max-w-sm items-center gap-1.5">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={itemForm.description}
                                    onChange={(e) => setItemForm((itemForm) => ({
                                        ...itemForm,
                                        description: e.target.value
                                    }))}
                                />
                            </div>

                            {item && (
                                <div className="grid w-3/4 max-w-sm items-center gap-1.5">
                                    <Checkbox
                                        checked={itemForm.checked}
                                        onChange={(e) => setItemForm((itemForm) => ({
                                            ...itemForm,
                                            checked: !itemForm.checked
                                        }))}
                                    />
                                </div>
                            )}

                            <Button type={"submit"} className="w-3/4 max-w-sm cursor-pointer">
                                <PlusIcon /> {item ? "Modifier" : "Ajouter"}
                            </Button>
                            <Link to={"/"} className="w-3/4 max-w-sm">
                                <Button type={"submit"} variant={"outline"} className="w-full cursor-pointer">
                                    <ArrowLeftIcon /> Annuler
                                </Button>
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default GroceryItemForm;