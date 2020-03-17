import React from "react";
import './popup.css';

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
            </div>
        </div>
    );
};

export default Popup;