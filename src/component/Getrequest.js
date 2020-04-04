import React from "react";
// import "./styles.css";

export default function App() {
  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      console.log(file);
    }
  };

  return (
    <div className="App">
      <input type="file" accept="image/*" onChange={handleImageUpload} multiple = "false" />
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "1px dashed black"
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute"  
          }}
          alt="hello"
        />
      </div>
    </div>
  );
}
