import type { ReactNode, HTMLAttributes } from "react";

interface MasonryProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export default function Masonry({
    children,
    className = "",
    ...rest
}: MasonryProps) {
    return (
        <div
            {...rest}
            //If screen too small (360) take all space
            //else
            className={`
                ${className}
                columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4 px-4 self-center
                `}
        >
            {children}
        </div>
    );
}
