import { NavLink } from "react-router";
import Navbar from "./Navbar/Navbar";
import ThemeMenu from "./ThemeMenu/ThemeMenu";

export default function Header() {
    return (
        <>
            <header className=" pt-8 border-b-2 border-purewhite bg-nlight fixed w-full max-w-full max-h-fit z-5">
                {/* <div className="flex flex-row"> */}
                {/* <div className="flex flex-col w-full justify-start items-start"></div> */}
                {/* </div> */}
                <Navbar />
            </header>
            <div className="h-20"></div>
        </>
    );
}
