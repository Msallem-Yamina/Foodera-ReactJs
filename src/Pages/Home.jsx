import React from "react";
import Landing from "../components/Landing/Landing";
import Info from "../components/Info";
import About from "../components/About/About";
import Explore from "../components/explore";
import Testimonial from "../components/testimonial";
import Questions from "../components/questions";
import Paralax from "../components/Paralax";
import Contact from "../components/Contact";

class Home extends React.Component{
    render(){
        return(
        <div className="Home">
            <Landing />
            <Info />
            <About />
            <Explore />
            <Testimonial />
            <Questions />
            <Paralax />
            <Contact />
        </div>
        )
    }
}
export default Home;