import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List'
import { ListItemIcon } from '@material-ui/core'
import { getNotes } from '../Service/Service'
import IconList from './IconList';
import { Divider } from '@material-ui/core';
import Dashboard from './Dashboard';
import Example from './Example';
function NoteCard(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [listNote, setListNote] = useState([])
    useEffect(() => {
        getAllNotes()
    }
        , [])

    const getAllNotes = () => {
        getNotes()
            .then(response => {
                setListNote(response.data)
                console.log("response ---->", response.data)
            }).catch(error => {
                console.log("error ---->", error)
            })

    }


    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {/* {listNote.map(note => { */}
                {listNote.map(o=>
             <div style={{ marginTop: '50px', marginBottom: '5px', marginLeft: '300px', width: '25%' }}>
                    <Card >
                        <div>
                            {o.note_title}
                        </div>
                        <div>
                            {o.note_disc}
                        </div>
                        <Divider />
                        <IconList data={o.noteId}/>
                    </Card>
                    
                </div>
                )
            }
         
        </div>
    )

}
export default NoteCard;