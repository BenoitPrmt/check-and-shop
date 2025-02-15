import {Outlet} from "react-router";
import {GroceryProvider} from "~/providers/GroceryProvider";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";


export default function AppLayout() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className={"container mx-auto min-h-screen"}>
                <GroceryProvider>
                    <Outlet/>
                </GroceryProvider>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}