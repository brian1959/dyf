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
           <input/>
    
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
      <i className="fa fa-twitter" aria-hidden="true"></i> 
      </div>
    </div>
  );
}
