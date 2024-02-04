import React, { useState } from "react";
import "../styles/faqs.scss";
import ChevronRight from "@mui/icons-material/ChevronRight";

const faqs = [
    {
        question: "What are the class timings?",
        answer: "Our classes are conducted online on weekdays, between 6 PM and 9 PM. Each session typically lasts for 2 to 2.5 hours."
    },
    {
        question: "What happens if I miss a live class?",
        answer: "If you happen to miss a live class for any reason, don't worry. You will have access to the recorded sessions."
    },
    {
        question: "What is the daily time commitment expected from me?",
        answer: "Our program is designed to accommodate both working professionals and students. You are required to attend the daily instructor-led sessions, which usually last 2-2.5 hours. The instructor will assign tasks or assignments based on your progress, and you are expected to complete them before the next session. Depending on your progress, you can anticipate spending around 2-4 hours on weekdays and 6-8 hours on weekends. All necessary materials, including lectures and assignments, are available on our platform."
    },
    {
        question: "How many students will be in each class?",
        answer: "To ensure that every student's questions and concerns can be easily addressed, we limit the class size to a maximum of 50 students."
    },
    {
        question: "What are the eligibility requirements for the program?",
        answer: "Our program is open to any undergraduate student from any field and working professionals. No prior coding knowledge or experience is necessary to enroll."
    },
    {
        question: "Is prior coding knowledge required?",
        answer: "Absolutely not! We are dedicated to helping you become proficient coders, regardless of your prior experience."
    },
    {
        question: "What is the fee structure for the program?",
        answer: "For the Data Structures and Algorithms (DSA) course, the fee is 5,000, and the program spans 4 months. For the React and Redux master course, the fee is 2,999, and it runs for 8 weeks on weekends."
    },
    {
        question: "Are there any awards for the top-ranking students in the class?",
        answer: "We offer a 25% fee waiver to the top-ranked student in the class each month. This means that by consistently achieving the top position, you can potentially clear the entire fee."
    }
];

export const FAQs = () => {
    const [activeItem, setActiveItem] = useState(-1);

    const toggleIndex = (index: number) => {
        if (activeItem === index) {
            setActiveItem(-1);
        }
        else {
            setActiveItem(index)
        }
    }

    return <div className="faqs-container" id="faqs">
        <h2 className="title">Frequently Asked Questions</h2>
        {
            faqs.map((faq, index) => {
                return <div className="faq" onClick={() => toggleIndex(index)} key={index}>
                    <div className="fr jc-sb">
                        <span>{faq.question}</span>
                        <ChevronRight className={`icon ${index === activeItem ? 'open' : ''}`} />
                    </div>
                    <p
                        className={`answer ${index === activeItem ? 'open-answer' : ''}`}
                    >{faq.answer}</p>
                </div>
            })
        }
    </div>;
}