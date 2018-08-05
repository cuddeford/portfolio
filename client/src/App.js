import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

// import './App.css'

import Layout from './components/Layout/'

import PortfolioPage from './components/Portfolio/PortfolioPage'
import NewProjectPage from './components/Portfolio/NewProjectPage'
import EditProjectPage from './components/Portfolio/EditProjectPage/'

import ContactPage from './components/Contact/ContactPage'
import CVPage from './components/CV/CVPage'

import LoginPage from './components/Login/LoginPage'
import RegisterPage from './components/Register/RegisterPage'
import LogoutPage from './components/Logout/LogoutPage'

import ToyboxPage from './components/Toybox/ToyboxPage'

class App extends Component {
    state = {
        baseTitle: 'Lucio Cuddeford',
        projects: [],
        selectedProject: [],
        tags: [],
        selectedTags: [],
        possibleTags: [],
        previewingTags: [],
        changingProject: false,
        saturation: '100%',
        brightness: '60%',
        loading: true,
        admin: false,
        showLayout: true
    }
    
    async componentWillMount() {
        const user = await fetch('/api/check-user', {
            method: 'POST',
            credentials: 'include'
        })
        
        const isAuthenticated = await user.json()
        if (isAuthenticated.authenticated) {
            this.setAdmin(true)
        }
    }
    
    async componentDidMount() {
        await this.updateProjects()
    }
    
    updateProjects = async () => {
        const projects = await fetch('/api/projects', {
            credentials: 'include'
        })
        const body = await projects.json()

        return this.setState({
            projects: body.sort((a, b) => a.position - b.position),
            loading: false
        }, () => this.defineTags(true))
    }
    
    defineTags = firstTime => {
        
        // Grab all the tags from the projects and remove duplicates
        const tags = [...new Set(this.state.projects.map(p => p.tags.join(', ')).join(', ').split(', '))]
        const allTags = tags.map((tag, index) => ({
            tag,
            colour: `hsla(${(360 / tags.length) * index}, ${this.state.saturation}, ${this.state.brightness}, 1)`
        }))
        
        if (!firstTime) return this.setState({ tags: allTags })
        
        this.setState({
            tags: allTags,
            possibleTags: tags
        })
    }
    
    addTag = newTag => {
        if (this.state.tags.find(tag => tag.tag.toLowerCase() === newTag.toLowerCase()))
            return (alert('This tag already exists'), false)
                
        this.setState(prevState => {
            prevState.tags.push({
                tag: newTag,
                colour: `hsla(360, ${this.state.saturation}, ${this.state.brightness}, 1)`
            })
            return { tags: prevState.tags }
        })
        
        return true
    }
    
    selectTag = (event, tag) => {
        const prevSelectedTags = this.state.selectedTags
        
        const index = prevSelectedTags.indexOf(tag)
        
        if (index >= 0) prevSelectedTags.splice(index, 1)
        else prevSelectedTags.push(tag)
        this.setState({ selectedTags: prevSelectedTags })
        
        this.setPossibleTags(prevSelectedTags)
    }
    
    setPossibleTags = prevSelectedTags => {
        const projects = this.state.projects
        const selectedTags = prevSelectedTags
        
        const invalidProjects = []
        for (const selectedTag of selectedTags) {
            for (const project of projects) {
                if (!project.tags.includes(selectedTag)) {
                    if (!invalidProjects.includes(project)) {
                        invalidProjects.push(project)
                    }
                }
            }
        }
        
        const validProjects = projects.filter(p => !invalidProjects.includes(p))
        
        const validProjectTags = []
        for (const project of validProjects) {
            for (const tag of project.tags) {
                validProjectTags.push(tag)
            }
        }
        
        this.setState({ possibleTags: validProjectTags })
    }
    
    setPreviewingTags = (event, tags) => {
        this.setState({ previewingTags: tags })
    }
    
    resetPreviewingTags = () => {
        this.setState({ previewingTags: [] })
    }
    
    changingProjectHandler = boolean => {
        this.setState({ changingProject: boolean })
    }
    
    togglePublic = async (event, shortId) => {
        event.preventDefault()
        
        const toggle = await fetch('/api/project/toggle-public/?shortId=' + shortId, {
            method: 'PUT',
            credentials: 'include'
        })
        const body = await toggle.json()

        if (body.shortId === shortId)
            await this.updateProjects()
    }
    
    moveProjectUp = async (event, shortId) => {
        event.preventDefault()
        
        const movement = await fetch('/api/project/move-up/?shortId=' + shortId, {
            method: 'PUT',
            credentials: 'include'
        })
        const body = await movement.json()
        
        if (body.shortId === shortId)
            await this.updateProjects()
    }
    
    moveProjectDown = async (event, shortId) => {
        event.preventDefault()
        
        const movement = await fetch('/api/project/move-down/?shortId=' + shortId, {
            method: 'PUT',
            credentials: 'include'
        })
        const body = await movement.json()

        if (body.shortId === shortId)
            await this.updateProjects()
    }
    
    deleteProject = async (event, shortId) => {
        event.preventDefault()
        
        const ok = window.confirm('Are you sure?')
        if (!ok) return
        
        const reallyOk = window.confirm('Are you REALLY sure?')
        if (!reallyOk) return
        
        const deletion = await fetch('/api/project?shortId=' + shortId, {
            method: 'DELETE',
            credentials: 'include'
        })
        const body = await deletion.json()
        
        if (body.shortId === shortId)
            await this.updateProjects()
    }
    
    setAdmin = value => ((this.setState({ admin: value }), this.updateProjects()))
    
    PrivateRoute = ({ ...rest }) => this.state.admin
        ? <Route {...rest} />
        : <Redirect to='/' />
    
    toggleLayout = value => this.setState({ showLayout: value })
    
    render() {
        return (
            <Router>
                <Layout
                    admin={this.state.admin}
                    showLayout={this.state.showLayout}
                    changingProject={this.state.changingProject} >
                    <Switch>
                        <Route
                            exact
                            path='/portfolio'
                            render={({ history }) => this.state.projects.length > 0
                                ? <PortfolioPage
                                    history={history}
                                    state={this.state}
                                    selectTagHandler={this.selectTag}
                                    previewingTags={this.state.previewingTags}
                                    setPreviewingTags={this.setPreviewingTags}
                                    resetPreviewingTags={this.resetPreviewingTags}
                                    togglePublic={this.togglePublic}
                                    moveProjectUp={this.moveProjectUp}
                                    moveProjectDown={this.moveProjectDown}
                                    deleteProject={this.deleteProject}
                                    changingProjectHandler={this.changingProjectHandler}
                                />
                                : 'Loading projects...'}
                        />
                        
                        <this.PrivateRoute
                            exact
                            path='/portfolio/add'
                            render={() => <NewProjectPage
                                state={this.state}
                                addTag={this.addTag}
                                updateProjects={this.updateProjects} />}
                        />
                        
                        <this.PrivateRoute
                            exact
                            path='/portfolio/edit'
                            render={({ location }) => <EditProjectPage
                                location={location}
                                state={this.state}
                                addTag={this.addTag}
                                updateProjects={this.updateProjects} />}
                        />
                        
                        <Route
                            exact
                            path="/toybox"
                            render={() => <ToyboxPage
                                state={this.state} />}
                        />
                        
                        <Route
                            exact
                            path='/login'
                            render={({ history }) => <LoginPage
                                history={history}
                                state={this.state}
                                setAdmin={this.setAdmin} />}
                        />
                        
                        <Route
                            exact
                            path='/register'
                            render={() => <RegisterPage state={this.state} />}
                        />
                        
                        <Route
                            exact
                            path='/logout'
                            render={() => <LogoutPage
                                state={this.state}
                                setAdmin={this.setAdmin} />}
                        />
                        
                        <Route
                            exact
                            path='/contact'
                            render={() => <ContactPage
                                state={this.state} />}
                        />
                        
                        <this.PrivateRoute
                            exact
                            path='/cv'
                            render={() => <CVPage
                                state={this.state}
                                toggleLayout={this.toggleLayout} />}
                        />
                        
                        <Redirect exact from='/' to='/portfolio' />
                        <Route render={() => (<h1>404</h1>)} />
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

export default App
