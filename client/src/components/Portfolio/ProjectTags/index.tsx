import React from 'react'

import ProjectTag from './ProjectTag/'

import './ProjectTags.css'

const projectTags = props => {
    if (!props.tags.length) {
        return (
            <div className="col-xs-12 ProjectTagsColumn">
                <ul className="ProjectTags">
                    <div>Select a category</div>
                </ul>
            </div>
        )
    }

    return (
        <div className="col-xs-12 ProjectTagsColumn">
            <ul className="ProjectTags">
                {props.tags.map(tag => <ProjectTag
                    key={tag.tag}
                    tag={tag}
                    tagBtnClass={props.tagBtnClass}
                    selectTagHandler={props.selectTagHandler}
                />)}
            </ul>
        </div>
    )
}

export default projectTags
