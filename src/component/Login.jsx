import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './login.css'
import Link from '@material-ui/core/Link';
import { login } from '../Service/Service';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import PersonIcon from '@material-ui/icons/Person';
import { ListItemIcon } from '@material-ui/core';

const initialState = {
    name: "",
    email: "",
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
        const { vertical, horizontal, open } = this.state;
        return (
            <div className="layout">
                <div className="align">
                    <form>
                        <table id="table">
                            <h2 id="head">Login</h2>
                            <tbody>
                                <div className="title">
                                    <ListItemIcon style={{ marginTop: "20px" }}>
                                        <PersonIcon />
                                    </ListItemIcon>
                                    <TextField style={{ width: "250px" }} required id="standard-required" label="Required" placeholder="Username/Email" type="text" label="Username" name="email" value={this.state.email}
                                        onChange={this.handleChange} />
                                    <ListItemIcon style={{ marginTop: "20px" }}>
                                        <LockIcon />
                                    </ListItemIcon>
                                    <TextField style={{ width: "250px" }} required id="standard-required" label="Required" placeholder="Password" label="Password"
                                        type="password" name="password" value={this.state.password}
                                        onChange={this.handleChange} />
                                    <VisibilityOffIcon color="disabled" />
                                    <Button style={{ marginTop: "60px", paddingLeft: "20px" }} variant="contained" color="primary" onClick={this.loginSuccess}>Login</Button>
                                    <Button style={{ marginTop: "60px", paddingLeft: "20px", marginLeft: "90px", color: "pink" }} variant="contained" color="secondary" onClick={
                                        () => this.props.history.push('/register')}
                                    > Register </Button>
                                    <Link style={{ marginLeft: "32px", marginTop: "3px", paddingLeft: "-10px" }} href="" onClick={
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