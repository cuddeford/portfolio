import React from 'react'
import { Redirect } from 'react-router-dom'
import {
    TransitionGroup,
    CSSTransition
} from 'react-transition-group'

import Markdown from 'react-markdown'

import ProjectViewerTags from './ProjectViewerTags/'

import './ProjectViewer.css'

const projectViewer = props => {
    const project = props.selectedProject

    if (!project)
        return <Redirect to={"/portfolio/#" + props.defaultProject.slug} />

    return (
        <div className="col-xs-12 col-sm-8 col-lg-9 ProjectViewerColumn">
            <TransitionGroup>
                <CSSTransition
                    key={project.shortId}
                    timeout={5000}
                    classNames='changeProject'
                    // onExit={() => props.changingProjectHandler(true) || window.scroll({
                    //     behavior: 'smooth',
                    //     left: 0,
                    //     top: document.querySelector('.ProjectViewer').getBoundingClientRect().top + window.scrollY - 35
                    // })}
                    onEntered={() => props.changingProjectHandler(false)}
                >
                    <div className="ProjectViewer">
                        <div>
                            <h1 className="ProjectName">{project.name}</h1>
                            <div>
                                <ProjectViewerTags
                                    tags={project.tags}
                                    projectItemTagClass={props.projectItemTagClass}
                                    getTagColour={props.getTagColour}
                                />
                            </div>

                            <div className="ProjectDescription">
                                <Markdown
                                    escapeHtml={false}
                                    source={project.description}
                                />
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default projectViewer
