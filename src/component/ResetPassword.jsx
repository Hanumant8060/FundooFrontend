import React, { Component } from 'react';
import './resetpass.css'
import Button from '@material-ui/core/Button'
import { resetPassword } from '../Service/Service'


class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            confirm_password: "",
            oldpassword: ""

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]
                : event.target.value
        });
    };

    resetPassWord = () => {
        let reset = {}
        reset.email = this.state.email
        reset.password = this.state.password
        reset.confirm_password = this.state.confirm_password
        resetPassword(reset)
            .then(Response => {
                console.log(Response);

            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="align">
                <form>
                    <h2>Reset password</h2>
                    <div className="form-row">
                        <label>E-mail Id</label>
                        <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-row">
                        <label>Old PassWord</label>
                        <input type="password" placeholder="old password if any" name="oldpassword" value={this.state.oldpassword} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-row">
                        <label>New PassWord</label>
                        <input type="password" placeholder="New Password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-row">
                        <label>Retype New PassWord</label>
                        <input type="password" placeholder="retype new password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-row">
                        <Button variant="contained"
                        onClick={this.resetPassWord}>
                         Submit
                         </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ResetPassword;