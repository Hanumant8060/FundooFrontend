import React from "react";
import './popup.css';


const Popup = (props) => {

    const closePopUp = () => {
        props.handleClose()
    }

    return (
        <div>
            <div className="popup-box">
                <div className="box">
                    <button type='submit' className="close-icon" onClick={closePopUp}>x</button>
                    {props.content}
                </div>
            </div>
        </div >
    );
};

export default Popup;