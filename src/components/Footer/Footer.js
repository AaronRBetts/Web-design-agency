import React from 'react'
import './Footer.scss'
import { FaGithub, FaFigma, FaCodepen, FaPhone, FaMailBulk, FaMapMarked  } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer card">
            <h1>Web Geeks</h1>
            <div className="footer-links">
                <a href="http://github.com/AaronRBetts" id="github">
                    <p><FaGithub /> Github</p>
                </a>
                <a href="http://Codepen.com" id="twitter">
                    <p><FaCodepen /> Codepen</p>
                </a>
                <a href="http://Figma.com" id="figma">
                    <p><FaFigma /> Figma</p>
                </a>
            </div>
            <div className="contact-details">
                <p id="phone">
                    <FaPhone /> +358 123 4567
                </p>
                <p id="email">
                    <FaMailBulk /> aaronrbetts@gmail.com
                </p>
                <p id="location">
                    <FaMapMarked /> Nokia Finland
                </p>
            </div>
        </div>
    )
}

export default Footer
