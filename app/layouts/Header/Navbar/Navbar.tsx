import { NavLink } from "react-router";

//icons
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { GoHomeFill } from "react-icons/go";
import { BsFillInfoCircleFill } from "react-icons/bs";

import useBreakpoint from "~/hooks/useBreakpoint";

import {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    type HTMLAttributes,
} from "react";
import ThemeMenu from "../ThemeMenu/ThemeMenu";

//containers
import NavList from "./containers/NavList";

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [heightPx, setHeightPx] = useState<number>(0);
    const ulRef = useRef<HTMLUListElement>(null);
    const selfRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const { breakpoint } = useBreakpoint();
    // let selfWidth: number = 0;

    // if (selfRef.current) {
    //     selfWidth = selfRef.current.scrollWidth;
    // }

    useLayoutEffect(() => {
        if (ulRef.current) {
            const fullHeight = ulRef.current.scrollHeight;
            setHeightPx(fullHeight);
        }
    }, [isExpanded]);

    //prem- breakpoint is now sm -> set isExpanded to False
    useLayoutEffect(() => {
        setIsExpanded(false);
    }, [breakpoint]);

    // //prem- defocused from button -> set isExpanded to False
    // useLayoutEffect(() => {
    //     const handler = () => {
    //         setIsExpanded(false);
    //     };

    //     const btn = buttonRef.current;
    //     if (btn === null) return;

    //     btn.addEventListener("blur", handler);
    //     return () => {
    //         btn.removeEventListener("blur", handler);
    //     };
    // }, []);

    //if you moved away from the nav menu, reset isExpanded
    const handleOnBlur = (e: React.FocusEvent) => {
        console.log("moved away from navbar");
        if (
            selfRef.current &&
            true
            // !selfRef.current.contains(e.relatedTarget as Node)
        ) {
            setIsExpanded(false);
        }
    };

    return (
        <div
            className="
           
            w-full"
            ref={selfRef}
            onBlur={(e) => handleOnBlur(e)}
        >
            <div
                className="
            min-h-12 
            px-8
            bg-nlight
            flex flex-row gap-8 justify-end items-center
            lg:justify-center 
            "
            >
                <button
                    ref={buttonRef}
                    className={`my-transition opacity-100 rounded-3xl text-3xl cursor-pointer text-ndark
                    sm:opacity-0 overflow-hidden sm:hidden`}
                    onClick={() => setIsExpanded(!isExpanded)}
                    // onAbort={() => handleOnBlur}
                >
                    {isExpanded ? <RxCross1 /> : <RxHamburgerMenu />}
                </button>
                <NavList
                    className="  hidden
                    
                    sm:flex flex-row justify-start items-center 
                    my-transition
                    gap-2 my-transition`"
                />

                <ThemeMenu />
            </div>

            {/*>=sm screen show horizontal bar*/}
            <nav className="max-w-full w-full">
                {
                    <NavList
                        className={`flex flex-col w-full items-center overflow-hidden
                    sm:h-0
                    gap-2 my-transition                    
                    `}
                        ref={ulRef}
                        style={{ height: isExpanded ? `${heightPx}px` : "0px" }}
                    />
                }
            </nav>
        </div>
    );
}
