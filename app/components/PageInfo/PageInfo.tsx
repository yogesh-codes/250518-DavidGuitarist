import type { ReactNode, HTMLAttributes } from "react";

interface PageInfoProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export default function PageInfo({
    children,
    className = "",
    ...rest
}: PageInfoProps) {
    return (
        <div
            {...rest}
            //If screen too small (360) take all space
            //else
            className={`
                ${className}
                flex flex-col 
             sbg-red-500
                max-w-full
                
                px-0 py-0
                xs:px-4 xs:py-4
                xs:max-w-11/12
                sm:max-w-11/12 
                md:max-w-11/12
                lg:max-w-screen-md
                my-transition`}
        >
            {children}
        </div>
    );
}
