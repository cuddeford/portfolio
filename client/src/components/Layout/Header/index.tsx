import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

class Header extends Component {
    state = {
        images: [
            {
                url: '/images/header/13696885_1613318298959967_2043605546_n.jpg',
                yPosition: '55%',
            },
            {
                url: '/images/header/14033459_1174690812587690_514674452_n.jpg',
                yPosition: '28%',
            },
            {
                url: '/images/header/14033004_1730571830536307_1866731970_n.jpg',
                yPosition: '21%',
            },
            {
                url: '/images/header/14288059_1392422394105895_594143978_n.jpg',
                yPosition: '33%',
            },
            {
                url: '/images/header/15043617_595691093970224_1837103653056413696_n.jpg',
                yPosition: '33%',
            },
            {
                url: '/images/header/15275549_1184296244997522_3433797246158635008_n.jpg',
                yPosition: '69%',
            },
            {
                url: '/images/header/19933418_469443596721955_7454844829533470720_n.jpg',
                yPosition: '26%',
            },
            {
                url: '/images/header/14294918_515368192005030_683608129_n.jpg',
                yPosition: '21%',
            },
            {
                url: '/images/header/14448375_1126344854122045_1525092880505372672_n.jpg',
                yPosition: '90%',
            },
            {
                url: '/images/header/14099874_1615563265407961_1589915045_n.jpg',
                yPosition: '33%',
            },
            {
                url: '/images/header/13768095_1788586548079648_866868027_n.jpg',
                yPosition: '63%',
            },
            {
                url: '/images/header/14561782_305638616483858_5075418632423473152_n.jpg',
                yPosition: '60%',
            },
            {
                url: '/images/header/11380969_972257176141441_1940168156_n.jpg',
                yPosition: '93%',
            },
        ],
        selectedImageIndex: -1,
        headerClass: '',
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
