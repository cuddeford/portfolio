import React, {Component} from 'react'

import Page from '../Page'

import './CVPage.css'

class CVPage extends Component {
    componentDidMount() {
        this.props.toggleLayout(false)
    }

    componentWillUnmount() {
        this.props.toggleLayout(true)
    }

    render() {
        return (
            <Page pageName="CV" baseTitle={this.props.state.baseTitle}>
                <div className="CVWrapper start">
                    <div className="CVContent container">
                        <div className="row">
                            <div className="col-xs-4 CVSidebar">
                                <a href="/files/CV-Lucio Cuddeford-2024.pdf" className="downloadLink" target="_blank" title="Download" download="" style={{
                                    'zIndex': 1000,
                                    'position': 'relative',
                                    'float': 'left',
                                    'marginRight': '-50px',
                                    'marginBottom': '-50px',
                                    'fontSize': '14pt'
                                }}>
                                    <div className="download fa fa-download"></div>
                                </a>

                                {/* <img src="/images/face.jpg" /> */}
                                <h1 style={{
                                    fontWeight: 'bold',
                                    marginTop: -2,
                                }}>
                                    Lucio Cuddeford
                                </h1>
                                <h3 style={{
                                    marginTop: -5,
                                    marginBottom: 30,
                                    fontFamily: 'Playfair Display',
                                    transform: 'skewX(-15deg)',
                                }}>
                                    Programmer & Artist
                                </h3>

                                <ul className="list-unstyled contactList">
                                    <li>
                                        <i className="fa fa-envelope"></i>
                                        <span> </span>

                                        <a href="mailto:hello@luc.io">
                                            <span className="link">hello<span style={{
                                                transform: 'translateY(-2px)',
                                                display: 'inline-block'
                                            }}>@</span>luc.io</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <span> </span>

                                        <a tel="07783400858">
                                            <span className="link">07783400858</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fa fa-globe"></i>
                                        <span> </span>

                                        <a href="https://luc.io/portfolio" target="_blank">
                                            <span className="link">luc.io/portfolio</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fab fa-linkedin"></i>
                                        <span> </span>

                                        <a href="https://linkedin.com/in/luciocuddeford" target="_blank">
                                            <span className="link">luciocuddeford</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fab fa-instagram"></i>
                                        <span> </span>

                                        <a href="https://instagram.com/luc.io" target="_blank">
                                            <span className="link"><span style={{
                                                transform: 'translateY(-2px)',
                                                display: 'inline-block'
                                            }}>@</span>luc.io</span>
                                        </a>
                                    </li>
                                </ul>

                                <section>
                                    <h2>Education</h2>
                                    <article className="educationItem">
                                        <span className="course">BSc Creative Computing</span>
                                        <div className="grade">First Class Honours</div>
                                        <div className="where">Goldsmiths College</div>
                                        <div className="where">2013 — 2016</div>
                                    </article>
                                </section>

                                <section>
                                    <h2>Referees</h2>
                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <div className="grade">Available on request</div>
                                    </article>
                                </section>

                                <section>
                                    <h2>Employment</h2>
                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <span className="course">OTHERWORLD</span>
                                        <div className="grade">London</div>
                                        <div className="where">Senior Full Stack Engineer</div>
                                        <div className="where">2018 — 2024</div>
                                    </article>

                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <span className="course">Xydrobe</span>
                                        <div className="grade">London</div>
                                        <div className="where">Independent Contractor</div>
                                        <div className="where">2024</div>
                                    </article>

                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <span className="course">Rick’s Retro</span>
                                        <div className="grade">London</div>
                                        <div className="where">Full Stack Developer</div>
                                        <div className="where">2017 — 2018</div>
                                    </article>

                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <span className="course">Freelance</span>
                                        <div className="grade">London</div>
                                        <div className="where">Full Stack Developer</div>
                                        <div className="where">2016 — 2017</div>
                                    </article>

                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <span className="course">Lu-Ma Restaurant</span>
                                        <div className="grade">Wimbledon</div>
                                        <div className="where">Part Time Chef Assistant</div>
                                        <div className="where">2018</div>
                                    </article>

                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <span className="course">FARA Charity Shop</span>
                                        <div className="grade">Wimbledon</div>
                                        <div className="where">Part Time Volunteer Work</div>
                                        <div className="where">2014</div>
                                    </article>

                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <span className="course">Animal Samaritans<br/>Charity Shop</span>
                                        <div className="grade">Croydon</div>
                                        <div className="where">Part Time Volunteer Work</div>
                                        <div className="where">2014</div>
                                    </article>
                                </section>
                            </div>

                            <div className="col-xs-8 CVMain">
                                <section>
                                    <h2 style={{ marginTop: 0 }}>Profile</h2>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <p>
                                                I am interested in web technologies and have spent my career working with the full stack: design, front-end, and back-end. I love building things and making them a delight to use. I am a creative thinker and I enjoy solving problems.
                                            </p>
                                        </div>

                                        <div className="col-xs-6">
                                            <p>
                                                I am especially interested in the front-end but I am also a competent back-end developer. I have experience with a wide range of technologies and I am always keen to learn more. I have recently begun teaching myself Web3 technologies like Solidity and the Solana blockchain: <a rel="noopener noreferrer" href="https://luc.io/portfolio/#solana-memecoin-sniper" target="_blank">Solana token bot.</a>
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2>Portfolio</h2>

                                    <article>
                                        <div className="row">
                                            <h3>OTHERWORLD</h3>
                                            <div className="col-xs-6">
                                                <p>
                                                    <a rel="noopener noreferrer" href="https://luc.io/portfolio/#otherworld" target="_blank">OTHERWORLD</a> was a virtual reality bar and arcade where you could come with your friends to play VR, earn points, and drink together at the bar. It was an ambitious project, pioneering the format and setting the standard for VR arcades in the UK.
                                                </p>

                                                <p>
                                                    My role as Senior Full Stack Engineer and only developer (working closely with the CEO) required me to design, architect, and develop key tools and infrastructure to facilitate the VR sessions from booking to exit.
                                                </p>
                                                <p>
                                                    My tech powered the business for almost <b>6</b> years,
                                                    <ul>
                                                        <li>serving almost <b>400,000</b> customers,</li>
                                                        <li>over <b>150,000</b> bookings,</li>
                                                        <li>almost <b>250,000</b> EPOS orders,</li>
                                                        <li>almost <b>6,000,000</b> internal wallet transactions, and</li>
                                                        <li>over <b>17,000,000</b> in-game achievements</li>
                                                    </ul>
                                                </p>

                                                <p>
                                                    <b>KRONOS</b> — the backend server and main brain. (<b>Node</b>, <b>MongoDB</b>)
                                                </p>

                                                <p>
                                                    <b>HESTIA</b> — the iPad app running on tables for guests to order food and drink using<br /><span style={{ fontStyle: 'italic' }}>∂ DreamCoin</span> and contactless. (<b>Cordova</b>, <b>React</b>)
                                                </p>
                                            </div>

                                            <div className="col-xs-6">
                                                <p>
                                                    <b>ZEUS</b> — the internal website for staff to manage all aspects of the business including bookings, a complete EPOS system, table orders, customers, and most importantly the live management of ongoing VR sessions. (<b>Meteor</b>, <b>React</b>, <b>Node</b>)
                                                </p>

                                                <p>
                                                    <b>PATROKLOS</b> — the companion app for guests to track all their previous sessions, their wallet spending, leaderboards, in game navigational map, and their OTHERWORLD identification, DreamPort. Build for iOS and Android. (<b>React Native</b>, <b>Expo</b>, <b>React</b>, <b>Node</b>)
                                                </p>

                                                <p>
                                                    <b>HERA</b> — the background management software running on all the VR pods designed to manage and automate all operations for VR including starting and stopping games, assigning customers and sessions, and recording the guests in game scores. (<b>Node</b>, <b>Electron</b>)
                                                </p>

                                                <p>
                                                    <b>DIONYSUS</b> — the automated self-service beer and cocktail bar for guests, made with custom circuit boards, flow meters, solenoids, and deeply integrated into Kronos and Zeus. (<b>Svelte</b>, <b>Electronics</b>, <b>Arduino</b>)
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h3>Rick’s Retro</h3>
                                                <p>
                                                    <a rel="noopener noreferrer" href="https://luc.io/portfolio/#ricks-retro" target="_blank">Rick’s Retro</a> is an eCommerce site I built for independent vintage clothes business Rick’s Retro. I built everything from the ground up (products, orders, payments, etc.) and the site facilitated their business for 7 years before they migrated to a new site. It was completely custom because they needed a unique back-end flow that wasn't available off the shelf. (<b>Node</b>, <b>Express</b>, <b>MongoDB</b>, <b>jQuery</b>, <b>Redis</b>, <b>SASS</b>)
                                                </p>
                                            </div>

                                            <div className="col-xs-6">
                                                <h3>Xydrobe</h3>
                                                <p>
                                                    After OTHERWORLD I worked as an independent contractor helping Xydrobe to launch their immersive VR experience in Harrods London.
                                                </p>

                                                <h3>More</h3>
                                                <p>
                                                    <a rel="noopener noreferrer" href="https://luc.io/portfolio/" target="_blank">Portfolio</a> — You can find my other projects on my portfolio page, including the handheld synthesiser I made in 2016: <a rel="noopener noreferrer" href="https://luc.io/portfolio/#monopad" target="_blank">Monopad</a>.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </section>

                                <section>
                                    <h2>Skills</h2>

                                    <div className="row">
                                        <div className="col-xs-6">
                                            <h3>Technologies</h3>
                                            <p>
                                                JavaScript (TypeScript), Node.js, MongoDB, React, HTML, (S)CSS, Solana Blockchain, Solidity, Photography, Processing, Java, C++, PHP, MySQL, DSP, openFrameworks, Unity3D, C#, UNIX, Python, Arduino & Electronics, Photoshop, Premiere, Lightroom.
                                            </p>
                                        </div>
                                        <div className="col-xs-6">
                                            <h3>Interests and Hobbies</h3>
                                            <p>
                                                I love art and photography and I spend a lot of my time taking and editing photos, printing a photobook once a year. I love travelling and hiking, having recently spent 5 months in Indonesia and India.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <h3>Communication</h3>
                                            <p>
                                                Articulate with excellent communication skills.
                                                Strong attention to detail and keen to find elegant solutions to problems.
                                            </p>
                                        </div>
                                        <div className="col-xs-6">
                                            <h3>Languages</h3>
                                            <p>
                                                English (native), Italian (fluent), Spanish (basic conversational), German (very basic), Japanese (very basic).
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        )
    }
}

export default CVPage
