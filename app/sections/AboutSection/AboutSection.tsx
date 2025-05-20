import { Form } from "react-router";
import instructorDetails from "~/assets/instructorDetails.json";

import Section from "~/components/Section/Section";
import PageInfo from "~/components/PageInfo/PageInfo";
import HighlightText from "~/layouts/Footer/components/HightlightText";
import P from "~/components/P/P";

export default function AboutSection() {
    const { name, email } = instructorDetails;
    return (
        <Section className="bg-nlight bg-cover bg-center">
            <PageInfo className="max-w-180 border-2 border-ndark self-center px-8 py-4">
                <h2 className="text-5xl text-ndark">
                    Unlock your Inner Guitarist
                </h2>
                <P className="mt-4 text-ndark">
                    Hi, I’m David—I've had the joy of teaching over 200 students
                    from absolute beginners to seasoned players. Music is my
                    passion, and nothing lights me up more than seeing a
                    student’s eyes light up when they nail their first solo or
                    write their own riff. Every lesson is handcrafted to fit
                    your goals, whether you dream of jamming on stage, recording
                    your own songs, or simply strumming along to your favorite
                    tunes in the living room.
                </P>
                <div className="mb-4"></div>
                <HighlightText
                    toUrl="#ContactSection"
                    className="text-nlight bg-ndark p-2 rounded-2xl"
                >
                    Book Your Free Trial Lesson
                </HighlightText>
            </PageInfo>
        </Section>
    );
}
