import React from 'react'
import './Project.scss'

class Project extends React.Component {

    render() {
        
        return (
            <div className="project">
                {this.props.variant === "L" ? 
                <div className="project-display">
                    {/* <img className="project-bg" src={Projectbg}></img> */}
                    <img className="project-img" src={this.props.projectImg} />
                </div> : ""}
                <div className="project-info">
                    <div className="info-card card">
                        <h2>{this.props.projectName}</h2>
                        <a className="project-link"href="">{this.props.projectLink}</a>
                        <p className="project-desc">{this.props.projectDesc} <hr /></p>
                        <h3>Made using</h3>
                        <div className="tools-info">

                            {this.props.tools.map((tool, index) => 
                                <div key={tool,index} className="tool">
                                    <h4>{tool.name}</h4>
                                    <a href="https://reactjs.org">{tool.icon}</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {this.props.variant === "R" ? 
                <div className="project-display">
                    {/* <img className="project-bg" src={Projectbg}></img> */}
                    <img className="project-img" src={this.props.projectImg} />
                </div> : ""}
            </div>
        )
    }
}

export default Project
