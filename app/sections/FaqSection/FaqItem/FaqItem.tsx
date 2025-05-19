import {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    type FunctionComponent,
    type ReactNode,
} from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

interface FaqItemProps {
    className?: string;
    question: string;
    answer: string;
}

const FaqItem: FunctionComponent<FaqItemProps> = ({
    question,
    answer,
    className = "",
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const answerRef = useRef<HTMLDivElement>(null);
    const [answerHeightPx, setAnswerHeightPx] = useState<number>(0);

    const selfRef = useRef<HTMLLIElement>(null);

    //on mount, if not in focus, set isExpanded to false
    useLayoutEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // If click target is outside of our panel, collapse
            if (
                selfRef.current &&
                !selfRef.current.contains(event.target as Node)
            ) {
                setIsExpanded(false);
            }
        }

        // Use mousedown so it fires before focus shifts
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    useLayoutEffect(() => {
        if (answerRef.current) {
            const fullHeight = answerRef.current.scrollHeight;
            setAnswerHeightPx(fullHeight);
        }
    }, [isExpanded]);

    return (
        <li
            ref={selfRef}
            className={`${className} bg-purewhite mt-4 border-2 rounded-2xl
            ${isExpanded ? "border-ndark" : "border-nlight"} `}
        >
            <button
                className="cursor-pointer text-left px-4 py-4"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span className="">
                    {isExpanded ? (
                        <MdExpandLess className="inline" />
                    ) : (
                        <MdExpandMore className="inline" />
                    )}
                    <span className="text-ndark">{question}</span>
                </span>
                <div
                    ref={answerRef}
                    style={{
                        height: isExpanded ? `${answerHeightPx}px` : "0px",
                    }}
                    className={`text-ndark overflow-hidden 
                    transform origin-top my-transition 
                    `}
                >
                    {answer}
                </div>
            </button>
        </li>
    );
};

export default FaqItem;
