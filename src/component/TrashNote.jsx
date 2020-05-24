/* eslint-disable*/
import React from 'react'
import { trashNotes } from '../Service/Service'
import { MenuItem , Snackbar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      top: 90,
    },
  },
}));


function TrashNote(props) {
    const classes = useStyles();
    const [snackbar, setSnackbar] = React.useState(false);
    const [snackbarMsg, setSnackbarMsg] = React.useState("");


    const noteTrash = (id) => {
        let notes = {
        }
        notes.noteId = id
        trashNotes(notes)
            .then(response => {
                setSnackbar(true);
                setSnackbarMsg(response.data.message);
                props.newFunctn();
            }).catch(error => {
                console.log(error)
            })
    }

    const snackbarClose = () => {
        setSnackbar(false);
      }


    return (
        <div>
        <MenuItem onClick={() => noteTrash(props.data)}>Delete note</MenuItem> 
        <Snackbar
        open={snackbar}
        autoHideDuration={4000}
        onClose={snackbarClose}
        message={snackbarMsg}
        className={classes.snackbar}
      />
      </div>
    )
}
export default TrashNote;