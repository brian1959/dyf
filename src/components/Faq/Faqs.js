import React, { Component } from "react";
import axios from "axios";
import Faqcategory from "./Faqcategory";

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
    document.title = "Faqs";

    axios.get("/api/faqs").then(response => {
      this.setState({ faqs: response.data });
    });

    axios.get("/api/categories").then(response => {
      this.setState({ categories: response.data });
    });
  }

  render() {
    document.title = "Faqs";

    let categoryToDisplay = this.state.categories;

    let questionsToDisplay = this.state.faqs;
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
         <a href='.Registration'> <div className="faq-cat-filter">REGISTRATION</div></a>
         
        </div>
        {categoryToDisplay.map(cat => (
          <Faqcategory
            key={cat.faq_category}
            category={cat.faq_category}
            faqs={questionsToDisplay.filter(question => {
              return question.faq_category === cat.faq_category;
            })}
          />
        ))}
      </div>
    );
  }
}

export default Faqs;
