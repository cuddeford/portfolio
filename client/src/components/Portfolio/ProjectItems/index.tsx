import React from 'react'

import ProjectItem from './ProjectItem/'
import ProjectItemsAddBtn from './ProjectItemsAddBtn/'

import './ProjectItems.css'

const CategorySection = ({ category, projects, children }) => (
    <div className="project-category">
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)} <span>{projects.length}</span></h2>
        {children}
    </div>
)

const projectItems = props => {
    return (
        <div className="col-xs-12 col-sm-4 col-lg-3 ProjectItemsColumn">
            <ul className="ProjectItems">
                {Object.entries(props.projectsByCategory).map(([category, projects]) => (
                    <CategorySection key={category} category={category} projects={projects}>
                        {projects.map(project => (
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
                    </CategorySection>
                ))}

                {props.admin
                    ? <ProjectItemsAddBtn />
                    : null}

            </ul>
        </div>
    )
}

export default projectItems
