import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from "next/router";

class BodyWithRouter extends Component {

    componentDidMount(){
        console.log(this.props.router.pathname)
    }

    render() {
        return (
            <div className="d-lg-flex justify-content-between align-items-center">
                <ul className="navbar-nav">
                                        <li className={`nav-item dropdown position-static ${this.props.router.pathname==='/'?'active':<></>}`}>
                                            <Link href='/'><a className="nav-link">Home</a></Link>
                                        </li>

                                        <li className={`nav-item dropdown position-static ${this.props.router.pathname==='/pricing'?'active':<></>}`}>
                                            <Link href='/pricing'><a className="nav-link">Pricing</a></Link>
                                        </li>


                                        <li className={`nav-item dropdown position-static ${this.props.router.pathname==='/aboutus'?'active':<></>}`}>
                                            <Link href='/aboutus'><a className="nav-link">About</a></Link>
                                        </li>

                                        <li className={`nav-item dropdown position-static ${this.props.router.pathname==='/compare'?'active':<></>}`}>
                                            <Link href='/compare'><a className="nav-link">Compare</a></Link>
                                        </li>


                                        <li className={`nav-item dropdown position-static ${this.props.router.pathname==='/contactus'?'active':<></>}`}>
                                            <Link href='/contactus'><a className="nav-link">Contact</a></Link>
                                        </li>
                                        
                </ul>
                <ul className="right-widget user-login-button d-flex align-items-center justify-content-center">
                                        <li>
                                        <Link href='/login'>
                                        <a className="signIn-action d-flex align-items-center">
                                            <img src="images/icon/52.svg" alt="Email Extract Online" />
                                            <span>Login</span>
                                        </a>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link href='/register'>
                                        <a className="signUp-action d-flex align-items-center">
                                            <span>Getting Started</span>
                                            <img src="images/icon/53.svg" alt="Email Extract Online" />
                                        </a>
                                        </Link>
                                        </li>
                </ul>
                </div>
        )
    }
}


const NavItems = withRouter(BodyWithRouter);

export default NavItems;