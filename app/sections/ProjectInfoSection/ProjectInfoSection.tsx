//Data
import projectFeaturesData from "./assets/projectFeatures.json";

//Components

//Primitive
import Section from "~/components/Section/Section";
import PageInfo from "~/components/PageInfo/PageInfo";
import H2 from "~/components/H2/H2";
import Masonry from "~/components/Masonry/Masonry";
import MasonryItem from "~/components/Masonry/MasonryItem";
import P from "~/components/P/P";

export default function ProjectDetailsSection() {
    return (
        <>
            <Section>
                <h1 className="text-xl px-1 text-center bg-ndark text-nlight">
                    {" "}
                    Landing Page for a Guitar Teacher
                </h1>
                <P>This is a mock website made by Yogesh V.</P>
            </Section>

            <Section id="project-section" className=" bg-nlight">
                <div className="min-h-dvh">
                    <PageInfo>
                        <H2 className=" text-primary">Project Features</H2>

                        {/* <div className=" grid grid-cols-1 place-self-center gap-4 px-0 max-w-120 md:grid-cols-3 md:px-4 md:py-4 md:gap-8 md:max-w-160"> */}
                        <Masonry>
                            {projectFeaturesData.map(
                                ({ id, title, content }) => {
                                    return (
                                        <MasonryItem key={id} id={id}>
                                            <p className="font-bold">{title}</p>
                                            <p>{content}</p>
                                        </MasonryItem>
                                    );
                                }
                            )}
                        </Masonry>
                    </PageInfo>
                </div>
            </Section>
        </>
    );
}
