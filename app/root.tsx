import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { useLayoutEffect, useState } from "react";

import { Link } from "react-router";

export const links: Route.LinksFunction = () => [
    // { rel: "preconnect", href: "https://fonts.googleapis.com" },
    // {
    //     rel: "preconnect",
    //     href: "https://fonts.gstatic.com",
    //     crossOrigin: "anonymous",
    // },
    // {
    //     rel: "stylesheet",
    //     href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    // },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    // return <Outlet />;

    const [isThemeReady, setThemeReady] = useState(false);

    // premise- app mount, conc- dont return until themeready
    // theme ready = whether html theme-dark class is set.
    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        console.log("-------NEW APP MOUNT------------");
        const osPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const shouldBeDark =
            storedTheme === "dark" || (!storedTheme && osPrefersDark);

        console.log("premise- Theme needs to be", shouldBeDark);

        if (shouldBeDark) {
            document.documentElement.classList.add("theme-dark");
        } else {
            document.documentElement.classList.remove("theme-dark");
        }
        setThemeReady(true);
    }, []);

    // don’t render anything until we’ve set the class
    if (!isThemeReady) {
        console.log("Theme not ready, returning null");
        return null;
    }

    return (
        // ...your entire app UI here
        <Outlet />
    );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p className="text-center">{details}</p>
            <Link to="/">Go to Home Page</Link>
            <Link to="/250518-DavidGuitarist/">this one?</Link>

            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
