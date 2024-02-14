import React from "react"
import NavigationBar from "./Components/HomePage/NavigationBar"
import About from "./Components/HomePage/About"
import Banner from "./Components/HomePage/Banner";
import Services from "./Components/HomePage/Services";
import Footer from "./Components/HomePage/Footer";
import Testimonials from "./Components/HomePage/Testimonials";

function Home() {
    return(
        <div>
            <NavigationBar />
            <Banner />
            <About />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Home;