import React from 'react';
import Collapsible from "react-collapsible";

export default function Faq(props){
console.log(props)
    return (
        <div className="faq-wrapper">
            <div className="faq-trigger-wrapper">
            <Collapsible trigger={props.question} transitionTime={300}>
            <div className="faq-answer">{props.answer}
        
            </div>
            </Collapsible></div>
        </div>
    )
}