import React from 'react'
import { add } from '../Service/Service'
function AddLabelToNote(){
    
    const addLabeltoNote=(noteid,labelid)=>{
       add(noteid,labelid) 
       .then(response => {
        console.log("response ---->", response.data)
      }).catch(error => {
        console.log("error ---->", error.message)
      })
    }
    return(
        <div>
            <button onClick={()=> addLabeltoNote(10,3)}></button>   
        </div>
    )
}
export default  AddLabelToNote;