import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Page from '../Page'

class NewProjectPage extends Component {
    state = {
        projectCreated: false,
        createdProjectSlug: null
    }
    
    submitNewProject = async e => {
        e.preventDefault()
        
        const formData = new FormData(e.target)
        
        var object = {};
        formData.forEach((value, key) => object[key] = value)
        
        object.tags = object.tags ? object.tags.split(/\s?[, ]\s?/) : []
        object.public = !!object.public
        
        if (!object.name) return console.log('Name is required')
        if (object.tags.length <= 0) return console.log('Tags are required')
        if (!object.description) return console.log('Description is required')
        
        const createdProject = await fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(object)
        })
        
        const project = await createdProject.json()
        if (project.shortId) {
            await this.props.updateProjects()
            this.setState({
                projectCreated: true,
                createdProjectSlug: project.slug
            })
        }
    }
    
    render() {
        if (this.state.projectCreated === true) {
            return <Redirect to={'/portfolio/#' + this.state.createdProjectSlug} />
        }
        
        const content = (
            <form id='projectForm' onSubmit={this.submitNewProject}>
                <input type='text' name='name' placeholder='Name' />
                <br />
                <input type='text' name='tags' placeholder='Tags' />
                <br />
                <textarea name='description' placeholder='Description' />
                <br />
                <input type='checkbox' name='public' />
                <br />
                <button type='submit'>Submit</button>
            </form>
        )
        
        return (
            <Page
                pageName={'Add Project'}
                content={content}
                baseTitle={this.props.state.baseTitle}
            />
        )
    }
}

export default NewProjectPage