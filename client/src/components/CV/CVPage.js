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
                            <div className="col-xs-12 col-sm-4 CVSidebar">
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

                                        <a href="https://luc.io" target="_blank">
                                            <span className="link">luc.io</span>
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
                                    </article>
                                    <article className="educationItem">
                                        <span className="course">A-Levels</span>
                                        <div className="grade">Maths (B), Spanish (B), Film Studies (B)</div>
                                        <div className="where">Wimbledon College</div>
                                    </article>
                                    <article className="educationItem">
                                        <span className="course">GCSEs</span>
                                        <div className="grade">10 including: Maths (A), English Language (A), Spanish (A)</div>
                                        <div className="where">Wimbledon College</div>
                                    </article>
                                </section>

                                <section>
                                    <h2>Referees</h2>
                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <div className="course">Chris Adams</div>
                                        <div className="grade">Ex-CEO at OTHERWORLD</div>
                                        <i className="fa fa-envelope"></i>
                                        <span> </span>
                                        <a href="mailto:chris@hylia.uk">
                                            <span className="link">chris<span style={{
                                                transform: 'translateY(-2px)',
                                                display: 'inline-block'
                                            }}>@</span>hylia.uk</span>
                                        </a>

                                        <br />

                                        <i className="fa fa-phone"></i>
                                        <span> </span>
                                        <a tel="07528721259">
                                            <span className="link">07528721259</span>
                                        </a>
                                    </article>

                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <div className="course">Atul Banerjee</div>
                                        <div className="grade">Managing Director at ABE Associates</div>
                                        <i className="fa fa-envelope"></i>
                                        <span> </span>
                                        <a href="mailto:atul@abeassociates.co.uk">
                                            <span className="link">atul<span style={{
                                                transform: 'translateY(-2px)',
                                                display: 'inline-block'
                                            }}>@</span>abeassociates.co.uk</span>
                                        </a>

                                        <br />

                                        <i className="fa fa-phone"></i>
                                        <span> </span>
                                        <a tel="07740942087">
                                            <span className="link">07740942087</span>
                                        </a>
                                    </article>

                                    <article className="educationItem">
                                        <div className="course">Dr. Mick Grierson</div>
                                        <div className="grade">Reader at Goldsmiths College</div>
                                        <i className="fa fa-envelope"></i>
                                        <span> </span>
                                        <a href="mailto:m.grierson@gold.ac.uk">
                                            <span className="link">m.grierson<span style={{
                                                transform: 'translateY(-2px)',
                                                display: 'inline-block'
                                            }}>@</span>gold.ac.uk</span>
                                        </a>

                                        <br/>

                                        <i className="fa fa-phone"></i>
                                        <span> </span>
                                        <a tel="02070785139">
                                            <span className="link">02070785139</span>
                                        </a>
                                    </article>
                                </section>
                            </div>

                            <div className="col-xs-12 col-sm-8 CVMain">
                                <section>
                                    <h2 style={{ marginTop: 0 }}>Profile</h2>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6">
                                            <p>
                                                I am interested in web technologies and have spent my career working with the full stack: design, front-end, and back-end. I love building things and making them a delight to use. I am a creative thinker and I enjoy solving problems.
                                            </p>
                                        </div>

                                        <div className="col-xs-12 col-sm-6">
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
                                            <div className="col-xs-12 col-sm-6">
                                                <p>
                                                    <a rel="noopener noreferrer" href="https://luc.io/portfolio/#otherworld" target="_blank">OTHERWORLD</a> — I spent almost 6 years here designing and building large parts of the product before the company closed in 2024. OTHERWORLD was a virtual reality bar and arcade where you could come with your friends to play VR, earn points, and drink together at the bar. It was an ambitious project, pioneering the format and setting the standard for VR arcades in the UK.
                                                </p>

                                                <p>
                                                    My role as Senior Full Stack Engineer and only developer (besides the CEO) required me to design, architect, and develop key tools and infrastructure to facilitate the VR sessions from booking to exit. My projects included:
                                                </p>

                                                <p>
                                                    <b>KRONOS</b> — the backend server and main brain. (<b>Node</b>, <b>MongoDB</b>)
                                                </p>

                                                <p>
                                                    <b>ZEUS</b> — the internal website for staff to manage all aspects of the business including bookings, a complete EPOS system, table orders, customers, and most importantly the live management of ongoing VR sessions. (<b>Meteor</b>, <b>React</b>, <b>Node</b>)
                                                </p>
                                            </div>

                                            <div className="col-xs-12 col-sm-6">
                                                <p>
                                                    <b>HESTIA</b> — the iPad app running on tables for guests to order food and drink using<br /><span style={{ fontStyle: 'italic' }}>∂ DreamCoin</span> and contactless. (<b>Cordova</b>, <b>React</b>)
                                                </p>

                                                <p>
                                                    <b>PATROKLOS</b> — the companion app for guests to track all their previous sessions, their wallet spending, leaderboards, in game navigational map, and their OTHERWORLD identification, DreamPort. Build for iOS and Android. (<b>React Native</b>, <b>Expo</b>, <b>React</b>, <b>Node</b>)
                                                </p>

                                                <p>
                                                    <b>HERA</b> — the background management software running on all the VR pods designed to manage and automate all operations for VR including starting and stopping games, assigning customers and sessions, and recording the guests in game scores. (<b>Node</b>, <b>Electron</b>)
                                                </p>

                                                <p>
                                                    <b>DIONYSUS</b> — the automated self-service beer and cocktail bar for guests, made with custom circuit boards, flow meters, solenoids, and deeply integrated into Kronos and Zeus. (<b>Svelte</b>)
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </section>

                                <section>
                                    <h2>Skills</h2>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6">
                                            <h3>Technologies</h3>
                                            <p>
                                                JavaScript (TypeScript), Node.js, MongoDB, React, HTML, (S)CSS, Solana Blockchain, Solidity, Photography, Processing, Java, C++, PHP, MySQL, DSP, openFrameworks, Unity3D, C#, UNIX, Python, Arduino & Electronics, Photoshop, Illustrator, Premiere, Lightroom.
                                            </p>

                                            <h3>Communication</h3>
                                            <p>
                                                Articulate with excellent communication skills.
                                                Strong attention to detail and keen to find elegant solutions to problems.
                                            </p>
                                        </div>

                                        <div className="col-xs-12 col-sm-6">
                                            <h3>Interests and Hobbies</h3>
                                            <p>
                                                I love art and photography and I spend a lot of my time taking and editing photos, printing photobooks once a year. I love travelling and hiking, having recently spent 4 months in Indonesia. In my free time I like to read and explore nature.
                                            </p>

                                            <h3>Languages</h3>
                                            <p>
                                                English (native), Italian (fluent), Spanish (basic conversational).
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2>Employment</h2>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-4">
                                            <article className="educationItem">
                                                <span className="course">OTHERWORLD</span>
                                                <div className="grade">London</div>
                                                <div className="where">Senior Full Stack Engineer</div>
                                            </article>

                                            <article className="educationItem">
                                                <span className="course">Rick’s Retro</span>
                                                <div className="grade">London</div>
                                                <div className="where">Full Stack Developer</div>
                                            </article>
                                        </div>

                                        <div className="col-xs-12 col-sm-4">
                                            <article className="educationItem">
                                                <span className="course">Freelance</span>
                                                <div className="grade">London</div>
                                                <div className="where">Freelance web developer</div>
                                            </article>

                                            <article className="educationItem">
                                                <span className="course">Lu-Ma Restaurant</span>
                                                <div className="grade">Wimbledon</div>
                                                <div className="where">Part Time Chef Assistant</div>
                                            </article>
                                        </div>

                                        <div className="col-xs-12 col-sm-4">
                                            <article className="educationItem">
                                                <span className="course">FARA Charity Shop</span>
                                                <div className="grade">Wimbledon</div>
                                                <div className="where">Part Time Volunteer Work</div>
                                            </article>

                                            <article className="educationItem">
                                                <span className="course">Animal Samaritans Charity Shop</span>
                                                <div className="grade">Croydon</div>
                                                <div className="where">Part Time Volunteer Work</div>
                                            </article>
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
