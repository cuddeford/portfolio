import React from 'react'

import Header from './Header/'
import Footer from './Footer/'

interface Props {
    showLayout: boolean,
    admin: boolean,
    children: React.ReactNode,
    changingProject: boolean
}

const layout = (props: Props) => {
    if (!props.showLayout) return props.children
    
    return (
        <div className='container'>
            <Header admin={props.admin} />
            {props.children}
            <Footer changingProject={props.changingProject} />
        </div>
    )
}

export default layout
