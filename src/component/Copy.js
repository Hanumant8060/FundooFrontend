import React, { useState, useEffect } from 'react'

import Card from '@material-ui/core/Card';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List'
import { ListItemIcon, Checkbox, TextField } from '@material-ui/core'
import { getNotes } from '../Service/Service'
import IconList from './IconList';
import { Divider } from '@material-ui/core';
import Dashboard from './Dashboard';
import Example from './Example';
import GetAllLabels from './GetAllLabels';
import TrashNote from './TrashNote';
import CreateLabel from './CreateLabel';


function Copy(props) {
    const [popper, setPopper] = React.useState(false);
    const [anchorE, setAnchorE] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick1 = event => {
        setAnchorE(event.currentTarget);
      };
      
      const handleClose1 = () => {
        setAnchorE(null);
      };

      const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePopper = event => {
        setPopper(event.currentTarget);
    };

    const handlePopperClose = () => {
        setPopper(true);
    };
    const open = Boolean(popper);

    return (
      <div>
      <ListItemIcon><MoreVertIcon onClick={handleClick} /></ListItemIcon>
           
           <Menu
               anchorEl={anchorEl}
               keepMounted
               open={Boolean(anchorEl)}
               onClose={handleClose}
           > 
          
             <MenuItem>
               {/* <CreateLabel value={labelTitle}  data={popper} function={handlePopperClose}  openn={open}/> */}
               </MenuItem>
               {/* <MenuItem onClose={handleClose} onClick={props.getfunction}>add label</MenuItem> */}
               <MenuItem onClick={handleClick1}>add label</MenuItem>
               <Menu 
               className="box1"
               anchorE={anchorE}
               keepMounted
               open={Boolean(anchorE)}
               onClose={handleClose1}
               >
                    {/* <MenuItem variant="contained"  color="primary" onClick={handlePopper}>
           Create label
           <CreateLabel  data={popper} function={handlePopperClose}  openn={open}/>
             </MenuItem> */}
             <TextField></TextField>
             <button >Send</button>
                 <Checkbox/>
                 <GetAllLabels/>
                 </Menu>
               <TrashNote data={props.data} />
           </Menu>
     
            
         
        </div>
    )

}
export default Copy;