import React, { Component } from 'react'
import Body from './components/Body'
import Head from 'next/head'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Freedemo from './components/aboutus/Freedemo'
import { FaCheck } from "react-icons/fa"
import axios from 'axios'

export class compare extends Component {

    static async getInitialProps({query}) {
        var data ={query};
            const response = await axios.get(`${process.env.backendURL}/page/viewpagedetails/625d3808272e4815836037a1`);

        return{
            seo:response.data.data
        }
    }

    render() {
        return (
            <Body>
                <Head>
                <title>{this.props.seo.metatitle}</title>
                    <meta name="description" content={this.props.seo.metadesc} />
                    <meta name="keywords" content={this.props.seo.metakey} />
                </Head>
                {/* 
                =============================================
                    Fancy Hero Five
                ============================================== 
                */}
                    <div className="fancy-hero-five fancy-hero-five-features">
                    {/* <img src="images/shape/95.svg" alt="" className="shapes shape-one" />
                    <img src="images/shape/96.svg" alt="" className="shapes shape-two" /> */}
                    <div className="bg-wrapper">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12 m-auto text-center compare-main feature-main title-style-five">
                            <h2 className="heading">
                                <span>Can’t decide between Ahrefs, </span>SEMrush, and Moz?
                                
                            </h2>
                                <p>Let’s be real: software comparison pages like this are usually biased. When bloggers create them, they gravitate towards the option with the best affiliate commissions.</p>
                                
                            </div>
                        </div>
                        </div>
                    </div> 
                    </div>
                    <section className="features-desc-section">
                    <Container>
                        <div className="features-section-first">
                            <Row>
                                <Col sm={4}>
                                    <div className="features-section-first-inner">
                                        <img src="https://i.ibb.co/VMY8cf4/icon-101.png" alt="img-icon" />
                                        <h3 className="my-3">Manage leads and deals</h3>
                                        <p>Get more hot leads fed straight into your sales pipelines around the clock from your custom chatbot and web forms</p>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="features-section-first-inner">
                                        <img src="https://i.ibb.co/7GZT2GW/icon-102.png" alt="img-icon" />
                                        <h3 className="my-3">Track communications</h3>
                                        <p>Track calls, emails and contact history exactly where you need to and have full visibility and control of your schedule</p>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="features-section-first-inner">
                                        <img src="https://i.ibb.co/MV37Ytt/icon-103.png" alt="img-icon" />
                                        <h3 className="my-3">Automate and grow</h3>
                                        <p>Eliminate busywork by automating repetitive administrative tasks and learn from artificial intelligence</p>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="features-section-first-inner">
                                        <img src="https://i.ibb.co/VMY8cf4/icon-101.png" alt="img-icon" />
                                        <h3 className="my-3">Insights and reports</h3>
                                        <p>Deep dive into metrics customized for your business and measure company performance against set goals</p>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="features-section-first-inner">
                                        <img src="https://i.ibb.co/7GZT2GW/icon-102.png" alt="img-icon" />
                                        <h3 className="my-3">Privacy and security</h3>
                                        <p>Have full transparency and peace of mind on when and how your business data is being used</p>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="features-section-first-inner">
                                        <img src="https://i.ibb.co/MV37Ytt/icon-103.png" alt="img-icon" />
                                        <h3 className="my-3">Mobile apps and integrations</h3>
                                        <p>Access Pipedrive from your mobile device and integrate with your favorite sales-boosting apps</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <section className="follow-feature-section-main">
                            <h2 className="text-center featureHeading">Follow up on every deal</h2>
                            <p className="px-5 py-3 text-center">Whenever you complete an activity, Pipedrive reminds you to schedule your next 
                                one. You can even automate this process so follow-ups are created for you.</p>
                            <Row>
                                <Col sm={3} className="mt-3">
                                    <div className="follow-feature-section">
                                        <img src="images/checkbox-main.png" alt="img-icon" />
                                        <p>Activity reminders keep you on top of all activities & deals</p>
                                    </div>
                                </Col>
                                <Col sm={3} className="mt-3">
                                    <div className="follow-feature-section">
                                        <img src="images/checkbox-main.png" alt="img-icon" />
                                        <p>Sync all your activities with Google Calendar</p>
                                    </div>
                                </Col>
                                <Col sm={3} className="mt-3">
                                    <div className="follow-feature-section">
                                        <img src="images/checkbox-main.png" alt="img-icon" />
                                        <p>Edit, complete and add new activities on the go</p>
                                    </div>
                                </Col>
                                <Col sm={3} className="mt-3">
                                    <div className="follow-feature-section">
                                        <img src="images/checkbox-main.png" alt="img-icon" />
                                        <p>Customize activity types to meet your needs</p>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                        <section className="follow-visual-section py-5">
                            <h2 className="pb-3 text-center featureHeading">See all deals in a visual sales pipeline</h2>
                            <Row className="mt-4">
                                <Col sm={6} className="mt-3">
                                    <img src="https://www-cms.pipedriveassets.com/half-page-images/Pipeline.svg" alt="img-visual" />
                                </Col>
                                <Col sm={6}>
                                    <div className="visual-section-inner mt-3">
                                        <p>Pipedrive&quot;s visual sales pipeline prompts you to take action, remain 
                                            organized and stay in control of the complex sales process.</p>
                                        <ul className="visual-section-inner-listing">
                                            <li><img src="images/check-1.png" alt="img-features" /> Enter, update and find all data in one view</li>
                                            <li><img src="images/check-1.png" alt="img-features" /> Enter new deals & contacts either on desktop or mobile</li>
                                            <li><img src="images/check-1.png" alt="img-features" /> Drag-and-drop deals between stages</li>
                                            <li><img src="images/check-1.png" alt="img-features" /> Connect your email and other tools - create a single data location</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                        <section className="work-anywhere">
                            <h2 className="text-center featureHeading">Work anywhere, anytime</h2>
                            <Row>
                            <Col sm={6} className="mt-3">
                                <img src="https://www-cms.pipedriveassets.com/half-page-images/Features-2.png" alt="img-visual" />
                            </Col>
                            <Col sm={6} className="mt-3">
                                    <div className="work-anywhere-section">
                                        <p>Our mobile Apps let you access your deal and contact information even when you are on the road.</p>
                                        <ul className="work-anywhere-listing">
                                            <li><img src="images/check-1.png" alt="img-features" /> Save call logging activities to your deals</li>
                                            <li><img src="images/check-1.png" alt="img-features" /> Nearby feature lets you know which clients are near you</li>
                                            <li><img src="images/check-1.png" alt="img-features" /> Schedule activities wherever you are, even when offline</li>
                                            <li><img src="images/check-1.png" alt="img-features" /> Take notes on your mobile device during a call or meeting</li>
                                            <li><img src="images/check-1.png" alt="img-features" /> Take a picture and store it under a deal or contact</li>
                                        </ul>
                                    </div>
                            </Col>
                            </Row>
                            
                        </section>
                        <section className="follow-feature-section-main">
                            <h2 className="text-center featureHeading">Bring all sales data to one place</h2>
                            <p className="px-5 py-3 text-center">Pipedrive lets you easily find all the information you need before a meeting or call. Our software is 
                            also packed with automations, integrations and innovations.</p>
                            <Row>
                                <Col sm={3} className="mt-3">
                                    <div className="follow-feature-section">
                                        <img src="images/checkbox-main.png" alt="img-icon" />
                                        <p>Import, add and update Google Contacts from Pipedrive</p>
                                    </div>
                                </Col>
                                <Col sm={3} className="mt-3">
                                    <div className="follow-feature-section">
                                        <img src="images/checkbox-main.png" alt="img-icon" />
                                        <p>Add notes and files to your deals or contacts</p>
                                    </div>
                                </Col>
                                <Col sm={3} className="mt-3">
                                    <div className="follow-feature-section">
                                        <img src="images/checkbox-main.png" alt="img-icon" />
                                        <p>Send and write emails from Pipedrive</p>
                                    </div>
                                </Col>
                                <Col sm={3} className="mt-3">
                                    <div className="follow-feature-section">
                                        <img src="images/checkbox-main.png" alt="img-icon" />
                                        <p>Enrich your data by connecting Pipedrive with your everyday tools</p>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                        <section className="work-anywhere">
                            <h2 className="text-center featureHeading">Understand how you and your team are doing</h2>
                            <Row className="mt-5">
                            <Col sm={6} className="mt-3">
                                <img src="https://www-cms.pipedriveassets.com/half-page-images/Features-3.png" alt="img-visual" className="w-100" />
                            </Col>
                            <Col sm={6} className="mt-3">
                                    <div className="work-anywhere-section">
                                        <p>Use Pipedrive&quot;s reporting to understand where you&quot;re losing deals, identify opportunities for improvement and forecast results.</p>
                                        <ul className="work-anywhere-listing">
                                            <li><img src="images/check-1.png" alt="img-features" /> See how many activities you scheduled & completed</li>
                                            <li><img src="images/check-1.png" alt="img-features" /> Learn what activities bring you the best conversion rate</li>
                                            <li><img src="images/check-1.png" alt="img-features" /> See which deals got closer to a sale</li>
                                            <li><img src="images/check-1.png" alt="img-features" /> See all won and lost deals at a glance</li>
                                            <li><img src="images/check-1.png" alt="img-features" /> Easily understand when and why you are losing deals</li>
                                        </ul>
                                    </div>
                            </Col>
                            </Row>
                            
                        </section>
                    </Container>
                        
                    </section>

                    <Container>
                        
                        <section className="free-section-demo-compare">
                            <Freedemo />
                        </section>
                        
                    </Container>
            </Body>
        )
    }
}

export default compare
