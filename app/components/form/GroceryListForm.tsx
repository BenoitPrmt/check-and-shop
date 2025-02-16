import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import type {GroceryList, PartialGroceryList} from "~/types/grocery";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {ArrowLeftIcon, PlusIcon} from "lucide-react";
import {Link, useNavigate} from "react-router";
import {useGrocery} from "~/hooks/useGrocery";
import {ToggleGroup, ToggleGroupItem} from "~/components/ui/toggle-group";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "~/components/ui/tooltip";

type Props = {
    list?: GroceryList;
}

const GroceryListForm = ({ list }: Props) => {
    const navigate = useNavigate();
    const { addGroceryList, updateGroceryList } = useGrocery();

    const [listForm, setListForm] = React.useState<PartialGroceryList>({
        name: list?.name || "",
        color: list?.color || "#000000",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (list) {
            updateGroceryList({
                id: list.id,
                name: listForm.name,
                color: listForm.color,
            });
        } else {
            addGroceryList({
                name: listForm.name,
                color: listForm.color,
            })
        }

        navigate("/");
    };

    return (
        <div>
            <Card className={"w-full"}>
                <CardHeader>
                    <CardTitle>
                        <div className="flex justify-between lists-center">
                            <h2>
                                {list ? "Modifier" : "Ajouter"} une liste
                            </h2>
                        </div>
                    </CardTitle>
                    <CardDescription>
                        Créez une liste de course pour vos envies !
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="grid w-3/4 max-w-sm lists-center gap-1.5">
                                <Label htmlFor="name">Nom de la liste</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Courses, bricolage..."
                                    value={listForm.name}
                                    onChange={(e) => setListForm((listForm) => ({
                                        ...listForm,
                                        name: e.target.value
                                    }))}
                                />
                            </div>

                            <Label htmlFor="name">Couleur de la liste</Label>

                            <TooltipProvider>
                                <ToggleGroup
                                    type="single"
                                    size="lg"
                                    value={listForm.color}
                                    onValueChange={(color) => setListForm((listForm) => ({
                                        ...listForm,
                                        color
                                    }))}
                                >
                                    <ToggleGroupItem value="lila" aria-label="Select lila color" className="rounded-lg">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="h-8 w-8 bg-[#f095f0] rounded-full" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Lila</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="sun" aria-label="Select yellow color" className="rounded-lg">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="h-8 w-8 bg-[#ffa902] rounded-full" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Sun</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="ocean" aria-label="Select blue color" className="rounded-lg">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="h-8 w-8 bg-[#007efe] rounded-full" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Ocean</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="tomato" aria-label="Select tomato color" className="rounded-lg">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="h-8 w-8 bg-[#f33d38] rounded-full" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Tomato</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="leaf" aria-label="Select green color" className="rounded-lg">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="h-8 w-8 bg-[#00d886] rounded-full" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Leaf</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </TooltipProvider>

                            <div className="grid grid-cols-6 w-3/4 max-w-sm lists-center gap-1.5">
                                <Link to={"/"} className="col-span-1">
                                    <Button type={"submit"} variant={"outline"} className="w-full cursor-pointer">
                                        <ArrowLeftIcon />
                                    </Button>
                                </Link>
                                <Button type={"submit"} className="col-span-5 cursor-pointer">
                                    <PlusIcon /> {list ? "Modifier" : "Ajouter"}
                                </Button>
                            </div>

                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default GroceryListForm;