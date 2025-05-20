import { MdOutlineContentCopy } from "react-icons/md";
import { copyToClipboard } from "~/utils/clipboardUtils";

import type {
    ReactNode,
    HTMLAttributes,
    ComponentPropsWithoutRef,
} from "react";

import Button from "~/components/Button/Button";
import { useNavigate } from "react-router";

interface HighlightTextProps extends ComponentPropsWithoutRef<"button"> {
    children: ReactNode;
    className?: string;
    toUrl?: string;
    highlight?: "bg" | "text";
}

export default function HighlightText({
    children,
    className = "",
    toUrl,
    highlight = "bg",
    ...rest
}: HighlightTextProps) {
    const navigator = useNavigate();
    let commonStyles = "p-2 cursor-pointer";
    if (!children) children = "";

    return (
        <>
            {highlight === "bg" && (
                <button
                    className={`rounded-sm bg-ndark cursor-pointer hover:bg-accent ${className}`}
                    onClick={() => {
                        if (toUrl) navigator(toUrl);
                    }}
                >
                    <span className="inline-flex text-purewhite justify-center items-center">
                        {children}
                    </span>
                </button>
            )}

            {highlight === "text" && (
                <button
                    className={`cursor-pointer ${className}`}
                    onClick={() => {
                        if (toUrl) navigator(toUrl);
                    }}
                >
                    <span
                        className={`inline-flex justify-center text-purewhite items-center hover:text-accent`}
                    >
                        {children}
                    </span>
                </button>
            )}
        </>
    );
}
