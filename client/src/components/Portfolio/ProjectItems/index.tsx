import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faCloud, faHeart, faMicrochip, faPalette } from '@fortawesome/free-solid-svg-icons'

import ProjectItem from './ProjectItem/'
import ProjectItemsAddBtn from './ProjectItemsAddBtn/'

import './ProjectItems.css'

const CategorySection = props => {
    const { category, projects, children, selectedCategories, setSelectedCategories, anyProjectIsShowing } = props

    if (!projects.length) {
        return null
    }

    const iAmSelected = selectedCategories.includes(category)
    const toggleCategory = () => {
        if (iAmSelected) {
            setSelectedCategories(selectedCategories.filter(c => c !== category))
        } else {
            setSelectedCategories([...selectedCategories, category])
        }
    }

    const emoji: { [key: string]: any } = {
        'pinned': faHeart,
        'software': faCloud,
        'hardware': faMicrochip,
        'art': faPalette,
    }

    return (
        <div className={`project-category ${iAmSelected ? 'selected' : ''} ${anyProjectIsShowing ? ' project-showing' : ''}`}>
            <h4 className='project-category-title' onClick={toggleCategory} style={{ fontWeight: category === 'pinned' ? 'bold' : 'normal' }}>
                <FontAwesomeIcon icon={emoji[category]} fixedWidth />
                {' '}
                <span>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                <span>
                    {projects.length}
                    {' '}
                    <FontAwesomeIcon icon={iAmSelected ? faChevronUp : faChevronDown} size='xs' fixedWidth />
                </span>
            </h4>

            {children}

            <div className='second-border'></div>
        </div>
    )
}

const projectItems = props => {
    const { selectedCategories, setSelectedCategories } = props

    return (
        <div className="col-xs-12 col-sm-4 col-lg-3 ProjectItemsColumn">
            <ul className="ProjectItems">
                {Object.entries(props.projectsByCategory).map(([category, projects]) => {
                    const categoryIsSelected = selectedCategories.includes(category)
                    const anyProjectIsShowing = projects.find(project => {
                        return project.shortId === props.selectedProject.shortId
                    })

                    return (
                        <CategorySection
                            key={category}
                            category={category} projects={projects}
                            selectedCategories={selectedCategories}
                            setSelectedCategories={setSelectedCategories}
                            anyProjectIsShowing={anyProjectIsShowing}
                        >
                            {projects.map(project => {
                                const projectIsSelected = props.selectedProject.shortId === project.shortId

                                return <ProjectItem
                                    key={project.shortId}
                                    admin={props.admin}
                                    project={project}
                                    projectSlug={props.projectSlug}
                                    projectIsSelected={projectIsSelected}
                                    categoryIsSelected={categoryIsSelected}
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
                            })}
                        </CategorySection>
                    )
                })}

                {props.admin
                    ? <ProjectItemsAddBtn />
                    : null}

            </ul>
        </div>
    )
}

export default projectItems
