import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import HighlightText from "../components/HightlightText";

export function SocialMediaIconsList() {
    return (
        <>
            <li>
                <HighlightText toUrl={"#"} highlight="text">
                    <FaSquareInstagram className="text-3xl" />
                </HighlightText>
            </li>
            <li>
                <HighlightText toUrl={"#"} highlight="text">
                    <FaFacebookSquare className="text-3xl" />
                </HighlightText>
            </li>
            <li>
                <HighlightText toUrl={"#"} highlight="text" className="">
                    <FaSquareXTwitter className="text-3xl" />
                </HighlightText>
            </li>
            <li>
                <HighlightText toUrl={"#"} highlight="text" className="">
                    <FaSquareYoutube className="text-3xl" />
                </HighlightText>
            </li>
        </>
    );
}
