import React from 'react'
import axios, { post } from 'axios';

class Practice extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    localStorage.setItem("profilepicture",response.data.result);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://localhost:8080/home/uplaodImage';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'token':sessionStorage.getItem('token')
        }
    }
    return  post(url, formData,config)
   
  }

  render() {
    return (
       
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    // <div>
    // <MenuItem>Profile</MenuItem>
    // <form onSubmit={onFormSubmit}>
    //   <input type="file" name="file" onChange={e => setFile(e.target.value)} />
    //   <button type="submit">Upload</button>
    // </form></div>
   )
  }
}



export default Practice;