import type { ReactNode } from "react";
import { NavLink } from "react-router";

interface NavItemProps {
    children?: ReactNode;
    toUrl: string;
}

export default function NavItem({ children = "~button", toUrl }: NavItemProps) {
    return (
        <li>
            <NavLink
                to={toUrl}
                className={({ isActive }) => {
                    return isActive ? "bg-amber-400" : "bg-indigo-200";
                }}
            >
                {children}
            </NavLink>
        </li>
    );
}
