import React from "react";
import HeroImage from "/src/images/restauranfood.jpg"

const Header = () => {
    return (
        <div className="header-div">
            <div>
                <h1>HERO TITLE</h1>
                <h2>HERO subtitle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ultricies nunc, quis porta lectus. Phasellus maximus nec urna ac egestas. Sed aliquet felis lectus, elementum sodales nibh dignissim vel. Nulla lobortis dui ut mi interdum consectetur eget interdum quam. Sed vehicula, dui a maximus egestas, lorem elit consectetur felis, vel molestie justo elit in risus.</p>
            </div>
            <div>
                <img alt="Hero Restaurant Food" src={HeroImage}/>
            </div>
        </div>
    )
}

export default Header;