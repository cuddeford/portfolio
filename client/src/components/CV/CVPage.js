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
                                    'z-index': 1000,
                                    'position': 'relative',
                                    'float': 'left',
                                    'margin-right': '-50px',
                                    'margin-bottom': '-50px',
                                    'font-size': '14pt'
                                }}>
                                    <div class="download fa fa-download"></div>
                                </a>
                                
                                <img src="/images/face.jpg" />
                                <h1 style={{ fontWeight: 'bold' }}>Lucio Cuddeford</h1>
                                <h3 style={{ marginTop: -5, marginBottom: 30, fontFamily: 'Playfair Display', transform: 'skewX(-15deg)' }}>Programmer & Artist</h3>
                                
                                <ul class="list-unstyled contactList">
                                    <li>
                                        <i class="fa fa-envelope"></i>
                                        <span> </span>
                                        
                                        <a href="mailto:hello@luc.io">
                                            <span class="link">hello<span style={{
                                                transform: 'translateY(-2px)',
                                                display: 'inline-block'
                                            }}>@</span>luc.io</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i class="fa fa-phone"></i>
                                        <span> </span>
                                        
                                        <a tel="07783400858">
                                            <span class="link">07783400858</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i class="fa fa-globe"></i>
                                        <span> </span>

                                        <a href="http://luc.io" target="_blank">
                                            <span class="link">luc.io</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i class="fab fa-linkedin"></i>
                                        <span> </span>

                                        <a href="http://linkedin.com/in/luciocuddeford" target="_blank">
                                            <span class="link">luciocuddeford</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i class="fab fa-instagram"></i>
                                        <span> </span>

                                        <a href="http://instagram.com/luc.io" target="_blank">
                                            <span class="link"><span style={{
                                                transform: 'translateY(-2px)',
                                                display: 'inline-block'
                                            }}>@</span>luc.io</span>
                                        </a>
                                    </li>
                                </ul>
                                
                                <section>
                                    <h2>Education</h2>
                                    <article class="educationItem">
                                        <span class="course">BSc Creative Computing</span>
                                        <div class="grade">First Class Honours</div>
                                        <div class="where">Goldsmiths College</div>
                                    </article>
                                    <article class="educationItem">
                                        <span class="course">A-Levels</span>
                                        <div class="grade">Maths (B), Spanish (B), Film Studies (B)</div>
                                        <div class="where">Wimbledon College</div>
                                    </article>
                                    <article class="educationItem">
                                        <span class="course">GCSEs</span>
                                        <div class="grade">10 including: Maths (A), English Language (A), Spanish (A)</div>
                                        <div class="where">Wimbledon College</div>
                                    </article>
                                </section>
                                
                                <section>
                                    <h2>Referees</h2>
                                    <article class="educationItem" style={{marginBottom: 15}}>
                                        <div class="course">Atul Banerjee</div>
                                        <div class="grade">Managing Director, ABE Associates</div>
                                        <i class="fa fa-envelope"></i>
                                        <span> </span>
                                        <a href="mailto:atul@abeassociates.co.uk">
                                            <span class="link">atul<span style={{
                                                transform: 'translateY(-2px)',
                                                display: 'inline-block'
                                            }}>@</span>abeassociates.co.uk</span>
                                        </a>
                                        
                                        <br />
                                        
                                        <i class="fa fa-phone"></i>
                                        <span> </span>
                                        <a tel="07740942087">
                                            <span class="link">07740942087</span>
                                        </a>
                                    </article>

                                    <article class="educationItem">
                                        <div class="course">Dr. Mick Grierson</div>
                                        <div class="grade">Reader, Goldsmiths College</div>
                                        <i class="fa fa-envelope"></i>
                                        <span> </span>
                                        <a href="mailto:m.grierson@gold.ac.uk">
                                            <span class="link">m.grierson<span style={{
                                                transform: 'translateY(-2px)',
                                                display: 'inline-block'
                                            }}>@</span>gold.ac.uk</span>
                                        </a>
                                        
                                        <br/>
                                        
                                        <i class="fa fa-phone"></i>
                                        <span> </span>
                                        <a tel="02070785139">
                                            <span class="link">02070785139</span>
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
                                                    <a rel="noopener noreferrer" href="http://luc.io/portfolio/#ricks-retro" target="_blank">Rick’s Retro</a> - My most noteworthy project. An eCommerce site built for independent vintage clothes business Rick’s Retro. Technology stack: <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, <b>jQuery</b>, and <b>SASS</b>. The site was entirely built and mostly designed by me.
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
                                    
                                            <article class="educationItem">
                                                <span class="course">Freelance</span>
                                                <div class="grade">Wimbledon</div>
                                                <div class="where">Freelance web developer since 2016</div>
                                            </article>
                                            
                                            <article class="educationItem">
                                                <span class="course">Lu-Ma Restaurant</span>
                                                <div class="grade">Wimbledon</div>
                                                <div class="where">Part Time Chef Assistant</div>
                                            </article>
                                            
                                            
                                        </div>
                                    
                                        <div className="col-xs-12 col-sm-4">
                                            <article class="educationItem">
                                                <span class="course">FARA Charity Shop</span>
                                                <div class="grade">Wimbledon</div>
                                                <div class="where">Part Time Volunteer Work</div>
                                            </article>
                                            
                                            <article class="educationItem">
                                                <span class="course">Animal Samaritans Charity Shop</span>
                                                <div class="grade">Croydon</div>
                                                <div class="where">Part Time Volunteer Work</div>
                                            </article>
                                        </div>
                                        
                                        <div className="col-xs-12 col-sm-4">
                                            
                                            <article class="educationItem">
                                                <span class="course">Sportcal</span>
                                                <div class="grade">Wimbledon</div>
                                                <div class="where">Work Experience</div>
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