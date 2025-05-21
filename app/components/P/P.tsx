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
            className={`
                py-2 text-base
                lg:text-lg text-ndark ${className}`}
        >
            {children}
        </p>
    );
}
