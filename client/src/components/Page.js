import React, { Component } from 'react'

import '../App.css'

class Page extends Component {
    componentDidMount() {
        document.title = this.props.pageName + ' | ' + this.props.baseTitle
    }

    componentDidUpdate() {
        const oldTitle = document.title
        const newTitle = this.props.pageName + ' | ' + this.props.baseTitle

        if (oldTitle !== newTitle)
            return document.title = newTitle
    }

    render() {
        if (this.props.children)
            return this.props.children
        
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div id="content">
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}

export default Page
