import { isRouteErrorResponse, Outlet, useRouteError } from "react-router";
import { useScreenWidth } from "~/hooks/useScreenWidth";

export default function MasterLayout() {
    const width = useScreenWidth();
    return (
        <>
            {import.meta.env.DEV && (
                <div className="fixed z-10 bg-cyan-500/50">
                    {width}
                    {width < 360
                        ? "No need to check. too small❌🔛"
                        : width < 480
                        ? "⬜"
                        : width < 640
                        ? "crossed xs📱"
                        : width < 768
                        ? "crossed sm🟨"
                        : width < 1024
                        ? "crossed md🟪"
                        : width < 1536
                        ? "crossed lg💻🟦"
                        : "crossed 2xl🟧"}
                </div>
            )}
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
