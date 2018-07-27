import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Page from '../Page'

class NewProjectPage extends Component {
    state = {
        projectCreated: false,
        createdProjectSlug: null,
        tags: []
    }
    
    submitNewProject = async e => {
        e.preventDefault()
        
        const formData = new FormData(e.target)
        
        var object = {};
        formData.forEach((value, key) => object[key] = value)
        
        object.tags = object.tags ? object.tags.split(', ') : []
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
    
    toggleTag = tag => {
        this.setState(prevState => {
            prevState.tags.includes(tag)
                ? prevState.tags = prevState.tags.filter(t => t !== tag)
                : prevState.tags.push(tag)

            return { tags: prevState.tags }
        })
    }
    
    addNewTagKeyPress = event => {
        if (event.key !== 'Enter')
            return

        event.preventDefault()

        const tag = event.target.value.toLowerCase().trim()
        if (!tag) return

        if (this.props.addTag(tag)) {
            this.setState(prevState => {
                prevState.tags.push(tag)
                return { tags: prevState.tags }
            })
        }

        event.target.value = ''
    }
    
    render() {
        if (this.state.projectCreated === true) {
            return <Redirect to={'/portfolio/#' + this.state.createdProjectSlug} />
        }
        
        const content = (
            <form id='projectForm' onSubmit={this.submitNewProject}>
                <br />
                
                <input type='text' style={{
                    textAlign: 'center',
                    fontSize: '1.5em',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    letterSpacing: '2px'
                }} name='name' placeholder='Name' />
                
                <input type='hidden' style={{
                    textAlign: 'center'
                }} name='tags' placeholder='Tags' readOnly value={this.state.tags.join(', ')} />
                
                <div style={{ textAlign: 'center' }}>
                    {this.props.state.tags.map(tag => {
                        const hue = tag.colour.replace('hsla(', '').split(', ')[0]
                        return (
                            <span
                                key={tag.tag}
                                className="EditProjectFormTag"
                                style={{
                                    background: this.state.tags.includes(tag.tag)
                                        ? tag.colour
                                        : 'transparent',
                                    color: this.state.tags.includes(tag.tag)
                                        ? hue > 45 && hue < 170
                                            ? 'black'
                                            : 'white'
                                        : tag.colour,
                                    border: '1.5px solid ' + tag.colour,
                                }}
                                onClick={() => this.toggleTag(tag.tag)} >
                                {tag.tag}
                            </span>
                        )
                    })}

                    <span className="EditProjectFormTag EditProjectFormNewTag" >
                        <input
                            type="text"
                            placeholder="New Tag"
                            onKeyPress={this.addNewTagKeyPress}
                        />
                    </span>
                </div>
                
                <br />
                <textarea name='description' placeholder='Description' />
                <br />
                <div style={{ textAlign: 'center' }}>
                    <label>Public
                        <input type='checkbox' name='public' style={{ marginLeft: 5 }} />
                    </label>
                </div>
                <br />
                <button className="btn btn-default" type='submit'>Submit</button>
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