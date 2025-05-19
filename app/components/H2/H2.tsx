import type { ReactNode, HTMLAttributes } from "react";

interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    className?: string;
    level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function H2({ children, className = "", ...rest }: H2Props) {
    return (
        <h2
            {...rest}
            className={`
                text-4xl mb-4 
                xs:text-5xl 
                text-ndark 
                text-center 
                self-center
                ${className}`}
        >
            {children}
        </h2>
    );
}
