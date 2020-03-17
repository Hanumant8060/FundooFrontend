import React, { Component } from 'react';
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
import Greeting from './Greeting';
// import {Greeting} from "./component/Greeting";

export default function Propcomponent() {
        const [open, setOpen] = React.useState(false);
        // const greeting = "welcome to greeting";
        const handleDrawerOpen = () => {
            setOpen(true);
          };
          const handleDrawerClose = () => {
            setOpen(false);
          };
        return (
            <div>
               <div className="drawer">
        <Drawer
          className="drawwer"
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          <List className="drawer">
            {["Notes", "Reminder"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? < EmojiObjectsIcon /> : <AddAlertIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className="drawer">
            {["labels", "Edit Label"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <LabelIcon /> : <CreateIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className="drawer">
            {["Archived", "Trash"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <DeleteIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
            </div>
        );
    }


// export default Propcomponent;