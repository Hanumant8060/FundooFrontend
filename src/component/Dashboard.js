/* eslint-disable*/
import React, { useEffect } from 'react';
//import { AppBar, Toolbar, IconButton, InputBase, Typography } from "@material-ui/core";
//import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DeleteIcon from '@material-ui/icons/Delete';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LabelIcon from '@material-ui/icons/Label';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import CreateIcon from '@material-ui/icons/Create';
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField'
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import RefreshIcon from '@material-ui/icons/Refresh';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import './dashboard.css'
import Propcomponent from './Propcomponent';
import { note, getNotes } from '../Service/Service';
import { getAllNotes } from './Copy';
import CreateNote from './CreateNote';
import Copy from './Copy';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NoteCard from './NoteCard';
import IconList from './IconList';
import DeleteNote from './DeleteNote';
import { deletenote } from '../Service/Service'
import CreateLabel from './CreateLabel';
import GetAllLabels from './GetAllLabels';
import ListOfTrash from './ListOfTrash'
import { Snackbar, Checkbox } from '@material-ui/core';


export default function Dashboard(props) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [isopenn, setisOpen] = React.useState(false);
  const [isopen, setIsOpen] = React.useState(false);
  const [openpopup, setOpenPopup] = React.useState(false);
  const openn = Boolean(anchorEl);

  console.log(props, "props");

  const openEditLabel = () => {
    setOpenPopup(true);
    console.log(openpopup, "state");
  }
  const closeEditLabel = () => {
    setOpenPopup(false);
  }

  const togglePopup = () => {
    setIsOpen(true)
    console.log("value of isopen ", isopen)
  };

  const toggleClose = () => {
    setIsOpen(false);
    console.log(isopen)
  };

  // const togglePopup1 = () => {
  //   setisOpen(true)
  //   console.log("value of isopenn ",isopenn)
  // };

  // const handleClose1 = () => {
  //   setisOpen(false);
  //   console.log(isopenn)
  // };

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
  const handleNotes=()=>{
    props.data.history.push('/dashboard/note')
  }
  const handleArchive=()=>{
    props.data.history.push('/dashboard/archive')
  }


  return (
    <div>
      <div className="appbar" style={{ color: "black" }}>
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
            <Typography className="logo" variant="h6" noWrap align="center">
              FunDoo<img src="ak.png" alt="keep" />
            </Typography>
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <div className="search">
              <InputBase placeholder="Search…" />
            </div>
            <div>
              <SettingsIcon id="setting" />
              <IconButton
                onClick={handleMenu}
                color="inherit">
                <AccountCircle className="account" />
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
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Drawer
          // className="drawwer"
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div>
            <IconButton onClick={handleDrawerClose}>
              <MenuIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
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
          <List>
            {["Reminder"].map((text, index) => (
              <ListItem button key={text} onClick={() => {
                index % 2 === 0 ?
                  handleTrash()
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
            {/* <Checkbox /> */}
            <GetAllLabels />
          </List>

          <List>
            {["Edit Label"].map((text, index) => (
              <ListItem button key={text} onClick={openEditLabel}>
                <ListItemIcon>
                  <CreateIcon  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
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
          <List>
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
        </Drawer>
      </div>
      <div>
        <CreateLabel value={openpopup} function={closeEditLabel} />
      </div>
    </div>
  );
}
