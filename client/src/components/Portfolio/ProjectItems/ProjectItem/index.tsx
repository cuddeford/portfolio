import React from 'react'
import { NavLink } from 'react-router-dom'

import ProjectItemTags from './ProjectItemTags/'
import ProjectItemAdminActions from './ProjectItemAdminActions/'

import './ProjectItem.css'

const projectItem = props => {
    const {
        project,
        projectItemClass,
        categoryIsSelected,
        projectIsSelected,
        setPreviewingTags,
        resetPreviewingTags,
        projectSlug,
        projectItemTagClass,
        getTagColour,
        togglePublic,
        moveProjectUp,
        moveProjectDown,
        deleteProject,
        admin,
    } = props

    let className = 'ProjectItem' + projectItemClass(project) + (!project.public ? ' private' : '')

    // show the selected project in all it's categories even if the category is not selected
    if (!categoryIsSelected && !projectIsSelected) {
        className = className.replace(/\ matched/g, '')
    }

    if (projectIsSelected) {
        className += ' matched'
    }

    return (
        <li
            className={className}
            onMouseOver={(e) => setPreviewingTags(e, project.tags)}
            onTouchStart={(e) => setPreviewingTags(e, project.tags)}
            onMouseOut={resetPreviewingTags}
            onTouchEnd={resetPreviewingTags}
        >
            <NavLink
                className="btn btn-block"
                activeClassName="active"
                isActive={() => projectSlug === project.slug}
                to={"/portfolio/#" + project.slug}>

                <span className="ProjectItemName">{project.name}</span>

                {admin
                    ? <ProjectItemAdminActions
                        shortId={project.shortId}
                        public={project.public}
                        togglePublic={e => togglePublic(e, project.shortId)}
                        moveProjectUp={e => moveProjectUp(e, project.shortId)}
                        moveProjectDown={e => moveProjectDown(e, project.shortId)}
                        deleteProject={e => deleteProject(e, project.shortId)}
                      />
                    : null}

                <ProjectItemTags
                    tags={project.tags}
                    projectItemTagClass={projectItemTagClass}
                    getTagColour={getTagColour}
                />
            </NavLink>
        </li>
    )
}

export default projectItem
