import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './register.css'
import { registration } from '../Service/Service';
// import './login.css'

const initialState = {
  username: "",
  firstname:"",
  lastname:"",
  email: "",
  password: "",
  confirm_password:"",
  nameError: "",
  emailError: "",
  passwordError: ""
};
class Register extends Component {
  state = initialState

  handleChange = event => {
    this.setState({
      [event.target.name]
        : event.target.value
    });
  };

  newRegistration=()=>{
    let registeration={}
    registeration.username=this.state.name
    registeration.firstname= this.state.firstname
    registeration.lastname= this.state.lastname
    registeration.email=this.state.email
    registeration.password=this.state.password
    registeration.confirm_password=this.state.confirm_password
    registration(registeration)
    .then(Response =>{
      console.log(Response.data.message)
      alert(Response.data.message)
      onclick = this.props.history.push('/')
  })
  .catch(error =>{
      console.log(error.response.data)
      alert(error.response.data.message)
  });

  }

//   validate = () => {
//     let nameError = "";
//     let emailError = "";
//     let passwordError = "";

//     if (!this.state.name) {
//       alert(nameError = "name cannot be blank");
//     }

//     if (!this.state.email.includes("@")) {
//      alert (emailError = "invalid email")
//     }
//     if(!this.state.password.match("(?=.*[0-9])")){
//       alert(passwordError = "password must contain one digit")
//     }

//     if (emailError || nameError || passwordError) {
//       this.setState({ emailError, nameError , passwordError });
//       return false;
//     }

//     return true;
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const isValid = this.validate();
//     if (!isValid) {
//       //alert(" please enter valid email/password")
//       console.log(this.state);
//       // clear form
//       this.setState(initialState);
//     }
//     else {
//       onclick = this.props.history.push('/')


//     }
//   };
  render() {
    return (
      <div className="align">
        <form>
          <h2>REGISTRATION</h2>
          <div className="form-row">
            <label>UserName</label>
            <input type="text" placeholder="Username" name="username" value={this.state.name}
              onChange={this.handleChange} required></input>
          </div>
          <div className="form-row">
            <label>FirstName</label>
            <input type="text" placeholder="Firstname" name="firstname" value={this.state.firstname}
              onChange={this.handleChange} required></input>
          </div>
          <div className="form-row">
            <label>LastName</label>
            <input type="text" placeholder="Lastname"  name = "lastname" value={this.state.lastname}  onChange={this.handleChange} required  ></input>
          </div>
          <div className="form-row">
            <label>Email-Id</label>
            <input type="email" placeholder="email" name="email" value={this.state.email}
              onChange={this.handleChange} required ></input>
          </div>
          <div className="form-row">
            <label>password</label>
            <input type="password" placeholder="password" name="password" value={this.state.password}
              onChange={this.handleChange} required ></input>
          </div>
          <div className="form-row">
            <label>Confirm password</label>
            <input type="password" placeholder="password" name="confirm_password" value={this.state.confirm_password}
              onChange={this.handleChange} required ></input>
          </div>
          <div className="form-row">
            <Button variant="contained"
              onClick={this.newRegistration}>Register</Button>
          </div>
        </form>
      </div>

    )
  }
}
export default Register