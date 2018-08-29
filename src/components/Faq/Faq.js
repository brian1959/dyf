import React from 'react';

export default function Faq(props){

    return (
        <div className="faq-wrapper">
        <div className="faq-type">{props.category}
        </div>
        <div className="faq-question">{props.question}
        </div>
        <div className="faq-answer">{props.answer}
        </div>
        </div>
    )
}