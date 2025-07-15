import React from 'react'

import Page from '../Page'

const loginPage = props => {
    
    const submitForm = async e => {
        e.preventDefault()

        const formData = new FormData(e.target)

        var object = {};
        formData.forEach((value, key) => object[key] = value)

        if (!object.username) return console.log('Username is required')
        if (!object.password) return console.log('Password is required')

        const login = await fetch('/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })

        const attempt = await login.json()
        
        return attempt.success
            ? (props.setAdmin(true), props.history.push('/'))
            : alert(attempt.error)
    }
    
    const content = (
        <form method="POST" onSubmit={submitForm}>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <br />
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <br />
            <button type="submit" className="btn btn-default">Log in</button>
        </form>
    )
    
    return (
        <Page
            pageName={'Login'}
            content={content}
            baseTitle={props.state.baseTitle}
        />
    )
}

export default loginPage