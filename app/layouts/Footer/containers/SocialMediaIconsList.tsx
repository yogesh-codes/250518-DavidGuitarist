import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import HighlightText from "../components/HightlightText";

export function SocialMediaIconsList() {
    return (
        <>
            <li>
                <HighlightText toUrl={"#"} highlight="text">
                    <FaSquareInstagram />
                </HighlightText>
            </li>
            <li>
                <HighlightText toUrl={"#"} highlight="text">
                    <FaFacebookSquare />
                </HighlightText>
            </li>
            <li>
                <HighlightText toUrl={"#"} highlight="text" className="">
                    <FaSquareXTwitter />
                </HighlightText>
            </li>
        </>
    );
}
