import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './register.css'
import { registration } from '../Service/Service';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

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
      onclick = this.props.history.push('/')
  })
  .catch(error =>{
      console.log(error.response.data)
      alert(error.response.data.message)
  });
 }

  render() {
    return (
      <div className="align">
        <form>
          <h2 style={{fontSize:"25px",fontStyle:"Italic"}}>REGISTRATION</h2>
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
          <h6 style={{marginLeft:"10px"}}> Back To Login?</h6>
            <KeyboardReturnIcon  id="backicon" onClick={() => this.props.history.push('/')} ></KeyboardReturnIcon>
            <Button variant="contained" color="inherit"
              onClick={this.newRegistration}>Register</Button>
          </div>
        </form>
      </div>

    )
  }
}
export default Register