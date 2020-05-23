/* eslint-disable*/
import React from 'react'
import { trashNotes } from '../Service/Service'
import { MenuItem } from '@material-ui/core'


function TrashNote(props) {

    const noteTrash = (id) => {
        let notes = {
        }
        notes.noteId = id
        trashNotes(notes)
            .then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <MenuItem onClick={() => noteTrash(props.data)}>Dalete note</MenuItem>
    )
}
export default TrashNote;