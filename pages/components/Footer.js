import React, { Component } from 'react'
import Link from 'next/link'

export default class Footer extends Component {
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
                                <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="title">
                                    <h6>Subscribe Now</h6>
                                    <h2>Subscriber to our Newsletter</h2>
                                    </div> {/* /.title-style-one */}
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-wrapper">
                                    <form action="#">
                                        <input type="text" placeholder="Email address" />
                                        <button>Subscribe</button>
                                    </form>
                                    <p className="font-rubik">Already a member? <Link href='/login'><a>Sign in.</a></Link></p>
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
                                <div className="col-lg-4 col-12 footer-about-widget">
                                <Link href='/'><a className="logo"><img src="/images/logo-b.png" alt="img-email" className="w-75" /></a></Link>
                                </div> {/* /.about-widget */}
                                <div className="col-lg-2 col-md-4 footer-list" >
                                    <h5 className="footer-title">Product</h5>
                                    <ul>
                                    <li><Link href='/'><a>Bulk Extractor</a></Link></li>
                                    <li><Link href='/'><a>Domain Search</a></Link></li>
                                    <li><Link href='/'><a>Email Finder</a></Link></li>
                                    <li><Link href='/'><a>Email Verifier</a></Link></li>
                                    </ul>
                                </div> {/* /.footer-list */}
                                <div className="col-lg-2 col-md-4 footer-list">
                                    <h5 className="footer-title">Company</h5>
                                    <ul>
                                    <li><Link href='/aboutus'><a>About</a></Link></li>
                                    <li><Link href='/contactus'><a>Contact</a></Link></li>
                                    <li><Link href='/features'><a>Features</a></Link></li>
                                    <li><Link href='/pricing'><a>Plan &amp; Pricing</a></Link></li>
                                    </ul>
                                </div> {/* /.footer-list */}
                                <div className="col-lg-3 col-md-4 address-list" >
                                    <h5 className="footer-title">Contact Info</h5>
                                    <p className="font-rubik">Pahala, Bhubaneswar, Odisha,  India</p>
                                    <p className="font-rubik">info@qtonix.com</p>
                                    <p className="font-rubik">+000 000 0000</p>

                                   
                                    <ul className="social-icon d-flex pt-15">
                                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    </ul>
                                </div> {/* /.footer-list */}
                                </div> {/* /.row */}
                            </div> {/* /.container */}
                            </div> {/* /.top-footer */}
                            <div className="container">
                            <div className="bottom-footer-content">
                                <div className="row">
                                <div className="col-lg-8 ml-auto">
                                    <div className="d-md-flex align-items-center justify-content-between">
                                    <ul className="order-md-last" data-aos="fade-left">
                                        <li><Link href='/privacy-policy'><a>Privacy</a></Link></li>
                                        <li><Link href='/terms-and-condition'><a>Terms</a></Link></li>
                                    </ul>
                                    <p className="order-md-first" data-aos="fade-right">Copyright @2021 Email Extracter.</p>
                                    </div>
                                </div>
                                </div>
                            </div> {/* /.bottom-footer */}
                            </div>
                        </footer> {/* /.theme-footer-three */}
                        {/* Scroll Top Button */}
                        <button className="scroll-top">
                            <i className="fa fa-angle-up" aria-hidden="true" />
                        </button> 
            </>
        )
    }
}
