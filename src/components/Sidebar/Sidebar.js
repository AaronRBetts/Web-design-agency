import React from 'react'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import './Sidebar.scss'

const Sidebar = ({ isOpen, toggle }) => {
    

        return (
            <div onClick={toggle}
            className={isOpen ? "Sidebar open" : "Sidebar"}>
                <div className="icon" onClick={toggle}>
                    <FaTimes />
                </div>
                <div className="sidebarWrapper">
                    <ul className="sidebarContainer">
                        <Link to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80} onClick={toggle}>Services</Link>
                        <Link to="work"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80} onClick={toggle}>Our work</Link>
                        <Link to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80} onClick={toggle}>About</Link>
                        <Link to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80} onClick={toggle}>Contact us</Link>
                    </ul>
                </div>
            </div>
        )
}

export default Sidebar