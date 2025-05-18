import { NavLink } from "react-router";

export default function Header() {
    return (
        <header className="bg-red-800">
            <h1 hidden={true}>Header</h1>
            <nav>
                <ul className="flex flex-row">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/#classes"}>Classes</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/#testimonials"}>testimonials</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/#contact"}>contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
