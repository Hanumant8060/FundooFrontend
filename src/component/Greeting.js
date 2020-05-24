import React from "react";
import {Popover,Snackbar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TextField from "@material-ui/core/TextField";
import { addReminder } from "../Service/Service";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));

function Greeting(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentDate, setCurrentDate] = React.useState("");
  const [snackbar, setSnackbar] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState("");

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const snackbarClose = () => {
    setSnackbar(false);
  }

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const setReminder = (noteid) => {
    addReminder(currentDate, noteid).then(response => {
      setSnackbar(true);
      setSnackbarMsg(response.data.message);
      console.log("response ---->", response.data)
    }).catch(error => {
      console.log("error ---->", error)
    })
  }

  const open = Boolean(anchorEl);

  return (
    <div>
      <div onClick={handleClick} className="pickdatetime">
        <AccessTimeIcon fontSize="inherit" style={{ position: "fixed" }} />
        <span style={{ marginLeft: "32px", paddingTop: "20px" }}> Pick date & time</span>
      </div>
      <Popover
        style={{ top: "-150px", borderRadius: "4%", width: "18%" }}
        id="simple-popper"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'right',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className="main">
          <ArrowBackIcon style={{ position: "fixed", fontSize: "22px" }} onClick={handleClose1} />
          <span style={{ marginLeft: "32px" }}> Pick date & time</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            padding: "4%"
          }}
        >
          <form noValidate>
            <TextField
              name="currentDate" value={currentDate}
              onChange={e => setCurrentDate(e.target.value)}
              style={{ width: "200px" }}
              id="datetime-local"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>
        <div
          onClick={() => setReminder(props.value)}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "4%"
          }}
        >
          Save
          </div>
      </Popover>
      <Snackbar
              open={snackbar}
              autoHideDuration={4000}
              onClose={snackbarClose}
              message={snackbarMsg}
              className={classes.snackbar}
            />

    </div>
  );
}

export default Greeting;