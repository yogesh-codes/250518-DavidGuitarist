// let _width = 0;

// function updateWidth() {
//     _width = window.innerWidth || document.documentElement.clientWidth;
// }

// // Only run in the browser
// if (typeof window !== "undefined") {
//     // initialize right away
//     updateWidth();
//     // listen for resize
//     window.addEventListener("resize", updateWidth);
// }

// export function getScreenWidth(): number {
//     return _width;
// }

// src/utils/screenUtils.ts

/**
 * Returns the current viewport width, or 0 during SSR.
 */
export function getScreenWidth(): number {
    if (typeof window !== "undefined") {
        return window.innerWidth || document.documentElement.clientWidth;
    }
    return 0;
}
