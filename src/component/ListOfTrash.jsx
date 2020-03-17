import React, { useEffect } from 'react'
import { listOfTrash } from '../Service/Service';
import Popup from './Popup'
import Card from '@material-ui/core/Card';
import Popover from '@material-ui/core/Popover'
import NoteCard from './NoteCard';
function ListOfTrash(props) {
    //const [anchorEl, setAnchorEl] = React.useState(null);
    const [listTrashNote, setListTrashNote] = React.useState([])
    useEffect(() => {
        getAllTrashNotes()
    }
        , [])

    const getAllTrashNotes = () => {
        listOfTrash()
            .then(response => {
                setListTrashNote(response.data)
                console.log("response ---->", response.data)
            }).catch(error => {
                console.log("error ---->", error)
            })

    }
    return (
       
        
        <div>
          
            {props.value && <Popup
            
                content={<>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {/* {listNote.map(note => { */}
                        {listTrashNote.map(o =>
                            <div style={{ marginTop: '50px', marginBottom: '5px', marginLeft: '300px', width: '25%' }}>
                                <Card >
                                    <div>
                                        {o.note_title}
                                    </div>
                                    <div>
                                        {o.note_disc}
                                    </div>
                                </Card>
                            </div>
                        )
                        }

                    </div>
                </>}
                 handleClose={props.function} 
             />} 
               
        </div>
    )
}
export default ListOfTrash;
