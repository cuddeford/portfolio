import React from 'react'

import './ProjectItemTag.css'

const projectItemTag = props => {
    const { tag } = props
    
    return (
        <span
            className={"ProjectItemTag" + props.projectItemTagClass(tag)}
            style={{ color: props.getTagColour(tag), ...props.style }}
            key={tag} >
            ●
        </span>
    )
}

export default projectItemTag