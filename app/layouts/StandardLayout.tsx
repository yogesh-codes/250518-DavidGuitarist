import { isRouteErrorResponse, Outlet, useRouteError } from "react-router";
import Header from "./Header";

export default function StandardLayout() {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

// ErrorBoundary Component for the Layout
export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div className="error-boundary">
                <h2>
                    Error: {error.status} - {error.statusText}
                </h2>
                <p>{error.data?.message || "Something went wrong."}</p>
            </div>
        );
    }

    return <div className="error-boundary">Unknown Error Occurred.</div>;
}
