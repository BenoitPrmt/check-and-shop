import {Outlet} from "react-router";
import {GroceryProvider} from "~/providers/GroceryProvider";
import Header from "~/components/layout/Header";


export default function AppLayout() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className={"container mx-auto"}>
                <GroceryProvider>
                    <Outlet/>
                </GroceryProvider>
            </main>
        </>
    );
}