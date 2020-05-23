import React, { useEffect } from 'react'
import { Popover, Button, Card, Divider, Avatar, InputBase, ListItemIcon, Tooltip, ListItemAvatar, ListItem, ListItemText, List, TextField, Snackbar } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { collaborate, getCollaboratorList } from '../Service/Service';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));

export default function AddCollaborator(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [collaborator, setCollaborator] = React.useState('');
  const [collaboaratorlist, setCollaboratorlist] = React.useState([]);
  const [snackbar, setSnackbar] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState("");

  useEffect(() => {
    collaboratorList();

  }, [])

  const snackbarClose = () => {
    setSnackbar(false);
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const collaboratorList = () => {
    console.log("collaboratorlist");

    getCollaboratorList(props.data)
      .then(response => {
        setCollaboratorlist(response.data)
      }).catch(error => {
      })
  }
  const addCollaborator = (noteid) => {
    collaborate(noteid, collaborator)
      .then(response => {
        console.log("response ---->", response.data)
        setSnackbar(true);
        setSnackbarMsg(response.data.message);
      }).catch(error => {
        console.log("error ---->", error)
      })
  }

  const open = Boolean(anchorEl);
  return (
    <div>
      <ListItemIcon><Tooltip title="Collaborator"><PersonAddIcon onClick={handleClick} /></Tooltip></ListItemIcon>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'right',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Card style={{ width: "620px" }} onClick={() => collaboratorList()}>
          <div>
            <h4 style={{ fontFamily: "arial", padding: "10px", fontSize: "16px" }}> Collaborators</h4>
          </div>
          {collaboaratorlist.map(o =>
            <div>
              <ListItem  >
                <ListItemAvatar>
                  <Avatar >
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText> {o.collabEmail}</ListItemText>
              </ListItem>
            </div>
          )}
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <TextField name="colaborateEmailId" placeholder="enter emailId" name="collaborator" onChange={e => setCollaborator(e.target.value)} ></TextField>
          </ListItem>
        </Card>
        <Card style={{ backgroundColor: "rgba(0,0,0,0.07)", height: "50px" }}>
          <div className="collab" style={{ marginLeft: "380px", marginTop: "10px" }}>
            <Button size="small" onClick={handleClose}>cancel</Button>
            <Button size="small" onClick={() => addCollaborator(props.data)}>Save</Button>
            <Snackbar
              open={snackbar}
              autoHideDuration={4000}
              onClose={snackbarClose}
              message={snackbarMsg}
              className={classes.snackbar}
            />
          </div>
        </Card>
      </Popover>
    </div>
  )
}