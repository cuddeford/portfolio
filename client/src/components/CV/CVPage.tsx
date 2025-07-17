import React, {Component} from 'react'

import Page from '../Page'

import './CVPage.css'

interface Props {
    state: {
        baseTitle: string
    },
    toggleLayout: (show: boolean) => void
}

class CVPage extends Component<Props> {
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
                                <a href="/files/Lucio-Cuddeford-CV.pdf" className="downloadLink" target="_blank" title="Download" download="" style={{
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
                                    fontSize: '2.5em',
                                }}>
                                    Lucio<br />Cuddeford
                                </h1>
                                <h3 style={{
                                    marginTop: -5,
                                    marginBottom: 30,
                                    fontFamily: 'Playfair Display',
                                    transform: 'skewX(-15deg)',
                                }}>
                                    Full Stack Engineer
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
                                    <h2>Employment</h2>

                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <span className="course">Xydrobe</span>
                                        <div className="grade">London</div>
                                        <div className="where">Independent Contractor</div>
                                        <div className="where">2024</div>
                                    </article>

                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <span className="course">OTHERWORLD</span>
                                        <div className="grade">London</div>
                                        <div className="where">Senior Full Stack Engineer</div>
                                        <div className="where">2018 — 2024</div>
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

                                    {/* <article className="educationItem" style={{ marginBottom: 15 }}>
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
                                        <span className="course">Animal Samaritans<br />Charity Shop</span>
                                        <div className="grade">Croydon</div>
                                        <div className="where">Part Time Volunteer Work</div>
                                        <div className="where">2014</div>
                                    </article> */}
                                </section>

                                <section>
                                    <h2>Education</h2>
                                    <article className="educationItem">
                                        <span className="course">BSc Creative Computing</span>
                                        <div className="grade">First Class Honours</div>
                                        <div className="where">Goldsmiths College</div>
                                        <div className="where">2013 — 2016</div>
                                    </article>
                                </section>

                                {/* <section>
                                    <h2>Referees</h2>
                                    <article className="educationItem" style={{ marginBottom: 15 }}>
                                        <div className="grade">Available on request</div>
                                    </article>
                                </section> */}
                            </div>

                            <div className="col-xs-8 CVMain">
                                <section>
                                    <h2 style={{ marginTop: 0 }}>Profile</h2>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <p style={{ margin: 0 }}>
                                                I am a <b>product-focused engineer</b> with a strong understanding of the <b>full stack</b> and a growing preference for the <b>front-end</b>. I love building things that people will actually use and I care a lot about making the user experience as enjoyable and frictionless as possible. I am a creative thinker and natural problem solver with a deliberate attention to detail.
                                            </p>
                                        </div>

                                        <div className="col-xs-6">
                                            <p style={{ margin: 0 }}>
                                                I thrive in fast paced environments where I'm given the autonomy to take ownership of projects and produce my best work, making me especially suited to <b>start-ups</b>. I also find great satisfaction in solving complex problems with other skilled engineers, such as pair programming, and I love teaching and explaining technical concepts to others.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2>Portfolio</h2>

                                    <article>
                                        <div className="row">
                                            <h3 className="subtitle">OTHERWORLD</h3>
                                            <div className="col-xs-6">
                                                <p>
                                                    <a rel="noopener noreferrer" href="https://luc.io/portfolio/#otherworld" target="_blank">OTHERWORLD</a> was a virtual reality bar and arcade where you could come with your friends to play VR, earn points, and drink together at the bar. It was an ambitious project, pioneering the format and setting the standard for VR arcades in the UK. The company raised <b>£8.7m</b> in funding and generated <b>£11m</b> in revenue.
                                                </p>

                                                <p>
                                                    My role as <b>Senior Full Stack Engineer</b> and only developer (working closely with the CEO) required me to design, architect, and develop products, key tools, and infrastructure to facilitate the VR sessions from booking to exit.
                                                </p>

                                                <p>
                                                    I trained new hires (and informally mentored one); led stand-ups; managed backlogs; and liaised with all teams (game team, leadership, front-line tech support, on-site floor staff, etc.) as I led feature and product development to ensure the tech was aligned with the needs of the staff of the customers.
                                                </p>

                                                <p>
                                                    My tech powered the business from start to end, for <b>6</b> years:
                                                    <ul>
                                                        <li>serving almost <b>400,000</b> customers (including <b>Adele</b>, <b>Skepta</b>, <b>KSI</b>, <b>Jonathan Ross</b>, <b>Yuki Tsunoda</b>, <b>Noel Clarke</b>, <b>Jesy Nelson</b>),</li>
                                                        <li>over <b>150,000</b> bookings,</li>
                                                        <li>almost <b>250,000</b> EPOS orders,</li>
                                                        <li>almost <b>6,000,000</b> internal wallet transactions, and</li>
                                                        <li>over <b>17,000,000</b> in-game achievements</li>
                                                    </ul>
                                                </p>
                                            </div>

                                            <div className="col-xs-6">
                                                <p>
                                                    <i>KRONOS</i> — the backend server and main brain. (<b>Node</b>, <b>MongoDB</b>)
                                                </p>

                                                <p>
                                                    <i>HESTIA</i> — the iPad app running on tables for guests to order food and drink using <span style={{ fontStyle: 'italic' }}>∂ DreamCoin</span> and contactless. (<b>Cordova</b>, <b>React</b>)
                                                </p>

                                                <p>
                                                    <i>ZEUS</i> — the internal website for staff to manage all aspects of the business including bookings, a complete EPOS system, table orders, customers, and most importantly the live management of ongoing VR sessions. (<b>Meteor</b>, <b>React</b>, <b>Node</b>)
                                                </p>

                                                <p>
                                                    <i>PATROKLOS</i> — the companion app (iOS & Android) for guests to track all their previous sessions, their wallet spending, leaderboards, in game navigational map, their OTHERWORLD identification,  and an avatar editor for their in-game persona. (<b>React Native</b>, <b>Expo</b>, <b>React</b>, <b>Node</b>, <b>Three.js</b>)
                                                </p>

                                                <p>
                                                    <i>HERA</i> — the background management software running on all the VR pods designed to manage and automate all operations for VR incl. starting and stopping games, assigning customers and sessions, and recording the guests in game scores. (<b>Node</b>, <b>Electron</b>)
                                                </p>

                                                <p>
                                                    <i>DIONYSUS</i> — the automated self-service beer and cocktail bar for guests, made with custom circuit boards, flow meters, solenoids, and deeply integrated into <i>KRONOS</i> and <i>ZEUS</i>. (<b>Svelte</b>, <b>Electronics</b>, <b>Arduino</b>)
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row" style={{ paddingTop: 70 }}>
                                            <div className="col-xs-6">
                                                <h3 className="subtitle">Xydrobe</h3>
                                                <p>
                                                    I facilitated the launch of Xydrobe’s immersive experience at Harrods in partnership with luxury watchmakers Vacheron Constantin. I took over and fixed their <b>Unity</b> project to enable networking between VR headsets and enable the automated multi-sensory eﬀects (scents and fans). (<b>Unity</b>, <b>Node</b>, <b>Electronics</b>)
                                                </p>

                                                <h3 className="subtitle">More</h3>
                                                <p>
                                                    <a rel="noopener noreferrer" href="https://luc.io/portfolio/" target="_blank">Portfolio</a> — You can find my other projects on my portfolio page, including the handheld synthesiser I made in 2016: <a rel="noopener noreferrer" href="https://luc.io/portfolio/#monopad" target="_blank">Monopad</a> (<b>DSP</b>, <b>Arduino</b>, <b>C++</b>, <b>Electronics</b>).
                                                </p>
                                            </div>

                                            <div className="col-xs-6">
                                                <h3 className="subtitle">Rick’s Retro</h3>
                                                <p>
                                                    <a rel="noopener noreferrer" href="https://luc.io/portfolio/#ricks-retro" target="_blank">Rick’s Retro</a> is an eCommerce site I built for independent vintage clothes business Rick’s Retro. I built everything from the ground up (products, orders, payments, etc.) and the site facilitated their business for 7 years before they migrated to a new site. It was completely custom because they needed a unique back-end flow that wasn't available off the shelf. (<b>Node</b>, <b>Express</b>, <b>MongoDB</b>, <b>jQuery</b>, <b>Redis</b>, <b>SASS</b>)
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </section>

                                <section>
                                    <h2>Skills</h2>

                                    <div className="row">
                                        <div className="col-xs-6">
                                            <h3 className="subtitle">Technologies</h3>
                                            <p>
                                                Most confident with: <b>JavaScript (TypeScript)</b>, <b>Node</b>, <b>MongoDB</b>, <b>React</b>, <b>AWS</b>, <b>GCP</b>
                                            </p>
                                            <p>
                                                Experience with and exposure to: <b>React Native</b>, <b>Expo</b>, <b>C++</b>, <b>C#</b>, <b>Python</b>, <b>Svelte</b>, <b>Web3</b>, <b>Solana Blockchain</b>, <b>Solidity</b>, <b>Unity3D</b>, <b>Unreal Engine</b>, <b>Three.js</b>, <b>MySQL</b>
                                            </p>
                                        </div>
                                        <div className="col-xs-6">
                                            <h3 className="subtitle">Interests and Hobbies</h3>
                                            <p>
                                                I love art, painting, and photography and I spend a lot time taking and editing photos. At the end of each year I print my favourite photos from the year into a hardback photobook. I love travelling and hiking, having recently spent 5 months in Indonesia and India.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <h3 className="subtitle">Communication</h3>
                                            <p>
                                                Articulate with excellent communication skills and high verbal intelligence.
                                                Strong attention to detail and keen to find elegant solutions to problems.
                                            </p>
                                        </div>
                                        <div className="col-xs-6">
                                            <h3 className="subtitle">Languages</h3>
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
