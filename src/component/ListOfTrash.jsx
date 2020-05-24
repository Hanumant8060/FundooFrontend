import React, { useEffect } from 'react'
import { listOfTrash, untrash, deletefromtrash } from '../Service/Service';
import Card from '@material-ui/core/Card';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { ListItemIcon } from '@material-ui/core';

function ListOfTrash(props) {
    const [listTrashNote, setListTrashNote] = React.useState([])

    useEffect(() => {
        getAllTrashNotes()
    }
        , [])

    const getAllTrashNotes = () => {
        listOfTrash()
            .then(response => {
                setListTrashNote(response.data)
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    const unTrashNote = (noteid) => {
        untrash(noteid)
            .then(response => {
                console.log(response.data)
                getAllTrashNotes();
            }).catch(error => {
                console.log(error)
            })
    }

    const deletefromTrash = (id) => {
        deletefromtrash(id)
            .then(response => {
                getAllTrashNotes();
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div style={{ marginTop: "100px" }}>
            <div style={{ marginLeft: "500px", display: "flex", fontSize: "17px", fontStyle: "Italic", alignItems: "center" }}>
                <h4>
                    Notes in trash are deleted after 7 days
                </h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {listTrashNote.map(o =>
                    <div style={{ marginTop: '10px', marginBottom: '5px', marginLeft: '300px', width: '35%', height: "10px", padding: "90px" }}>
                        <Card className="trashcard" style={{ height: "95px", alignItems: "center", padding: "10px", backgroundColor: "" }}>
                            <div>
                                {o.note_title}
                            </div>
                            <div>
                                {o.note_disc}
                            </div>
                            <div className="trashicon">
                                <ListItemIcon style={{ marginLeft: "15px", marginTop: "20px" }}><RestoreFromTrashIcon onClick={() => unTrashNote(o.noteId)} /></ListItemIcon>
                                <ListItemIcon style={{ marginLeft: "30px" }}><DeleteForeverIcon onClick={() => deletefromTrash(o.noteId)} /></ListItemIcon>
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ListOfTrash;
