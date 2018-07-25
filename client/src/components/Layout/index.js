import React, { Component } from 'react'

import Header from './Header/'
import Footer from './Footer/'

const layout = props => {
    return (
        <div className='container'>
            <Header admin={props.admin} />
            {props.children}
            <Footer changingProject={props.changingProject} />
        </div>
    )
}

export default layout