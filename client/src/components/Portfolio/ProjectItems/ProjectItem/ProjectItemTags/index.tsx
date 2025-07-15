import React from 'react'

import ProjectItemTag from './ProjectItemTag/'

import './ProjectItemTags.css'

const projectItemTags = props => {
    return (
        <span className="ProjectItemTags">
            <div>
                {props.tags.map((tag, index) => (
                    <ProjectItemTag
                        key={tag}
                        tag={tag}
                        // style={props.tags.length === 1 || index === 4 ? {
                        //     position: 'absolute',
                        //     top: 0,
                        //     right: 10,
                        // } : {
                        //     position: 'absolute',
                        //     top: index % 2 === 0 ? 11 : -11,
                        //     right: index % 3 === 0 ? 21 : -1,
                        // }}
                        projectItemTagClass={props.projectItemTagClass}
                        getTagColour={props.getTagColour}
                    />
                ))}
            </div>
        </span>
    )
}
    
export default projectItemTags