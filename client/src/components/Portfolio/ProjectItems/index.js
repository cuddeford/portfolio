import React from 'react'

import ProjectItem from './ProjectItem/'
import ProjectItemsAddBtn from './ProjectItemsAddBtn/'

import './ProjectItems.css'

const projectItems = props => {
    return (
        <div className="col-xs-12 col-sm-4 col-lg-3 ProjectItemsColumn">
            <ul className="ProjectItems">
                {props.projects.map(project => (
                    <ProjectItem
                        key={project.shortId}
                        admin={props.admin}
                        project={project}
                        projectSlug={props.projectSlug}
                        projectItemClass={props.projectItemClass}
                        projectItemTagClass={props.projectItemTagClass}
                        setPreviewingTags={props.setPreviewingTags}
                        resetPreviewingTags={props.resetPreviewingTags}
                        getTagColour={props.getTagColour}
                        togglePublic={props.togglePublic}
                        moveProjectUp={props.moveProjectUp}
                        moveProjectDown={props.moveProjectDown}
                        deleteProject={props.deleteProject}
                    />
                ))}
                
                {props.admin
                    ? <ProjectItemsAddBtn />
                    : null}
                
            </ul>
        </div>
    )
}

export default projectItems