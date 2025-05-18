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
        <div>
            <div className="p-2 m-2">{content}</div>
            <div>{studentName}</div>
        </div>
    );
};

export default TestimonialItem;
