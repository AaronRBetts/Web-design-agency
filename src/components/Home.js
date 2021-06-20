import React, {useState} from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Sidebar from './Sidebar/Sidebar'
import About from './About/About'
import Showcase from './Showcase/Showcase'
// import Process from './Process/Process'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Hero />
            <About />
            <Showcase />
            {/* <Process /> */}
            <Contact />
            <Footer />
        </>
    )
}

export default Home
