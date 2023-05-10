import React from "react";
import footerLogo from "../images/logo3png.png"

const Footer = () => {
    return (
        <div className="footer-sec">
            <img alt="logo" src={footerLogo} width={100}/>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>MENU</li>
                <li>ORDER ONLINE</li>
                <li>RESERVATIONS</li>
                <li>LOG IN</li>
            </ul>
            <ul>
                <li>Contact</li>
                <li>Phone Number</li>
                <li>Email us</li>
                <li>Location</li>
            </ul>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
        </div>
    )
}

export default Footer;