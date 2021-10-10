import React, { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {
    render() {
        return (
            <>
               {/* ===================================================
                                        Loading Transition
                                    ==================================================== */}
                        {/* <section>
                            <div id="preloader">
                            <div id="ctn-preloader" className="ctn-preloader">
                                <div className="animation-preloader">
                                <div className="spinner" />
                                <div className="txt-loading">
                                    <span data-text-preloader="D" className="letters-loading">
                                    D
                                    </span>
                                    <span data-text-preloader="E" className="letters-loading">
                                    E
                                    </span>
                                    <span data-text-preloader="S" className="letters-loading">
                                    S
                                    </span>
                                    <span data-text-preloader="K" className="letters-loading">
                                    K
                                    </span>
                                    <span data-text-preloader="I" className="letters-loading">
                                    I
                                    </span>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </section> */}
                        {/* 
                                    =============================================
                                        Theme Main Menu
                                    ============================================== 
                                    */}
                        <div className="theme-main-menu sticky-menu theme-menu-three">
                            <div className="d-flex align-items-center justify-content-center">
                            <div className="logo"><a href="index-doc.html"><img src="images/logo/deski_01.svg" alt="" /></a></div>
                            <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
                                <div className="container nav-container">
                                <button className="navbar-toggler navbar-toggler-right" type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="flaticon-menu-of-three-lines" />
                                </button>
                                {/* <div className="navbar-collapse collapse show" id="navbarSupportedContent"> */}
                                <div className="navbar-collapse collapse" id="navbarSupportedContent">

                                    <div className="d-lg-flex justify-content-between align-items-center">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown position-static active">
                                            <Link href='/'><a className="nav-link">Home</a></Link>
                                        </li>

                                        <li className="nav-item dropdown position-static">
                                            <Link href='/pricing'><a className="nav-link">Pricing</a></Link>
                                        </li>

                                        <li className="nav-item dropdown position-static ">
                                            <Link href='/contactus'><a className="nav-link">Contact</a></Link>
                                        </li>

                                        
                                        
                                    </ul>
                                    <ul className="right-widget user-login-button d-flex align-items-center justify-content-center">
                                        <li>
                                        <a href="login.html" className="signIn-action d-flex align-items-center">
                                            <img src="images/icon/52.svg" alt="" />
                                            <span>Login</span>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="sign-up.html" className="signUp-action d-flex align-items-center">
                                            <span>Getting Started</span>
                                            <img src="images/icon/53.svg" alt="" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div> 
                            </nav>
                            </div>
                        </div> {/* /.theme-main-menu */} 
            </>
        )
    }
}
