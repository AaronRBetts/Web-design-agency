import React from 'react'
import './Project.scss'
import $ from 'jquery'

class Project extends React.Component {



    render() {

        
        
        return (

          	 <li data-color="#1abc9c" className="project">
                <div>
                    <div className="project-header">
                        <h2>{this.props.projectName}</h2>
                        <a className="project-link"href={`https://${this.props.projectLink}`}>{this.props.projectLink}</a>
                    </div>
                    <div className="project-display">
                        {/* <img className="project-bg" src={Projectbg}></img> */}
                        <img className="project-img" src={this.props.projectImg} />
                    </div>
                    <div className="project-info">
                        <div className="info-card card">
                            <p className="project-desc">{this.props.projectDesc} <hr /></p>
                            <h3>Made using</h3>
                            <div className="tools-info">

                                {this.props.tools.map((tool, index) => 
                                    <div key={tool,index} className="tool">
                                        <h4>{tool.name}</h4>
                                        <a href={tool.siteLink}>{tool.icon}</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
             </li>
        )
    }
}

export default Project
