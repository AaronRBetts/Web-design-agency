import React from 'react'
import './Header.scss'

class SectionHeader extends React.Component {
    render() {
        return (
            <div className="header">
                <h3>{this.props.title} </h3>
                <h2>{this.props.subTitle}</h2>
                {this.props.hr ? <hr /> : ""}
            </div>
        )
    }
}

export default SectionHeader
