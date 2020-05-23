import React from 'react';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import Menu from '@material-ui/core/Menu';
import { setColor } from '../Service/Service';
import { ListItemIcon, Tooltip } from '@material-ui/core';

export default function Setcolor(props) {
    const [anchorEl3, setanchorEl3] = React.useState();

    const changeBackGroudColor = (colorChnage) => {
        let Notes = {};
        Notes.noteId = props.data;
        Notes.color = colorChnage;
        setColor(Notes).then(Response => {
            console.log(Response.data)
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }

    const handleCloseColor = () => {
        setanchorEl3(false);
    }

    const handleClickOpenColor = event => {
        setanchorEl3(event.currentTarget);
    }

    return (
        <div>
            <ListItemIcon><Tooltip title="add Color">
                <ColorLensOutlinedIcon className="iconNotes"
                    onClick={handleClickOpenColor} /></Tooltip></ListItemIcon>
            <Menu
                anchorEl={anchorEl3}
                open={Boolean(anchorEl3)}
                onClose={handleCloseColor}
                PaperProps={{ style: { width: '20ch' } }} >
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', "padding-left": '3%' }}  >
                    <div className="colorIcon" style={{ "backgroundColor": 'white' }} onClick={() => { changeBackGroudColor("white"); handleCloseColor(); }} ></div>
                    <div className="colorIcon" style={{ "backgroundColor": 'red' }} onClick={() => { changeBackGroudColor("#f28b82"); handleCloseColor(); }}></div>
                    <div className="colorIcon" style={{ "backgroundColor": 'orange' }} onClick={() => { changeBackGroudColor("#fbbc04"); handleCloseColor(); }}></div>
                    <div className="colorIcon" style={{ "backgroundColor": 'yellow' }} onClick={() => { changeBackGroudColor("#fff475"); handleCloseColor(); }}></div>
                    <div className="colorIcon" style={{ "backgroundColor": 'green' }} onClick={() => { changeBackGroudColor("#ccff90"); handleCloseColor(); }}></div>
                    <div className="colorIcon" style={{ "backgroundColor": 'teal' }} onClick={() => { changeBackGroudColor("#a7ffeb"); handleCloseColor(); }}></div>
                    <div className="colorIcon" style={{ "backgroundColor": 'blue' }} onClick={() => { changeBackGroudColor("#cbf0f8"); handleCloseColor(); }}></div>
                    <div className="colorIcon" style={{ "backgroundColor": 'darkBlue' }} onClick={() => { changeBackGroudColor("darkBlue"); handleCloseColor(); }}></div>
                    <div className="colorIcon" style={{ "backgroundColor": 'purple' }} onClick={() => { changeBackGroudColor("purple"); handleCloseColor(); }}></div>
                    <div className="colorIcon" style={{ "backgroundColor": 'pink' }} onClick={() => { changeBackGroudColor("pink"); handleCloseColor(); }}></div>
                    <div className="colorIcon" style={{ "backgroundColor": 'brown' }} onClick={() => { changeBackGroudColor("brown"); handleCloseColor(); }}></div>
                    <div className="colorIcon" style={{ "backgroundColor": 'gray' }} onClick={() => { changeBackGroudColor("gray"); handleCloseColor(); }} ></div>
                </div>
            </Menu>
        </div>
    );

}

