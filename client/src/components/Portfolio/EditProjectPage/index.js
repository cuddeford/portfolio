import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Page from '../../Page'

import './EditProjectPage.css'

class EditProjectPage extends Component {
    state = {
        shortId: '',
        projectEdited: false
    }
    
    componentDidMount() {
        this.initState()
    }
    
    componentDidUpdate() {
        this.initState()
    }
    
    initState = () => {
        const params = new URLSearchParams(this.props.location.search)
        const shortId = params.get('shortId')
        
        if (this.state.shortId === shortId) return
        
        this.setState({ shortId })
    }
    
    submitEditedProject = async e => {
        e.preventDefault()

        const formData = new FormData(e.target)

        var object = {};
        formData.forEach((value, key) => object[key] = value)

        object.tags = object.tags ? object.tags.split(/\s?[, ]\s?/) : []
        object.public = !!object.public

        if (!object.name) return console.log('Name is required')
        if (object.tags.length <= 0) return console.log('Tags are required')
        if (!object.description) return console.log('Description is required')
        
        object.shortId = this.state.shortId
        
        const editedProject = await fetch('/api/project', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(object)
        })

        const project = await editedProject.json()
        if (project.shortId === this.state.shortId) {
            await this.props.updateProjects()
            this.setState({ projectEdited: true })
        }
    }

    render() {
        const project = this.props.state.projects.find(p => p.shortId === this.state.shortId)
        
        if (this.state.projectEdited === true) {
            return <Redirect to={'/portfolio/#' + project.slug} />
        }
        
        const content = project ? (
            <form id='projectForm' onSubmit={this.submitEditedProject}>
                <input type='text' name='name' placeholder='Name' defaultValue={project.name} />
                <br />
                <input type='text' name='tags' placeholder='Tags' defaultValue={project.tags.join(', ')} />
                <br />
                <textarea name='description' placeholder='Description' defaultValue={project.description} />
                <br />
                <input type='checkbox' name='public' defaultChecked={project.public} />
                <br />
                <button type='submit'>Submit</button>
            </form>
        ) : 'Invalid project'

        return (
            <Page
                pageName={'Edit Project'}
                content={content}
                baseTitle={this.props.state.baseTitle}
            />
        )
    }
}

export default EditProjectPage