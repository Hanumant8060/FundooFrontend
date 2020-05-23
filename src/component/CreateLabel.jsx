import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover';
import { addLabel, getLabels } from '../Service/Service';
import Popup from './Popup';
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItem, ListItemAvatar } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { updateLabel } from '../Service/Service';
import { deleteLabel } from '../Service/Service';

export default function CreateLabel(props) {
  const [labelTitle, setLabelTitle] = React.useState('');
  const [listLabel, setListLabel] = React.useState([]);

  useEffect(() => {
    getAllLabels()
  }
    , [])

  const getAllLabels = () => {
    getLabels()
      .then(response => {
        setListLabel(response.data)
      }).catch(error => {
        console.log("error ---->", error)
      })
  }

  const createLabel = () => {
    let label = {
    }
    label.labelname = labelTitle
    addLabel(label)
      .then(Response => {
        console.log(Response.data.message)
        alert(Response.data.message)
        getAllLabels();
      }).catch(error => {
        console.log(error)
      });
  }

  const updateLabelTitle = (labelId) => {
    let label = {
    }
    label.labelname = labelTitle
    label.labelId = labelId
    updateLabel(label)
      .then(Response => {
        console.log(Response.data.message)
        alert(Response.data.message)
      }).catch(error => {
        console.log(error)
      });
  }

  const deletelabel = (labelId) => {
    let label = {
    }
    label.labelId = labelId
    deleteLabel(label)
      .then(Response => {
        console.log(Response.data.message)
        alert(Response.data.message)
      }).catch(error => {
        console.log(error)
      });
  }



  return (
    <div>
      <div>
        <Popover
          open={props.openn}
          anchorEl={props.data}
          onClose={props.function}
        >
          <TextField placeholder="CREATE" name="labelTitle" onChange={e => setLabelTitle(e.target.value)} >
          </TextField><Button size="small" onClick={createLabel} onClose={props.function}> Create</Button>
        </Popover>
      </div>
      <div>
        {props.value && <Popup
          content={<>
            <div>
              <h3>Edit label</h3>
              <TextField
                placeholder="please type inside me" onChange={e => setLabelTitle(e.target.value)} />
              <button className="done" onClick={createLabel}>done</button>
              <div>
                {listLabel.map(label =>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <DeleteIcon onClick={() => deletelabel(label.labelId)}></DeleteIcon>
                      </ListItemAvatar>
                      <TextField placeholder={label.labelname} name="labelTitle" onChange={e => setLabelTitle(e.target.value)}  > </TextField>
                      <ListItemAvatar>
                        <EditOutlinedIcon onClick={() => updateLabelTitle(label.labelId)} />
                      </ListItemAvatar>
                    </ListItem>
                  </List>
                )}
              </div>
            </div>
          </>}
          handleClose={props.function}
        />}
      </div>
    </div>
  )
}
