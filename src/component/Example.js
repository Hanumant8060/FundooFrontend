import React, { useEffect } from 'react'
import { add } from '../Service/Service'
import axios from 'axios'
// import Service from '../Service/Service'
function Example() {
  //   useEffect(() => {
  //     addlabletonote()
  // }
  //   )

  const addlabletonote = (noteid, labelid) => {
   console.log(noteid,labelid);
   
    return axios.post("http://localhost:8080/label/addLabelToNote", {
      params: {
          "noteId": noteid,
          "labelId":labelid
          
      },
      headers: {
          "Content-Type": "application/json;charset=utf-8",
          "decodeToken": sessionStorage.getItem("token")
      }
  })
   // add(noteid,addlabel)
      .then(response => {
        console.log("response ---->", response.data)
      }).catch(error => {
        console.log("error ---->", error.message)
      })




  }
  return (
    <div>
      <button onClick={() => addlabletonote(10, 34)}>send</button>
    </div>
  );
}
export default Example