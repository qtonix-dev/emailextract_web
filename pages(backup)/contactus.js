import React, { Component } from 'react'
import Body from './components/Body'
import Head from 'next/head'
import SimpleReactValidator from 'simple-react-validator'
import Loader from "react-loader-spinner"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import $ from 'jquery'
import { Form } from 'react-bootstrap'
import axios from 'axios'

export class contactus extends Component {

    constructor(props) {
      super(props)
      this.state={
        formLoading:false,
        
        email:''
      }
      this.validator = new SimpleReactValidator();
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({
        [e.target.name]:e.target.value
      })
      console.log(this.state)
    }

    handleSubmit=(e)=> {
      e.preventDefault();
      

      if (this.validator.allValid()){
        $("#myForm :input").prop('readonly', true);
        this.setState({formLoading:true})
      } else{
        this.validator.showMessages();
        this.forceUpdate();
        $("#myForm :input").prop('readonly', false);

      }
    }
    responseGoogle = (response) => {
      console.log(response);
    }
    render() {
        return (
            <Body>
              <Head>
                <title>Email Address Extractor - Best Email Extractor Application Free </title>
                <meta name="description" content="Ranked as the best free email extractor for the year 2022, try Email Extract Online to scrape unlimited emails and phone numbers of prospectives in seconds from various valid sources" />
                <meta name="keywords" content="best free email extractor, email address extractor, online email extractor free, email extractor from website, scrape emails from website" />
              </Head>
              
  {/* 
			=============================================
				Fancy Hero Four
			============================================== 
			*/}
  <div className="fancy-hero-four bg-doc space-fix">
    <div className="bg-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-11 col-md-10 m-auto">
            
            <div className="title-style-five">
              <h2><span>Contact</span> us</h2>
            </div>
            <h6 className="mb-5 mt-3">Feel free to contact us or just say hi!</h6>
          </div>
        </div>
      </div>
    </div> {/* /.bg-wrapper */}
  </div> {/* /.fancy-hero-four */}
  {/* 
			=============================================
				Contact Style Two
			============================================== 
			*/}
  <div className="contact-style-two mb-200">
    <div className="container">
      <div className="contact-info-wrapper">
        <div className="row justify-content-center">
          {/* <div className="col-lg-4 col-sm-6 d-lg-flex">
            <div className="address-info">
              <div className="icon d-flex align-items-end"><img src="images/icon/44.svg" alt="" /></div>
              <div className="title">Location</div>
              <p className="font-rubik">Pahala, Bhubaneswar <br /> Odisha</p>
            </div> 
          </div> */}
          <div className="col-lg-6 col-sm-6 d-lg-flex">
            <div className="address-info">
              <div className="icon d-flex align-items-end"><img src="images/icon/45.svg" alt="" /></div>
              <div className="title">Contact</div>
              <p className="font-rubik">sales@emailextractonline.com <br />+1 (315) 293-2806</p>
            </div> {/* /.address-info */}
          </div>
          <div className="col-lg-6 col-sm-6 d-lg-flex">
            <div className="address-info">
              <div className="icon d-flex align-items-end"><img src="images/icon/46.svg" alt="" /></div>
              <div className="title">Social Media</div>
              <p className="font-rubik">Find on social media</p>
              <ul className="d-flex justify-content-center socialMedia">
                <li><a href="#"><FaFacebookF /></a></li>
                <li><a href="#"><FaTwitter /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaLinkedinIn /></a></li>
              </ul>
            </div> {/* /.address-info */}
          </div>
        </div>
        <img src="images/shape/64.svg" alt="" className="shapes shape-one" />
      </div> {/* /.contact-info-wrapper */}
      <div className="row">
        <div className="col-md-5">
          <img src="images/contactimg1.png" alt="img-shape" className="w-100 mt-150" />
        </div>
        <div className="col-md-7">
          <div className="form-style-classic mt-150 md-mt-80">
          
            <form method="post" action="#" id="myForm" className="user-data-form mt-30" data-toggle="validator" onSubmit={this.handleSubmit}>
              <div className="messages" />
              <div className="row controls">
                <div className="col-md-6" data-aos="fade-right" data-aos-duration={1200}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" name="fname" value={this.state.fname} onChange={this.handleChange} />
                    <h6 className="form_error_message">{this.validator.message('firstname', this.state.fname, 'required')}</h6>
                  </Form.Group>
                  
                </div>
                <div className="col-md-6" data-aos="fade-left" data-aos-duration={1200}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" name="lname" value={this.state.lname} onChange={this.handleChange} />
                    <h6 className="form_error_message">{this.validator.message('lastname', this.state.lname, 'required')}</h6>
                  </Form.Group>
                  
                </div>
                
                <div className="col-md-6" data-aos="fade-right" data-aos-duration={1200}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <h6 className="form_error_message">{this.validator.message('email', this.state.email, 'required|email')}</h6>
                  </Form.Group>
                </div>

                <div className="col-md-6" data-aos="fade-left" data-aos-duration={1200}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="000-000-0000" name="phone" value={this.state.phone} onChange={this.handleChange} />
                    <h6 className="form_error_message">{this.validator.message('phone', this.state.phone, 'required|phone')}</h6>
                  </Form.Group>
                </div>

                <div className="col-12" data-aos="fade-up" data-aos-duration={1200}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Your Message" name="message" value={this.state.message} onChange={this.handleChange} rows={5} />
                    <h6 className="form_error_message">{this.validator.message('message', this.state.message, 'required')}</h6>
                  </Form.Group>
                </div>

                <div className="col-12" data-aos="fade-up" data-aos-duration={1200}><button className="theme-btn-six lg">Send Message</button></div>
              </div>
            </form>
          </div> {/* /.form-style-classic */}
        </div>
      </div>
      
    </div>
  </div> {/* /.contact-style-two */}
  <br/>

            </Body>
        )
    }
}

export default contactus
