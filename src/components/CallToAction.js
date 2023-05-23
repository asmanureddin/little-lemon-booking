import React from "react";
import BookingPage from "./BookingPage";

const CallToAction = () => {
    return(
        <div className="call-to-action-section">
            <button onClick={BookingPage}><span>RESERVE A TABLE</span></button>
            <button><span>ORDER NOW</span></button>
        </div>
    )
}

export default CallToAction;