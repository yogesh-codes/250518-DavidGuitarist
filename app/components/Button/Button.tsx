import type {
    ReactNode,
    HTMLAttributes,
    ComponentPropsWithoutRef,
} from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "outline";
}

export default function Button({
    children,
    className = "",
    variant = "primary",
    ...rest
}: ButtonProps) {
    let commonStyles = "p-2 cursor-pointer";
    let styles =
        variant === "primary"
            ? "bg-ndark text-nlight hover:bg-accent"
            : "border-2 border-ndark hover:bg-accent border-accent";
    let finalStyles = commonStyles + " " + styles;
    return (
        <button {...rest} className={`${finalStyles}`}>
            {children}
        </button>
    );
}
