let _width = 0;

function updateWidth() {
    _width = window.innerWidth || document.documentElement.clientWidth;
}

// Only run in the browser
if (typeof window !== "undefined") {
    // initialize right away
    updateWidth();
    // listen for resize
    window.addEventListener("resize", updateWidth);
}

export function getScreenWidth(): number {
    return _width;
}
