import React from 'react'
import { NavLink } from 'react-router-dom'

import ProjectItemTags from './ProjectItemTags/'
import ProjectItemAdminActions from './ProjectItemAdminActions/'

import './ProjectItem.css'

const projectItem = props => {
    const { project } = props
    
    return (
        <li
            className={'ProjectItem' + props.projectItemClass(project) + (!project.public ? ' private' : '')}
            onMouseOver={(e) => props.setPreviewingTags(e, project.tags)}
            onTouchStart={(e) => props.setPreviewingTags(e, project.tags)}
            onMouseOut={props.resetPreviewingTags}
            onTouchEnd={props.resetPreviewingTags}
        >
            <NavLink
                className="btn btn-block"
                activeClassName="active"
                isActive={() => props.projectSlug === project.slug}
                to={"/portfolio/#" + project.slug}>
                
                <span className="ProjectItemName">{project.name}</span>
                
                {/* {props.admin */}
                    <ProjectItemAdminActions
                        shortId={project.shortId}
                        public={project.public}
                        togglePublic={e => props.togglePublic(e, project.shortId)}
                        moveProjectUp={e => props.moveProjectUp(e, project.shortId)}
                        moveProjectDown={e => props.moveProjectDown(e, project.shortId)}
                        deleteProject={e => props.deleteProject(e, project.shortId)}
                    />
                    {/*  : null */}
                
                <ProjectItemTags
                    tags={project.tags}
                    projectItemTagClass={props.projectItemTagClass}
                    getTagColour={props.getTagColour}
                />
            </NavLink>
        </li>
    )
}

export default projectItem