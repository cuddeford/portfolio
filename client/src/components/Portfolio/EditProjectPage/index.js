import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Page from '../../Page'

import './EditProjectPage.css'

import Markdown from 'react-markdown'

class EditProjectPage extends Component {
    state = {
        shortId: '',
        projectEdited: false,
        tags: [],
        firstLoad: true,
        project: null,
        description: ''
    }
    
    componentWillMount() {
        this.initShortId()
    }
    
    componentDidMount() {
        this.initState()
    }
    
    componentDidUpdate() {
        this.initShortId()
        this.initState()
    }
    
    initShortId = () => {
        const params = new URLSearchParams(this.props.location.search)
        const shortId = params.get('shortId')
        
        if (this.state.shortId === shortId) return
        
        this.setState({ shortId })
    }
    
    initState = () => {
        if (!this.state.firstLoad)
            return

        if (!this.state.project) {
            if (this.props.state.projects.length <= 0)
                return

            const project = this.props.state.projects.find(p => p.shortId === this.state.shortId)
            this.setState({
                project,
                tags: project.tags,
                description: project.description,
                firstLoad: false
            })
        }
    }
    
    submitEditedProject = async e => {
        e.preventDefault()

        const formData = new FormData(e.target)

        var object = {};
        formData.forEach((value, key) => object[key] = value)

        object.tags = object.tags ? object.tags.split(', ') : []
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
    
    descriptionKeyPress = e => {
        const activeEl = document.activeElement
        const start = activeEl.selectionStart
        const end = activeEl.selectionEnd

        const wrap = chars => {
            if (start === end) return

            let enabling = false
            this.setState(prevState => {
                const selection = prevState.description.slice(start, start + (end - start))

                if (selection.startsWith(chars) && selection.endsWith(chars)) {
                    enabling = false
                    prevState.description = [
                        prevState.description.slice(0, start),
                        selection.slice(chars.length, selection.length - chars.length),
                        prevState.description.slice(end)
                    ].join('')
                } else {
                    enabling = true
                    prevState.description = [
                        prevState.description.slice(0, start),
                        chars,
                        selection,
                        chars,
                        prevState.description.slice(end)
                    ].join('')
                }

                return {
                    description: prevState.description
                }
            }, () => enabling
                ? activeEl.setSelectionRange(start, end + (chars.length * 2))
                : activeEl.setSelectionRange(start, end - (chars.length * 2))
            )
        }

        // console.log(e.which)
        if (e.metaKey && e.which === 98) {

            // If pressing Cmd+b, make bold
            wrap('**')
        } else if (e.metaKey && e.which === 105) {
            e.preventDefault()

            // If pressing Cmd+i, make italic
            wrap('_')
        } else if (e.shiftKey && e.metaKey && e.which === 103) {
            e.preventDefault()

            // If pressing Shift+Cmd+g, make code block
            wrap('\n```\n')
        } else if (e.metaKey && e.which === 103) {
            e.preventDefault()

            // If pressing Cmd+g, make inline code block
            wrap('`')
        } else if (e.shiftKey && e.metaKey && e.which === 107) {

            // If pressing Shift+Cmd+k, delete line
            const firstChunk = this.state.description.slice(0, start)
            const secondChunk = this.state.description.slice(start)

            const sliceFrom = firstChunk.lastIndexOf('\n') + 1
            const sliceTo = start + secondChunk.indexOf('\n') + 1

            this.setState(prevState => ({
                description: [
                    prevState.description.slice(0, sliceFrom),
                    prevState.description.slice(sliceTo)
                ].join('')
            }), () => activeEl.setSelectionRange(sliceFrom, sliceFrom))
        }
    }
    
    descriptionOnChange = e => this.setState({ description: e.target.value })

    render() {
        const { project } = this.state
        
        if (this.state.projectEdited === true) {
            return <Redirect to={'/portfolio/#' + project.slug} />
        }
        
        const content = project ? (
            <form id='projectForm' onSubmit={this.submitEditedProject}>
                <br />
                
                <input type='text' style={{
                    textAlign: 'center',
                    fontSize: '1.5em',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    letterSpacing: '2px'
                }} name='name' placeholder='Name' defaultValue={project.name} />
                
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
                <br />
                
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <textarea
                            name='description'
                            placeholder='Description'
                            value={this.state.description}
                            onKeyPress={this.descriptionKeyPress}
                            onChange={this.descriptionOnChange} />
                    </div>
                    <div className="col-xs-12 col-md-6 TextAreaPreview">
                        <h3 className="visible-xs visible-sm TextAreaPreviewText">Preview</h3>
                        <Markdown
                            escapeHtml={false}
                            source={this.state.description}
                        />
                    </div>
                </div>
                
                <br />
                
                <div style={{ textAlign: 'center' }}>
                    <label>Public
                        <input type='checkbox' name='public' style={{ marginLeft: 5 }} defaultChecked={project.public} />
                    </label>
                </div>
                
                <br />
                <button className="btn btn-default" type='submit'>Submit</button>
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