import type {GroceryList, PartialGroceryList} from "~/types/grocery";

export const getAllLists = async (): Promise<GroceryList[]> => {
    return await fetch("http://127.0.0.1:5500/grocery/list/all", {
        method: "GET",
        mode: "cors",
    })
        .then((response) => response.json())
        .then((datas) => {
            if (datas.status !== 200) {
                throw new Error(
                    "Le statut de la requête n'est pas valide."
                );
            }
            return datas.data;
        })
        .catch((err) => console.error(err));
}

export const getList = async (id: string): Promise<GroceryList> => {
    return await fetch(`http://127.0.0.1:5500/grocery/list/${id}`, {
        method: "GET",
        mode: "cors",
    })
        .then((response) => response.json())
        .then((datas) => {
            if (datas.status !== 200) {
                throw new Error(
                    "Le statut de la requête n'est pas valide."
                );
            }

            if (!datas.data) {
                throw new Error(
                    "Aucun list n'a été retourné."
                );
            }


            return datas.data;
        })
        .catch((err) => console.error(err));
}

export const createList = async (list: PartialGroceryList): Promise<GroceryList> => {
    return await fetch("http://127.0.0.1:5500/grocery/list", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(list)
    })
        .then(response => response.json())
        .then(datas => {
            if (datas.status !== 201) {
                throw new Error("Le status de la requête est invalide.");
            }

            return datas.data;
        })
        .catch(err => console.error(err));
}

export const updateList = async (list: GroceryList): Promise<GroceryList> => {
    return await fetch(`http://127.0.0.1:5500/grocery/list/${list.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(list)
    })
        .then(response => response.json())
        .then(datas => {
            if (datas.status !== 200) {
                throw new Error("Le status de la requête est invalide.");
            }

            return datas.data;
        })
        .catch(err => console.error(err));
}

export const deleteList = async (id: number): Promise<void> => {
    return await fetch(`http://127.0.0.1:5500/grocery/list/${id}`, {
        method: "DELETE",
        mode: "cors",
    })
        .then(response => response.json())
        .then(datas => {
            if (datas.status !== 204) {
                throw new Error("Le status de la requête est invalide.");
            }
        })
        .catch(err => console.error(err));
}