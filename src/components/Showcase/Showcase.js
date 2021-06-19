import React from 'react'
import './Showcase.scss'
import Project from './Project/Project'
import SectionHeader from '../Header/Header'
import AaronImg from '../../images/aaronrbetts_full.png'
import DiatarratImg from '../../images/Diatarrat_full.png'
import MalmaksImg from '../../images/malmaks_alt.png'
import MukamatImg from '../../images/mukamat_alt.png'
import { FaGit, FaReact, FaNodeJs } from 'react-icons/fa'
// import Projects from './Projects.json'

const Showcase = () => {

    const projects = [
        {
            title: "Diatarrat",
            variant: "L",
            desc: "An e-commerce store for a sticker manufacturer and retailer. Diatarrat specialise in custom stickers designed to fit all modern blood glucose measurement devices. Diatarrat are a large e-commerce store containing over 1000 individual products across many devices and design categories.",
            link: "Diatarrat.fi",
            img: DiatarratImg,
            tools: [
                {
                name: "React",
                icon: <FaReact />
                },
                {
                name: "Node js",
                icon: <FaNodeJs />
                },
                {
                name: "Git",
                icon: <FaGit />
                },
            ]
        },
        {
            title: "Malmak's",
            variant: "R",
            desc: "A water supples and service e-commerce site. This site makes use of a theme that represents professionalism, simplicity, quality, and the blue matches their industry!",
            link: "Diatarrat.fi",
            img: MalmaksImg,
            tools: [
                {
                name: "React",
                icon: <FaReact />
                },
                {
                name: "Node js",
                icon: <FaNodeJs />
                },
                {
                name: "Git",
                icon: <FaGit />
                },
            ]
        },
        {
            title: "Aaron Betts",
            variant: "L",
            desc: "Our lead developers personal developer portfolio. This portfolio has a subtle yet eye-catching design, allowing the reader to focus on the content. The main features include a responsive, user friendly navigation as well as modern project showcases",
            link: "Diatarrat.fi",
            img: AaronImg,
            tools: [
                {
                name: "React",
                icon: <FaReact />
                },
                {
                name: "Node js",
                icon: <FaNodeJs />
                },
                {
                name: "Git",
                icon: <FaGit />
                },
            ]
        },
        {
            title: "Mukamat Oy",
            variant: "R",
            desc: "An e-commerce store for an educational material illustrator and supplier. The focus of this site was to and online payment options, and give the site a fresh redesign while keeping page structure and the original colors.",
            link: "Diatarrat.fi",
            img: MukamatImg,
            tools: [
                {
                name: "React",
                icon: <FaReact />
                },
                {
                name: "Node js",
                icon: <FaNodeJs />
                },
                {
                name: "Git",
                icon: <FaGit />
                },
            ]
        },
    ]

    return (
        <section id="work">
            <SectionHeader hr title={"Our work"} subTitle={"Take a look at some of our past projects"}/>
            {projects.map((project, index) => 
                <Project key={index} variant={project.variant} projectName={project.title} projectLink={project.link} projectDesc={project.desc} tools={project.tools} projectImg={project.img} />
            )}
        </section>
    )
}

export default Showcase
