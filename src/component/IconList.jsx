import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import { ListItemIcon, Tooltip } from '@material-ui/core'
import { Menu, MenuItem } from '@material-ui/core'
import TrashNote from './TrashNote'
import ArchievedNote from './ArchievedNote';
import AddCollaborator from './AddCollaborator';
import AddReminder from './AddReminder';
import AddLabelToNote from './AddLabelToNote';
import Setcolor from './Setcolor';

export default function IconList(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [popper, setPopper] = React.useState(false);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [date, setDate] = React.useState(new Date);


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
                    <AddCollaborator data={props.data} />
                </Tooltip></ListItemIcon>
            <ListItemIcon><Setcolor data={props.data} /></ListItemIcon>
            <ArchievedNote data={props.data}  newData = {props.getnotes}/>
            <ListItemIcon>
                <Tooltip title="more"><MoreVertIcon onClick={handleClick} /></Tooltip></ListItemIcon>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <AddLabelToNote data={props.data} />
                <TrashNote data={props.data}  newFunctn ={props.getnotes}/>
            </Menu>
            <ListItemIcon><Button size="small" onClick={props.function}>Close</Button></ListItemIcon>
            <ListItemIcon> <Button size="small" onClick={props.func}>Create</Button>
            </ListItemIcon>
        </List>
    )
}

