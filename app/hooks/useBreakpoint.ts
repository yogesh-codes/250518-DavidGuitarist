import { useState, useEffect } from "react";

// Define breakpoint types
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// Default Tailwind breakpoints (for Tailwind v4)
// You can customize these values based on your needs
interface BreakpointConfig {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
}

const defaultBreakpoints: BreakpointConfig = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

/**
 * Custom hook that returns the current breakpoint based on window width
 * @param customBreakpoints Optional custom breakpoints configuration
 * @returns Current breakpoint name and boolean flags for each breakpoint
 */
const useBreakpoint = (customBreakpoints?: Partial<BreakpointConfig>) => {
    const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };

    // Helper function to determine the current breakpoint
    const getCurrentBreakpoint = (): Breakpoint => {
        const width = window.innerWidth;

        if (width >= breakpoints["2xl"]) return "2xl";
        if (width >= breakpoints.xl) return "xl";
        if (width >= breakpoints.lg) return "lg";
        if (width >= breakpoints.md) return "md";
        if (width >= breakpoints.sm) return "sm";
        return "xs";
    };

    // Initialize with the current breakpoint
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(
        getCurrentBreakpoint()
    );

    // Create boolean flags for each breakpoint
    const isXs = breakpoint === "xs";
    const isSm = breakpoint === "sm";
    const isMd = breakpoint === "md";
    const isLg = breakpoint === "lg";
    const isXl = breakpoint === "xl";
    const is2Xl = breakpoint === "2xl";

    // Additional helper flags
    const isSmDown = ["xs", "sm"].includes(breakpoint);
    const isMdDown = ["xs", "sm", "md"].includes(breakpoint);
    const isLgDown = ["xs", "sm", "md", "lg"].includes(breakpoint);

    const isSmUp = !isXs;
    const isMdUp = !isSmDown;
    const isLgUp = !isMdDown;
    const isXlUp = !isLgDown;

    useEffect(() => {
        // Update breakpoint state when window is resized
        const handleResize = () => {
            const newBreakpoint = getCurrentBreakpoint();
            if (newBreakpoint !== breakpoint) {
                setBreakpoint(newBreakpoint);
            }
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint, breakpoints]);

    return {
        breakpoint,
        isXs,
        isSm,
        isMd,
        isLg,
        isXl,
        is2Xl,
        isSmDown,
        isMdDown,
        isLgDown,
        isSmUp,
        isMdUp,
        isLgUp,
        isXlUp,
    };
};

export default useBreakpoint;
