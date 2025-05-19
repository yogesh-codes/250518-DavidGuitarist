import type { Route } from "./+types/register-success";

import P from "~/components/P/P";
import PageInfo from "~/components/PageInfo/PageInfo";
import Section from "~/components/Section/Section";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Hi| David Guitarist" },
        { name: "description", content: "This is a mock website." },
    ];
}

export default function Home() {
    return (
        <Section>
            <PageInfo>
                <P>You have successfully registered!</P>
            </PageInfo>
        </Section>
    );
}
