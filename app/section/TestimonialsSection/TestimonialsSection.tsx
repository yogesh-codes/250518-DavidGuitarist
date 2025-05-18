import testimonialDataJSON from "./assets/testimonials.json";

import TestimonialItem from "./components/TestimonialItem";

export default function TestimonialsSection() {
    const data = testimonialDataJSON;

    console.log(data);

    return (
        <div className="bg-amber-200 h-fit bg-cover bg-center w-full flex flex-col items-start justify-start pl-4 pt-4">
            <div></div>
            <h1></h1>
            <h1 className="text-5xl text-white">Testimonials</h1>

            <p>Here's what my students have to say about me</p>

            {data.map((item) => {
                return <TestimonialItem {...item} />;
            })}
        </div>
    );
}
