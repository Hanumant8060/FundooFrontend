import React, { useEffect } from 'react'
import { add } from '../Service/Service'
import { Snackbar } from '@material-ui/core'
// import Service from '../Service/Service'
function Example() {
  //   useEffect(() => {
  //     addlabletonote()
  // }
  //   )

  const addlabletonote = (noteid, labelid) => {
    let addlabel = {}
    // let addnote={}
    addlabel.noteId = noteid
    addlabel.labelId = labelid
    add(noteid,labelid)
      .then(response => {
        console.log("response ---->", response.data)
      }).catch(error => {
        console.log("error ---->", error.message)
      })
  }
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = newState => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <div>
      <button  >send</button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
        message="I love snacks"
      />
    </div>
  );
}
export default Example