import React from 'react'
import Avatar from 'react-avatar-edit'
import { Button } from '@material-ui/core'
import {uploadProfilePic} from '../Service/Service'

 function ProfilePicture(){

  const [file,setFile] = React.useState('');
  const uploadImage = ()=>{
 const formData = new FormData();
    formData.append("file",file,file.name);
    console.log(formData);
    uploadProfilePic(formData)
        .then(response => {
            console.log("response ---->", response.data)
        }).catch(error => {
            console.log("error ---->", error)
        })
      }
 
    return (
      <div>
        <Avatar
          width={390}
          height={295}
          // onCrop={onCrop}
          // onClose={onClose}
          // src={this.state.src}
          
        />
        {/* <img src={this.state.preview} alt="Preview" /> */}
        <Button onClick = {uploadImage}>Save</Button>
      </div>
    )
  
    }
export default ProfilePicture;
