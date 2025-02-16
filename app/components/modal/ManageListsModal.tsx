import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "~/components/ui/dialog";
import {Button} from "~/components/ui/button";
import {EllipsisVerticalIcon, PenIcon, SettingsIcon, TrashIcon, XIcon} from "lucide-react";
import {useGrocery} from "~/hooks/useGrocery";
import {COLORS} from "~/constants/GroceryListColor";
import React from "react";
import {Separator} from "~/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";
import {Link} from "react-router";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "~/components/ui/alert-dialog";

const ManageListsModal = () => {
    const {groceryLists, deleteGroceryList} = useGrocery();

    const handleDeleteList = (listId: number | null) => {
        if (listId) {
            deleteGroceryList(listId);
        }
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button className="cursor-pointer" variant={"outline"}>
                    <SettingsIcon/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl">Gérez vos listes</DialogTitle>
                    <DialogDescription>
                        Ici, vous pouvez créer, modifier et supprimer vos listes de courses.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4">
                    <ul className="flex flex-col gap-2">
                        {groceryLists.map((list, index) => (
                            <div key={index}>
                                <div className="flex flex-row gap-4 items-center">

                                    <DropdownMenu>
                                        <DropdownMenuTrigger disabled={!list.id}>
                                            <Button className="cursor-pointer" variant="secondary" size="icon"
                                                    disabled={!list.id}>
                                                <EllipsisVerticalIcon/>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>Gérer cette liste</DropdownMenuLabel>
                                            <DropdownMenuSeparator/>
                                            <DropdownMenuItem>
                                                <Link to={`/grocery/list/edit/${list.id}`}
                                                      className="flex flex-row gap-2 items-center">
                                                    <PenIcon/> Modifier
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                className="text-destructive flex flex-row gap-2 cursor-pointer"
                                                onSelect={(e) => {
                                                    e.preventDefault();
                                                }}
                                            >
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <div className="flex flex-row gap-2 items-center w-full">
                                                            <TrashIcon className="text-destructive"/> Supprimer
                                                        </div>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle className="text-2xl text-destructive">
                                                                Êtes-vous sûr de vouloir supprimer cette liste ?
                                                            </AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Cette action est irréversible. Toutes les données associées à cette liste seront perdues.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel
                                                                className="cursor-pointer"
                                                            >
                                                                <XIcon /> Annuler
                                                            </AlertDialogCancel>
                                                            <AlertDialogAction
                                                                className="bg-destructive text-white hover:bg-red-500 cursor-pointer"
                                                                onClick={() => handleDeleteList(list.id)}
                                                            >
                                                                <TrashIcon /> Supprimer définitivement
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    <h3 className={`font-bold text-xl ${COLORS[list.color] ? COLORS[list.color].text : ''}`}>{list.name}</h3>
                                    <p className="text-gray-500">{list.items?.length || 0} article{(list.items?.length || 0) > 1 ? 's' : ''}</p>
                                </div>
                                <Separator className="mt-3"/>
                            </div>
                        ))}
                    </ul>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ManageListsModal;