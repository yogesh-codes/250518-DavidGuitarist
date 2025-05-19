import FaqData from "./FaqQuestions.json";

import FaqItem from "./FaqItem/FaqItem";
import Accordion from "./temp";

//Primitives
import Section from "~/components/Section/Section";
import PageInfo from "~/components/PageInfo/PageInfo";
import H2 from "~/components/H2/H2";

export default function FaqSection() {
    let cards = [];

    for (let i = 0; i < FaqData.length; i++) {
        const { question, answer } = FaqData[i];

        cards.push(<FaqItem question={question} answer={answer} key={i} />);

        // cards.push(<Accordion title="title">children</Accordion>);
    }

    return (
        <Section>
            <PageInfo className="w-9/12">
                <H2>FAQs</H2>
                <ul>{cards}</ul>
            </PageInfo>
        </Section>
    );
}
