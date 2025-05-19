import projectsData from "./benefitsDetails.json";

//Components
import Card from "./Card/Card";
import H2 from "~/components/H2/H2";
import Section from "~/components/Section/Section";
import PageInfo from "~/components/PageInfo/PageInfo";

export default function ProjectsSection() {
    let cards = [];

    for (let i = 0; i < projectsData.length; i++) {
        const { title, content, id } = projectsData[i];
        const dir = i % 2 === 0 ? "self-start" : "self-end";
        cards.push(
            <Card title={title} className={dir} key={id}>
                {content}
            </Card>
        );
    }

    return (
        <Section
            className="bg-nbehind 
        
         
        my-transition"
        >
            <PageInfo className="">
                <H2>Why Learn with Me?</H2>

                {cards}
            </PageInfo>
        </Section>
    );
}
