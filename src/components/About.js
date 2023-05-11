import React from "react";
import chiefImage from "../images/restaurant chef B.jpg"
import TwoChiefs from "../images/Mario and Adrian.jpg"

const About = () => {
    return(
        <section className="about">
            <div className="about-left">
                <h1>Our Chiefs</h1>
                <h2>Mario and Adrian</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo libero, elementum nec nisl id, pellentesque maximus ligula. Pellentesque nec posuere ipsum, nec hendrerit mauris. Etiam nec massa ut eros aliquam laoreet. Cras sit amet vulputate libero, vitae suscipit turpis. Mauris eleifend at nisl in gravida. Proin egestas orci in porta congue. Vestibulum quis tortor nisi.</p>
            </div>
            <div>
                <img alt="chief" src={chiefImage} width={350} height={400} className="chief-cooking-image"/>
            </div>
            <div>
                <img alt="Adrian & Mario" src={TwoChiefs} width={250} height={400} className="adrian-mario-image"/>
            </div>
        </section>
    )
}

export default About;