import React from 'react'
import { Link } from 'react-router-dom'

import './ProjectItemAdminActions.css'

const projectItemAdminActions = props => {
    return (
        <span className="ProjectItemAdminActions">
            <button
                className={"btn btn-xs" + (props.public ? " active" : '')}
                onClick={props.togglePublic}>
                <i className="fas fa-eye"></i>
            </button>
            
            <button
                className="btn btn-xs"
                onClick={props.moveProjectUp}>
                <i className="fas fa-arrow-up"></i>
            </button>
            
            <button
                className="btn btn-xs"
                onClick={props.moveProjectDown}>
                <i className="fas fa-arrow-down"></i>
            </button>
            
            <Link
                className="btn btn-xs"
                to={'/portfolio/edit?shortId=' + props.shortId}>
                <i className="fas fa-pen-nib"></i>
            </Link>
            
            <button
                className="btn btn-xs"
                onClick={props.deleteProject}>
                <i className="fas fa-trash"></i>
            </button>
        </span>
    )
}

export default projectItemAdminActions