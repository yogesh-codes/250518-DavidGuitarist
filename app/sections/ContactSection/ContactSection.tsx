import { Form, useNavigate } from "react-router";
import instructorDetails from "~/assets/instructorDetails.json";
import PageInfo from "~/components/PageInfo/PageInfo";
import Section from "~/components/Section/Section";
import H2 from "~/components/H2/H2";
import Button from "~/components/Button/Button";
import type { FormEvent, FormEventHandler } from "react";

export default function ContactSection() {
    const { name, email } = instructorDetails;
    const navigate = useNavigate();
    //fake submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/register-success");
    };

    return (
        <Section
            id="ContactSection"
            className="bg-secondary bg-cover bg-center"
        >
            <PageInfo>
                <H2 className=" text-nlight ">Let's begin your journey!</H2>

                <Form
                    className=" flex flex-col gap-4"
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <div>
                        <p className="text-nlight">
                            What would you like me to call you?
                        </p>

                        <label
                            htmlFor="username"
                            className="sr-only"
                            hidden={false}
                        >
                            Name
                        </label>
                        <input
                            className="w-full bg-nlight text-ndark text-1xl/loose p-2"
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Your Name"
                            autoComplete="username"
                        />
                    </div>

                    <div>
                        <p className="text-nlight">Email</p>
                        <label
                            htmlFor="useremail"
                            className="sr-only"
                            hidden={false}
                        >
                            Email
                        </label>
                        <input
                            className="w-full bg-nlight  text-ndark text-1xl/loose p-2"
                            type="email"
                            name="useremail"
                            id="useremail"
                            placeholder="Your Email"
                            autoComplete="email"
                        />

                        <p className="text-nlight">
                            Tell me what you expect out of these sessions;
                        </p>
                        <p className="text-nlight">
                            what would be a dream come true moment be for you?
                        </p>
                        <label
                            htmlFor="useremail"
                            className="sr-only"
                            hidden={false}
                        >
                            Email
                        </label>
                        <textarea
                            className="w-full bg-nlight  text-ndark text-1xl/loose p-2"
                            name="extra"
                            id="extra"
                            placeholder="I'd like to play songs of..."
                        />
                    </div>
                    <Button type="submit">Send</Button>
                </Form>
            </PageInfo>
            {/* <h3>My Details</h3>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            make this copyable */}
        </Section>
    );
}
