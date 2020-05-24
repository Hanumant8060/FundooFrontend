/* eslint-disable*/
import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import { ListItemIcon } from '@material-ui/core'
import { getNotes } from '../Service/Service'
import IconList from './IconList';
import { ispin } from '../Service/Service'
import { Divider, Tooltip } from '@material-ui/core';
import CreateNote from './CreateNote';


function NoteCard(props) {
    const [listNote, setListNote] = useState([])
    
    

    useEffect(() => {
        getAllNotes()
    }
        , [])


    const pinNote = (noteid) => {
        ispin(noteid)
            .then(response => {
                getAllNotes();
            }).catch(error => {
                console.log(error)
            })
    }

    const getAllNotes = () => {
        getNotes()
            .then(response => {
                setListNote(response.data)
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <CreateNote position="fixed" function={getAllNotes} />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', position: "relative" }}>
                {listNote.map(note => {
                    return <div style={{ marginTop: '30px', marginBottom: '5px', marginLeft: '300px', width: '25%' }}>
                        <Card style={{ height: "140px", borderRadius: "6px", backgroundColor: note.color }} >
                            <div>
                                {note.note_title}
                                {note.pin ?
                                    <ListItemIcon style={{ marginLeft: "300px" }} onClick={() => pinNote(note.noteId)}><Tooltip title="Unpin note">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path fill="#000" d="M17 4a2 2 0 0 0-2-2H9c-1.1 0-2 .9-2 2v7l-2 3v2h6v5l1 1 1-1v-5h6v-2l-2-3V4z" />
                                        </svg>
                                    </Tooltip>
                                    </ListItemIcon> :
                                    <ListItemIcon style={{ marginLeft: "300px" }} onClick={() => pinNote(note.noteId)} > <Tooltip title="Pin note">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path fill="#000" d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z" />
                                        </svg>
                                    </Tooltip>
                                    </ListItemIcon>
                                }
                            </div>
                            <div>
                                {note.note_disc}
                            </div>
                            <Divider />
                            <IconList data={note.noteId}  getnotes ={getAllNotes}/>
                        </Card>
                    </div>
                })}
            </div>
        </div>
    )
}
export default NoteCard;