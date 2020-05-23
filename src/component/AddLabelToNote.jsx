import React, { useEffect } from 'react'
import { add, LabelAddedToNote, displayLabelUnAdded, removeToLabelFromNote } from '../Service/Service';
import MenuItem from '@material-ui/core/MenuItem';
import { Popover } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function AddLabelToNote(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [addlabeltonotes, setaddlabeltonote] = React.useState([]);
  const [unaddedlabel, setunaddedlabel] = React.useState([]);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  useEffect(() => {
    displayLabelAddedToNote();
    displayLabelUnAddedToNotes();
  }, [])

  const displayLabelAddedToNote = () => {
    LabelAddedToNote(props.data).then(Response => {
      setaddlabeltonote(Response.data)
    }).catch((error) => {
      console.log(error);
    })
  }


  const displayLabelUnAddedToNotes = () => {
    displayLabelUnAdded(props.data).then(Response => {
      setunaddedlabel(Response.data)
    }).catch((error) => {
      console.log(error.response.message);
    })
  }

  const addLabelToNotes = (labelid) => {
    add(props.data, labelid).then(Response => {
      console.log(Response.message);
      displayLabelAddedToNote();
    }).catch((error) => {
      console.log(error.Response.message);
    })
  }

  const removeLabel = (labelid) => {
    removeToLabelFromNote(labelid, props.data).then(Response => {
      console.log(Response.data.message)
      displayLabelUnAddedToNotes();
    }).catch((error) => {
      console.log(error.response.message);
    })
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuItem aria-describedby={id} onClick={handleClick}>Add Label</MenuItem>
      <div>
        <Popover style={{ width: "800px" }} id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
          <label>labelName</label><br></br>
          <MenuItem  >Label Notes</MenuItem>
          <div>
            {addlabeltonotes.map(addLabel => (
              <div className="menuLabelDisplay" onClick={() => { removeLabel(addLabel.labelId); }}>
                <CheckBoxOutlinedIcon style={{ "padding-right": '5px', "marginTop": "10px" }} />
                <MenuItem style={{ marginTop: '-6px', marginLeft: "5px" }}  >{addLabel.labelname}
                </MenuItem>
              </div>
            ))}
          </div>
          <div>
            {unaddedlabel.map(addLabel => (
              <div className="menuLabelDisplay" onClick={() => { addLabelToNotes(addLabel.labelId); }}>
                < CheckBoxOutlineBlankIcon style={{ "padding-right": '5px' }} />
                <MenuItem style={{ "margin-top": '-6px' }} >{addLabel.labelname}
                </MenuItem>
              </div>
            ))}
          </div>
        </Popover>
      </div>
    </div>

  );
}