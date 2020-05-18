import React, { Component } from 'react';
import { passWordForgot } from '../Service/Service'
import { Button, TextField } from '@material-ui/core';
import './forgot.css'

class ForgotPassword extends Component {
    state = {
        email: ""
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]
                : event.target.value
        });
    };
    send = () => {
        let forgot = {};
        forgot.email = this.state.email
        passWordForgot(forgot)
            .then(Response => {
                alert(Response.data.message)
            })
            .catch(error => {
                console.log(error.response.data)
                alert(error.response.data.message)
            });
    }

    render() {
        return (
            <div className="forgot">
                <label>E-mail Id:</label><br />
                <TextField required id="standard-required" label="Email" placeholder="Email" type="text" name="email" value={this.state.email}
                    onChange={this.handleChange} />
                <br />
                <Button id="button" variant="contained" color="primary" onClick={this.send} >Send</Button>
            </div>
        );
    }
}

export default ForgotPassword;