import React, { Component } from "react";
import { Card,  TextField } from "@material-ui/core";

import { Tooltip } from "@material-ui/core";


class HooksRef extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      title: "",
      description: "",
      allNote: [],
      opensnackbar: false,
      setcolor: "",
      reminders: "",
      collabrators: [],
      Archivenote: false,
      pinunpin: false,
      labelarray: []
    };
  }

  handlesetLabel = labels => {
    console.log("display" + labels);
    console.log("display" + labels.length);


    this.setState({
      labelarray: labels
    });
  };

  handleClose1 = () => {
    this.setState({
      opensnackbar: false
    });
  };
  handleDeleteChange = () => {
    this.setState({ reminders: null });
  };
  handleReminder = reminder => {
    this.setState({ reminders: reminder });
  };
  handlesetColor = color => {
    this.setState({ setcolor: color });
    console.log("color set in parernt" + this.state.setcolor);
  };
  handlesetArchive = archive => {
    this.setState({ Archivenote: archive });
    console.log("color set in parernt" + this.state.Archivenote);
  };

  handleCollabrator = handleCollabrator => {
    this.setState({ collabrators: handleCollabrator });
    console.log("collabrators set in parernt" + this.state.collabrators);
  };

  HandleUnpinChange = () => {
    this.setState({ pinunpin: true });
  };
  HandlePinChange = () => {
    this.setState({ pinunpin: false });
  };
  handleOpenNoteChange = () => {
    this.setState({ open: true });
  };
  handleCloseChange = () => {
    this.setState({ open: false });
  };
  handlechangetitle = event => {
    this.setState({
      title: event.target.value
    });
    console.log(this.state.title);
  };
  handlechangedescription = event => {
    this.setState({
      description: event.target.value
    });
    console.log(this.state.description);
  };


  handleDeleteLabel = (index) => {

    const list = this.state.labelarray;
    list.splice(index, 1);
    this.setState({ labelarray: list });
  }
  handleClose3 = () => {
    this.setState({ open: false });
  };
  handleOnClickAwayChange = () => {
    this.setState({ open: false });
    let note = {};

    console.log("color set in parernt2" + this.state.setcolor);

    if (note !== null) {
      note.title = this.state.title;
      note.description = this.state.description;
      note.color = this.state.setcolor;
      note.reminder = this.state.reminders;
      note.archive = this.state.Archivenote;
      note.collabrators = this.state.collabrators;
      note.pin = this.state.pinunpin;
      let token = localStorage.getItem("Token");

    //   createNote(note, token)
    //     .then(Response => {
    //       console.log("note  created..");
    //       this.setState({ opensnackbar: true });
    //       this.props.refresh();
    //     })
    //     .catch(err => {
    //       console.log("note not created..");
    //     });
    // }
  // };
    }
  }

  render() {
    console.log(


    );
    console.log(this.props.set_Color);

    return (
      <div>
                <Card>
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      padding: "3%",
                      backgroundColor: this.state.setcolor,



                    }}
                  >
                    <TextField
                      id="standard-full-width"
                      style={{ margin: 8 }}
                      color="white"
                      placeholder="Title"
                      name="notetitle"
                      multiline
                      fullWidth
                      margin="normal"
                      InputProps={{
                        disableUnderline: true
                      }}
                      onChange={this.handlechangetitle}
                    />
                    <div style={{ paddingTop: "2%" }}>
                      {this.state.pinunpin !== true ? (
                        <Tooltip title="pin note ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            onClick={this.HandleUnpinChange}
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              fill="#000"
                              d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z"
                            />
                          </svg>
                        </Tooltip>
                      ) : (
                          <Tooltip title="unpin note ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              onClick={this.HandlePinChange}
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                fill="#000"
                                d="M17 4a2 2 0 0 0-2-2H9c-1.1 0-2 .9-2 2v7l-2 3v2h6v5l1 1 1-1v-5h6v-2l-2-3V4z"
                              />
                            </svg>
                          </Tooltip>
                        )}
                    </div>
                  </div>

                 
                    <TextField
                      id="standard-full-width"
                      style={{ margin: 8 }}
                      color="white"
                      multiline
                      fullWidth
                      margin="normal"
                      InputProps={{
                        disableUnderline: true
                      }}
                      color="white"
                      placeholder="Take a Note..."
                      name="takeanote"
                      onChange={this.handlechangedescription}
                    />
                   
                    </Card>
                    </div>
                 
                
            
                     
                     
                     
                     
                    
             
         

                    
     
    );
                    }
                  }
                  export default HooksRef;
