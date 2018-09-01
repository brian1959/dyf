import React from "react";
import Faq from "./Faq";

export default function Faqcategory(props) {
  return (
    <div className="faq-category-container">
      <div className="faq-category-box">
        <div className="faq-category">{props.faq_category}</div>
      </div>
      {props.faqcategory.map(faq => {
        return (
          <Faq
            key={faq.faqid}
            question={faq.faq_question}
            answer={faq.faq_response}
          />
        );
      })}
    </div>
  );
}
