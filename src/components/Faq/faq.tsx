"use client";
import { useState } from "react";
import styles from "./faq.module.css"; 

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: "What is my eligibility to book a car?", answer: "You should be of 18 years old above and you must possess a valid driving license" },
  { question: "Can I book for any period of time?", answer: "" },
  { question: "Can I opt for a longer period?", answer: "" },
  { question: "Can I book a one-way trip?", answer: "" },
  { question: "Is there a home delivery option available?", answer: "" },
  { question: "How can I make the payment?", answer: "" }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.FAQ}>
      <h2>Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={styles.accordionContent}
            onClick={() => toggleAnswer(index)}
          >
            <div
              className={`${styles.question} ${openIndex === index ? styles.active : ""}`}
            >
              {faq.question}
            </div>
            <div
              className={`${styles.answer} ${openIndex === index ? styles.show : ""}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
