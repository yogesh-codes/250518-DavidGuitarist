// src/hooks/useScreenSize.ts
import { useSyncExternalStore } from "react";

export function getScreenWidth(): number {
    return typeof window === "undefined" ? 0 : window.innerWidth;
}

export function getScreenHeight(): number {
    return typeof window === "undefined" ? 0 : window.innerHeight;
}

export interface ScreenSize {
    width: number;
    height: number;
}

/**
 * A React hook that re-reads window dimensions on resize,
 * but only registers the listener in the browser.
 */
export function useScreenSize(): ScreenSize {
    // subscribe only runs in the browser
    const subscribe = (callback: () => void) => {
        if (typeof window === "undefined") {
            return () => {};
        }
        window.addEventListener("resize", callback);
        return () => window.removeEventListener("resize", callback);
    };

    // getSnapshot reads the current dimensions (0/0 on SSR)
    const getSnapshot = (): ScreenSize => ({
        width: getScreenWidth(),
        height: getScreenHeight(),
    });

    // getServerSnapshot is used during SSR; start at 0/0
    const getServerSnapshot = (): ScreenSize => ({ width: 0, height: 0 });

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
