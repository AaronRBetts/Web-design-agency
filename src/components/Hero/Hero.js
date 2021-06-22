
import React from 'react'
import './Hero.scss'
import { Link } from 'react-scroll'
import $ from 'jquery'
import carouselA from '../../images/ecommerce.svg'
import carouselB from '../../images/portfolio.svg'
import carouselC from '../../images/business.svg'
import { FaGreaterThan, FaMailBulk } from 'react-icons/fa'
import HeroBg from '../../images/Hero_bg.svg'
// import SectionHeader from '../Header/Header'

class Hero extends React.Component {

    componentDidMount() {
        var carousel = $(".carousel"),
        currdeg  = 0;
    
        $("#next").on("click", { d: "n" }, rotate);
        $("#prev").on("click", { d: "p" }, rotate);

        function rotate(e){

        if(e.data.d==="n"){
            currdeg = currdeg - 120;
        }
        if(e.data.d==="p"){
            currdeg = currdeg + 120;
        }

        switch (currdeg % 360) {
            case 0:
                console.log("0")
                break;
            case 120 || -240:
                console.log("120")
                
                break;
            case 240 || -120:
                console.log("240")
                
                break;
        
            default:
                break;
        }

        carousel.css({
            "-webkit-transform": "rotateY("+currdeg+"deg)",
            "-moz-transform": "rotateY("+currdeg+"deg)",
            "-o-transform": "rotateY("+currdeg+"deg)",
            "transform": "rotateY("+currdeg+"deg)"
        });
        }

      }

      render() {
        return (
            <section id="hero">
                <img id="hero-bg" alt="Hero background" src={HeroBg}/>
                <div id="showcaseWrapper">
                    <div id="showcase">
                    {/* <button className="slide" id="prev"><FaLessThan className="card" /></button> */}
                    <div className="container">
                    <button className="slide" id="next"><FaGreaterThan className="card" /></button>
                    <div className="carousel">
                            <div id="carousel-ecom">
                                <img className="carousel-img" alt="carousel ecommerce" src={carouselA} />
                                <h2>E-commerce</h2>
                            </div>
                            <div id="carousel-portfolio">
                                <img className="carousel-img" alt="carousel portfolio" src={carouselB} />
                                <h2>Portfolio</h2>
                            </div>
                            <div id="carousel-brand">
                                <img className="carousel-img" alt="carousel business" src={carouselC} />
                                <h2>Brochure</h2>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <img id="hero-image" src={HeroImage}/> */}
                <div id="title-section" className="card">
                    <h1>We're your Web Wizards</h1>
                    <div className="ctaWrapper">
                        <Link className="secondarybtn" to="work"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}>
                                <FaMailBulk /> <p>Our work</p></Link>
                        <Link className="primarybtn" to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}>
                                <FaMailBulk /> <p>Contact</p></Link>
                    </div>
                </div>
            </section>
        )
      }
}

export default Hero
