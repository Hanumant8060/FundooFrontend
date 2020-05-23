import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './login.css'
import Link from '@material-ui/core/Link';
import { login } from '../Service/Service';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PersonIcon from '@material-ui/icons/Person';
import { ListItemIcon } from '@material-ui/core';


const initialState = {
    name: "",
    email: "",
    password: "",
    showPassword: true
};
class Login extends Component {
    state = initialState;

    handlePassword = () => {
        this.setState({
            showPassword: false
        })
    }

    handlePasswordChange = () => {
        this.setState({
            showPassword: true
        })
    }


    handleChange = event => {
        this.setState({
            [event.target.name]
                : event.target.value
        });
    };

    loginSuccess = () => {
        let loginUser = {}
        loginUser.email = this.state.email
        loginUser.password = this.state.password
        login(loginUser)
            .then(Response => {
                console.log(Response.data)
                sessionStorage.setItem("token", Response.data.result)
                onclick = this.props.history.push('/dashboard/note')
            })
            .catch(error => {
                alert(error.response.data.message)
            });

    }
    render() {
        return (
            <div className="layout">
                <div className="align">
                    <form>
                        <table id="table">
                            <h2 id="head">Login</h2>
                            <tbody>
                                <div className="title">
                                    <ListItemIcon style={{ marginTop: "20px", marginLeft: "19px" }}>
                                        <PersonIcon />
                                    </ListItemIcon>
                                    <TextField style={{ width: "250px" }} required id="standard-required" label="Required" placeholder="Username/Email" type="text" label="Username" name="email" value={this.state.email}
                                        onChange={this.handleChange} />
                                    <ListItemIcon style={{ marginTop: "30px", marginLeft: "20px" }}>
                                        <LockIcon />
                                    </ListItemIcon>
                                    <TextField style={{ width: "250px" }} required id="standard-required" label="Required" placeholder="Password" label="Password"
                                        type={this.state.showPassword ? "password" : "text"} name="password" value={this.state.password}
                                        onChange={this.handleChange} />
                                    {this.state.showPassword ? <VisibilityOffIcon color="disabled" onClick={this.handlePassword} /> : <VisibilityIcon color="disabled" onClick={this.handlePasswordChange} />}
                                    <Button style={{ marginTop: "60px", paddingLeft: "20px", marginLeft: "20px" }} variant="contained" color="primary" onClick={this.loginSuccess}>Login</Button>
                                
                                    <Button style={{ marginTop: "60px", paddingLeft: "20px", marginLeft: "120px", color: "pink" }} variant="contained" color="secondary" onClick={
                                        () => this.props.history.push('/register')}
                                    > Register </Button>
                                    <Link style={{ marginLeft: "40px", marginTop: "80px", paddingTop: "25px" }} href="" onClick={
                                        () => this.props.history.push('/forgotPassword')
                                    }>
                                        forgot password?
                                 </Link>
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