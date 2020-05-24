import React from 'react';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import Menu from '@material-ui/core/Menu';
import { setColor } from '../Service/Service';
import { ListItemIcon, Tooltip , Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));

export default function Setcolor(props) {
    const classes = useStyles();
    const [anchorEl3, setanchorEl3] = React.useState();
    const [snackbar, setSnackbar] = React.useState(false);
    const [snackbarMsg, setSnackbarMsg] = React.useState("");

    const changeBackGroudColor = (colorChnage) => {
        let Notes = {};
        Notes.noteId = props.data;
        Notes.color = colorChnage;
        setColor(Notes).then(Response => {
            console.log(Response.data)
            setSnackbar(true);
            setSnackbarMsg(Response.data.message);
        }).catch((error) => {
            alert(error)
        })
    }

    const snackbarClose = () => {
        setSnackbar(false);
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
            <Snackbar
              open={snackbar}
              autoHideDuration={4000}
              onClose={snackbarClose}
              message={snackbarMsg}
              className={classes.snackbar}
            />
        </div>
    );

}

