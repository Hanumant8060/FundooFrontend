/* eslint-disable*/
import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import AccountCircle from '@material-ui/icons/AccountCircle'
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
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';


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
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <div className="search">
              <InputBase placeholder="Search…" style={{ width: "440px" }} />
            </div>
            <div>
              <SettingsIcon id="setting" />
            </div>
            {/* <div>
              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>
              </div> */}
            <div>
              <IconButton
                onClick={handleMenu}
                color="inherit">
                <Avatar className="account"><AddAPhotoOutlinedIcon style={{padding:"10px",marginLeft:"20px",marginTop:"10px"}}/></Avatar>
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
                <MenuItem >Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
              </Menu>
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
            {/* <Checkbox /> */}
            <GetAllLabels />
          </List>

          <List className="over">
            {["Edit Label"].map((text, index) => (
              <ListItem button key={text} onClick={openEditLabel}>
                <ListItemIcon>
                  <CreateIcon />
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
          {/* <img src={corona}/> */}
        </Drawer>
      </div>
      <div>
        <CreateLabel value={openpopup} function={closeEditLabel} />
      </div>
    </div>
  );
}
