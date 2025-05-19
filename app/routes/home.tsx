import type { Route } from "./+types/home";

import HeroSection from "~/sections/HeroSection/HeroSection";
import TestimonialsSection from "~/sections/TestimonialsSection/TestimonialsSection";
import ContactSection from "~/sections/ContactSection/ContactSection";
import ProjectsSection from "~/sections/ProjectsSection/ProjectsSection";
import AboutSection from "~/sections/AboutSection/AboutSection";
import FaqSection from "~/sections/FaqSection/FaqSection";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Hi| David Guitarist" },
        { name: "description", content: "This is a mock website." },
    ];
}

export default function Home() {
    return (
        <div className="">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />
            <FaqSection />
        </div>
    );
}
