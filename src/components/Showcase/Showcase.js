import React from 'react'
import $ from 'jquery'
import './Showcase.scss'
import Project from './Project/Project'
import SectionHeader from '../Header/Header'
import AaronImg from '../../images/aaronrbetts_full.png'
import DiatarratImg from '../../images/Diatarrat_full.png'
import MalmaksImg from '../../images/malmaks_alt.png'
import MukamatImg from '../../images/mukamat_alt.png'
import { FaFigma, FaWordpressSimple, FaBootstrap, FaSass, FaShopify, FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { SiJquery } from 'react-icons/si'
// import Projects from './Projects.json'

class Showcase extends React.Component {


    componentDidMount() {
        var pos = 0;
        //number of slides
        var totalSlides = $('#slider-wrap ul li').length;
        console.log($('#slider-wrap ul li').length)
        //get the slide width
        var sliderWidth = $('#slider-wrap').width();

	
	
	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
    //next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});
	
	
	
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	var autoSlider = setInterval(slideRight, 5000);
	
	//for each slide 
	$.each($('#slider-wrap ul li'), function() { 
	   
	   //create a pagination
	   var li = document.createElement('li');
	   $('#pagination-wrap ul').append(li);	   
	});
	
	//counter
	countSlides();
	
	//pagination
	pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 5000); }
	);
	


    /***********
     SLIDE LEFT
    ************/
    function slideLeft(){
        pos--;
        if(pos===-1){ pos = totalSlides-1; }
        $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
        
        //*> optional
        countSlides();
        pagination();
    }


    /************
     SLIDE RIGHT
    *************/
    function slideRight(){
        pos++;
        if(pos===totalSlides){ pos = 0; }
        $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
        
        //*> optional 
        countSlides();
        pagination();
    }



        
    /************************
     //*> OPTIONAL SETTINGS
    ************************/
    function countSlides(){
        $('#counter').html(pos+1 + ' / ' + totalSlides);
    }

    function pagination(){
        $('#pagination-wrap ul li').removeClass('active');
        $('#pagination-wrap ul li:eq('+pos+')').addClass('active');
    }
}
render() {

    const projects = [
        {
            title: "Diatarrat",
            variant: "L",
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
            ]
        },
        {
            title: "Malmaks Water Shop",
            variant: "R",
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
            ]
        },
        {
            title: "Aaron Betts",
            variant: "L",
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
            ]
        },
        {
            title: "Mukamat Oy",
            variant: "R",
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
            ]
        },
    ]

    return (
        <section id="work">

        <SectionHeader hr title={"Our work"} subTitle={"Take a look at some of our past projects"}/>
            <div id="wrapper">
                <div id="slider-wrap">
                    <ul id="slider">
                        {projects.map((project, index) => 
                            <Project key={index} variant={project.variant} projectName={project.title} projectLink={project.link} projectDesc={project.desc} tools={project.tools} projectImg={project.img} />
                        )}
                    
                    
                    </ul>
                </div>
        
                <div class="btns" id="next"><FaGreaterThan /></div>
                <div class="btns" id="previous"><FaLessThan /></div>
                <div id="counter"></div>
                
                <div id="pagination-wrap">
                    <ul>
                    </ul>
                </div>
                    
            </div>
        </section>
    )

}
}

export default Showcase
