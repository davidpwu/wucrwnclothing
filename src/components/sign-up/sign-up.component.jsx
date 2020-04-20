import React from "react";

import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({displayName: "", email: "", password: "", confirmPassword: ""});
  }

  render() {
    return(
      <div className="sign-in">
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="text" 
            name="displayName" 
            value={this.state.displayName} 
            handleChange={this.handleChange} 
            label="Display Name"
            required 
          />
          <FormInput 
            type="email" 
            name="email" 
            value={this.state.email} 
            handleChange={this.handleChange} 
            label="Email"
            required 
          />
          <FormInput 
            type="password" 
            name="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            label="Password"
            required 
          />
          <FormInput 
            type="password" 
            name="confirmPassword" 
            value={this.state.confirmPassword} 
            handleChange={this.handleChange}
            label="Confirm Password"
            required 
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
  }
}

export default SignUp;
