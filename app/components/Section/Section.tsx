import type { ReactNode, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export default function Section({
    children,
    className = "",
    ...rest
}: SectionProps) {
    return (
        <div
            {...rest}
            className={`${className} w-full flex flex-col items-center justify-start px-4 py-4 bg-nlight`}
        >
            {children}
        </div>
    );
}
