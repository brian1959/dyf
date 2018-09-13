import React, {Component} from 'react';

class Labs extends Component{

    render(){
        document.title='Labs';

        return(
            <div className='lab-main'>
                <h1 className="lab-header">
                Computer Labs</h1>
                <img className='lab-image' src='../images/labs.jpg' alt='Computer Labs'/>
                <p>Computer labs at RootsTech are very popular! They provide an opportunity to get a hands-on tutorial on topics such as photo editing, social media tools, DNA research, and successful searching.</p>
                <p>Seating in the computer labs is limited and requires preregistration. The cost to attend a computer lab is $19, which covers the cost of equipment, software, and internet connection. Labs generally sell out before the event, so be sure to add the computer labs during registration. Computer labs are not available for Getting Started pass holders. </p>
                <p>Wait lists, stand-by lines, or audit seats are not available for labs. Refunds will not be available onsite.</p>
            </div>

        )
    }
}

export default Labs