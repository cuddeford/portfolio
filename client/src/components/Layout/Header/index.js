import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

class Header extends Component {
    state = {
        images: [
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/895265ffc85236fed3dde375197cda72/5BDD15EC/t51.2885-15/e35/13696885_1613318298959967_2043605546_n.jpg',
                yPosition: '55%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/88d901cc4651a8f8beb14907fc4b86c5/5BCE3B0A/t51.2885-15/e35/14033459_1174690812587690_514674452_n.jpg',
                yPosition: '28%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/ccba2ab9d3df2489a357a7b468f0eff3/5BE92C1F/t51.2885-15/e35/14033004_1730571830536307_1866731970_n.jpg',
                yPosition: '21%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/9c622c8244084fffe55f88911aa4da5b/5BE93253/t51.2885-15/e35/14288059_1392422394105895_594143978_n.jpg',
                yPosition: '33%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/f164bcde0eaf8a6e0b7771a8523dc41d/5BEA2B17/t51.2885-15/e35/15043617_595691093970224_1837103653056413696_n.jpg',
                yPosition: '33%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/ce84a3503c7411cb6aa57659ee73d280/5BE4FA85/t51.2885-15/e35/15275549_1184296244997522_3433797246158635008_n.jpg',
                yPosition: '69%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/7a4e41af2cb8d5cdc60c80d07058d962/5BD1CAE3/t51.2885-15/e35/19933418_469443596721955_7454844829533470720_n.jpg',
                yPosition: '26%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/7ba7fb9245f14e26c5603b8ed64584e8/5BE4CF50/t51.2885-15/e35/14294918_515368192005030_683608129_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9',
                yPosition: '21%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/81024eb0e0ca51333d649c9504af0616/5BC62258/t51.2885-15/e35/14448375_1126344854122045_1525092880505372672_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9',
                yPosition: '90%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/dbfbd1696185533f0b7c8f1347faa6e2/5BD12382/t51.2885-15/e35/14099874_1615563265407961_1589915045_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9',
                yPosition: '33%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/a5338385fb1a2302dbe505fdd71b33e5/5BC603FA/t51.2885-15/e35/13768095_1788586548079648_866868027_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9&_nc_eui2=AeGN_OakAsi-EBGIPNt4xNVW2p4gSenK1AlaFVjD2DRknsx4zo3yG7dmgWfzjOIjZV-3NzB1z_UmgWKMJj25lhTS',
                yPosition: '63%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/e42cb253864d2bf9f7b735cc9c4623ba/5BDF0934/t51.2885-15/e35/14561782_305638616483858_5075418632423473152_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9',
                yPosition: '60%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/57c974c5bb28b584b727f38d3b24d5bd/5BE719C8/t51.2885-15/e15/11380969_972257176141441_1940168156_n.jpg',
                yPosition: '93%'
            }
        ],
        selectedImageIndex: -1,
        headerClass: ''
    }
    
    componentWillMount() {
        if (this.state.selectedImageIndex === -1) {
            this.setState({
                selectedImageIndex: this.getRandomImageIndex()
            })
        }
    }
    
    componentDidMount() {
        setInterval(this.changeImage, 28000)
    }
    
    getRandomImageIndex = () => Math.floor(Math.random() * Math.floor(this.state.images.length - 1))
    
    changeImage = () => {
        this.setState({ headerClass: 'change-out' })

        setTimeout(() => {
            this.setState(prevState => {
                return {
                    selectedImageIndex: (prevState.selectedImageIndex + 1) % this.state.images.length,
                    headerClass: 'change-in'
                }
            })
        }, 2000)
    }
    
    render() {
        const headerStyle = {
            backgroundImage: 'url(' + this.state.images[this.state.selectedImageIndex].url + ')',
            backgroundPosition: 'center',
            backgroundPositionY: this.state.images[this.state.selectedImageIndex].yPosition
        }
        
        return (
            <div className="row" id="Header">
                <div className="col-xs-12">
                    <header className="App-header">
                        <h1 id="App-title">
                            <a href='/'>
                                <span
                                    className={'Header-content ' + this.state.headerClass}
                                    style={headerStyle}>
                                    Lucio<br />Cuddeford
                                </span>
                            </a>
                            
                            <nav>
                                <ul className="HeaderNav">
                                    <li className="HeaderNavItem PortfolioLink">
                                        <NavLink to="/portfolio">Portfolio</NavLink>
                                    </li>
                                    <li className="HeaderNavItem ContactLink">
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </h1>
                    </header>
                </div>
                {/* <NavLink to="/login">Login</NavLink>
                <span> </span>
                <NavLink to="/register">Register</NavLink>
                <span> </span> */}
                
                {this.props.admin ? <NavLink to="/logout">Logout</NavLink> : null}
            </div>
        )
    }
}

export default Header