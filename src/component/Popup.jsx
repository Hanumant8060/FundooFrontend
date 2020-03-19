import React from "react";
import './popup.css';
import GetAllLabels from "./GetAllLabels";
import { Checkbox } from "@material-ui/core";

const Popup = (props) => {
    console.log('--->', props.handleClose);

    const closePopUp = () => {
        console.log('in close function');

        props.handleClose()
    }

    return (
        <div className="popup-box">
            <div className="box">
                <button type='submit' className="close-icon" onClick={closePopUp}>x</button>
                {props.content}
                <GetAllLabels/>
            </div>
            
               
        </div>
    );
};

export default Popup;