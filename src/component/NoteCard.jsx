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
import CreateNote from './CreateNote';
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
        <div>
            <CreateNote position="fixed" />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', position: "absolute" }}>
                {listNote.map(o =>
                    <div style={{ marginTop: '50px', marginBottom: '5px', marginLeft: '300px', width: '25%' }}>
                        <Card className="pincard" style={{height:"150px"}} >
                            <div className="pinicon" >
                                {o.note_title}
                                <ListItemIcon  style={{marginLeft:"300px"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path fill="#000" d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z" />
                                </svg></ListItemIcon>
                            </div>
                            <div>
                                {o.note_disc}
                            </div>
                            <Divider />
                            <IconList data={o.noteId} />
                        </Card>

                    </div>
                )
                }

            </div>
        </div>
    )

}
export default NoteCard;