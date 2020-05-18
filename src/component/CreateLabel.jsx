import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover';
import { addLabel } from '../Service/Service';
import Popup from './Popup';

export default function CreateLabel(props) {
  const [labelTitle, setLabelTitle] = React.useState('');
  const createLabel = () => {
    console.log("createlabel")
    let label = {

    }
    label.labelname = labelTitle
    addLabel(label)
      .then(Response => {
        console.log(Response.data.message)
        alert(Response.data.message)
      }).catch(error => {
        console.log(error, "error")
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
          </TextField><Button size="small" onClick={createLabel}> Create</Button>
        </Popover>
      </div>
      <div>
        {props.value && <Popup
          content={<>
            <div>
              <TextField
                placeholder="please type inside me" onChange={e => setLabelTitle(e.target.value)} />
              <button className="done" onClick={createLabel}>done</button>
            </div>
          </>}
          handleClose={props.function}
        />}
      </div>

    </div>
  )
}