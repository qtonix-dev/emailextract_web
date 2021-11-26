import React, { Component } from 'react'
import Body from './components/Body'
import Head from 'next/head'
import { Container, Row, Col, Form, Table, Carousel, Card, Button } from 'react-bootstrap'
import Freedemo from './components/aboutus/Freedemo'
import { FaMinus, FaPlus } from "react-icons/fa"
import Faq from "react-faq-component";
import { Rating } from 'react-simple-star-rating'
import Link from 'next/link'


//=======FAQ=======//
const data = {
    // title: "FAQ (How it works)",
    rows: [
        {
            title: "Why do I need to verify Email?",
            content: <p>For an effective email marketing process, it is very important to verify the existence of 
            an email address so as to acquire a new subscriber. For this, you invest lots of time and money to 
            buy an email list from 3rd party vendors. But you are not sure whether these contact emails are 
            authentic enough to deliver your marketing campaign or not. If you send email messages to fake email 
            addresses, the bounce-back email ratio will increase and have a negative impact on your mail server’s 
            reputation. That’s why identifying and removing invalid 
            email addresses are essential to protect your email reputation and bounce-free email campaigns.
            <br /><br />By verifying email lists with our Email Extract Online tool, you can improve many of your options, such as:
                <ul>
                    <li>•	Open Rates</li>
                    <li>•	Bounce Rates</li>
                    <li>•	Click-Through Rates</li>
                    <li>•	Conversion Rates</li>
                </ul>
            </p>,
        },
        {
            title: "How accurate is the Email Extract Online?",
            content:
                "The Email Extract Online uses the most comprehensive database of public email addresses to find the correct contact information. All the email addresses go through an email verification process before being returned. The email addresses with a green shield mean they have been checked and found deliverable. You can use them safely and those email addresses with red shields are either unauthorized or are not in use. "
                ,
        },
        {
            title: "Can you verify Bulk emails at once?",
            content: `Yes, with the bulk extraction feature, you can verify an unlimited number of emails within seconds. `,
        },
        {
            title: "How protected are my emails, which I upload on your software, or do you share with any 3rd party?",
            content: "It's 100% protected and safe. Any emails you upload into our software can only be accessed by you after login, and we don’t have any access to that as it gets stored in your storage.",
        },
    ],
};
const data1 = {
    // title: "FAQ (How it works)",
    rows: [
        {
            title: "How fast is your email extraction tool?",
            content: `It’s absolutely super-fast and quick, which extracts and verifies emails within seconds on your PC.
            Note: The performance and speed also depend on your PC as well.`,
        },
        {
            title: "Do you offer a free trial to test the tool before buying it?",
            content:
                <ul className="listing-faq">
                    <li>•	<b>10</b> Total Domain Search</li>
                    <li>•	<b>10</b> Total Email Search</li>
                    <li>•	<b>10</b> Total Email Verification</li>
                    <li>•	<b>15000</b> Bulk Domain Search</li>
                    <li>•	<b>500</b> Bulk Domain Upload</li>
                    <li>•	Unlimited Results</li>
                    <li>•	Unlimited Storage for free per user</li>
                </ul>,
        },
        {
            title: "What should I do if the Email Finder doesn't return any result?",
            content: 
            <p>If the Email Finder can&quot;t find the email address, we recommend you to verify the following elements:
                
            </p>
        },
        {
            title: "Why choose Email Extract Online over other email extract tools?",
            content: "We started Email Extract Online because we found that other similar services were charging a lot of money for data that is either publicly available on the internet or not authorized. Our goal is to help YOU find suitable leads and build a million-dollar business, and to do that you need to save time and as much money as you can. We want to bring people together so that they can provide value for each other, and we plan on doing that by providing the best Email Extract Online tool ever.",
        },
    ],
};
const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "+",
    // tabFocus: true
};
//=======FAQ=======//

export class compare extends Component {
    render() {
        return (
            <Body>
                <Head>
                    <title>Compare</title>
                </Head>
                {/* 
                =============================================
                    Fancy Hero Five
                ============================================== 
                */}
                    <div className="fancy-hero-five">
                    
                    <div className="bg-wrapper">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12 m-auto text-center compare-main">
                            <h1 className="heading compare-section-title">
                                <span>EMAIL EXTRACT Is A Nifty Tool That Lets You Extract A Large Number Of Emails</span>
                            </h1>
                                <p>Get email addresses in text, web pages, and data files. Using EMAIL EXTRACT tool, you will be able to find a lot of email addresses to send emails to. The application lets you extract bulk emails from different sources. You can 
                                    extract emails from social media, like Facebook and Twitter, websites including Yelp, and email accounts. </p>
                                <p>Whether you are in need of a reliable crawler to extract the email addresses of your potential prospects or customers from a legitimate 
                                    source, like from the websites, text, data files, then EMAIL EXTRACT is a good choice for you. </p>
                            </div>
                        </div>
                        </div>
                    </div> 
                    </div> 

                    <Container>
                        <div className="compare-section-first">
                            <h2 className="heading text-center pb-5">Recommended by industry experts</h2>
                            <Row>
                                <Col sm={3} className="mt-3">
                                    <div className="compare-first">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/cjyh4slij00ej4zfzt7jm8v6u-1-2x.one-half.png" alt="email" className="w-50 text-center" />
                                        <p>Gartner Magic Quadrant 2021 - Sales Force Automation</p>
                                    </div>
                                </Col>
                                <Col sm={3} className="mt-3">
                                    <div className="compare-first">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/cksrja4qtaby4anfzxvtvphqg-medal-1.one-half.png" alt="email" className="w-50 text-center" />
                                        <p>G2 Crowd CRM Software Leader 2021</p>
                                    </div>
                                </Col>
                                <Col sm={3} className="mt-3">
                                    <div className="compare-first">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/cksskhytfji37ayfzrfqd5fik-ga-badge.one-half.png" alt="email" className="w-50 text-center" />
                                        <p>GetApp CRM Software Leaders 2021</p>
                                    </div>
                                </Col>
                                <Col sm={3} className="mt-3">
                                    <div className="compare-first">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/cksskj46hji72ayfzdciky9ah-sa-badge.one-half.png" alt="email" className="w-50 text-center" />
                                        <p>Software Advice CRM Front Runners 2021</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="freshnessCrm text-center">
                            <h3 className="pb-3">A Powerful & Lightweight Tool Designed For Business Use </h3>
                            <p>You might be wondering why EMAIL EXTRACT? Why not another one? The tool can identify the country of origin by examining the website and email domains. This easy-to-use tool will suit your needs 
                                perfectly for email extraction utilizing filtering rules and find any email with the click of a mouse! </p>
                            {/* <p>So, why is Freshsales a better option? </p> */}
                        </div>
                        <div className="compare-section-second">
                            <h2>Why Email Extract Online is a better alternative</h2>
                            <Row>

                                <Col sm={4} className="mt-3">
                                    <div className="compare-second py-5 px-2 text-center">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/ckgh0vvmb07syhug1bz4b6e9p-provide-unified-customer-experiences.svg" alt="email" />
                                        <h4>A single, comprehensive solution</h4>
                                        <p>Freshsales is not a bundle of standalone products. Instead, you get a comprehensive all-in-one solution for sales and marketing teams. </p>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-3">
                                    <div className="compare-second py-5 mb-5 text-center">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/cjz2fxoil05p9qnfzuh058xrc-support.full.png" alt="email" />
                                        <h4>Reliable support</h4>
                                        <p>Get 24/5 free support over the phone, chat, or email from our in-house product experts, regardless of your subscription plan.</p>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-3">
                                    <div className="compare-second py-5 mb-5 text-center">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/cjwbrlayh00itsfg065hbnxex-easy-to-setup.svg" alt="email" />
                                        <h4>Highly scalable</h4>
                                        <p>Start with an entry plan and select a higher plan seamlessly as your business grows. </p>
                                    </div>
                                </Col>
                                
                            </Row>
                        </div>
                        <div className="our-customer-compaire d-none">
                            <h3 className="pb-5">What our customers say about us</h3>
                            <div className="customer-compaire-testimonial">
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <Card style={{ width: '75%' }}>
                                    
                                    <Card.Body>
                                        <Card.Title>chargebee logo</Card.Title>
                                        <Card.Text>
                                        “We initially had Salesforce CRM but didn&quot;t really use it. The instance was incredibly complicated because it allows for so much customization that you end up doing nothing. When we explored Freshsales (formerly Freshworks CRM), the first thing I remember saying is, okay, the interface is clean and simple.”
                                        </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                        <h4 className="pb-2">Germain Brion</h4>
                                        <p>VP of Sales Chargebee</p>
                                    </Card.Body>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card style={{ width: '75%' }}>
                                    
                                    <Card.Body>
                                        <Card.Title>chargebee logo</Card.Title>
                                        <Card.Text>
                                        “We initially had Salesforce CRM but didn’t really use it. The instance was incredibly complicated because it allows for so much customization that you end up doing nothing. When we explored Freshsales (formerly Freshworks CRM), the first thing I remember saying is, okay, the interface is clean and simple.”
                                        </Card.Text>
                                       
                                        <h4 className="pb-2">Germain Brion</h4>
                                        <p>VP of Sales Chargebee</p>
                                    </Card.Body>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card style={{ width: '75%' }}>
                                    
                                    <Card.Body>
                                        <Card.Title>chargebee logo</Card.Title>
                                        <Card.Text>
                                        “We initially had Salesforce CRM but didn’t really use it. The instance was incredibly complicated because it allows for so much customization that you end up doing nothing. When we explored Freshsales (formerly Freshworks CRM), the first thing I remember saying is, okay, the interface is clean and simple.”
                                        </Card.Text>
                                        
                                        <h4 className="pb-2">Germain Brion</h4>
                                        <p>VP of Sales Chargebee</p>
                                    </Card.Body>
                                    </Card>
                                </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <div className="our-customer-freesales">
                            <h3>Email Extract Online vs Hunter.io vs Prospect.io vs Anymailfindier</h3>
                            <Table striped bordered hover size="sm">
                                <thead className="customer-freesales-table">
                                    <tr>
                                    <th className="sec-left">CRITERIA</th>
                                    <th className="text-center sec-middle">Email Extract Online</th>
                                    <th className="text-center sec-middle">Hunter.io</th>
                                    <th className="text-center sec-middle">Prospect.io</th>
                                    <th className="text-center sec-middle">Anymailfindier</th>
                                    </tr>
                                </thead>
                                <tbody className="customer-freesales-table-tbody">
                                    <tr>
                                    <td className="sec-left">Free trial</td>
                                    <td className="text-center"></td>
                                    <td className="text-center">25 requests/mo</td>
                                    <td className="text-center"></td>
                                    <td className="text-center">90 verified emails</td>
                                    </tr>
                                    <tr>
                                    <td className="sec-left">Most popular plan price</td>
                                    <td className="text-center"></td>
                                    <td className="text-center">$399 per 30,000 emails</td>
                                    <td className="text-center">$149 per 1,000 credits</td>
                                    <td className="text-center">$149 per 10,000 emails</td>
                                    </tr>
                                    <tr>
                                    <td className="sec-left">Price per email</td>
                                    <td className="text-center"></td>
                                    <td className="text-center">0.0133</td>
                                    <td className="text-center">0.149</td>
                                    <td className="text-center">$0.01 </td>
                                    </tr>
                                    <tr>
                                    <td className="sec-left">Available as</td>
                                    <td className="text-center"></td>
                                    <td className="text-center">Web app, Chrome extension</td>
                                    <td className="text-center">Web app, Chrome extension</td>
                                    <td className="text-center">Web app</td>
                                    </tr>
                                    <tr>
                                    <td className="sec-left">Rating in Chrome Web Store</td>
                                    <td className="text-center"></td>
                                    <td className="text-center">4.7</td>
                                    <td className="text-center">4.3</td>
                                    <td className="text-center sec-hifen"><FaMinus /></td>
                                    </tr>
                                    <tr>
                                    <td className="sec-left">Teamwork</td>
                                    <td className="text-center sec-hifen"><FaPlus /></td>
                                    <td className="text-center sec-hifen"><FaPlus /></td>
                                    <td className="text-center">Starting at $29/mo per user</td>
                                    <td className="text-center sec-hifen"><FaPlus /></td>
                                    </tr>
                                    <tr>
                                    <td className="sec-left">Data export</td>
                                    <td className="text-center"></td>
                                    <td className="text-center">CSV, TXT</td>
                                    <td className="text-center">CSV</td>
                                    <td className="text-center">CSV</td>
                                    </tr>
                                    <tr>
                                    <td className="sec-left">Charging for duplicates</td>
                                    <td className="text-center sec-hifen"><FaMinus /></td>
                                    <td className="text-center sec-hifen"><FaMinus /></td>
                                    <td className="text-center">Undisclosed</td>
                                    <td className="text-center sec-hifen"><FaMinus /></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>Note: Data as of 20th November 2020</p>
                            <div className="freesales-btn">
                            <Link href='/login'>Try For Free</Link>
                                <a>Feature Comparision</a>
                            </div>
                        </div>
                        <section>
                            <div className="alternative-section">
                                <h3>3 reasons why Email Extract Online is the best alternative</h3>
                            </div>
                            <Row className="py-5">
                                <Col sm={5} className="mt-3">
                                    <div className="alternative-section-inner">
                                        <h3>Unified customer experience</h3>
                                        <p>EMAIL EXTRACT is for all sized businesses- small, medium and large those want to generate email lists from different sources. It can easily clean out active email addresses from any text, content or websites, and compile all email addresses into one user-friendly list. A powerful and lightweight tool especially designed to 
                                            extract active email addresses. Clear and structure your email addresses for 100% delivery!</p>
                            
                                    </div>
                                </Col>
                                <Col sm={7} className="mt-3">
                                    <img src="https://website-assets-fw.freshworks.com/attachments/cks0defd0053otsg03163hh6p-fsa-analytics-dashboard.one-half.png" alt="img-email" />
                                </Col>
                            </Row>
                            <Row className="py-5">
                                <Col sm={7} className="mt-3">
                                    <img src="https://website-assets-fw.freshworks.com/attachments/cks4ef4yu02zx74fzoovd0bso-104-b.one-half.png" alt="img-email" />
                                </Col>
                                <Col sm={5} className="mt-3">
                                    <div className="alternative-section-inner">
                                        <h3>Telephony</h3>
                                        <p>Once you add the URLs, EMAIL EXTRACT will start harvesting hundreds of thousands of relevant active email addresses from them, 
                                            and will present to you. The tool will surely make your work even much easier than before!  </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="py-5">
                                
                                <Col sm={5} className="mt-3">
                                    <div className="alternative-section-inner">
                                        <h3>Get AI-powered insights</h3>
                                        <p>The tool really works as magic. It will greatly enhance the efficiency of your email marketing campaign. It will save hours to get prospects email addresses from the Internet. Simply insert your source text, like web pages, text, and data files etc. that includes the emails in provided text-box. 
                                            Now, click the EXTRACT BUTTON, and you will get a clean list of active email addresses.</p>
                                
                                    </div>
                                </Col>
                                <Col sm={7} className="mt-3">
                                    <img src="https://website-assets-fw.freshworks.com/attachments/cks0defd0053otsg03163hh6p-fsa-analytics-dashboard.one-half.png" alt="img-email" />
                                </Col>
                            </Row>
                            <div className="better-alternative">
                                <h3>Think Email Extract Online is a better alternative ? Give it a spin today.</h3>
                                <a>Try Email Extract Online for free</a>
                            </div>
                        </section>
                        </Container>
                        <section className="freshness-comparision-main-section">
                        <Container>
                            <div className="freshness-comparision">
                                <h3 className="text-center">Email Extract Online vs Hunter.io vs Prospect.io vs Anymailfindier</h3>
                            </div>
                            <div className="row">
                                        <div className="col-12">
                                        <Faq
                                            data={data}
                                            styles={styles}
                                            config={config}
                                        />
                                        </div>
                                        <div className="col-12">
                                        <Faq
                                            data={data1}
                                            styles={styles}
                                            config={config}
                                        />
                                        </div>
                            </div>
                            <p className="mt-5"><b>Data as of: 20th November 2020</b></p>
                            <button className="free-signup text-center">Sign up for free</button>
                            </Container>
                        </section>
                        <section className="businesses-world">
                        <Container>
                            <h3 className="text-center">Trusted by businesses worldwide</h3>
                            <ul>
                                <li><img src="http://localhost:3000/images/iconsmain/trips-travel-logo.png" alt="img-responsive" /></li>
                                <li><img src="http://localhost:3000/images/iconsmain/Adecco.png" alt="img-responsive" /></li>
                                <li><img src="http://localhost:3000/images/iconsmain/bitcanny.png" alt="img-responsive" /></li>
                                <li><img src="http://localhost:3000/images/iconsmain/icon-home-travel.png" alt="img-responsive" /></li>
                                <li><img src="http://localhost:3000/images/iconsmain/prisa.png" alt="img-responsive" /></li>
                                <li><img src="http://localhost:3000/images/iconsmain/icon-home-img1.png" alt="img-responsive" /></li>
                            </ul>
                        </Container>
                        </section>
                        <section className="free-section-demo-compare">
                            <Container>
                                <Freedemo />
                            </Container>
                            
                        </section>
                        
                    
            </Body>
        )
    }
}

export default compare
