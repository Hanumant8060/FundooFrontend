import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import TextField from '@material-ui/core/TextField'
import AddAlertIcon from '@material-ui/icons/AddAlert';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { note } from '../Service/Service';
import IconList from './IconList';
import { Card, InputBase } from '@material-ui/core';

function CreateNote() {
  const [notein, setNotein] = React.useState({ title: '', desc: '' });
  const [state, setState] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const openfile = () => {
    setState(true)
  }
  const closepanel = () => {
    setState(false)
  }
  // const handleClickAway = () => {
  //   setOpen(false);
  // };
  function handleNote(event) {
    setNotein({ ...notein, [event.target.name]: event.target.value })
  }
  const createNote = () => {
    let notes = {
      // "note_title":"hd",
      // "note_disc":"hello"

    }
    notes.note_title = notein.title
    notes.note_disc = notein.desc
    note(notes)
      .then(Response => {
        console.log(Response.data.message)
        alert(Response.data.message)
        // onclick = this.props.history.push('/dashboard')
      })
      .catch(error => {
        console.log(error.response.data)
        alert(error.response.data.message)
      });

  }
  return (
    <div style={{marginTop:"95px",marginLeft:"370px",width:"600px"}}>
      <Card>
        {state ?
          <div>
            <InputBase
              id="standard-input"
              label="Title"
              name="title"
              placeholder="Title"
              // value={notein.title}
              // onChange={handleChange}
              onChange={handleNote}
              type="text" />
          </div> : null}

        <div>
          <InputBase
            id="standard-input"
            label="Take a note"
            placeholder="Take a note"
            // onChange={handleChange}
            name="desc"
            // value={notein.desc}
            onChange={handleNote}
            type="text"
            onClick={openfile}
          />
        </div>
        {state ?
          <div >
            <Chip label="Barbados" onDelete={() => { }} />
            <Divider />
            <Divider />
            <IconList function={closepanel} func={createNote} />
          </div> : null}
      </Card>
     </div>
  );

}

export default CreateNote;