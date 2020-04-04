import React from 'react'
import { deletenote } from '../Service/Service';
// import Example from './Example';
import IconList from './IconList';
import Dashboard from './Dashboard';
import { MenuItem } from '@material-ui/core';

function DeleteNote(props) {

  const deleteNote = (id) => {
    console.log("in delete note");
    let notes = {
    }
    notes.noteId=id
    deletenote(notes)
    .then(Response => {
      console.log(Response.data.message)
      alert(Response.data.message)
      // onclick = this.props.history.push('/dashboard')
    }).catch(error => {
      console.log(error,"error")
      alert(error.response.data.message)
    });

  }

  return (
    
    <MenuItem onClick={() => deleteNote(props.data)}>Delete note</MenuItem>

  )
}
export default DeleteNote;
