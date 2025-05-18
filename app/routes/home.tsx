import HeroSection from "~/section/HeroSection";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <div>
            <HeroSection />
        </div>
    );
}
