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
                                <div className="title-style-seven text-center">
                                    <h2 className="heading">
                                        <span>Generate Leads & Grow  </span>Your Business
                                        
                                    </h2>
                                    <h6>Get the perfect list of your prospects in just one click</h6>
                                    <p>See for yourself why more than 10,000 companies, both big and small, choose Email Extract Online to engage with the target audience without wasting precious research time and without spending a lot of money as well.</p>
                                        {/* <p>Let’s be real: software comparison pages like this are usually biased. When bloggers create them, they gravitate towards the option with the best affiliate commissions.</p> */}
                                </div>
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
                                        <img src="images/checklist.png" alt="img-icon" />
                                        <h3 className="my-3">Get the perfect list of your prospects in just one click</h3>
                                        <p>See for yourself why more than 10,000 companies, both big and small, choose Email Extract Online to engage with the target audience without wasting precious research time and without spending a lot of money as well.</p>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="features-section-first-inner">
                                        <img src="images/time.png" alt="img-icon" />
                                        <h3 className="my-3">Saves your time</h3>
                                        <p>With this tool, you don’t need to search every webpage and verify them manually. It does the job for you instantly and in real-time while ensuring quality and deliverability. Suitable for all kinds of businesses and freelancers to generate leads and make more ROI.</p>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="features-section-first-inner">
                                        <img src="images/email.png" alt="img-icon" />
                                        <h3 className="my-3">Find emails in bulk</h3>
                                        <p>Apart from an individual email search, our email extract tool helps you find quality and hot leads in bulk with more than 98% accuracy and the more quality leads you to generate, there are more chances of desired conversions.</p>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="features-section-first-inner">
                                        <img src="images/increase.png" alt="img-icon" />
                                        <h3 className="my-3">Accurate data and Fast results</h3>
                                        <p>We have a database of over 150M business profiles, 20M company profiles along with B2b accurate data, allowing you to open closed doors and win more sales. Gather valuable intel and skyrocket your close rates with fast results.</p>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="features-section-first-inner">
                                        <img src="images/results.png" alt="img-icon" />
                                        <h3 className="my-3">Increased Open Rate</h3>
                                        <p>Our Email Extract Online tool extracts email addresses with usernames and phone numbers from web pages in seconds. As a result, you will have an Open Rate that will be higher by 32%, allowing you to increase sales as well as growth.</p>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="features-section-first-inner">
                                        <img src="images/sales.png" alt="img-icon" />
                                        <h3 className="my-3">Highest level of sales</h3>
                                        <p>Enter any name, job title, domain or verify existing emails related to your business or target audience, and the application will find relevant websites, scan them, and collect email addresses ensuring the highest level of sales to grow your business.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <section className="follow-feature-section-main">
                            <h2 className="text-center featureHeading">Over 1,50,000 Happy Clients from Freelancers to Large Enterprises</h2>
                            {/* <p className="px-5 py-3 text-center">Whenever you complete an activity, Pipedrive reminds you to schedule your next 
                                one. You can even automate this process so follow-ups are created for you.</p> */}
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
                            <h2 className="pb-3 text-center featureHeading">Find real emails</h2>
                            <Row className="mt-4">
                                <Col sm={6} className="mt-3">
                                    <img src="images/feature2.png" alt="img-visual" />
                                </Col>
                                <Col sm={6} className="align-self-center">
                                    <div className="visual-section-inner mt-3">
                                        {/* <p>Pipedrive&quot;s visual sales pipeline prompts you to take action, remain 
                                            organized and stay in control of the complex sales process.</p> */}
                                        <ul className="visual-section-inner-listing">
                                            <li><img src="images/check-1.png" alt="img-features" /> 
                                                <h5><b>Verified only</b></h5>
                                                <span>Unlike other email finders out there, Email Extract Online only shows verified emails that won’t bounce for sure.</span>
                                            </li>
                                            <li><img src="images/check-1.png" alt="img-features" />
                                            <h5><b>No Suspicious Results</b></h5>
                                            At times, you will find other email finders charging for some “suspicious” results. But Email Extract Online doesn&apos;t. The emails are only 100% verified.
                                             </li>
                                           
                                       
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                        <section className="work-anywhere">
                            <h2 className="text-center featureHeading">Accurate and Efficient</h2>
                            <Row>
                           
                            <Col sm={6} className="mt-3 align-self-center">
                                    <div className="work-anywhere-section">
                                        {/* <p>Our mobile Apps let you access your deal and contact information even when you&quot;re on the road.</p> */}
                                        <ul className="work-anywhere-listing">
                                            <li>
                                                <img src="images/check-1.png" alt="img-features" /> 
                                                <h5><b>Mass Searches</b></h5>
                                                We search billions of web pages to find the right emails and thereafter perform direct server validation.
                                            </li>
                                            
                                            <li>
                                                <img src="images/check-1.png" alt="img-features" /> 
                                                <h5><b>Enhanced Database</b></h5>
                                                We’ve managed to build an exceptional network that gets you excellent results through our efficient finder system, growing database and data partners.
                                            </li>

                                            <li>
                                                <img src="images/check-1.png" alt="img-features" /> 
                                                <h5><b>Upload & Wait</b></h5>
                                                Upload a file with up to 50,000 entries and we’ll find their emails in a few seconds while you concentrate on other tasks.
                                            </li>


                                        </ul>
                                    </div>
                            </Col>
                            <Col sm={6} className="mt-3">
                                <img src="images/feature1.png" alt="img-visual" />
                            </Col>
                            </Row>
                            
                        </section>
                        {/* <section className="follow-feature-section-main">
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
                        </section> */}
                        {/* <section className="work-anywhere">
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
                            
                        </section> */}
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
