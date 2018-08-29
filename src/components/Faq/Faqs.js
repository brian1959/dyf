import React, {Component} from 'react';
import axios from 'axios';
import Faq from './Faq';

class Faqs extends Component{
constructor(props){
    super(props)

    this.state={
        faqsToDisplay:[],
        category:'',
        question:'',
        answer:''
    }
}
componentDidMount(){
    axios.get('/api/faqs').then(response => {
        this.setState({faqsToDisplay:response.data})
        console.log(response.data)
    })

}


    render(){
        const {faqsToDisplay}= this.state;

        return(

            <div className="faq-container">
            <div className="faq-categories">
            <div className="faq-category">
            </div>
            </div>
            {faqsToDisplay.map(faq =>(
                <Faq key={faq.faqid}
                category={faq.faq_category}
                question={faq.faq_question}
                answer={faq.faq_response} />
            ))}
            </div>
        )
    }
}

export default Faqs