import type { ReactNode } from "react";
import { NavLink } from "react-router";
import type { ReactElement } from "react";
interface NavItemProps {
    children?: ReactNode;
    toUrl: string;
    icon: ReactElement;
}

export default function NavItem({
    children = "~button",
    toUrl,
    icon,
}: NavItemProps) {
    return (
        <li>
            <NavLink
                to={toUrl}
                className={({ isActive }) => {
                    return isActive ? "text-accent" : "text-ndark";
                }}
            >
                <div className="flex flex-col items-center justify-center hover:text-accent my-transition p-0">
                    <span className="">{icon}</span>
                    <span>{children}</span>
                </div>
            </NavLink>
        </li>
    );
}
