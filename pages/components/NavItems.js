import React, { Component } from 'react'
import Link from 'next/link'

export default class NavItems extends Component {
    render() {
        return (
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
                                        <Link href='/login'>
                                        <a className="signIn-action d-flex align-items-center">
                                            <img src="images/icon/52.svg" alt="" />
                                            <span>Login</span>
                                        </a>
                                        </Link>
                                        </li>
                                        <li>
                                        <a href="sign-up.html" className="signUp-action d-flex align-items-center">
                                            <span>Getting Started</span>
                                            <img src="images/icon/53.svg" alt="" />
                                        </a>
                                        </li>
                </ul>
                </div>
        )
    }
}
