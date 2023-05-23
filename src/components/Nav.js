import React from "react";
import logo from "../images/logo.png"

const Nav = () => {
    return (
        <div className="nav-div">
            <div className="logo-div">
                <img alt="logo" className="logo-nav" src={logo} width={200} />
            </div>
            <div className="links-div">
                <ul className="list">
                    <li><a href="/home">HOME</a></li>
                    <li><a href="/menu">MENU</a></li>
                    <li><a href="/order">ORDER</a></li>
                    <li><a href="/reservations">RESERVATIONS</a></li>
                    <li><a href="/about">ABOUT US</a></li>
                    <li><a href="/login">LOG IN</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;