import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Page from '../Page'

class LogoutPage extends Component {
    state = {
        redirect: false
    }
    
    async componentWillMount() {
        const logout = await fetch('/api/logout', {
            credentials: 'include'
        })
        
        const loggedOut = await logout.json()

        if (loggedOut.success) {
            this.setState({ redirect: true })
            this.props.setAdmin(false)
        }
    }
    
    
    render() {
        const content = this.state.redirect
            ? <Redirect to="/" />
            : <h3>Logging out...</h3>
            
        return (
            <Page
                pageName={'Logout'}
                content={content}
                baseTitle={this.props.state.baseTitle}
            />
        )
    }
}

export default LogoutPage