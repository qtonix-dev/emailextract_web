import React, { Component } from 'react'
import Body from './components/Body'
import Head from 'next/head'
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap'
import Freedemo from './components/aboutus/Freedemo'
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link'
import axios from 'axios'
export default class about extends Component {

  static async getInitialProps({query}) {
    var data ={query};
        const response = await axios.get(`${process.env.backendURL}/page/viewpagedetails/625d3808272e48158360379d`);

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




<div>
  {/* 
			=============================================
				Fancy Hero Five
			============================================== 
			*/}
  <div className="fancy-hero-five">
    {/* <img src="images/shape/93.svg" alt="" className="shapes shape-one" /> */}
    {/* <img src="images/shape/94.svg" alt="" className="shapes shape-two" /> */}
    <div className="bg-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-8 col-sm-10 align-items-center">
          <div className="title-style-three title-style-five"><h2><span>About</span> Us</h2></div>
            <h6 className="heading">

              <span>Who We are </span>
            </h6>
            <p className="sub-heading">Conceptualized in mid-2021, Email Extract Online helps to hunt down professional email addresses from any website in seconds. 
            We link the people with you that matter the most for your business. Built by an experienced and knowledgeable team of engineers and designers, the Email Extract Online team is only focused on providing the best user experience possible through its simple, self-service products in order to identify future prospects with accurate and accessible data. In other words, we have built the new data backbone for modern sales and 
            marketing teams across the world, thereby helping them connect with future customers in a few clicks.
            </p>
          </div>
          <div className="col-lg-5 col-md-4 align-items-center">
            <img src="images/media/img_52.png" alt="" className="img-meta" />
          </div>
        </div>
      </div>
    </div> {/* /.bg-wrapper */}
  </div> {/* /.fancy-hero-five */}




{/*
			=====================================================
				Fancy Text Block Thirteen
			=====================================================
			*/}
<div className="fancy-text-block-thirteen pt-20 md-pt-20">
  <div className="container">
    <div className="row align-items-center pt-5">
      <div className="col-lg-6 order-lg-last" data-aos="fade-left" data-aos-duration={1200}>
        <div className="text-wrapper text-mission-sec">
          <div className="title-abt-mission">
            <div className="title-style-five">
              <h2>
                <span>Our M</span>ission
              </h2>
            </div>
          
            <p>Our mission is to provide every company with a 360-degree view of their client relationships and 
            opportunities. We believe businesses can grow with ethics, and triumph with consciousness. Herein, we 
            have aptly created an ecosystem unifying software, education, and society to assist businesses to grow 
            better each day. Thus, we empower the companies to unleash their effective marketing strategies at each 
            phase, while driving their ability to make the mark.</p>
          </div>
          {/* <div className="title-abt-mission">
          <h6 className="title-style-three">Our Vision </h6>
          <p>Our vision is to optimize the overall revenue potential of every individual.</p>
          </div> */}
          
          {/* /.title-style-two */}
          
        </div>
      </div>
      <div className="col-lg-6 col-md-8 m-auto order-lg-first" data-aos="fade-right" data-aos-duration={1200}>
        <img src="images/assets/feature-img-11.png" alt="" />
      </div>
    </div>
  </div>
</div> {/* /.fancy-text-block-thirteen */}


{/*
			=====================================================
				Fancy Text block Twelve
			=====================================================
			*/}
<div className="fancy-text-block-twelve mt-80 md-mt-80">
  <div className="container">
    <div className="row">
      <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1200}>
        <div className="text-wrapper">
          <div className="title-style-three">
            <div className="title-style-five">
              <h2 className='heading567'>
                <span>What is Our</span> Purpose
              </h2>
            </div>  
            
          </div>
          <p className="sub-text">Unlike other platforms, <b>EMAIL EXTRACT ONLINE</b> verifies email addresses in real-time. We doubly check the accuracy of the searched email. 
          Our online software offers a powerful free all-in-one freeware designed to extract accurate email addresses from distinct sources: websites, local files, and search engines. With our handy plugins, you can get contact information on LinkedIn or the company’s websites. You can simply insert the source text content, including the email addresses in the provided text box, search, and get a clean list of the unique email address. Our email extractor thus can easily clean out the valuable email addresses from any content and compiles the email addresses in one user-friendly list. </p>
          {/* <p className="sub-text">Our purpose is to be the prominent lead generation platform for any modern sales team and reduce the complexity of capturing potential leads through an easier and quicker process. This led us to create a platform that brings forth automated approaches to sales, authorizing individuals and corporate enterprises around the world to scale their sales actions. We improve our sales team’s productivity, wherein our sales team can find the right companies and accurate contact information of key in a matter of seconds. </p> */}
        </div> {/* /.text-wrapper */}
      </div>
      <div className="col-lg-5 ml-auto" data-aos="fade-left" data-aos-duration={1200}>
        <div className="img-gallery">
          <img src="images/media/img_37.png" alt="" />
          <img src="images/shape/53.svg" alt="" className="shapes shape-one" />
          <img src="images/shape/52.svg" alt="" className="shapes shape-two" />
        </div> {/* /.img-gallery */}
      </div>
    </div>
    
  </div>
</div> {/* /.fancy-text-block-twelve */}

 {/* 
			=============================================
				Fancy Text block Seventeen
			============================================== 
			*/}
  <div className="fancy-text-block-seventeen mt-20 pt-20 md-mt-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1200}>
          <div className="title-style-four">
            
            <div className="row">
              <div className="col-lg-12">
                <div className="title-style-five">
                  <h2 className="mb-3 heading567">
                    <span>Our Security</span> Compliance
                  </h2>
                </div>
                
                <p className="text-meta">We apply a globally recognized security and privacy configuration that helps to mitigate our risk and compliances. Herein, we engage the third-party certified auditors to validate our security protocols and privacy, and subsequently render us with authorized reports and certificates that will illustrate our compliances. 
          Thus, we always prioritize the security, privacy, and availability of your data.  </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-xl-6 col-lg-7 order-lg-first" data-aos="fade-right" data-aos-duration={1200}>
          
          
        </div> */}
      </div>
    </div>
  </div> {/* /.fancy-text-block-seventeen */}

{/* 
			=============================================
				Fancy Text block Seventeen
			============================================== 
			*/}
      <div className="fancy-text-block-seventeen mt-20 pt-20 md-mt-20">
      <Container>
          <div className="row">

            <div className="col-lg-125 ml-auto" data-aos="fade-left" data-aos-duration={1200}>
            <div className="title-style-four">
              <div className="title-style-five">
                <h2 className='heading567'>
                  <span>Our Core</span> Values
                </h2>
              </div>
              
              
            </div>

        </div>
        
        <Row className="mt-2 mb-3 core-values-bottom-1">
            <Col lg={4}>
              <div className="core-values mt-3 border-value">
              <img src="images/embrace.png" alt="img-value" />
                <h6 className="text-center">We Embrace Everyone</h6>
                <p className="text-center">We embrace all cultures, races, ethnicities, genders, ages, perspectives, and ways of thinking. 
                Our connection inspires the way we care for each other and our clients. </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="core-values mt-3 border-value">
                <img src="images/right.png" alt="img-value" />
                <h6 className="text-center">Do The Right Thing</h6>
                <p className="text-center">We are appreciated and admired for our commitment to honesty, trust, and transparency. We do the right thing- even when no one is watching.</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="core-values mt-3">
                <img src="images/transparency.png" alt="img-value" />
                <h6 className="text-center">Transparency by default</h6>
                <p className="text-center">We believe in a more visible and transparent world. We always promote this value in our company and also with our products and services.  </p>
              </div>
            </Col>
          </Row>
          <Row className="core-values-bottom border-top-2">
            <Col lg={4}>
              <div className="core-values mt-3 border-value">
                <img src="images/bigger.png" alt="img-value" />
                <h6 className="text-center">Think Bigger</h6>
                <p className="text-center">At Email Extract, we think big by taking all the concepts, aspirations, dreams, and goals of our potential customers to develop an effective action plan and turn them into reality.  </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="core-values mt-3 border-value">
                <img src="images/challenge.png" alt="img-value" />
                <h6 className="text-center">Challenge Everything</h6>
                <p className="text-center">As being a game-changer in email extraction, we do not take the easy way out. Rather, we create new paths and set records that have never been achieved beforehand.</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="core-values mt-3">
                <img src="images/user.png" alt="img-value" />
                <h6 className="text-center">Care for our user experience</h6>
                <p className="text-center">For each of our professional engagements, we take the experience of our users in a dignified manner & deep sincerity & do not let questions remain unresolved.</p>
              </div>
            </Col>
        </Row>
          
          
        </div>
      </Container>
    </div> {/* /.fancy-text-block-seventeen */}
  



  {/* 
			=============================================
				Fancy Text block Eighteen
			============================================== 
			*/}
  <div className="fancy-text-block-eighteen" style={{paddingBottom:'0px'}}>
    <div className="counter-info pt-50 pb-45 md-pt-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration={1200}>
            <div className="counter-box-two">
              <h2 className="number" style={{color: '#FAAA4B'}}><span className="timer" data-from={0} data-to={1200} data-speed={1500} data-refresh-interval={5}>150</span>+</h2>
              <em>Positive Review</em>
              {/* <p className="font-rubik">A place to think and <br /> track ideas</p> */}
            </div> {/* /.counter-box-two */}
          </div>
          <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}>
            <div className="counter-box-two">
              <h2 className="number" style={{color: '#36C2DB'}}><span className="timer" data-from={0} data-to={200} data-speed={1200} data-refresh-interval={5}>2</span>+</h2>
              <em>Branches</em>
              {/* <p className="font-rubik"></p> */}
            </div> {/* /.counter-box-two */}
          </div>
          <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}>
            <div className="counter-box-two">
              <h2 className="number" style={{color: '#3DB382'}}><span className="timer" data-from={0} data-to={3} data-speed={1200} data-refresh-interval={5}>1k</span>+</h2>
              <em>Work Done</em>
              {/* <p className="font-rubik">APIs, Products</p> */}
            </div> {/* /.counter-box-two */}
          </div>
        </div>
      </div>
    </div> {/* /.counter-info */}
  </div> {/* /.fancy-text-block-eighteen */}


  
  {/*
			=====================================================
				Useable Tools
			=====================================================
			*/}
  <div className="useable-tools-section bg-transparent mt-50 md-mt-50">
    <div className="container">
      <div className="title-style-three text-center mb-20 md-mb-20 sm-mb-30">
        <div className="title-style-five">
          <h2><span>Our</span> Clients</h2>
        </div>
        
        <h6 className="mt-3 useable-tools-section-h6">Who Are Using Email Extract Online
        </h6>
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-9 m-auto">
          <p className="sub-text pb-30 md-pb-50">Email Extract Online is used by 1,000,000+ professionals and leading companies worldwide.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-6" data-aos="fade-up" data-aos-duration={1200}>
          <div className="img-box bx-a">
            <a href="#"><img src="images/ipaydna.png" alt="emailicon" className="w-75" /></a>
          </div> {/* /.img-box */}
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={50}>
          <div className="img-box bx-b">
            <a href="#"><img src="images/iconsmain/Adecco.png" alt="emailicon" className="w-75" /></a>
          </div> {/* /.img-box */}
        </div>
        <div className="col-lg-3 col-md-4 col-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}>
          <div className="img-box bx-c">
            <a href="#"><img src="images/ekwb.png" alt="emailicon" className="w-75" /></a>
          </div> {/* /.img-box */}
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={150}>
          <div className="img-box bx-d">
            <a href="#"><img src="images/c2.png" alt="emailicon" className="w-75" /></a>
          </div> {/* /.img-box */}
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}>
          <div className="img-box bx-e">
            <a href="#"><img src="images/cybernetm.png" alt="emailicon" className="w-75" /></a>
          </div> {/* /.img-box */}
        </div>
       <div className="col-xl-4 col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={250}>
          <div className="img-box bx-f">
            <a href="#"><img src="https://sbsdatasystems.co.uk/wp-content/uploads/2021/02/1212111.png" alt="emailicon" className="w-75" /></a>
          </div> 
        </div>
      <div className="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}>
          <div className="img-box bx-g">
            <a href="#"><img src="images/iconsmain/trips-travel-logo.png" alt="emailicon" className="w-75" /></a>
          </div> 
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={350}>
          <div className="img-box bx-h">
            <a href="#"><img src="https://sp-ao.shortpixel.ai/client/to_webp%2Cq_glossy%2Cret_img/https://theexerciseco.com/wp-content/uploads/2021/06/logo.jpg" alt="emailicon" className="w-75" /></a>
          </div> 
        </div>
        <div className="col-xl-3 col-lg-12 col-md-4 col-6 m-auto" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={400}>
          <div className="img-box bx-i">
            <a href="#"><img src="images/iconsmain/Adecco.png" alt="emailicon" className="w-75" /></a>
          </div>
        </div> 
      </div>
    </div> {/* /.container */}
  </div> {/* /.useable-tools-section */}
 
      <div className="our-cli">
        <div className="container">
          <div className="our-cli">
            <div className="title-style-five">
              <h2><span>Who Can</span> Use</h2>
            </div>
            
            <p>Email Extract Automation Tool:</p>
            <Row>
              <Col>
                <div className="col-sec-de">
                  <img src="images/clients1.png" alt="icon" />
                  <h5>Business Owners</h5>
                  <div className="col-sec-de-check">
                    <FaCheckCircle />
                  </div>
                </div>
                
              </Col>
              <Col>
                <div className="col-sec-de">
                  <img src="images/clients2.png" alt="icon" />
                  <h5>Marketing Agencies</h5>
                  <div className="col-sec-de-check">
                    <FaCheckCircle />
                  </div>
                </div>
              </Col>
              <Col>
                <div className="col-sec-de">
                  <img src="images/clients3.png" alt="icon" />
                  <h5>Recruiters</h5>
                  <div className="col-sec-de-check">
                    <FaCheckCircle />
                  </div>
                </div>
              </Col>
              <Col>
                <div className="col-sec-de">
                  <img src="images/clients4.png" alt="icon" />
                  <h5>Sales Teams</h5>
                  <div className="col-sec-de-check">
                    <FaCheckCircle />
                  </div>
                </div>
              </Col>
            </Row>
            {/* <div className="our-cli-btn text-center"><Link href="/">Request a free demo</Link></div> */}
          </div>
        </div>
      </div>

 <br />

 </div>

                        <section className="free-section-demo-compare">
                          <br />
                          <br />

                            <Container>
                                <Freedemo />
                            </Container>
                            
                        </section>




            </Body>
        )
    }
}