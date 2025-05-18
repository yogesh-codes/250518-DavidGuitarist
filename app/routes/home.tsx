import type { Route } from "./+types/Home";

import HeroSection from "~/section/HeroSection";
import TestimonialsSection from "~/section/TestimonialsSection/TestimonialsSection";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Hi| David Guitarist" },
        { name: "description", content: "This is a mock website." },
    ];
}

export default function Home() {
    return (
        <div>
            <HeroSection />
            <TestimonialsSection />
        </div>
    );
}
