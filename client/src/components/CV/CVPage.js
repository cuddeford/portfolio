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
                <div className="CVWrapper">
                    <div className="CVContent container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 CVSidebar">
                                <a href="/files/LucioCuddeford-CV.pdf" className="downloadLink" target="_blank" title="Download" download="" style={{
                                    'zIndex': 1000,
                                    'position': 'relative',
                                    'float': 'left',
                                    'marginRight': '-50px',
                                    'marginBottom': '-50px',
                                    'fontSize': '14pt'
                                }}>
                                    <div className="download fa fa-download"></div>
                                </a>
                                
                                <img src="/images/face.jpg" />
                                <h1 style={{ fontWeight: 'bold' }}>Lucio Cuddeford</h1>
                                <h3 style={{ marginTop: -5, marginBottom: 30, fontFamily: 'Playfair Display', transform: 'skewX(-15deg)' }}>Programmer & Artist</h3>
                                
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

                                        <a href="http://luc.io" target="_blank">
                                            <span className="link">luc.io</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fab fa-linkedin"></i>
                                        <span> </span>

                                        <a href="http://linkedin.com/in/luciocuddeford" target="_blank">
                                            <span className="link">luciocuddeford</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fab fa-instagram"></i>
                                        <span> </span>

                                        <a href="http://instagram.com/luc.io" target="_blank">
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
                                    <article className="educationItem" style={{marginBottom: 15}}>
                                        <div className="course">Atul Banerjee</div>
                                        <div className="grade">Managing Director, ABE Associates</div>
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
                                        <div className="grade">Reader, Goldsmiths College</div>
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
                                                A variety of subjects interest me and I am currently exploring web development. Creative Computing at Goldsmiths equipped me with the tools I need to make use of both my creativity and my technicality.
                                            </p>
                                        </div>
                                        
                                        <div className="col-xs-12 col-sm-6">
                                            <p>
                                                This allows me to work with the full stack, including design, front-end, and back-end. I am keen to develop my skills and I welcome new challenges.
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
                                                    <a rel="noopener noreferrer" href="http://luc.io/portfolio/#ricks-retro" target="_blank">Rick’s Retro</a> - My most noteworthy project. An eCommerce site built for independent vintage clothes business Rick’s Retro. Technology stack: <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, <b>jQuery</b>, <b>Redis</b>, and <b>SASS</b>. The site was entirely built and mostly designed by me.
                                        </p>
                                            </div>
                                        
                                            <div className="col-xs-12 col-sm-6">
                                                <p>
                                                    <a rel="noopener noreferrer" href="http://luc.io/portfolio/#this-website" target="_blank">Portfolio</a> - My other projects are available to browse on my portfolio website which was written in <b>JavaScript</b> with <b>React</b> and <b>Node.js</b> with <b>Express</b>. The projects are stored in a <b>MongoDB</b> database and can be modified, added and deleted via an API.
                                        </p>
                                            </div>
                                        </div>
                                                
                                    </article>
                                        
                                    <br />
                                    
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6">
                                            <p>
                                                My course at Goldsmiths involved a wide range of modules including: Web Programming, Databases And The Web, Advanced Audio-Visual Processing, Perception and Multimedia, Advanced Graphics and Animation, and Physical Computing. Several practical projects included:
                                    </p>
                                            <p>
                                                <a href="/portfolio/#monopad" target="_blank">Monopad</a> - My final year project involved creating a handheld hybrid analogue / digital sound synthesiser designed
                                            </p>
                                        </div>
                                    
                                        <div className="col-xs-12 col-sm-6">
                                            <article>
                                                <p>
                                                    to take advantage of the ergonomics of typical game controllers. Written in <b>C++</b> on the Teensy 3.2 development board. This project was selected for the Goldsmiths College Computing &amp; Digital Arts Exhibition in 2016.
                                        </p>
                                            </article>
                                    
                                            <article>
                                                <p>
                                                    <a href="/portfolio/#helix" target="_blank">Helix</a> - A polyphonic synthesiser played over MIDI. Written in <b>openFrameworks</b> (<b>C++</b>) with the Maximilian synthesis library.
                                        </p>
                                            </article>
                                        </div>
                                    </div>
                                        
                                </section>
                                
                                <section>
                                    <h2>Skills</h2>
                                    
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6">
                                            <h3>Technologies</h3>
                                            <p>
                                                JavaScript, Node.js, MongoDB, HTML, (S)CSS, React, Processing, Java, C++, Bootstrap, PHP, MySQL, DSP, openFrameworks, Unity3D, C#, UNIX, Python, Arduino & Electronics, Photoshop, Illustrator, Premiere.
                                            </p>
                                            
                                            <h3>Communication</h3>
                                            <p>
                                                Articulate with good communication skills.
                                                Strong attention to detail and keen to find elegant solutions to problems.
                                            </p>
                                            
                                            <h3>Languages</h3>
                                            <p>
                                                English (native), Italian (fluent), Spanish (basic conversational).
                                            </p>
                                        </div>
                                            
                                        <div className="col-xs-12 col-sm-6">
                                            <h3>Interests and Hobbies</h3>
                                            <p>
                                                I love art and photography and I spend a lot of my time painting. I enjoy programming in my spare time and I am also interested in fundamental science (eg astronomy and quantum theory) and cutting-edge technology. If I'm not painting or programming I have my nose buried in a book.
                                            </p>
                                            
                                            <h3>Sports</h3>
                                            <p>
                                                Cycling and running are the two sports I engage in most frequently. Snowboarding is the one I enjoy most.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                
                                <section>
                                    <h2>Employment</h2>
                                    
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-4">
                                    
                                            <article className="educationItem">
                                                <span className="course">Rick’s Retro</span>
                                                <div className="grade">London</div>
                                                <div className="where">Full Stack Developer</div>
                                            </article>
                                    
                                            <article className="educationItem">
                                                <span className="course">Freelance</span>
                                                <div className="grade">Wimbledon</div>
                                                <div className="where">Freelance web developer since 2016</div>
                                            </article>
                                        </div>
                                    
                                        <div className="col-xs-12 col-sm-4">
                                            <article className="educationItem">
                                                <span className="course">Lu-Ma Restaurant</span>
                                                <div className="grade">Wimbledon</div>
                                                <div className="where">Part Time Chef Assistant</div>
                                            </article>

                                            <article className="educationItem">
                                                <span className="course">FARA Charity Shop</span>
                                                <div className="grade">Wimbledon</div>
                                                <div className="where">Part Time Volunteer Work</div>
                                            </article>
                                        </div>
                                        
                                        <div className="col-xs-12 col-sm-4">
                                            <article className="educationItem">
                                                <span className="course">Animal Samaritans Charity Shop</span>
                                                <div className="grade">Croydon</div>
                                                <div className="where">Part Time Volunteer Work</div>
                                            </article>

                                            <article className="educationItem">
                                                <span className="course">Sportcal</span>
                                                <div className="grade">Wimbledon</div>
                                                <div className="where">Work Experience</div>
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