
import React from 'react'
import './Hero.scss'
import { Link } from 'react-scroll'
import $ from 'jquery'
import carouselA from '../../images/ecommerce.svg'
import carouselB from '../../images/portfolio.svg'
import carouselC from '../../images/business.svg'
import { FaGreaterThan, FaLessThan, FaMailBulk } from 'react-icons/fa'
import HeroBg from '../../images/Hero_bg.svg'
import SectionHeader from '../Header/Header'

class Hero extends React.Component {

    componentDidMount() {
        var carousel = $(".carousel"),
        currdeg  = 0;
    
        $("#next").on("click", { d: "n" }, rotate);
        $("#prev").on("click", { d: "p" }, rotate);

        function rotate(e){
        if(e.data.d=="n"){
            currdeg = currdeg - 120;
        }
        if(e.data.d=="p"){
            currdeg = currdeg + 120;
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
                <img id="hero-bg" src={HeroBg}/>
                <div id="showcaseWrapper">
                    <h2 className="heading">We're your</h2>
                    <div id="showcase">
                    <button className="slide" id="prev"><FaLessThan className="card" /></button>
                    <div className="container">
                        <div className="carousel">
                            <div id="carousel-ecom">
                                <img className="carousel-img" src={carouselA} />
                                <h2>E-commerce</h2>
                            </div>
                            <div id="carousel-portfolio">
                                <img className="carousel-img" src={carouselB} />
                                <h2>Portfolio</h2>
                            </div>
                            <div id="carousel-brand">
                                <img className="carousel-img" src={carouselC} />
                                <h2>Business</h2>
                            </div>
                        </div>
                    </div>
                    <button className="slide" id="next"><FaGreaterThan className="card" /></button>
                    </div>
                    <h2 className="heading">Web wizards</h2>
                </div>
                {/* <img id="hero-image" src={HeroImage}/> */}
                <div id="title-section" className="card">
                    <h1>We made this</h1>
                    <h3>We can make you one too</h3>
                    <Link to="contact"
                                smooth={true}
                                duration={500}
                                offset={-80}>
                                    <FaMailBulk /> <p>Contact</p></Link>
                </div>
            </section>
        )
      }
}

export default Hero
