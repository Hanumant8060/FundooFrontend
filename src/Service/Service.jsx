import React from 'react'
import axios from 'axios'
import { func } from 'prop-types';


export function login(LoginDto) {
    return axios.post("http://localhost:8080/home/login", LoginDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function registration(User) {
    return axios.post("http://localhost:8080/home/register", User, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });

}

export function note(Notes) {
    console.log("data", Notes)
    return axios.post("http://localhost:8080/note/create"
        , Notes, {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token')
        }
    });
}
export function resetPassword(ResetPasswordDto) {
    console.log("data", ResetPasswordDto)
    return axios.post("http://localhost:8080/home/resetpassword"
        , ResetPasswordDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
        // "Content-Type":"application/json;charset=utf-8",
        // "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVkQXQiOjE1ODM0OTQ5MTksInVzZXJJZCI6ImhhbnVtYW50ZGFsdmkwMjhAZ21haWwuY29tIn0.tusKrXzyc3YyYKrWf47dbWaYYTnInplvhYas5yBLZgI"

    });
}
export function passWordForgot(ForgotPasswordDto) {
    return axios.post("http://localhost:8080/home/forgotpassword", ForgotPasswordDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function getNotes() {
    return axios.get("http://localhost:8080/note/findAll"
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });
}
export function deletenote(Notes) {
    console.log(Notes, "data")
    return axios.post("http://localhost:8080/note/delete"
        , Notes, {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token')
        }
    });
}

export function addLabel(Label) {
    console.log("data", Label)
    return axios.post("http://localhost:8080/label/addlabel"
        , Label, {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token')
        }
    });
}
export function getLabels() {
    return axios.get("http://localhost:8080/label/findAll"
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });
}
export function add(noteid,labelid) {
    let val = sessionStorage.getItem('token')
    console.log( sessionStorage.getItem('token'))
    return axios.post("http://localhost:8080/label/addLabelToNote",{noteid,labelid},{
        params: {
        "noteId":noteid,
        "labelId":labelid
        },
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "decodeToken": val
        }
    })
}

export function trashNotes(Notes) {
    console.log(Notes, "notes")
    return axios.post("http://localhost:8080/note/trash", Notes
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });
}
export function archived(Notes) {
    return axios.post("http://localhost:8080/note/archived", Notes
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });
}

export function listOfTrash() {
    return axios.get("http://localhost:8080/note/listOfTrash"
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });
}
export function addReminder(time,note){
    return axios.post("http://localhost:8080/note/addReminder",{time,note},{
        headers:{
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token'),
        },params:{
            "noteId":note,
            "time":time
        }
    })
}

export function removeReminder(noteid){
    return axios.post("http://localhost:8080/note/removeReminder",noteid,{
        params:{
            noteId:noteid
        },
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });

}

export function listOfReminder() {
    return axios.get("http://localhost:8080/note/listOfReminder"
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });
}
export function listOfArchive() {
    return axios.get("http://localhost:8080/note/listOfArchive"
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });
}
export function unarchive(noteid){
    return axios.post("http://localhost:8080/note/unarchived",noteid,{
    params:{
        noteId:noteid
    },
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token')
        }
    });
}
export function untrash(noteid){
    return axios.post("http://localhost:8080/note/untrash",noteid,{
    params:{
        noteId:noteid
    },
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token')
        }
    });

}
export function deletefromtrash(noteid){
    return axios.post("http://localhost:8080/note/deleteTrash",noteid,{
        params:{
            noteId:noteid
        },
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });

}
export function collaborate(noteid ,email1){
    console.log("noteid==>",noteid,"email===>",email1);
    
    return axios.post("http://localhost:8080/note/collaborator",{noteid, email1},{
        params:{
            noteId:noteid,
            email:email1

        },
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });

}
 export function getCollaboratorList(){
    //  console.log("noteid",noteid);
     
    return axios.get("http://localhost:8080/note/getCollabList",{
        // params:{
        //     noteId:noteid

        // },
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });


 }
 export function pin(noteid){
    return axios.post("http://localhost:8080/note/pin",noteid,{
    params:{
        noteId:noteid
    },
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "token": sessionStorage.getItem('token')
        }
    });
}