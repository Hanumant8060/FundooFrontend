import React from 'react'
import { ListItemIcon, Tooltip } from '@material-ui/core'
import ArchiveIcon from '@material-ui/icons/Archive';
import { archived } from '../Service/Service'

export default function ArchievedNote(props) {
    const noteArchived = (id) => {
        let notes = {
        }
        console.log("noteArchieved")
        notes.noteId = id
        archived(notes)
            .then(response => {
                console.log("response ---->", response.data)
            }).catch(error => {
                console.log("error ---->", error)
            })
    }

    return (
        <ListItemIcon>
            <Tooltip title="Archive">
                <ArchiveIcon onClick={() => noteArchived(props.data)}></ArchiveIcon></Tooltip>
        </ListItemIcon>
    )
}