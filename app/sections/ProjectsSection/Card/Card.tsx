import type { FunctionComponent, ReactNode } from "react";

interface CardProps {
    children?: ReactNode;
    title?: string;
    className?: string;
}

const Card: FunctionComponent<CardProps> = ({
    title = "",
    children = "",
    className = "",
}) => {
    return (
        <div
            className={`mt-4 ${className} w-56 xs:w-40 sm:w-80 bg-ndark  px-4 py-4`}
        >
            <h3 className="font-bold text-nlight">{title}</h3>
            <p className="text-nlight">{children}</p>
        </div>
    );
};

export default Card;
