import React from 'react'

import './Footer.css'

const footer = props => {
    const classes = ['row']
    if (props.changingProject) {
        classes.push('footerChangingProject')
    }

    return (
        <div className={classes.join(' ')} id='Footer'>
            <hr className="style-eight" />

            <div className='col-xs-12'>
                <div>
                    <a href="https://instagram.com/luc.io">
                        <span className="FooterWord" style={{ position: 'absolute', right: 25, transform: 'skewX(10deg) translateZ(0)' }}>Instagram</span>
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>

                <div>
                    <a href="/">
                        <i className="fab fa-linkedin"></i>
                        <span className="FooterWord" style={{ position: 'absolute', left: 25, transform: 'skewX(-10deg) translateZ(0)' }}>LinkedIn</span>
                    </a>
                </div>

                <div>
                    <a href="mailto:hello@luc.io">
                        <span className="FooterWord" style={{ position: 'absolute', right: 25, transform: 'skewX(10deg) translateZ(0)' }}>Email</span>
                        <i className="far fa-envelope"></i>
                    </a>
                </div>

                <div>
                    <a href="/portfolio/#this-website">
                        <i className="fas fa-copyright"></i>
                        <span className="FooterWord" style={{ position: 'absolute', left: 25, transform: 'skewX(-10deg) translateZ(0)' }}>{new Date().getFullYear()}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default footer
