import React from "react";
import { useSpringCarousel } from 'react-spring-carousel-js'
import './Work.scss'
import SectionHeader from "../Header/Header";
import AaronImg from '../../images/aaronrbetts_full.png'
import DiatarratImg from '../../images/Diatarrat_full.png'
import MalmaksImg from '../../images/malmaks_alt.png'
import MukamatImg from '../../images/mukamat_alt.png'
import { FaFigma, FaWordpressSimple, FaBootstrap, FaSass, FaShopify } from 'react-icons/fa'
import { SiJquery } from 'react-icons/si'

function Work() {

  const {
    carouselFragment,
    thumbsFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem
  } = useSpringCarousel({
    withThumbs: true,
    withLoop: true,
    items: [
        {
            title: "Diatarrat",
            desc: "An e-commerce store for a sticker manufacturer and retailer. Diatarrat specialise in custom stickers designed to fit all modern blood glucose measurement devices. Diatarrat are a large e-commerce store containing over 1000 individual products across many devices and design categories.",
            link: "Diatarrat.fi",
            img: DiatarratImg,
            tools: [
                {
                name: "Shopify",
                icon: <FaShopify />,
                siteLink: "https://shopify.com"
                },
                {
                name: "Figma",
                icon: <FaFigma />,
                siteLink: "https://figma.com/"
                },
            ],
            id: "CarouselItem-1",
            renderItem: (
                <div className="CarouselSlide" background="#2c3e50">
                  <div className="MalmaksDisplay">
                      <div className="ProjectHeader">
                          <h2>Diatarrat</h2>
                          <a className="ProjectLink"href={`https://Diatarrat.fi`}>Diatarrat.fi</a>
                      </div>
                      <div className="ProjectDisplay">
                          <img className="ProjectImg" alt="Malmaks Water Shop" src={DiatarratImg} />
                      </div>
                      <div className="ProjectInfo">
                          <div className="InfoCard">
                              <p className="ProjectDesc">An e-commerce store for a sticker manufacturer and retailer. Diatarrat specialise in custom stickers designed to fit all modern blood glucose measurement devices. Diatarrat are a large e-commerce store containing over 1000 individual products across many devices and design categories. <hr /></p>
                              <h4>Made using</h4>
                              <div className="ToolsInfo">
                                  <div className="tool">
                                      <h5>Shopify</h5>
                                      <a href="https://shopify.com/"><FaShopify /></a>
                                  </div>
                                  <div className="tool">
                                      <h5>Figma</h5>
                                      <a href="https://figma.com/"><FaFigma /></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            ),
            renderThumb: (
              <button className="CarouselSlide"
                onClick={() => slideToItem("CarouselItem-1")}
                primaryColor="#2c3e50"
                background="#34495e"
              >
                Diatarrat
              </button>
            ),
        },
        {
            title: "Malmaks Water Shop",
            desc: "A water supples and service e-commerce site. This site makes use of a theme that represents professionalism, simplicity, quality, and the blue matches their industry!",
            link: "Malmakswatershop.co.nz",
            img: MalmaksImg,
            tools: [
                {
                name: "Shopify",
                icon: <FaShopify />,
                siteLink: "https://shopify.com/"
                },
                {
                name: "Figma",
                icon: <FaFigma />,
                siteLink: "https://figma.com/"
                },
            ],
            id: "CarouselItem-2",
            renderItem: (
              <div className="CarouselSlide" background="#2c3e50">
                <div className="MalmaksDisplay">
                    <div className="ProjectHeader">
                        <h2>Malmaks Water Shop</h2>
                        <a className="ProjectLink"href={`https://Malmakswatershop.co.nz`}>Malmakswatershop.co.nz</a>
                    </div>
                    <div className="ProjectDisplay">
                        <img className="ProjectImg" alt="Malmaks Water Shop" src={MalmaksImg} />
                    </div>
                    <div className="ProjectInfo">
                        <div className="InfoCard">
                            <p className="ProjectDesc">A water supples and service e-commerce site. This site makes use of a theme that represents professionalism, simplicity, quality, and the blue matches their industry! <hr /></p>
                            <h4>Made using</h4>
                            <div className="ToolsInfo">
                                <div className="tool">
                                    <h5>Shopify</h5>
                                    <a href="https://shopify.com/"><FaShopify /></a>
                                </div>
                                <div className="tool">
                                    <h5>Figma</h5>
                                    <a href="https://figma.com/"><FaFigma /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            ),
            renderThumb: (
              <button className="CarouselSlide"
                onClick={() => slideToItem("CarouselItem-2")}
              >
                Malmaks
              </button>
            ),
        },
        {
            title: "Aaron Betts",
            desc: "Our lead developers personal developer portfolio. This portfolio has a subtle yet eye-catching design, allowing the reader to focus on the content. The main features include a responsive, user friendly navigation as well as modern project showcases",
            link: "AaronRBetts.github.io",
            img: AaronImg,
            tools: [
                {
                name: "Bootstrap",
                icon: <FaBootstrap />,
                siteLink: "https://getbootstrap.com/"
                },
                {
                name: "Sass",
                icon: <FaSass />,
                siteLink: "https://sass-lang.com/"
                },
                {
                name: "jQuery",
                icon: <SiJquery />,
                siteLink: "https://jquery.com/"
                },
            ],
            id: "CarouselItem-3",
            renderItem: (
                <div className="CarouselSlide" background="#2c3e50">
                  <div className="MalmaksDisplay">
                      <div className="ProjectHeader">
                          <h2>Aaron Betts</h2>
                          <a className="ProjectLink"href={`https://AaronRBetts.github.io`}>AaronRBetts.github.io</a>
                      </div>
                      <div className="ProjectDisplay">
                          <img className="ProjectImg" alt="AaronRBetts.github.io" src={AaronImg} />
                      </div>
                      <div className="ProjectInfo">
                          <div className="InfoCard">
                              <p className="ProjectDesc">Our lead developers personal developer portfolio. This portfolio has a subtle yet eye-catching design, allowing the reader to focus on the content. The main features include a responsive, user friendly navigation as well as modern project showcases <hr /></p>
                              <h4>Made using</h4>
                              <div className="ToolsInfo">
                                  <div className="tool">
                                      <h5>Sass</h5>
                                      <a href="https://sass-lang.com/"><FaSass /></a>
                                  </div>
                                  <div className="tool">
                                      <h5>Bootstrap</h5>
                                      <a href="https://getbootstrap.com/"><FaBootstrap /></a>
                                  </div>
                                  <div className="tool">
                                      <h5>jQuery</h5>
                                      <a href="https://jquery.com/"><SiJquery /></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            ),
            renderThumb: (
              <button className="CarouselSlide"
                onClick={() => slideToItem("CarouselItem-3")}
                primaryColor="#2c3e50"
                background="#34495e"
              >
                Aaron Betts
              </button>
            ),
        },
        {
            title: "Mukamat Oy",
            desc: "An e-commerce store for an educational material illustrator and supplier. The focus of this site was to and online payment options, and give the site a fresh redesign while keeping page structure and the original colors.",
            link: "Mukamat.fi",
            img: MukamatImg,
            tools: [
                {
                name: "Wordpress",
                icon: <FaWordpressSimple />,
                siteLink: "https://wordpress.com/"
                },
                {
                name: "Figma",
                icon: <FaFigma />,
                siteLink: "https://figma.com/"
                },
            ],
            id: "CarouselItem-4",
            renderItem: (
                <div className="CarouselSlide" background="#2c3e50">
                  <div className="MalmaksDisplay">
                      <div className="ProjectHeader">
                          <h2>Mukamat Oy</h2>
                          <a className="ProjectLink"href={`https://Mukamat.fi`}>Mukamat.fi</a>
                      </div>
                      <div className="ProjectDisplay">
                          <img className="ProjectImg" alt="Malmaks Water Shop" src={MukamatImg} />
                      </div>
                      <div className="ProjectInfo">
                          <div className="InfoCard">
                              <p className="ProjectDesc">An e-commerce store for an educational material illustrator and supplier. The focus of this site was to and online payment options, and give the site a fresh redesign while keeping page structure and the original colors. <hr /></p>
                              <h4>Made using</h4>
                              <div className="ToolsInfo">
                                  <div className="tool">
                                      <h5>Shopify</h5>
                                      <a href="https://shopify.com/"><FaShopify /></a>
                                  </div>
                                  <div className="tool">
                                      <h5>Figma</h5>
                                      <a href="https://figma.com/"><FaFigma /></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            ),
            renderThumb: (
              <button className="CarouselSlide"
                onClick={() => slideToItem("CarouselItem-4")}
                primaryColor="#2c3e50"
                background="#34495e"
              >
                Mukamat Oy
              </button>
            ),
        },
    ],
  });

  return (
      <section className="Work" id="work">
      <SectionHeader title={"Our work"} subTitle={"Check out some of our featured projects"} />
        <div className="WorkContainer">
            <div className="CarouselWrapper">
            <div className="sliderBtn" id="prev"
                type="prev"
                onClick={slideToPrevItem}
            />
            {carouselFragment}
            <div
                type="next"
                onClick={slideToNextItem}
            />
            </div>
            <div className="thumbNails">{thumbsFragment}</div>
        </div>

      </section>
  );
}

export default Work