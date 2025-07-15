import React, { Component } from 'react'

import './ProjectTag.css'

class ProjectTag extends Component {
    state = {
        colour: this.props.tag.colour,
        hovering: false,
        selected: false,
        classes: this.props.tagBtnClass(this.props.tag.tag)
    }
    
    componentWillUpdate() {
        const selected = this.classes().includes('selected')
        if (this.state.selected !== selected)
            this.setState({ selected })
    }
    
    classes = () => this.props.tagBtnClass(this.props.tag.tag)
    
    setHovering = () => this.setState({ hovering: true })
    unsetHovering = () => this.setState({ hovering: false })
    
    style = () => {
        const hue = this.state.colour.replace('hsla(', '').split(', ')[0]
        const isLightColour = hue > 45 && hue < 170
        
        if (this.state.selected) {
            return {
                color: isLightColour ? 'black' : 'white',
                borderColor: this.state.colour,
                backgroundColor: this.state.colour
            }
        }
        
        return this.state.hovering
            ? {
                color: 'black',
                borderColor: 'white',
                backgroundColor: 'white'
            }
            : {
                color: this.state.colour,
                borderColor: this.state.colour
            }
    }
    
    render() {
        const { tag } = this.props.tag
        
        return (
            <li
                className={"ProjectTag btn btn-default " + this.classes()}
                onClick={e => this.props.selectTagHandler(e, tag)}
                onMouseEnter={this.setHovering}
                onMouseLeave={this.unsetHovering}
                style={this.style()}>
                {tag}
            </li>
        )
    }
}

export default ProjectTag