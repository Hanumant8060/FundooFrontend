import React, { useEffect } from 'react'
import { getLabels, add } from '../Service/Service'
import { ListItemIcon, List, Checkbox } from '@material-ui/core'
import LabelIcon from '@material-ui/icons/Label';
import IconList from './IconList';

function GetAllLabels(props) {
    const [listLabel, setListLabel] = React.useState([])
    const [checked, setChecked] = React.useState(false);
      useEffect(() => {
          getAllLabels()
      }
          , [])
  
      const getAllLabels = () => {
          getLabels()
              .then(response => {
                  setListLabel(response.data)
                  console.log("response ---->", response.data)
              }).catch(error => {
                  console.log("error ---->", error)
              })
      }
  
      const addLabeltoNote=(noteid,labelid)=>{
          console.log("addlabel to note");
          
          add(noteid,labelid) 
          .then(response => {
           console.log("response ---->", response.data)
           setChecked(true);
         }).catch(error => {
           console.log("error ---->", error.message)
         })
       }
  
      return (
          <div>
              {listLabel.map(label => {
                  return <div>
                      <div>
                          <List>
                              <ListItemIcon>
                                  <Checkbox
                                  checked={checked} 
                                  onClick={()=> addLabeltoNote(4,label.labelId)} value="end" style={{marginTop:"1px"}}/>
                                  {label.labelname}
                              </ListItemIcon>
                          </List>
                      </div>
                      {/* <div>
              <button onClick={()=> addLabeltoNote(props.data,label.labelId)}></button>   
          </div> */}
                  </div>
                 
              })
              }
          </div> 
      )
  }
   
export default GetAllLabels;