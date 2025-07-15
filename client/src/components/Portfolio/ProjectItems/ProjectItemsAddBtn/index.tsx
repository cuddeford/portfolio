import React from 'react'
import { NavLink } from 'react-router-dom'

import './ProjectItemsAddBtn.css'

const projectItemsAddBtn = props => {
    return (
        <li className="ProjectItemsAddBtn">
            <NavLink to="/portfolio/add">Add</NavLink>
        </li>
    )
}

export default projectItemsAddBtn