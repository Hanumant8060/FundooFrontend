import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './login.css'
import Link from '@material-ui/core/Link';
import {login} from '../Service/Service';
import { Snackbar } from '@material-ui/core';

const initialState = {
    name: "",
    email:"",
    password: "",
    nameError: "",
    passwordError: "",
    open: false,
    vertical: 'top',
    horizontal: 'center',
};
class Login extends Component {
    state = initialState;

    handleChange = event => {
        // const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]
                : event.target.value
        });
    };


    // validate = () => {
    //     let nameError = "";
    //     let passwordError = "";

    //     if (!this.state.name) {
    //         nameError = "name cannot be blank";
    //     }

    //     if (!this.state.password.includes("@")) {
    //         passwordError = "invalid password";
    //     }

    //     if (passwordError || nameError) {
    //         this.setState({ passwordError, nameError });
    //         return false;
    //     }

    //     return true;
    // };

    // handleSubmit = event => {
    //     event.preventDefault();
    //     const isValid = this.validate();
    //     if (!isValid) {
    //         alert("login failed please enter valid name/password ")
    //         console.log(this.state);
    //         this.setState(initialState);
    //     }
    //     else {
    //         onclick = this.props.history.push('/loginsucess')
    //     }
    // };
    
    loginSuccess=()=>{
        let loginUser={}
        loginUser.email = this.state.email
        loginUser.password= this.state.password
        login(loginUser)
        .then(Response =>{
            console.log(Response.data.message)
           // alert(Response.data.message)
           sessionStorage.setItem("token",Response.data.result)
        // localStorage.setItem("token",Response.data.result
            onclick = this.props.history.push('/dashboard/note')
        })
        .catch(error =>{
            //console.log(error.response.data)
            alert(error.response.data.message)
        });

    }
    render() 
  {
    const { vertical, horizontal, open } = this.state;
        return (
            <div className="layout">
                <div className="align">
                    <form>
                        <table id="table">
                            <h2 id="head">Login</h2>
                            <tbody>
                                <div className="title">
                                    <tr>
                                        <td id="text">
                                            <TextField required id="standard-required" label="Required" placeholder="Username/Email" type="text" label="Username" name="email" value={this.state.email}
                                                onChange={this.handleChange} />
                                            {/* <h3 style={{ fontSize: 12, color: "red" }}>
                                                {this.state.nameError}
                                            </h3> */}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TextField required id="standard-required" label="Required" placeholder="Password" label="Password"
                                                type="password" name="password" value={this.state.password}
                                                onChange={this.handleChange} />
                                            {/* <h3 style={{ fontSize: 12, color: "red" }}>
                                                {this.state.passwordError}
                                            </h3> */}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="button">
                                            <Button variant="contained" color="primary" onClick={this.loginSuccess}>Login</Button>
                                            {/* <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open
        autoOpenDuration={90000000000000}
        onClose={handleClose}
        message="I love snacks"
      /> */}
                                        </td>
                                        <td>
                                            <Button variant="contained" color="secondary" onClick={
                                                () => this.props.history.push('/register')}

                                            > Register </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <Link href="" onClick={
                                            () => this.props.history.push('/forgotPassword')
                                        }>
                                            forgot password?
                                 </Link>
                                    </tr>
                                </div>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );

    }

}
export default Login;