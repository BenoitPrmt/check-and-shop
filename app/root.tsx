import {isRouteErrorResponse, Link, Links, Meta, Outlet, Scripts, ScrollRestoration,} from "react-router";

import type {Route} from "./+types/root";
import "./app.css";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import {Button} from "~/components/ui/button";
import {HomeIcon} from "lucide-react";

export const links: Route.LinksFunction = () => [
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
    },
];

export function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
            <Links/>
        </head>
        <body>
        {children}
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet/>;
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "Une erreur est survenue.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "La page demandée est introuvable."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <>
            <header>
                <Header/>
            </header>
            <main className="container mx-auto flex flex-col items-center pt-28 min-h-screen">
                <h1 className="text-destructive text-4xl font-bold">{message}</h1>
                <p>{details}</p>
                {stack && (
                    <pre className="w-full p-4 overflow-x-auto">
                      <code>{stack}</code>
                    </pre>
                )}
                <Link to="/" className="mt-4">
                    <Button className="cursor-pointer">
                        <HomeIcon /> Retour à l'accueil
                    </Button>
                </Link>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}
