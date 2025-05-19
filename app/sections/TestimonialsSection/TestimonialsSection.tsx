import testimonialDataJSON from "./assets/testimonials.json";

//Components
import TestimonialItem from "./components/TestimonialItem";

//Primitive
import Section from "~/components/Section/Section";
import PageInfo from "~/components/PageInfo/PageInfo";
import H2 from "~/components/H2/H2";

export default function TestimonialsSection() {
    const data = testimonialDataJSON;

    return (
        <Section id="testimonials" className=" bg-nlight">
            <div></div>

            <PageInfo>
                <H2 className=" text-primary">Testimonials</H2>

                <p className="self-center mb-8 text-pureblack">
                    Here's what my students have to say about me
                </p>

                {/* <div className=" grid grid-cols-1 place-self-center gap-4 px-0 max-w-120 md:grid-cols-3 md:px-4 md:py-4 md:gap-8 md:max-w-160"> */}
                <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4 px-4 self-center">
                    {data.map(({ id, content, studentName, avatarUrl }) => {
                        return (
                            <div key={id} className="break-inside-avoid mb-4">
                                <TestimonialItem
                                    studentName={studentName}
                                    content={content}
                                    id={id}
                                    key={id}
                                    avatarUrl={avatarUrl}
                                />
                            </div>
                        );
                    })}
                </div>
            </PageInfo>
        </Section>
    );
}
