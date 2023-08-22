import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
    
    return(
        <div className="call-to-action-section">
            <Link to='/reservations'>
                <button>
                    <span>RESERVE A TABLE</span>
                </button>
            </Link>
            <Link to='/order'>
            <button>
                <span>ORDER NOW</span>
            </button>
            </Link>
            
        </div>
    )
}

export default CallToAction;