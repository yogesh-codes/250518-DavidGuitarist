import { NavLink } from "react-router";
import Navbar from "./Navbar/Navbar";
import { useScreenWidth } from "~/useScreenWidth";
import ThemeMenu from "./ThemeMenu/ThemeMenu";

export default function Header() {
    const width = useScreenWidth();
    return (
        <>
            <header className="bg-nlight fixed w-full min-h-12 max-h-fit flex flex-row justify-center items-center z-5">
                <h1 hidden={true}>Header</h1>
                <Navbar />
                <ThemeMenu />
            </header>
            {import.meta.env.DEV && (
                <div className="fixed z-10 bg-cyan-500/50">
                    {width}
                    {width < 360
                        ? "No need to check. too small❌🔛"
                        : width < 480
                        ? "⬜"
                        : width < 640
                        ? "crossed xs📱"
                        : width < 768
                        ? "crossed sm🟨"
                        : width < 1024
                        ? "crossed md🟪"
                        : width < 1536
                        ? "crossed lg💻🟦"
                        : "crossed 2xl🟧"}
                </div>
            )}
            <div className="h-12"></div>
        </>
    );
}
