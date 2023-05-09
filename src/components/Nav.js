import React from "react";

const Nav = () => {
    return (
        <div>
            <h4>This in the Nav Semantic Section</h4>
            <img alt="logo" src="/src/images/logo.png"/>
            <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/menu">MENU</a></li>
                <li><a href="/order">ORDER</a></li>
                <li><a href="/reservations">RESERVATIONS</a></li>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/login">LOG IN</a></li>
            </ul>
        </div>
    )
}

export default Nav;