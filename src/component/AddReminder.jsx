import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import { Tooltip } from "@material-ui/core";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import Greeting from './Greeting'

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2
  }
});

class SimplePopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernoteid: "",
      opensnackbar: false,
      reminders: ''

    };
  }

  state = {
    anchorEl: null
  };

  handleReminder1 = (reminder1) => {
    this.setState({ reminders: reminder1 })

  }
  handleClick = event => {
    let noteid = this.props.propsRemindernote;
    this.setState({ usernoteid: noteid });
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose1 = () => {
    this.setState({
      opensnackbar: false
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div  >
        <Tooltip title="Remind me">
          <AddAlertOutlinedIcon onClick={this.handleClick} />
        </Tooltip>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <div>
            <div
              onClick={this.handleClose}
              className
              style={{ fontSize: "18px" }}
            >
              Reminder :
            </div>
            <div className="today" onClick={this.handleClose}>
              <div> Later today</div>
              <div>8:00 PM</div>
            </div>
            <div className="today" onClick={this.handleClose}>
              <div>Tomorrow</div>
              <div>8:00 PM</div>
            </div>
            <div className="today" onClick={this.handleClose}>
              <div>Next week</div>
              <div>Mon,8:00 PM</div>
            </div>
          </div>
          <Greeting value={this.props.data}
            onClick={this.handleClose}
            propsnoteid={this.state.usernoteid}
            refresh1={this.props.refresh}
            onSelectReminder1={this.handleReminder1}
          />
        </Popover>
      </div>
    );
  }
}

SimplePopover.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimplePopover);