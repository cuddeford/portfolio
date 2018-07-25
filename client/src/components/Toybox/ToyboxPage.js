import React, { Component } from 'react'

import Page from '../Page'

import './ToyboxPage.css'

class ToyboxPage extends Component {
    state = {
        howToIsOpen: false
    }
    
    apps = [
        { name: "Particles", description: "Drag your finger around the screen. You can use more than one finger!" },
        { name: "Spirals", description: "Drag your finger around the center of the screen." },
        { name: "Blava", description: "Drag your finger around the top half of the screen. Keep it moving to keep Blava alive!" },
        { name: "Snake", description: "Drag your finger around the screen. Change direction for a different arrangement." },
        { name: "Gyrospin", description: "Drag your finger around the top left corner for best effect. Move it slowly." },
        { name: "Cascade", description: "Drag up and down to change the speed of the cascade." }
    ];
    
    toggleHowTo = () => {
        this.setState(prevState => {
            return {howToIsOpen: !prevState.howToIsOpen}
        })
    }
    
    render() {
        const content = (
            <div>
                <div className="col-xs-12">
                    <button className={"btn ToyboxHowToBtn" + (this.state.howToIsOpen ? " active" : "")} onClick={this.toggleHowTo}>
                        How To <i className="fas fa-caret-down"></i>
                    </button>
                    
                    <div className={"ToyboxHowToDescription" + (this.state.howToIsOpen ? " opened" : "")}>
                        <div>
                            These apps were designed to be played on a smartphone, in full-screen.<br />Here's how to do it on an iPhone:
                        </div>
                        <br />
                        <div>1) Tap an app</div>
                        <br />
                        <div>2) Tap on the share up-arrow</div>
                        <div>
                            <img src="/images/share.jpg" alt="" />
                        </div>
                        <br />
                        <br />
                        <div>3) Tap "Add to Home Screen"</div>
                        <div>
                            <img src="/images/addtohome.jpg" alt="" />
                        </div>
                        <br />
                        <br />
                        <div>4) Tap "Add"</div>
                        <div>
                            <img src="/images/add.jpg" alt="" />
                        </div>
                        <br />
                        <br />
                        <div>5) Tap Tap Tap</div>
                        <div>
                            <img src="/images/home.jpg" alt="" />
                        </div>
                    </div>
                </div>
                
                {this.apps.map((app, index) => {
                    index += 1;
                    return (
                        <div className="col-xs-12 col-sm-4">
                            <div className="ToyboxIcon">
                                <a href={"/toybox/" + index}>
                                    <img src={"/toybox/" + index + "/icon.jpg"} alt="" />
                                    <br />
                                    <div className="ToyboxIconName">{app.name}</div>
                                </a>
                                <p className="ToyboxIconDescription">{app.description}</p>
                                <br />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
        
        return (
            <Page
                pageName={'Toybox'}
                content={content}
                baseTitle={this.props.state.baseTitle}
            />
        )
    }
}

export default ToyboxPage