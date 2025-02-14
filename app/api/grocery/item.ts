import type {GroceryItem, PartialGroceryItem} from "~/types/grocery";

export const getList = async (): Promise<GroceryItem[]> => {
    return await fetch("http://127.0.0.1:5500/grocery/item/all", {
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

export const getItem = async (id: string): Promise<GroceryItem> => {
    return await fetch(`http://127.0.0.1:5500/grocery/item/${id}`, {
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
                    "Aucun item n'a été retourné."
                );
            }


            return datas.data;
        })
        .catch((err) => console.error(err));
}

export const createItem = async (item: PartialGroceryItem): Promise<GroceryItem> => {
    return await fetch("http://127.0.0.1:5500/grocery/item", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(item)
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

export const updateItem = async (item: GroceryItem): Promise<GroceryItem> => {
    return await fetch(`http://127.0.0.1:5500/grocery/item/${item.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(item)
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

export const deleteItem = async (id: number): Promise<void> => {
    return await fetch(`http://127.0.0.1:5500/grocery/item/${id}`, {
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