import type { FunctionComponent, ReactNode } from "react";
import P from "~/components/P/P";

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
            className={`mt-4 ${className} max-w-56 xs:max-w-60 sm:max-w-80 bg-ndark  px-4 py-4 my-transition`}
        >
            <h3 className="font-bold text-nlight">{title}</h3>
            <P className="text-nlight">{children}</P>
        </div>
    );
};

export default Card;
