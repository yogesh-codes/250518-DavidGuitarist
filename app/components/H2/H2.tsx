import type { ReactNode, HTMLAttributes } from "react";

interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    className?: string;
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
