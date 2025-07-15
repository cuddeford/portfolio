import React from 'react'

import Page from '../Page'

const registerPage = props => {

    const submitForm = async e => {
        e.preventDefault()

        const formData = new FormData(e.target)

        var object = {};
        formData.forEach((value, key) => object[key] = value)

        if (!object.username) return console.log('Username is required')
        if (!object.password) return console.log('Password is required')
        if (!object.confirmPassword) return console.log('Password confirmation is required')
        if (object.password !== object.confirmPassword) return console.log('Passwords do not match')

        const registration = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(object)
        })

        const attempt = await registration.json()
        
        if (attempt.success)
            return alert('User created. Please log in')
        else
            alert(attempt.error)
    }
    
    const content = (
        <form method="POST" onSubmit={submitForm} >
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <input type="password" placeholder="Confirm Password" name="confirmPassword" />
            <button className="btn btn-default">Register</button>
        </form>
    )

    return (
        <Page
            pageName={'Register'}
            content={content}
            baseTitle={props.state.baseTitle}
        />
    )
}

export default registerPage