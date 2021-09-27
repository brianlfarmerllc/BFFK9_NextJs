import { useState } from "react";
import Image from "next/image";
import GreenButton from "../GreenButton";
import faq from "../../db/FAQ.json";
import arrow from "../../public/assets/Icons/arrow.png";

export default function FAQ() {
  const [currentQuestion, setCurrentQuestion] = useState("");

  function rotateArrow(e) {
    // get active elements
    const activeQuestion = e.target.name;

    // check to see if active is current if not set active to current
    currentQuestion === activeQuestion
      ? setCurrentQuestion("")
      : setCurrentQuestion(activeQuestion);
  }
  return (
    <section className="white-section">
      <div className="faq">
        <h2 className="faq-header">Frequently Asked Questions</h2>
        <div className="questions">
          {faq.map((qa, index) => (
            <div key={index} className="qa">
              <div className="question-container">
                <h3
                  name={index}
                  style={{ color: currentQuestion == index ? "#2abaa0" : "#383838" }}
                  className="question"
                >
                  {qa.question}
                </h3>
                <Image
                  name={index}
                  className={currentQuestion == index ? "arrow rotate-arrow" : "arrow"}
                  onClick={rotateArrow}
                  src={arrow}
                />
              </div>
              <h4
                name={index}
                className={currentQuestion == index ? "answer show-answer" : "answer"}
              >
                {qa.answer}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
