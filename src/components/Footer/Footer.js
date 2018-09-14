import React from "react";

export default function Footer(props) {
  return (
    <div className="footer-main">
      <div className="footer-form">
        <div className="footer-form-fields">
          <div className="footer-form-title">
            Subscribe to the RootsTech Newsletter
          </div>
          <div className="footer-form-field" >
           <input placeholder='Enter Email Here'/>
    
          </div>
          <div className="footer-form-button">
            Submit
          </div>
        </div>
      </div>
      <div className="footer-form-contact-us">
      <div className="footer-contact-us">Contact Us</div>
      <a className='footer-faq' href='/#/faqs'>
      <div className="footer-faq">Frequently Asked Questions</div></a>
      <div className="footer-icons">
            <i className="fab fa-twitter fa-2x"></i>
            <i className="fab fa-facebook fa-2x"></i>
            </div>
      </div>
    </div>
  );
}
