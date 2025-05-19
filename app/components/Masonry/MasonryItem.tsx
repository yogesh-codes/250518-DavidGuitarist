import type { ReactNode, HTMLAttributes } from "react";

interface MasonryItemProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    id: string;
}

export default function MasonryItem({
    id,
    children,
    className = "",
    ...rest
}: MasonryItemProps) {
    return (
        <div key={id} className="break-inside-avoid mb-4">
            <div className="rounded-2xl p-4 bg-purewhite text-pureblack">
                {children}
            </div>
        </div>
    );
}
