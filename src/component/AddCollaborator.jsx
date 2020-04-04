import React, { useEffect } from 'react'
import { Popover, Button, Card, Divider, Avatar, InputBase, TextField, ListItemIcon, Tooltip } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { collaborate, getCollaboratorList } from '../Service/Service';


export default function AddCollaborator(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [collaborator, setCollaborator] = React.useState([]);
  const [collaboaratorlist, setCollaboratorlist] = React.useState([]);

  // useEffect(() => {
  //     collaboratorList(props.data)
  // }
  //     , [])


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const collaboratorList = () => {
    console.log("collaborator list");
    getCollaboratorList()
      .then(response => {
        setCollaboratorlist(response.data)
        console.log("response ---->", response.data)
      }).catch(error => {
        console.log("error ---->", error)
      })

  }
  const addCollaborator = (noteid) => {
    console.log("collaborator");

    // let collab={}
    // collab.email=collaborator
    collaborate(noteid, collaborator)
      .then(response => {
        // setListTrashNote(response.data)
        console.log("response ---->", response.data)
      }).catch(error => {
        console.log("error ---->", error)
      })
  }
  sessionStorage.setItem("name", JSON.stringify(collaborator));
  const names = JSON.parse(sessionStorage.getItem('name'))
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

        <Card style={{ width: "620px", height: "290px" }} onClick={() => collaboratorList()}>
          {collaboaratorlist.map(o =>
            <div>
              {o.collabEmail}
            </div>
          )
          }
          <div>
            <h4 style={{ fontFamily: "arial", padding: "10px", fontSize: "16px" }}> Collaborators</h4>
          </div>
          <Divider />
          <div>
            <Avatar style={{ marginLeft: "10px" }}><PersonAddIcon></PersonAddIcon> </Avatar>
            <InputBase style={{ width: "350px", marginLeft: "10px", marginTop: "0px" }} placeholder="Person or email to share with" name="collaborator" onChange={e => setCollaborator(e.target.value)}></InputBase>
            <div><Avatar />
              <b>{names}</b>
            </div>
          </div>
        </Card>

        <Card style={{ backgroundColor: "rgba(0,0,0,0.07)", height: "50px" }}>
          <div className="collab" style={{ marginLeft: "380px", marginTop: "10px" }}>
            <Button size="small" onClick={handleClose}>cancel</Button>
            <Button size="small" onClick={() => addCollaborator(props.data)}>Save</Button>
          </div>
        </Card>


      </Popover>
    </div>
  )
}