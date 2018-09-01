import React, { Component } from "react";
import axios from "axios";
import Faqcategory from "./Faqcategory";
import Faq from './Faq'

class Faqs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faqs: [],
      categories: [],
      category: "",
      question: "",
      answer: ""
    };
  }
  componentDidMount() {
    axios.get("/api/faqs").then(response => {
      this.setState({ faqs: response.data });
    });
    
    axios.get("/api/categories").then(response => {
      this.setState({ categories: response.data });
    });
  }
  
  render() {
    
    
    let categoryToDisplay = this.state.categories
    console.log(this.state);

    return (
      <div className="faq-container">
        <div className="faq-categories">
          <div className="faq-cat-filter">GENERAL</div>
          <div className="faq-cat-filter">|</div>
          <div className="faq-cat-filter">EVENT</div>
          <div className="faq-cat-filter">|</div>
          <div className="faq-cat-filter">VENUE</div>
          <div className="faq-cat-filter">|</div>
          <div className="faq-cat-filter">REGISTRATION</div>
          <div className="faq-category" />
        </div>
        {categoryToDisplay.map(faq => (
          <Faq
            key={faq.faq_category}
            category={faq.faq_category}
            question={faq.faq_question}
            answer={faq.faq_response}
          />
        ))}
      </div>
    );
  }
}

export default Faqs;
