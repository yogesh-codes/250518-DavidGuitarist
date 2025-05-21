import { NavLink } from "react-router";
import { Link } from "react-router";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CopyableText from "~/components/CopyableText/CopyableText";
import NavItem from "../Header/Navbar/components/NavItem";
import P from "~/components/P/P";

import instructorData from "~/assets/instructorDetails.json";
import HighlightText from "./components/HightlightText";

import { SocialMediaIconsList } from "./containers/SocialMediaIconsList";
import useBreakpoint from "~/hooks/useBreakpoint";
import { useLayoutEffect } from "react";

export default function Footer() {
    const { isSmUp, isLgUp, isMdUp, isXs } = useBreakpoint();

    // useLayoutEffect(()=> {},[breakp])
    return (
        <footer className="bg-ndark h-fit px-4 py-2">
            <div className=""></div>
            <div className="flex flex-row gap-4 min-h-20 items-start justify-center">
                <div className=" min-h-20 flex flex-col items-start justify-center">
                    <ul className="flex flex-col h-full">
                        <li>
                            <HighlightText
                                toUrl="/"
                                className="text-sm text-nlight w-full text-left"
                            >
                                Home
                            </HighlightText>
                        </li>
                        <li>
                            <HighlightText
                                toUrl="/testimonials"
                                className="text-sm text-nlight w-full text-left"
                            >
                                Testimonials
                            </HighlightText>
                        </li>
                        <li>
                            <HighlightText
                                toUrl="/contact"
                                className="text-sm text-nlight w-full text-left"
                            >
                                Contact
                            </HighlightText>
                        </li>
                    </ul>
                </div>
                <div className="border-l h-16 self-center border-accent"></div>

                <div className=" min-h-20 flex flex-col items-start justify-center">
                    <ul className="flex flex-col h-full">
                        <li hidden={true} className="text-xs text-purewhite">
                            Contact Us
                        </li>
                        <li hidden={true} className="text-sm text-purewhite">
                            {instructorData.name}
                        </li>
                        <li>
                            <CopyableText className="text-sm">
                                {instructorData.email}
                            </CopyableText>
                        </li>
                        <li>
                            {
                                <ul className="flex flex-row justify-end gap-2 h-10">
                                    <SocialMediaIconsList />
                                </ul>
                            }
                        </li>
                    </ul>
                </div>

                {/* {isLgUp && (
                    <div className="border-l h-16 self-center border-accent"></div>
                )}

                {isLgUp && (
                    <div className=" min-h-20 flex flex-col items-start justify-center">
                        <P className="text-nlight">Follow us!</P>
                        <ul className="flex flex-row gap-2 ">
                            <SocialMediaIconsList />
                        </ul>
                    </div>
                )} */}
            </div>
            <P className="text-nlight text-center">&copy;DavidGuitarist 2025</P>
        </footer>
    );
}
