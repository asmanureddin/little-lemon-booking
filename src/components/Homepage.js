import React from "react";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

const Homepage = () => {

    return(
        <section className="homepage-section">
            <div>
                <Specials/>
                <Testimonials/>
                <About/>
            </div>
        </section>
    )
}

export default Homepage;