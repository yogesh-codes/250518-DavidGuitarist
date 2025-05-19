import type { FunctionComponent } from "react";

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
                {content}
            </div>
            <div className="text-pureblack">{studentName}</div>
        </div>
    );
};

export default TestimonialItem;
