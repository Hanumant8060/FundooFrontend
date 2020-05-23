/* eslint-disable*/
import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from '@material-ui/icons/Delete';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import CreateIcon from '@material-ui/icons/Create';
import ArchiveIcon from '@material-ui/icons/Archive';
import Link from '@material-ui/core/Link';
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import './dashboard.css'
import ak from './image/ak.png'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import CreateLabel from './CreateLabel';
import GetAllLabels from './GetAllLabels';
import Avatar from '@material-ui/core/Avatar'
import Practice from './Pratice';
import Search from './Search';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default function Dashboard(props) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isopen, setIsOpen] = React.useState(false);
  const [openpopup, setOpenPopup] = React.useState(false);
  const openn = Boolean(anchorEl);

  const openEditLabel = () => {
    setOpenPopup(true);
  }
  const closeEditLabel = () => {
    setOpenPopup(false);
  }

  const togglePopup = () => {
    setIsOpen(true)
  };

  const toggleClose = () => {
    setIsOpen(false);
    console.log(isopen)
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleTrash = () => {
    props.data.history.push('/dashboard/trash')
  }
  const handleNotes = () => {
    props.data.history.push('/dashboard/note')
  }
  const handleArchive = () => {
    props.data.history.push('/dashboard/archive')
  }
  const handleReminder = () => {
    props.data.history.push('/dashboard/reminder')
  }


  return (
    <div>
      <div className="appbar">
        <AppBar color="transparent" position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className="menubutton"
              color="inherit"
              onClick={handleDrawerOpen}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <img src={ak} alt="keep" style={{ paddingLeft: "1px" }} />
            <Typography className="logo" variant="h5" fontStyle="Italic" noWrap align="center">
              FunDoo
            </Typography>
            <Search style={{ marginLeft: "200px" }} />
            <div>
              <SettingsIcon id="setting" />
            </div>
            <div style={{ marginLeft: "60px" }}>
              <ViewAgendaOutlinedIcon />
            </div>
            <div>
              <IconButton
                onClick={handleMenu}
                color="inherit">
                <Avatar className="account" alt={name}
                  src={localStorage.getItem("profilepicture")}><AddAPhotoOutlinedIcon style={{ padding: "10px", marginLeft: "20px", marginTop: "10px" }} />
                </Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openn}
                onClose={handleMenuClose}
              >
                <Practice />
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
              </Menu>
            </div>
            <div>
              <MoreVertIcon />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Drawer
          className="over1"
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div>
            <IconButton onClick={handleDrawerClose}>
              <MenuIcon style={{ marginTop: "23px" }} />
            </IconButton>
          </div>
          <Divider />
          <List className="over">
            {["Notes"].map((text, index) => (
              <ListItem button key={text} onClick={() => {
                index % 2 === 0 ?
                  handleNotes()
                  :
                  null
              }
              }>
                <ListItemIcon>
                  <EmojiObjectsIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <List className="over">
            {["Reminder"].map((text, index) => (
              <ListItem button key={text} onClick={() => {
                index % 2 === 0 ?
                  handleReminder()
                  :
                  null
              }
              }>
                <ListItemIcon>
                  <AddAlertIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["LABELS"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <GetAllLabels data={props.data} />
          </List>
          <List className="over">
            {["Edit Label"].map((text, index) => (
              <ListItem button key={text} onClick={openEditLabel}>
                <ListItemIcon>
                  <CreateIcon />
                  <CreateLabel />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className="over">
            {["Trash"].map((text, index) => (
              <ListItem button key={text} onClick={() => {
                index % 2 === 0 ?
                  handleTrash()
                  :
                  null
              }
              }>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <List className="over">
            {["Archive"].map((text, index) => (
              <ListItem button key={text} onClick={() => {
                index % 2 === 0 ?
                  handleArchive()
                  :
                  null
              }
              }>
                <ListItemIcon>
                  <ArchiveIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <Typography className>
              <Link href="#" style={{ paddingLeft: "10px", fontStyle: "italic", marginTop: "50px" }} >
                Terms and conditions
              </Link>
              <Link href="#" color="inherit">
              </Link>
              <Link href="#" variant="body2">
              </Link>
            </Typography>
          </List>
        </Drawer>
      </div>
      <div>
        <CreateLabel value={openpopup} function={closeEditLabel} />
      </div>
    </div>
  );
}
