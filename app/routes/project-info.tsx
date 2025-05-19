import type { Route } from "./+types/project-info";
import ProjectDetailsSection from "~/sections/ProjectDetailsSection/ProjectDetailsSection";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "David Guitarist- Project by YogeshV" },
        { name: "description", content: "This is a mock website." },
    ];
}

export default function ProjectDetailsRoute() {
    return (
        <>
            <ProjectDetailsSection />
        </>
    );
}
