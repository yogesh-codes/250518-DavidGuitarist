import { NavLink } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import NavItem from "./NavItem";
import {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    type HTMLAttributes,
} from "react";

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [heightPx, setHeightPx] = useState<number>(0);
    const navRef = useRef<HTMLUListElement>(null);

    useLayoutEffect(() => {
        if (navRef.current) {
            const fullHeight = navRef.current.scrollHeight;
            setHeightPx(fullHeight);
        }
    }, [isExpanded]);
    return (
        <nav>
            <button
                className="cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? <RxCross1 /> : <RxHamburgerMenu />}
            </button>

            <ul
                className={`flex flex-col overflow-hidden my-transition `}
                ref={navRef}
                style={{ height: isExpanded ? `${heightPx}px` : "0px" }}
            >
                <NavItem toUrl="/">Home</NavItem>
                <NavItem toUrl="/live-classes">LiveClasses</NavItem>
                <NavItem toUrl="/#contact">Contact</NavItem>

                <NavItem toUrl="/#testimonials">Testimonials</NavItem>
            </ul>
        </nav>
    );
}
