import React from 'react'
import './Navbar.scss'
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa'
import Logo from '../../images/WGLogo.svg'

const Navbar = ({ toggle }) => {
    return (
        <div id="home" className="nav-container">
            <h1 id="nav-logo">
                <Link className="spy" to="hero"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}>
                                <img src={Logo} alt="Logo"/></Link>
                </h1>
            <ul id="nav-links">
                <Link className="spy" to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}>
                                About us</Link>
                <Link className="spy" to="work"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}>
                                Our work</Link>
                <Link className="spy" to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}>
                                Contact</Link>
            </ul>
            <div id="menu-btn" onClick={toggle}>
                <FaBars />
            </div>
        </div>
    )
}

export default Navbar
