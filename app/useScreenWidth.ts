// useScreenWidth.ts
import { useSyncExternalStore } from "react";
import { getScreenWidth } from "./utils/screenUtils";

function subscribe(cb: () => void) {
    if (typeof window !== "undefined") {
        window.addEventListener("resize", cb);
        return () => window.removeEventListener("resize", cb);
    }
    return () => {};
}

export function useScreenWidth() {
    return useSyncExternalStore(
        subscribe,
        () => getScreenWidth(),
        () => 0 // for server-side rendering
    );
}
