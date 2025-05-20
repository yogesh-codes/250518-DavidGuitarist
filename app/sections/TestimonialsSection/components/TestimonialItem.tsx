import type { FunctionComponent } from "react";
import P from "~/components/P/P";

interface TestimonialItemProps {
    id: string;
    studentName: string;
    content: string;
    avatarUrl: string;
}

const TestimonialItem: FunctionComponent<TestimonialItemProps> = ({
    studentName,
    content,
}) => {
    return (
        <div className="font-quicksand max-w-64">
            <div className=" rounded-2xl p-4 bg-purewhite text-pureblack">
                <P className="text-pureblack">{content}</P>
            </div>
            <P className="text-pureblack">{studentName}</P>
        </div>
    );
};

export default TestimonialItem;
