import { MdOutlineContentCopy } from "react-icons/md";
import { copyToClipboard } from "~/utils/clipboardUtils";

import type {
    ReactNode,
    HTMLAttributes,
    ComponentPropsWithoutRef,
} from "react";
import Button from "../Button/Button";

interface CopyableTextProps extends ComponentPropsWithoutRef<"button"> {
    children: ReactNode;
    className?: string;
}

export default function CopyableText({
    children,
    className = "",
    ...rest
}: CopyableTextProps) {
    let commonStyles = "p-2 cursor-pointer";
    if (!children) children = "";

    return (
        <button
            className={`text-xs rounded-sm text-purewhite bg-ndark cursor-pointer hover:bg-accent ${className}`}
            onClick={() => copyToClipboard(children.toString())}
        >
            <span className="inline-flex justify-center items-center">
                {children}
                <MdOutlineContentCopy />
            </span>
        </button>
    );
}
