import type { Route } from "./+types/contact";

import HeroSection from "~/sections/HeroSection/HeroSection";
import TestimonialsSection from "~/sections/TestimonialsSection/TestimonialsSection";
import ContactSection from "~/sections/ContactSection/ContactSection";
import BenefitsSection from "~/sections/BenefitsSection/BenefitsSection";
import AboutSection from "~/sections/AboutSection/AboutSection";
import FaqSection from "~/sections/FaqSection/FaqSection";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Contact" },
        { name: "description", content: "Let's begin your journey." },
    ];
}

export default function Contact() {
    return (
        <div className="">
            <ContactSection />
        </div>
    );
}
