import type { Route } from "./+types/testimonials";

import TestimonialsSection from "~/sections/TestimonialsSection/TestimonialsSection";
import ContactSection from "~/sections/ContactSection/ContactSection";
export function meta({}: Route.MetaArgs) {
    return [
        { title: "Benefits" },
        { name: "description", content: "Why choose us" },
    ];
}

export default function Contact() {
    return (
        <div className="min-h-dvh">
            <TestimonialsSection />
            <ContactSection />
        </div>
    );
}
