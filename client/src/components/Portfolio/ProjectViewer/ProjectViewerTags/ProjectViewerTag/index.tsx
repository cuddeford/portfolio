import React from 'react'

import './ProjectViewerTag.css'

const projectViewerTag = props => {
    const { tag } = props
    
    return (
        <span
            className={"ProjectViewerTag" + props.projectItemTagClass(tag)}
            key={tag}
            style={{ color: props.getTagColour(tag) }}
        >
            {tag}
        </span>
    )
}

export default projectViewerTag