import { Link } from "react-router";
import type { Route } from "./+types/register-success";

import P from "~/components/P/P";
import PageInfo from "~/components/PageInfo/PageInfo";
import Section from "~/components/Section/Section";
import Button from "~/components/Button/Button";

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

                <Link to="/" className="text-center">
                    <Button className="">Go to Homepage</Button>
                </Link>
            </PageInfo>
            <P>
                Note: This is only a mock website for demonstrating a web
                project.{" "}
                <Link className=" text-accent" to={"/project-info"}>
                    <b>Click here to view project details.</b>
                </Link>
            </P>
        </Section>
    );
}
