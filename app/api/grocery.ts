import type {GroceryItem} from "~/types/grocery";

export const getList = async (): Promise<GroceryItem[]> => {
    return await fetch("http://127.0.0.1:5500/grocery/items", {
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

            if (!datas.data.length) {
                throw new Error(
                    "Aucun item n'a été retourné."
                );
            }

            return datas.data;
        })
        .catch((err) => console.error(err));
}