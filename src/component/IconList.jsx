import React, { useContext } from 'react'
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import { ListItemIcon, Checkbox, ButtonGroup, Tooltip } from '@material-ui/core'
import { Menu, MenuItem } from '@material-ui/core'
import { deletenote, note, addLabel } from '../Service/Service';
import DeleteNote from './DeleteNote';
import CreateLabel from './CreateLabel';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField'
import GetAllLabels from './GetAllLabels';
import TrashNote from './TrashNote'
import ArchievedNote from './ArchievedNote';
import AddLabelToNote from './AddLabelToNote'
import DateTimePicker from 'react-datetime-picker/dist/DateTimePicker';
import Greeting from './Greeting'
import Copy from './Copy';
import AddCollaborator from './AddCollaborator';
import Getrequest from './Getrequest';
import AddReminder from './AddReminder';

export default function IconList(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [popper, setPopper] = React.useState(false);
    const [labelTitle, setLabelTitle] = React.useState('');
    const [anchorE, setAnchorE] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [date, setDate] = React.useState(new Date);
    const handleClick1 = event => {
        setAnchorE(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorE(null);
    };

    const handleClick2 = event => {
        setAnchorE2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorE2(null);
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
        <ListItemIcon><AddReminder data={props.data} function={handleClick2} /></ListItemIcon>
            <Menu
                anchorEl={anchorE2}
                keepMounted
                open={Boolean(anchorE2)}
                onClose={handleClose2}
            >
                <div style={{ width: "500px", position: "relative" }}>
                    <MenuItem><AddReminder style={{ width: "500px", position: "relative" }} value={date} onChange={() => setDate(date)} />
                        <Button size="small" >Set</Button>
                    </MenuItem></div>

            </Menu>
            <ListItemIcon>
                <Tooltip title="Collaborator">
                    {/* <PersonAddIcon /> */}
                    <AddCollaborator data ={props.data}/>
                </Tooltip></ListItemIcon>
            <ListItemIcon><Tooltip title="add Image"><ImageIcon /></Tooltip></ListItemIcon>
            <ArchievedNote data={props.data} />
            {/* <ListItemIcon><ArchiveIcon /></ListItemIcon> */}
            <ListItemIcon>
                <Tooltip title="more"><MoreVertIcon onClick={handleClick} /></Tooltip></ListItemIcon>

            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>

                </MenuItem>
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
                    {/* <Checkbox style={{ marginTop: "20px" }} /> */}
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

