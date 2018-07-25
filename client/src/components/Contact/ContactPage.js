import React from 'react'
import { NavLink } from 'react-router-dom'

import Page from '../Page'

import './ContactPage.css'

const ContactPage = props => {
    const content = (
        <div>
            <div className="ContactPage">
                <div className="ContactIntro">
                    I code and like to make pretty things.
                    <br />
                    <br />
                </div>
                
                You can find my CV here:
                <br />
                <a href="/files/LucioCuddeford-CV.pdf">
                    <i className="fas fa-briefcase"></i> CV
                </a>
                <br />
                <br />
                
                You can find my artwork here:
                <br />
                <NavLink to="//instagram.com/luc.io">
                    <i className="fab fa-instagram"></i> <span style={{
                        transform: 'translateY(-3px)',
                        display: 'inline-block'
                    }}>@</span>luc.io
                </NavLink>
                <br />
                <br />
                
                You can email me at:
                <br />
                <a href="mailto:hello@luc.io">
                    <i className="fas fa-envelope"></i> hello<span style={{
                        transform: 'translateY(-3px)',
                        display: 'inline-block'
                    }}>@</span>luc.io
                </a>
            </div>
            
        </div>
    )

    return (
        <Page pageName="Contact" content={content} baseTitle={props.state.baseTitle} />
    )
}

export default ContactPage