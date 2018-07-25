import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

class Header extends Component {
    state = {
        images: [
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/895265ffc85236fed3dde375197cda72/5BDD15EC/t51.2885-15/e35/13696885_1613318298959967_2043605546_n.jpg?dl=1',
                yPosition: '55%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/88d901cc4651a8f8beb14907fc4b86c5/5BCE3B0A/t51.2885-15/e35/14033459_1174690812587690_514674452_n.jpg?dl=1',
                yPosition: '28%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/ccba2ab9d3df2489a357a7b468f0eff3/5BE92C1F/t51.2885-15/e35/14033004_1730571830536307_1866731970_n.jpg?dl=1',
                yPosition: '21%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/9c622c8244084fffe55f88911aa4da5b/5BE93253/t51.2885-15/e35/14288059_1392422394105895_594143978_n.jpg?dl=1',
                yPosition: '33%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/f164bcde0eaf8a6e0b7771a8523dc41d/5BEA2B17/t51.2885-15/e35/15043617_595691093970224_1837103653056413696_n.jpg?dl=1',
                yPosition: '33%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/ce84a3503c7411cb6aa57659ee73d280/5BE4FA85/t51.2885-15/e35/15275549_1184296244997522_3433797246158635008_n.jpg?dl=1',
                yPosition: '69%'
            },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/7a4e41af2cb8d5cdc60c80d07058d962/5BD1CAE3/t51.2885-15/e35/19933418_469443596721955_7454844829533470720_n.jpg?dl=1',
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
            // {
            //     url: 'https://scontent-lga3-1.cdninstagram.com/vp/8a73509b8627bf230e4d311917709cf4/5BEC8B8A/t51.2885-15/e15/10523274_916135535079543_1738839918_n.jpg?_nc_eui2=AeFgGpD67_ag5ywcnDMFMap6a8HKLq6Z07i_I-CiS8wzwtWmwxH4SS0a2ARoDtZwOM-5-3auUJBrkOXzu3OkCMRu',
            //     yPosition: '40%'
            // },
            {
                url: 'https://scontent-lga3-1.cdninstagram.com/vp/57c974c5bb28b584b727f38d3b24d5bd/5BE719C8/t51.2885-15/e15/11380969_972257176141441_1940168156_n.jpg',
                yPosition: '93%'
            },
            // {
            //     url: 'https://scontent-lga3-1.cdninstagram.com/vp/6ab9718f7beb0aa4d2718a3d046fdf34/5BD185BC/t51.2885-15/e15/11205876_1386289891700932_671108518_n.jpg',
            //     yPosition: '78%'
            // },
            // {
            //     url: 'https://scontent-lga3-1.cdninstagram.com/vp/8de79c2e3b1b6465005eba82e5f62673/5BC56530/t51.2885-15/e35/15035552_1841374909453617_8984429747614253056_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9&_nc_eui2=AeFXsp1VWNm1Fc5mgnmyoWvR_rXbqDBWE_lehfONN4mMKS4eKfDqqG3dc4Wlkgh_jIXd6xN4yD-PMzN7TSYbLf9I',
            //     yPosition: '49%'
            // },
            // {
            //     url: 'https://scontent-lga3-1.cdninstagram.com/vp/831103a901a84ad77c5b885f692ea71e/5BD0E95A/t51.2885-15/e15/11236227_104404719892800_1045767518_n.jpg',
            //     yPosition: '83%'
            // },
            // {
            //     url: 'https://scontent-lga3-1.cdninstagram.com/vp/ae5f74aa5ea3bdf87d5463af6f4e592a/5BCDA6C1/t51.2885-15/e15/11191172_1429366180699904_842608976_n.jpg',
            //     yPosition: '97%'
            // }
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