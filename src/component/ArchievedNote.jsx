import React from 'react'
import { ListItemIcon, Tooltip, Snackbar } from '@material-ui/core'
import ArchiveIcon from '@material-ui/icons/Archive';
import { archived } from '../Service/Service'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));

export default function ArchievedNote(props) {
    const classes = useStyles();
    const [snackbar, setSnackbar] = React.useState(false);
    const [snackbarMsg, setSnackbarMsg] = React.useState("");

    const snackbarClose = () => {
        setSnackbar(false);
      }

    const noteArchived = (id) => {
        let notes = {
        }
        notes.noteId = id
        archived(notes)
            .then(response => {
                setSnackbar(true);
                setSnackbarMsg(response.data.message);
                props.newData();
            }).catch(error => {
                console.log( error)
            })
    }

    return (
        <ListItemIcon>
            <Tooltip title="Archive">
                <ArchiveIcon onClick={() => noteArchived(props.data)}></ArchiveIcon></Tooltip>
                <Snackbar
              open={snackbar}
              autoHideDuration={4000}
              onClose={snackbarClose}
              message={snackbarMsg}
              className={classes.snackbar}
            />
        </ListItemIcon>
        
    )
}