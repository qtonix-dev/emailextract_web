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
                <p>The Email Extract Online uses the most comprehensive database of public email addresses to find the correct contact information. All the email addresses go through an email verification process before being returned. The email addresses with a green shield mean they have been checked and found deliverable. You can use them safely and those email addresses with red shields are either unauthorized or are not in use.</p>
                ,
        },
        {
            title: "Can you verify Bulk emails at once?",
            content: <p>`Yes, with the bulk extraction feature, you can verify an unlimited number of emails within seconds. `</p>,
        },
        {
            title: "How protected are my emails, which I upload on your software, or do you share with any 3rd party?",
            content: <p>"It's 100% protected and safe. Any emails you upload into our software can only be accessed by you after login, and we don’t have any access to that as it gets stored in your storage."</p>,
        },
    ],
};
const data1 = {
    // title: "FAQ (How it works)",
    rows: [
        {
            title: "How fast is your email extraction tool?",
            content: <p>`It’s absolutely super-fast and quick, which extracts and verifies emails within seconds on your PC.
            Note: The performance and speed also depend on your PC as well.`</p>,
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
            <p>If the Email Finder can't find the email address, we recommend you to verify the following elements:
                
            </p>
        },
        {
            title: "Why choose Email Extract Online over other email extract tools?",
            content: <p>"We started Email Extract Online because we found that other similar services were charging a lot of money for data that is either publicly available on the internet or not authorized. Our goal is to help YOU find suitable leads and build a million-dollar business, and to do that you need to save time and as much money as you can. We want to bring people together so that they can provide value for each other, and we plan on doing that by providing the best Email Extract Online tool ever."</p>,
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
                                            <div className="title-style-five mb-4">
                                                <h2><span>EMAIL EXTRACT is a Nifty Tool</span> That Lets You Extract a Large Number of Emails</h2>
                                            </div>
                            
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
                        <div className="title-style-five">
                            <h2 className="text-center mb-4"><span>Recommended by</span> industry experts</h2>
                        </div>
                            
                            <Row>
                                <Col sm={6} md={6} lg={3} className="mt-3">
                                    <div className="compare-first">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/cjyh4slij00ej4zfzt7jm8v6u-1-2x.one-half.png" alt="email" className="w-50 text-center" />
                                        <p>Gartner Magic Quadrant 2021 - Sales Force Automation</p>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={3} className="mt-3">
                                    <div className="compare-first">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/cksrja4qtaby4anfzxvtvphqg-medal-1.one-half.png" alt="email" className="w-50 text-center" />
                                        <p>G2 Crowd CRM Software Leader 2021</p>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={3} className="mt-3">
                                    <div className="compare-first">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/cksskhytfji37ayfzrfqd5fik-ga-badge.one-half.png" alt="email" className="w-50 text-center" />
                                        <p>GetApp CRM Software Leaders 2021</p>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={3} className="mt-3">
                                    <div className="compare-first">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/cksskj46hji72ayfzdciky9ah-sa-badge.one-half.png" alt="email" className="w-50 text-center" />
                                        <p>Software Advice CRM Front Runners 2021</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="freshnessCrm text-center">
                        <div className="title-style-five">
                            <h2 className="mt-5"><span>A Powerful & Lightweight Tool</span> Designed For Business Use</h2>
                        </div>
                            
                            <p className="mt-3">You might be wondering why EMAIL EXTRACT ONLINE? Why not another one? The tool can identify the country of origin by examining the website and email domains. This easy-to-use tool will suit your needs 
                                perfectly for email extraction utilizing filtering rules and find any email with the click of a mouse! </p>
                            {/* <p>So, why is Freshsales a better option? </p> */}
                        </div>
                        <div className="compare-section-second mt-4">
                            <div className="title-style-five">
                            <h2><span>Why Email Extract Online</span> is a Better Alternative</h2>
                            </div>
                            
                            <Row>

                                <Col sm={4} className="mt-3">
                                    <div className="compare-second pt-5 pb-2 px-2 text-center">
                                        <img src="images/prospects.png" alt="email" />
                                        <h4>Free Prospects For Life</h4>
                                        <p>We give 50 credits for free every month for lifetime.</p>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-3">
                                    <div className="compare-second pt-5 pb-2 mb-5 text-center">
                                        <img src="images/easytouse.png" alt="email" />
                                        <h4>An Easy-to-use Web App</h4>
                                        <p>The best way to reach your prospects during COVID-19 is through our easy-to-use web app.</p>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-3">
                                    <div className="compare-second pt-5 pb-2 mb-5 text-center">
                                        <img src="https://website-assets-fw.freshworks.com/attachments/cjwbrlayh00itsfg065hbnxex-easy-to-setup.svg" alt="email" />
                                        <h4>Highly Scalable</h4>
                                        <p>Start with an entry plan and select a higher plan seamlessly as your business grows. </p>
                                    </div>
                                </Col>
                                
                            </Row>
                        </div>
                        <div className="our-customer-compaire d-none">
                            <div className="title-style-five">
                                <h2 className="pb-5">What our customers say about us</h2>
                            </div>
                            
                            
                            <div className="customer-compaire-testimonial">
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <Card style={{ width: '75%' }}>
                                    
                                    <Card.Body>
                                        <Card.Title>chargebee logo</Card.Title>
                                        <Card.Text>
                                        “We initially had Salesforce CRM but didn't really use it. The instance was incredibly complicated because it allows for so much customization that you end up doing nothing. When we explored Freshsales (formerly Freshworks CRM), the first thing I remember saying is, okay, the interface is clean and simple.”
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
                            <div className="title-style-five">
                            
                            <h2 className='text-center'><span>Why Email Extract Online</span> vs Hunter.io vs Prospect.io vs Anymailfindier</h2>
                            </div>
                            <Table striped bordered hover size="sm" responsive="sm">
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
                                    <td className="text-center">50 credits/mo</td>
                                    <td className="text-center">25 requests/mo</td>
                                    <td className="text-center sec-hifen"><FaMinus /></td>
                                    <td className="text-center">90 verified emails</td>
                                    </tr>
                                    <tr>
                                    <td className="sec-left">Most popular plan price</td>
                                    <td className="text-center">$49 per 200k emails</td>
                                    <td className="text-center">$399 per 30,000 emails</td>
                                    <td className="text-center">$149 per 1,000 credits</td>
                                    <td className="text-center">$149 per 10,000 emails</td>
                                    </tr>
                                    <tr>
                                    <td className="sec-left">Price per email</td>
                                    <td className="text-center">0.00024</td>
                                    <td className="text-center">0.0133</td>
                                    <td className="text-center">0.149</td>
                                    <td className="text-center">$0.01 </td>
                                    </tr>
                                    <tr>
                                    <td className="sec-left">Available as</td>
                                    <td className="text-center">Web app, Mobile app</td>
                                    <td className="text-center">Web app, Chrome extension</td>
                                    <td className="text-center">Web app, Chrome extension</td>
                                    <td className="text-center">Web app</td>
                                    </tr>
                                    <tr>
                                    <td className="sec-left">Rating in Chrome Web Store</td>
                                    <td className="text-center">4.7</td>
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
                                    <td className="text-center">CSV, TXT</td>
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
                            <Link href='/register'>Try For Free</Link>
                            <Link href='/'>Feature Comparision</Link>
                            </div>
                        </div>
                        <section>
                            <div className="alternative-section mt-2">
                                <div className="title-style-five text-center">
                                    <h2 className="pb-2 text-capitalize"><span>3 reasons why Email Extract Online</span> is the best alternative</h2>
                                </div>
                            </div>
                            <Row className="py-3">
                                <Col sm={6} className="mt-3">
                                    <div className="alternative-section-inner">
                                        <h3>Ease of use</h3>
                                        <p>We understand exactly how frustrating it is when a tool is hard to navigate. Therefore, our team of experienced and knowledgeable engineers and designers has built an intuitive, simple and visually compelling interface that can be used by the users to achieve specified goals with 
                                            effectiveness, efficiency, and satisfaction. Rest assured, our interface is engaging and satisfying to use.</p>
                            
                                    </div>
                                </Col>
                                <Col sm={6} className="mt-3">
                                    <img src="https://website-assets-fw.freshworks.com/attachments/cks0defd0053otsg03163hh6p-fsa-analytics-dashboard.one-half.png" alt="img-email" />
                                </Col>
                            </Row>
                            <Row className="py-3">
                                <Col sm={6} className="mt-3">
                                    <img src="https://website-assets-fw.freshworks.com/attachments/cks4ef4yu02zx74fzoovd0bso-104-b.one-half.png" alt="img-email" />
                                </Col>
                                <Col sm={6} className="mt-3">
                                    <div className="alternative-section-inner">
                                        <h3>24/7 support</h3>
                                        <p>Having a competent, reliable support team that you can depend on at any hour is a game-changer. Email Extract Online offers dependable, on-demand support options including 24/7 technical and remote support to users. Our knowledgeable support team is here for you at any time, regardless of 
                                            the plan, you’re on. No matter what obstacles you encounter, you’ll always find help with us by your side.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="py-3">
                                
                                <Col sm={6} className="mt-3">
                                    <div className="alternative-section-inner">
                                        <h3>Cheaper</h3>
                                        <p>With the plans generally being substantially cheaper than the competitors, Email Extract Online is a great choice for 
                                            businesses of any size that are looking for an affordable all-in-one solution to easily find prospects.</p>
                                        <p>The free-forever tier is ideal for very small businesses, as well as those wanting to give it a thorough test run. Email Extract Online is also more suitable 
                                            for companies that don’t have a dedicated sales department, since it’s affordable and easier to use.</p>
                                    </div>
                                </Col>
                                <Col sm={6} className="mt-3">
                                    <img src="https://website-assets-fw.freshworks.com/attachments/cks0defd0053otsg03163hh6p-fsa-analytics-dashboard.one-half.png" alt="img-email" />
                                </Col>
                            </Row>
                            <div className="better-alternative">
                                {/* <h3>Think Email Extract Online is a better alternative ? Give it a spin today.</h3> */}
                                <Link href="/register">Try Email Extract Online for free</Link>
                            </div>
                        </section>
                        </Container>
                        <section className="freshness-comparision-main-section pt-1">
                        <Container>
                            {/* <div className="freshness-comparision">
                                <h3 className="text-center">Email Extract Online vs Hunter.io vs Prospect.io vs Anymailfindier</h3>
                            </div> */}
                            <div className="text-center title-style-four mt-5 mb-3">
                                <div className="title-style-five">
                                    <h2><span>FAQ</span>’s</h2>
                                </div>
                                            
                                <h6>
                                    <span>Questions &amp; Answers</span>
                                </h6>
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
                            {/* <p className="mt-5"><b>Data as of: 20th November 2020</b></p> */}
                            <button className="free-signup text-center mt-5">Sign up for free</button>
                            </Container>
                        </section>
                        <section className="businesses-world">
                        <Container>
                            <h3 className="text-center">Trusted by businesses worldwide</h3>
                            <ul>
                                <li><img src="https://sharkprocessing.com/wp-content/uploads/2016/03/ipaydna.jpg" alt="img-responsive" /></li>
                                <li><img src="https://c2rio.travel/src/imgs/marca-c2rio.svg" alt="img-responsive" /></li>
                                <li><img src="https://miro.medium.com/max/886/1*B3MHHJQNh4DyAi3pg6k18g.png" alt="img-responsive" /></li>
                                <li><img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Ekwb_1.png" alt="img-responsive" /></li>
                                {/* <li><img src="images/iconsmain/prisa.png" alt="img-responsive" /></li>
                                <li><img src="images/iconsmain/icon-home-img1.png" alt="img-responsive" /></li> */}
                            </ul>
                        </Container>
                        </section>
                        <section className="free-section-demo-compare mt-5">
                            <Container>
                                <Freedemo />
                            </Container>
                            
                        </section>
                        
                    
            </Body>
        )
    }
}

export default compare
