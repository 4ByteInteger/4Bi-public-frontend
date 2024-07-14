import React from "react";
import "../styles/faqs.scss";
import { Collapse } from "antd";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/slice";

const faqs = [
  {
    question: "What are the class timings?",
    answer:
      "Our classes are conducted online on weekdays, between 6 PM and 9 PM. Each session typically lasts for 2 to 2.5 hours.",
  },
  {
    question: "What happens if I miss a live class?",
    answer:
      "If you happen to miss a live class for any reason, don't worry. You will have access to the recorded sessions.",
  },
  {
    question: "What is the daily time commitment expected from me?",
    answer:
      "Our program is designed to accommodate both working professionals and students. You are required to attend the daily instructor-led sessions, which usually last 2-2.5 hours. The instructor will assign tasks or assignments based on your progress, and you are expected to complete them before the next session. Depending on your progress, you can anticipate spending around 2-4 hours on weekdays and 6-8 hours on weekends. All necessary materials, including lectures and assignments, are available on our platform.",
  },
  {
    question: "How many students will be in each class?",
    answer:
      "To ensure that every student's questions and concerns can be easily addressed, we limit the class size to a maximum of 50 students.",
  },
  {
    question: "What are the eligibility requirements for the program?",
    answer:
      "Our program is open to any undergraduate student from any field and working professionals. No prior coding knowledge or experience is necessary to enroll.",
  },
  {
    question: "Is prior coding knowledge required?",
    answer:
      "Absolutely not! We are dedicated to helping you become proficient coders, regardless of your prior experience.",
  },
  {
    question: "What is the fee structure for the program?",
    answer:
      "For the Data Structures and Algorithms (DSA) course, the fee is 5,000, and the program spans 4 months. For the Frontend Development course, the fee is 20,000, and it runs for 5 months.",
  },
  {
    question: "Are there any awards for the top-ranking students in the class?",
    answer:
      "We offer a 25% fee waiver to the top-ranked student in the class each month. This means that by consistently achieving the top position, you can potentially clear the entire fee.",
  },
];

export const FAQs = () => {
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(openModal());
  };

  return (
    <section className="faqs-container" id="faqs">
      <div className="left">
        <h2 className="title">Frequently Asked Questions</h2>
        <button onClick={showModal}>Request A Callback</button>
      </div>
      <Collapse
        bordered={false}
        className="accordion-container"
        items={faqs.map((faq, index) => {
          return {
            key: index,
            children: <p style={styles.text}>{faq.answer}</p>,
            label: <b style={styles.text}>{faq.question}</b>,
            style: styles.panelStyle,
          };
        })}
      />
    </section>
  );
};

const styles = {
  text: {
    color: "#141E70",
  },
  panelStyle: {
    backgroundColor: "#F9FCFF",
    border: "0.5px solid #E4E7EB",
    boxShadow: "2px 2px 10px #E4E7EB",
    borderRadius: "5px",
    padding: "10px",
  },
};
