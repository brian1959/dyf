import React from 'react';
import Collapsible from "react-collapsible";

export default function Faq(props){

    return (
        <div className="faq-wrapper">
            <div className="faq-type">{props.category}
            </div>
            <Collapsible trigger={props.question} transitionTime={300}>
            <div className="faq-answer">{props.answer}
        
            </div>
            </Collapsible>
        </div>
    )
}