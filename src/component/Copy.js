import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { addReminder } from '../Service/Service';
import { ListItemIcon, MenuItem, Button } from '@material-ui/core';
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
        {/* <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
        /> */}
        <div>
          <AddAlertIcon onClick={this.props.function}></AddAlertIcon>
          {/* <MenuItem><DateTimePicker value={this.date} onChange={this.onChange}/>
                    <Button size="small" >Set</Button>
                    </MenuItem> */}
        </div>
      </div>
    );
  }
}
export default Copy;