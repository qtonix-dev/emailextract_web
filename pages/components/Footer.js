import React, { Component } from 'react'

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
                                    <p className="font-rubik">Already a member? <a href="login.html">Sign in.</a></p>
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
                                    <a href="index-doc.html" className="logo"><img src="images/logo/deski_01.svg" alt="" /></a>
                                </div> {/* /.about-widget */}
                                <div className="col-lg-2 col-md-4 footer-list" >
                                    <h5 className="footer-title">Services</h5>
                                    <ul>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Wordpress</a></li>
                                    <li><a href="#">Online Marketing</a></li>
                                    <li><a href="#">Content</a></li>
                                    </ul>
                                </div> {/* /.footer-list */}
                                <div className="col-lg-2 col-md-4 footer-list">
                                    <h5 className="footer-title">About us</h5>
                                    <ul>
                                    <li><a href="about-us(doc).html">About us</a></li>
                                    <li><a href="#">Work Portfolio</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Plan &amp; Pricing</a></li>
                                    <li><a href="#">News</a></li>
                                    </ul>
                                </div> {/* /.footer-list */}
                                <div className="col-lg-3 col-md-4 address-list" >
                                    <h5 className="footer-title">Contact Info</h5>
                                    <p className="font-rubik">432 Mirpur National Stadium Market <br />Dhaka,  Bangladesh</p>
                                    <ul className="info">
                                    <li><a href="#">deskisupportinc@gmail.com</a></li>
                                    <li><a href="#" className="mobile-num">+761 412 3224</a></li>
                                    </ul>
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
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Security</a></li>
                                        <li><a href="#">Terms</a></li>
                                    </ul>
                                    <p className="order-md-first" data-aos="fade-right">Copyright @2021 deski inc.</p>
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
