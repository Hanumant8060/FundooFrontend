import React, { useEffect } from 'react'
import { listOfReminder, removeReminder } from '../Service/Service'
import { Card, Chip } from '@material-ui/core'
import CreateNote from './CreateNote'
import IconList from './IconList'

function ListOfReminder() {
    const [listReminderNote, setListReminderNote] = React.useState([])

    useEffect(() => {
        getAllReminderNotes()
    }
        , [])


    const getAllReminderNotes = () => {
        listOfReminder()
            .then(response => {
                setListReminderNote(response.data)
                console.log("response ---->", response.data)
            }).catch(error => {
                console.log("error ---->", error)
            })
    }

    const remove = (noteid) => {
        removeReminder(noteid)
            .then(response => {
                console.log("response ---->", response.data)
            }).catch(error => {
                console.log("error ---->", error)
            })
    }

    return (
        <div>
            <CreateNote position="fixed" />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {listReminderNote.map(o =>
                    <div style={{ marginTop: '10px', marginBottom: '5px', marginLeft: '300px', width: '35%', height: "10px", padding: "90px" }}>
                        <Card style={{ width: "600px", height: "105px", alignItems: "center", padding: "10px", borderRadius: "8px" }}>
                            <div>
                                {o.note_title}
                            </div>
                            <Chip
                                style={{ marginTop: "20px" }}
                                label={o.reminderTime}
                                onDelete={() => remove(o.noteId)}
                            />
                            <IconList />
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ListOfReminder;