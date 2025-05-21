// import backgroundImage from "~/assets/images/instructor-photo.jpg";
import { useLayoutEffect } from "react";
import { Link } from "react-router";

import HighlightText from "~/layouts/Footer/components/HightlightText";
import P from "~/components/P/P";
import Section from "~/components/Section/Section";
import PageInfo from "~/components/PageInfo/PageInfo";

type PageNotFoundSectionProps = {
    details?: string;
    message?: string;
};

export default function PageNotFoundSection({
    message,
    details,
}: PageNotFoundSectionProps) {
    if (!message) {
        message = "";
        details = "We're sorry, this page does not exist";
    }
    return (
        <Section className="">
            <PageInfo>
                <h1 className="text-6xl text-center">{message}</h1>
                <P>{details}</P>

                <HighlightText className="text-center" toUrl="/">
                    Go to Home Page
                </HighlightText>
            </PageInfo>
        </Section>
    );
}
