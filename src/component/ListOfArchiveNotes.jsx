import React, { useEffect } from 'react'
import { listOfArchive, unarchive } from '../Service/Service'
import { Card, ListItemIcon } from '@material-ui/core';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import './dashboard.css'

function ListOfArchiveNotes() {
    const [listArchiveNote, setListArchiveNote] = React.useState([]);

    useEffect(() => {
        getAllArchiveNotes()
    }, [])

    const getAllArchiveNotes = () => {
        listOfArchive()
            .then(response => {
                setListArchiveNote(response.data)
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    const unarchivenote = (noteid) => {
        unarchive(noteid)
            .then(response => {
                console.log(response.data)
                getAllArchiveNotes();
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div style={{ marginTop: "100px" }}>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {listArchiveNote.map(o =>
                    <div style={{ marginTop: '10px', marginBottom: '15px', marginLeft: '300px', width: '35%', height: "10px", padding: "50px" }}>
                        <Card className="cardarchive" style={{ height: "95px", alignItems: "center", padding: "10px", backgroundColor: "" }}>
                            <div>
                                {o.note_title}
                            </div>
                            <div>
                                {o.note_disc}
                            </div>
                            <div className="unarchivecon">
                                <ListItemIcon style={{ marginLeft: "15px", marginTop: "20px" }}><UnarchiveIcon onClick={() => unarchivenote(o.noteId)} /></ListItemIcon>
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ListOfArchiveNotes;