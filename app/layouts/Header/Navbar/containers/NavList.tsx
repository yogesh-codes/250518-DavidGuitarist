import type {
    ComponentPropsWithRef,
    HTMLAttributes,
    ReactNode,
    Ref,
} from "react";

//icon
import { GoHomeFill } from "react-icons/go";
import { IoMdInformationCircle } from "react-icons/io";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
//subcomponents
import NavItem from "../components/NavItem";

interface NavListProps extends ComponentPropsWithRef<"ul"> {
    className: string;
}

export default function NavList({ className, ...rest }: NavListProps) {
    return (
        <ul className={` ${className}`} {...rest}>
            <NavItem toUrl="/" icon={<GoHomeFill />}>
                Home
            </NavItem>
            <NavItem toUrl="/live-classes" icon={<MdAccessTimeFilled />}>
                LiveClasses
            </NavItem>
            <NavItem toUrl="/#contact" icon={<MdContactMail />}>
                Contact
            </NavItem>

            <NavItem toUrl="/#testimonials" icon={<FaPeopleRoof />}>
                Testimonials
            </NavItem>
            <NavItem toUrl="/project-info" icon={<IoMdInformationCircle />}>
                Project Info
            </NavItem>
        </ul>
    );
}
