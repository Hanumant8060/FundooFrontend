
import React from 'react'
import { uploadProfilePic } from '../Service/Service';


export default function Getrequest() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  

  // onFileChangeHandler = (e) => {
  //   // e.preventDefault();
  //   // this.setState({
  //   //     selectedFile: e.target.files[0]
  //   // });
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    // ApiService.upload(formData)
    uploadProfilePic(formData)
        .then(res => {
                console.log(res.data);
                alert("File uploaded successfully.")
        })
};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "1px dashed black"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "10%",
            height: "10%",
            position: "absolute"
          }}
        />
      </div>
      Click to upload Image
    </div>
  );
}

