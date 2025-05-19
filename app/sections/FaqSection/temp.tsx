import React, { useState, useRef, useEffect } from "react";

type AccordionProps = {
    title: string;
    children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState("0px");

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={toggleAccordion}
                className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
            >
                <span className="text-lg font-medium">{title}</span>
                <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            <div
                ref={contentRef}
                style={{ height }}
                className="overflow-hidden transition-[height] duration-300 ease-in-out"
            >
                <div className="py-2">{children}</div>
            </div>
        </div>
    );
};

export default Accordion;
