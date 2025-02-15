import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import type {GroceryItem, PartialGroceryItem} from "~/types/grocery";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {ArrowLeftIcon, Check, ChevronsUpDown, PlusIcon, SaveIcon} from "lucide-react";
import {Link, useNavigate, useSearchParams} from "react-router";
import {useGrocery} from "~/hooks/useGrocery";
import {Popover, PopoverContent, PopoverTrigger} from "~/components/ui/popover";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "~/components/ui/command";
import {cn} from "~/lib/utils";
import {COLORS} from "~/constants/GroceryListColor";
import {Switch} from "~/components/ui/switch";

type Props = {
    item?: GroceryItem;
}

const GroceryItemForm = ({item}: Props) => {
    const navigate = useNavigate();
    const {addGroceryItem, updateGroceryItem, groceryLists} = useGrocery();

    const [searchParams] = useSearchParams();

    const defaultSelectedListByParam = searchParams.get("list");
    const defaultSelectedList = item ?
        groceryLists.find((list) => list.id === item.listId)?.name :
        groceryLists.find((list) => list.id === parseInt(defaultSelectedListByParam || ""))?.name;

    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>(defaultSelectedList || "Liste par défaut");

    useEffect(() => {
        const defaultSelectedList = item ?
            groceryLists.find((list) => list.id === item.listId)?.name :
            groceryLists.find((list) => list.id === parseInt(defaultSelectedListByParam || ""))?.name;
        setValue(defaultSelectedList || "Liste par défaut");
    }, [groceryLists]);

    const [itemForm, setItemForm] = React.useState<PartialGroceryItem>({
        name: item?.name || "",
        description: item?.description,
        checked: item?.checked || false,
        listId: item?.listId || null
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (item) {
            updateGroceryItem({
                id: item.id,
                name: itemForm.name,
                description: itemForm.description,
                checked: itemForm.checked,
                listId: groceryLists.find((list) => list.name === value)?.id || null
            });
        } else {
            addGroceryItem({
                name: itemForm.name,
                description: itemForm.description,
                checked: false,
                listId: groceryLists.find((list) => list.name === value)?.id || null
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
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="checked"
                                            checked={itemForm.checked}
                                            onCheckedChange={(state) => setItemForm((itemForm) => ({
                                                ...itemForm,
                                                checked: state
                                            }))}
                                        />
                                        <Label htmlFor="checked">
                                            {itemForm.checked ? "Produit acheté" : "Produit à acheter"}
                                        </Label>
                                    </div>
                                </div>
                            )}

                            <div className="grid w-3/4 max-w-sm items-center gap-1.5">
                                <Label htmlFor="description">Liste de courses</Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild className="w-full">
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-full justify-between"
                                        >
                                            {value ? (
                                                (() => {
                                                    const list = groceryLists.find((list) => list.name === value);
                                                    if (!list) return null;
                                                    return (
                                                        <div className="flex flex-row items-center gap-2">
                                                            <div className={`h-4 w-4 rounded-full ${COLORS[list.color] ? COLORS[list.color].bg : ''}`} />
                                                            <p>{list.name}</p>
                                                        </div>
                                                    );
                                                })()
                                            ) : "Sélectionner une liste..."}

                                            <ChevronsUpDown className="opacity-50"/>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Sélectionner une liste..." className="h-9"/>
                                            <CommandList>
                                                <CommandEmpty>Liste non trouvée</CommandEmpty>
                                                <CommandGroup>
                                                    {groceryLists.map((list) => (
                                                        <CommandItem
                                                            key={list.name}
                                                            value={list.name}
                                                            defaultChecked={value === list.name}
                                                            onSelect={(currentValue) => {
                                                                setValue(currentValue === value ? "" : currentValue)
                                                                setOpen(false)
                                                            }}
                                                        >
                                                            <div className={`h-4 w-4 rounded-full ${COLORS[list.color] ? COLORS[list.color].bg : ''}`} />
                                                            {list.name}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    value === list.name ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <Button type={"submit"} className="w-3/4 max-w-sm cursor-pointer">
                                {item ? <SaveIcon /> : <PlusIcon/>} {item ? "Modifier" : "Ajouter"}
                            </Button>
                            <Link to={"/"} className="w-3/4 max-w-sm">
                                <Button type={"submit"} variant={"outline"} className="w-full cursor-pointer">
                                    <ArrowLeftIcon/> Annuler
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