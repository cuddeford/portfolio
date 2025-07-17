import React from 'react'
import { useState } from 'react'

import Page from '../Page'
import './PortfolioPage.css'

import ProjectTags from './ProjectTags/'
import ProjectItems from './ProjectItems/'
import ProjectViewer from './ProjectViewer/'

const PortfolioPage = props => {
    // const params = new URLSearchParams(props.location.search)
    // const project = params.get('p')
    const { projects } = props.state

    const projectSlug = props.history.location.hash.replace(/#/g, '')
    let selectedProject = projects.find(p => p.slug === projectSlug)

    const tagBtnClass = tag => {
        const classes = []
        if (props.state.selectedTags.includes(tag)) {
            classes.push('selected', 'active')
        }

        if (!props.state.possibleTags.includes(tag)) {
            classes.push('disabled')
        }

        if (props.previewingTags.length > 0) {
            if (props.previewingTags.includes(tag)) {
                classes.push('previewing')
            } else {
                classes.push('notPreviewing')
            }
        }

        return classes.join(' ')
    }

    const projectItemClass = _project => {
        if (props.state.selectedTags.length <= 0) {
            return ' matched'
        }

        for (const selectedTag of props.state.selectedTags) {
            if (!_project.tags.includes(selectedTag)) {
                return ''
            }
        }

        return ' matched'
    }

    const projectItemTagClass = tag => {
        for (const selectedTag of props.state.selectedTags) {
            if (tag === selectedTag) {
                return ' matched'
            }
        }

        return ''
    }

    const getTagColour = tag => {
        if (props.state.tags.length <= 0) {
            return
        }

        return props.state.tags.find(t => t.tag === tag).colour
    }

    const projectsByCategory = projects.reduce((acc, project) => {
        project.categories.forEach(category => {
            if (!acc[category]) {
                acc[category] = []
            }
            acc[category].push(project)
        })
        return acc
    }, {})

    const [selectedCategories, setSelectedCategories] = useState(['pinned'])
    const tags = selectedCategories.reduce((allTags, category) => {
        if (projectsByCategory[category]) {
            projectsByCategory[category].forEach(project => {
                project.tags.forEach(tag => {
                    if (!allTags.includes(tag)) {
                        allTags.push(tag)
                    }
                })
            })
        }
        return allTags
    }, [])

    const tagsToShow = props.state.tags/* .filter(t => tags.includes(t.tag)) */

    const content = (
        <div>
            <ProjectTags
                tagBtnClass={tagBtnClass}
                selectTagHandler={props.selectTagHandler}
                // tags={props.state.tags}
                tags={tagsToShow}
            />

            <ProjectItems
                admin={props.state.admin}
                projects={projects}
                selectedProject={selectedProject}
                projectsByCategory={projectsByCategory}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                projectSlug={projectSlug}
                projectItemClass={projectItemClass}
                projectItemTagClass={projectItemTagClass}
                setPreviewingTags={props.setPreviewingTags}
                resetPreviewingTags={props.resetPreviewingTags}
                getTagColour={getTagColour}
                togglePublic={props.togglePublic}
                moveProjectUp={props.moveProjectUp}
                moveProjectDown={props.moveProjectDown}
                deleteProject={props.deleteProject}
            />

            <ProjectViewer
                defaultProject={projects[0]}
                selectedProject={selectedProject}
                projectItemTagClass={projectItemTagClass}
                getTagColour={getTagColour}
                changingProjectHandler={props.changingProjectHandler}
            />
        </div>
    )

    return (
        <Page
            pageName={selectedProject ? selectedProject.name : 'Portfolio'}
            content={content}
            baseTitle={props.state.baseTitle}
        />
    )
}

export default PortfolioPage
