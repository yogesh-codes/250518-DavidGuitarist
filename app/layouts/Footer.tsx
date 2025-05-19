import { NavLink } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-red-800">
            <div className="min-h-20 flex flex-col items-center justify-end">
                <h1 hidden={true}>Footer</h1>
                <nav>
                    <ul className="flex flex-row">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/#classes"}>Classes</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/#testimonials"}>
                                testimonials
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/#contact"}>contact</NavLink>
                        </li>
                    </ul>
                </nav>

                <p>&copy;DavidGuitarist 2025</p>
            </div>
        </footer>
    );
}
