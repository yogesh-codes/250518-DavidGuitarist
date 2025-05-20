import type {
    ReactNode,
    HTMLAttributes,
    ComponentPropsWithoutRef,
} from "react";

interface PProps extends ComponentPropsWithoutRef<"p"> {
    children: ReactNode;
    className?: string;
}

export default function P({
    children,
    className = "",

    ...rest
}: PProps) {
    let commonStyles = "p-2 ";
    return (
        <p {...rest} className={`text-ndark ${className}`}>
            {children}
        </p>
    );
}
