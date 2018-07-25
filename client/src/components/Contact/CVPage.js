import React from 'react'

import Page from '../Page'

const CVPage = props => {
    const content = (
        <div>
            <p>
                CV page
            </p>
            <p>Lots of creds here</p>
        </div>
    )
    
    return (
        <Page pageName="CV" content={content} baseTitle={props.state.baseTitle} />
    )
}

export default CVPage