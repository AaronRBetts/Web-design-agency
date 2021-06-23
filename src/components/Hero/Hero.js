
import React from 'react'
import './Hero.scss'
import { Link } from 'react-scroll'
import $ from 'jquery'
import carouselA from '../../images/ecommerce.svg'
import carouselB from '../../images/portfolio.svg'
import carouselC from '../../images/business.svg'
import { FaMailBulk, FaRegArrowAltCircleDown } from 'react-icons/fa'
import HeroBg from '../../images/Hero_bg.svg'
import Arrow from '../../images/Arrow.png'
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
            {/* <button className="slide">How can we help?<FaGreaterThan className="card" /></button> */}
                <img id="hero-bg" alt="Hero background" src={HeroBg}/>
                <div id="showcaseWrapper">
                    <div id="showcase">
                    {/* <button className="slide" id="prev"><FaLessThan className="card" /></button> */}
                    <div className="container">
                    <div className="carousel">
                            <div id="carousel-ecom">
                                <img className="carousel-img" alt="carousel ecommerce" src={carouselA} />
                                <h2>E-commerce stores</h2>
                            </div>
                            <div id="carousel-portfolio">
                                <img className="carousel-img" alt="carousel portfolio" src={carouselB} />
                                <h2>Creative portfolios</h2>
                            </div>
                            <div id="carousel-brand">
                                <img className="carousel-img" alt="carousel business" src={carouselC} />
                                <h2>Brochure displays</h2>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <img id="hero-image" src={HeroImage}/> */}
                <div id="title-section" className="card">
                    <h1>Need a website?</h1>
                    <div>
                        <h2>We design, develop, deploy and maintain...</h2>
                        <img src={Arrow} id="next" alt="arrow"/>
                    </div>
                    <div className="ctaWrapper">
                        <Link className="secondarybtn" to="work"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}>
                                <FaRegArrowAltCircleDown /> <p>Our work</p></Link>
                        <Link className="primarybtn" to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}>
                                <FaMailBulk /> <p>Work with us</p></Link>
                    </div>
                </div>
            </section>
        )
      }
}

export default Hero
