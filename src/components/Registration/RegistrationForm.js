import React, { Component } from "react";
import axios from "axios";


class Registrationform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
      passtype:'Single',
      redirect: false
    };
  }
  
  
  handleOptionChange=(e) =>{
    this.setState({passtype: e.target.value
    });
  }
  
  handleSubmit(){
    axios
    .put('/api/attendee',this.state)
    .then(response =>{
      this.props.history.push('/profile')
    })
    axios
      .post('/api/email', this.state)
  }
  
  render() {
    
    
    return (
      <div className="form">
        <div className="reg-title">2019 RootsTech Registration</div>
        <div className="form-container">
          <div className="reg-form-box">
            <div className="reg-form-title">First Name</div>
            <input
              className="reg-form"
              placeholder="Name"
              onChange={e => this.setState({ firstname: e.target.value })}
              value={this.state.firstname}
            />
          </div>
          <div className="reg-form-box">
            <div className="reg-form-title">Last Name</div>
            <input
              className="reg-form"
              placeholder="Last Name"
              onChange={e => this.setState({ lastname: e.target.value })}
              value={this.state.lastname}
            />
          </div>
          <div className="reg-form-box">
            <div className="reg-form-title">Address</div>
            <input
              className="reg-form"
              placeholder="Address"
              onChange={e => this.setState({ address: e.target.value })}
              value={this.state.address}
            />
          </div>
          <div className="reg-form-box">
            <div className="reg-form-title">City</div>
            <input
              className="reg-form"
              placeholder="City"
              onChange={e => this.setState({ city: e.target.value })}
              value={this.state.city}
            />
          </div>
          <div className="reg-form-box">
            <div className="reg-form-title">State</div>
            <input
              className="reg-form"
              placeholder="State"
              onChange={e => this.setState({ state: e.target.value })}
              value={this.state.state}
            />
          </div>
          <div className="reg-form-box">
            <div className="reg-form-title">Zip Code</div>
            <input
              className="reg-form"
              placeholder="Zip"
              onChange={e => this.setState({ zip: e.target.value })}
              value={this.state.zip}
            />
          </div>
          <div className="reg-form-box">
            <div className="reg-form-title">Phone</div>
            <input
              className="reg-form"
              placeholder="Phone"
              onChange={e => this.setState({ phone: e.target.value })}
              value={this.state.phone}
            />
          </div>
          <div className="reg-form-box">
            <div className="reg-form-title">email</div>
            <input
              className="reg-form"
              placeholder="email"
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </div>
          <div className="radio-form-box">
            <div className="radio-form-title">Pass Type</div>
            <div className='radio-box'>
            <div className="radio">
          <label>
            <input type="radio" value="Full" checked={this.state.passtype==='Full'}  onChange={this.handleOptionChange} />
           Full Event $219
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Single" checked={this.state.passtype==='Single'}  onChange={this.handleOptionChange} />
            1 Day Pass $169
          </label>
        </div>
        </div>
          </div>
        <button className='reg-form-btn' onClick={() => this.handleSubmit()} >Register</button>
        </div>
      </div>
    );
  }
}

export default Registrationform;
