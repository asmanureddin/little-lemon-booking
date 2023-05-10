import React from "react";
import heroImage from "../images/restauranfood.jpg"

const Header = () => {
    return (
        <div className="header-div">
            <div className="back-rect"></div>
            <div className="hero-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ultricies nunc, quis porta lectus. Phasellus maximus nec urna ac egestas. Sed aliquet felis lectus, elementum sodales nibh dignissim vel.</p>
            </div>
            <div className="hero-right">
                <img alt="Hero Restaurant Food"
                src={heroImage}
                className="hero-image"
                width={400} height={400}/>
            </div>
        </div>
    )
}

export default Header;