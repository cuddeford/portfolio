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

    // we need to create seperate chunks for each category found in the projects then render a button to toggle it
    // and a <ProjectItems /> block underneath each.
    // projects have a categories array with possible values "software", "hardware", "art"

    const projectsByCategory = projects.reduce((acc, project) => {
        project.categories.forEach(category => {
            if (!acc[category]) {
                acc[category] = []
            }
            acc[category].push(project)
        })
        return acc
    }, {})

    console.log(projectsByCategory)

    const [selectedCategories, setSelectedCategories] = useState(['software'])

    const content = (
        <div>
            <ProjectTags
                tagBtnClass={tagBtnClass}
                selectTagHandler={props.selectTagHandler}
                tags={props.state.tags}
            />

            <ProjectItems
                admin={props.state.admin}
                projects={projects}
                projectsByCategory={projectsByCategory}
                // selectedCategories={selectedCategories}
                // setSelectedCategories={setSelectedCategories}
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
