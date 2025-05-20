import type {
    ReactNode,
    HTMLAttributes,
    ComponentPropsWithRef,
    Ref,
} from "react";

interface PProps extends ComponentPropsWithRef<"p"> {
    children: ReactNode;
    className?: string;
    ref?: Ref<HTMLParagraphElement>;
}

export default function P({ children, className = "", ref, ...rest }: PProps) {
    return (
        <p
            ref={ref}
            {...rest}
            className={`p-2 text-md
        lg:text-lg text-ndark ${className}`}
        >
            {children}
        </p>
    );
}
