import React from 'react'
import './Header.scss'

class SectionHeader extends React.Component {
    render() {
        return (
            <div className="header">
                <h3>{this.props.title} </h3>
                <h4>{this.props.subTitle}</h4>
                {this.props.hr ? <hr /> : ""}
            </div>
        )
    }
}

export default SectionHeader
