import React from 'react'
import './About.scss'
import Aboutimg from '../../images/Aboutbg.svg'
import SectionHeader from '../Header/Header'

const About = () => {
    return (
        <section id="about">
                <SectionHeader title={"About us"} subTitle={"Who we are and what we do"} />
            <div id="about-text"><p>
                    Web Geeks are a team of <strong>passionate web designers and developers. </strong><br /><br />
                </p>
                <p>
                    We design, develop & deploy unique web experiences that show your audience what your brand has to offer.
                </p>
            </div>
            <img id="about-img" alt="about" src={Aboutimg}/>
        </section>
    )
}

export default About
