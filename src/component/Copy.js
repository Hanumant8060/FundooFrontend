import React, { Component } from 'react';
import { addReminder } from '../Service/Service';
import { Tooltip } from '@material-ui/core';
import AddAlertIcon from '@material-ui/icons/AddAlert';


class Copy extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })
  reminder = () => {
    addReminder().then(response => {
      console.log(response);

    }).catch(error => {
      console.log("error ---->", error.message)
    })
  }

  render() {
    return (
      <div>
        <div>
          <Tooltip title="Remind me">
            <AddAlertIcon onClick={this.props.function}></AddAlertIcon>
          </Tooltip>
        </div>
      </div>
    );
  }
}
export default Copy;