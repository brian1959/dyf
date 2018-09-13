import React from "react";
import Faq from "./Faq";

export default function Faqcategory(props) {
  return (
    <div className="faq-category-container">
      <div className="faq-category"  >{props.category}</div>

      <div className="faq-question-box">
        {props.faqs.map(faq => {
          return (
            <Faq
              key={faq.faqid}
              category={faq.faq_category}
              question={faq.faq_question}
              answer={faq.faq_response}
            />
          );
        })}
      </div>
      <a className={`return-to-top" ${props.category}`}>
      return to top
      </a>
    </div>
  );
}
