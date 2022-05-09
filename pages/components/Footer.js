import React, { Component } from 'react'
import Link from 'next/link'
import { FaPhoneAlt, FaEnvelopeOpenText, FaAngleUp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import $ from "jquery";
import SimpleReactValidator from 'simple-react-validator'

import ReCAPTCHA from "react-google-recaptcha"
import {FiPhoneCall} from "react-icons/fi"
import {GiSelfLove} from "react-icons/gi"

export default class Footer extends Component {

    constructor(props){
        super(props)
        this.state={
          formLoading:false,
          showMessages:false,
          email:''
          
        }
        this.validator = new SimpleReactValidator();
        this.handleChange=this.handleChange.bind(this);
        
      }

      handleChange(e){
        this.setState({
          [e.target.name]:e.target.value
        })
      }


      handleSubmit=e=>{
        e.preventDefault();
        if (this.validator.allValid()){
            $("#myForm :input").prop('readonly', true);
            this.setState({formLoading:true, email:'',showMessages:true})
        } else {
          this.validator.showMessages();
          this.forceUpdate();
          $("#myForm :input").prop('readonly', false);
        }
      }



      
    render() {
        return (
            <>
                        {/*
                        =====================================================
                        Fancy Short Banner Four
                        =====================================================
                        */}
                        <div className="fancy-short-banner-four">
                            <div className="container">

                            <div className="bg-wrapper">

                            {/* <ReCAPTCHA
                                sitekey="6LdNCWgdAAAAABfgiogYFxsOU4LgySOzlMscH5FS"
                                onChange={onChange}
                            /> */}

                                <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="title">
                                    <h6>Subscribe Now</h6>
                                    <h2>Subscribe to our Newsletter</h2>
                                    </div> {/* /.title-style-one */}
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-wrapper">
                                    <form action="#" onSubmit={this.handleSubmit} className="sub-form" id="myForm12112">
                                        <input type="email" placeholder="Enter Your Email Address" name="email" value={this.state.email} onChange={this.handleChange} required/>
                                        <button>Subscribe</button>
                                    </form>
                                    {this.state.showMessages
                ?<h6 className='text-warning'>Thank you</h6>
                :<></>}
                                    <br />
                                    {/* <p className="font-rubik">Already a member? <Link href='/login'><a>Sign in.</a></Link></p> */}
                                    </div> {/* /.form-wrapper */}
                                </div>
                                </div>
                            </div> {/* /.bg-wrapper */}
                            </div> {/* /.container */}
                        </div> {/* /.fancy-short-banner-four */}
                        {/*
                                    =====================================================
                                        Footer Style Three
                                    =====================================================
                                    */}
                        <footer className="theme-footer-three pt-100">
                            <div className="top-footer">
                            <div className="container">
                                <div className="row justify-content-between">
                                <div className="col-lg-6 col-12 footer-about-widget">
                                <Link href='/'>
                                    <a className="logo">
                                        <img src="/images/email-logo-n.png" alt="img-email" className="w-50" />
                                    </a>
                                </Link>
                                </div> {/* /.about-widget */}
                                <div className="col-lg-3 col-md-4 col-6 col-sm-6 footer-list" >
                                    <h5 className="footer-title">Features</h5>
                                    <ul>
                                    <li><Link href='/'><a>Bulk Extractor</a></Link></li>
                                    <li><Link href='/'><a>Domain Search</a></Link></li>
                                    <li><Link href='/'><a>Email Finder</a></Link></li>
                                    <li><Link href='/'><a>Email Verifier</a></Link></li>
                                    </ul>
                                </div> {/* /.footer-list */}
                                <div className="col-lg-3 col-md-4 col-6 col-sm-6 footer-list">
                                    <h5 className="footer-title">Information</h5>
                                    <ul>
                                    <li><Link href='/aboutus'><a>About</a></Link></li>
                                    <li><Link href='/contactus'><a>Contact</a></Link></li>
                                    <li><Link href='/features'><a>Features</a></Link></li>
                                    <li><a href="https://stats.uptimerobot.com/LGmErCkNzZ" rel="noreferrer" target={'_blank'}>Status <img src="https://img.icons8.com/material-outlined/10/1fb141/filled-circle--v1.png" alt='status-image' style={{marginTop:'-20px',position:'absolute',marginLeft:'50px'}} /></a></li>
                                    </ul>
                                </div> {/* /.footer-list */}
                                {/* <div className="col-lg-3 col-md-4 address-list" >
                                    <h5 className="footer-title">Contact Info</h5>
                                    <div className="contact-info">
                                        
                                        <p><FaEnvelopeOpenText /> &nbsp;sales@emailextractonline.com</p>
                                        <p><FaPhoneAlt /> &nbsp;+1 (315) 293-2806</p>
                                        <p>
                                        <ul className="social-icon d-inline pt-15">
                                            <li><a href="#"><FaFacebookF /></a></li>
                                            <li><a href="#"><FaTwitter /></a></li>
                                            <li><a href="#"><FaInstagram /></a></li>
                                            <li><a href="#"><FaLinkedinIn /></a></li>
                                        </ul>
                                        </p>
                                    </div>

                                    
                                </div>  */}
                                </div> {/* /.row */}
                            </div> {/* /.container */}
                            </div> {/* /.top-footer */}
                            
                            <div className='footer-third-section'>
                                <div className="container">
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <p className='text-center'>Stay in Touch</p>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='text-center'>
                                                <a><FaEnvelopeOpenText /> &nbsp;sales@emailextractonline.com</a>&nbsp;&nbsp;
                                                <a><FiPhoneCall /> +1 (315) 293-2806</a>
                                            </p>
                                        </div>
                                        <div className='col-md-3'>
                                            <ul className='text-center socialm'>
                                                <li><a href={'https://www.facebook.com/Email-Extract-Online-102299352298570'} target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
                                                <li><a href={'https://twitter.com/EmailextractO'} target="_blank" rel="noreferrer"><FaTwitter /></a></li>
                                                <li><a href={'https://www.instagram.com/emailextractonline/'} target="_blank" rel="noreferrer"><FaInstagram /></a></li>
                                                <li><a href={'https://www.linkedin.com/in/email-extract-online-6514a2227/'} target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            
                            <div className="bottom-footer-content">
                                <div className="container">
                                    <div className="row">
                                    <div className="col-lg-12 ml-auto">
                                        <div className="d-md-flex align-items-center justify-content-between">
                                        <ul className="order-md-last" data-aos="fade-left">
                                            <li><Link href='/gdpr'><a>GDPR</a></Link></li>
                                            <li><Link href='/privacy-policy'><a>Privacy</a></Link></li>
                                            <li><Link href='/terms-and-condition'><a>Terms</a></Link></li>
                                            <li><Link href='/sitemap.html'><a>Sitemap</a></Link></li>
                                        </ul>
                                        <p className="order-md-first" data-aos="fade-right">© 2020-2022 All rights reserved. Email Extract Online - #1 Email Finding Tool · Made with <GiSelfLove /> in India</p>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* /.bottom-footer */}
                            </div>
                        </footer> {/* /.theme-footer-three */}
                        {/* Scroll Top Button */}
                        <button className="scroll-top">
                            <FaAngleUp />
                        </button> 
                        
                        
            </>
        )
    }
}
