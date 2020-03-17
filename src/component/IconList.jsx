import React, { useContext } from 'react'
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import { ListItemIcon, Checkbox } from '@material-ui/core'
import { Menu, MenuItem } from '@material-ui/core'
import { deletenote, note, addLabel } from '../Service/Service';
import DeleteNote from './DeleteNote';
import CreateLabel from './CreateLabel';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField'
import GetAllLabels from './GetAllLabels';
import TrashNote from './TrashNote'
import ArchievedNote from './ArchievedNote';

export default function IconList(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [popper, setPopper] = React.useState(false);
    const [labelTitle, setLabelTitle] = React.useState('');
    const [anchorE, setAnchorE] = React.useState(null);
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
        <List>
            <ListItemIcon><AddAlertIcon /></ListItemIcon>
            <ListItemIcon><PersonAddIcon /></ListItemIcon>
            <ListItemIcon> <ImageIcon /></ListItemIcon>
            <ArchievedNote data={props.data} />
            {/* <ListItemIcon><ArchiveIcon /></ListItemIcon> */}
            <ListItemIcon><MoreVertIcon onClick={handleClick} /></ListItemIcon>

            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/* <MenuItem variant="contained" onClose={handleClose} color="primary" onClick={handlePopper}>
            Create label
            <CreateLabel value={labelTitle}  data={popper} function={handlePopperClose}  openn={open}/>
              </MenuItem> */}
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
                    {/* <MenuItem>adasdada</MenuItem>
                  <MenuItem>adasdada</MenuItem>
                  <MenuItem>adasdada</MenuItem>
                  <MenuItem>adasdada</MenuItem> */}
                    <MenuItem variant="contained" onClose={handleClose} color="primary" onClick={handlePopper}>
                        Create label
                         <CreateLabel value={labelTitle} data={popper} function={handlePopperClose} openn={open} />
                    </MenuItem>
                        <Checkbox  style={{marginTop:"20px"}}/>
                    <GetAllLabels />
                </Menu>
                <TrashNote data={props.data} />
            </Menu>
                <ListItemIcon><Button size="small" onClick={props.function}>Close</Button></ListItemIcon>
                 <ListItemIcon> <Button size="small" onClick={props.func}>Create</Button>
                 </ListItemIcon>
        </List>
    )
}

