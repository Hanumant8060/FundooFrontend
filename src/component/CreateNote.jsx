/* eslint-disable*/
import React from 'react';
import { ListItemIcon, Tooltip, Snackbar } from '@material-ui/core'
import Divider from "@material-ui/core/Divider";
import { note } from '../Service/Service';
import IconList from './IconList';
import { Card, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));

function CreateNote(props) {
  const [notein, setNotein] = React.useState({ title: '', desc: '' });
  const [state, setState] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState("");
  const classes = useStyles();

  const snackbarClose = () => {
    setSnackbar(false);
  }

  const openfile = () => {
    setState(true)
  }

  const closepanel = () => {
    setState(false)
  }

  function handleNote(event) {
    setNotein({ ...notein, [event.target.name]: event.target.value })
  }
  const createNote = () => {
    let notes = {

    }
    notes.note_title = notein.title
    notes.note_disc = notein.desc
    note(notes)
      .then(Response => {
        setSnackbar(true);
        setSnackbarMsg(Response.data.message);
        props.function();
      })
      .catch(error => {
        console.log(error.response.data)
        alert(error.response.data.message)
      });

  }
  return (
    <div style={{ marginTop: "95px", height: "170px", marginLeft: "370px", width: "600px" }}>
      <Card style={{ borderRadius: "4px" }}>
        {state ?
          <div style={{ marginLeft: "6px" }}>
            <InputBase
              id="standard-input"
              label="Title"
              name="title"
              placeholder="Title"
              onChange={handleNote}
              type="text" />
            <ListItemIcon style={{ marginLeft: "300px", marginTop: "10px" }}>  <Tooltip title="Pin note">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="#000" d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z" />
              </svg>
            </Tooltip>
            </ListItemIcon>
          </div> : null}

        <div style={{ marginLeft: "6px" }}>
          <InputBase
            id="standard-input"
            label="Take a note"
            placeholder="Take a note"
            name="desc"
            onChange={handleNote}
            type="text"
            onClick={openfile}
          />
        </div>
        {state ?
          <div >
             <Snackbar
              open={snackbar}
              autoHideDuration={4000}
              onClose={snackbarClose}
              message={snackbarMsg}
              className={classes.snackbar}
            />
            <Divider />
            <Divider />
            <IconList function={closepanel} func={createNote} />
          </div> : null}
      </Card>
    </div>
  );
}

export default CreateNote;