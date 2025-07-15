import React from 'react'

import ProjectViewerTag from './ProjectViewerTag'

const projectViewerTags = props =>
    props.tags.map(tag =>
        <ProjectViewerTag
            key={tag}
            tag={tag}
            projectItemTagClass={props.projectItemTagClass}
            getTagColour={props.getTagColour}
        />)

export default projectViewerTags