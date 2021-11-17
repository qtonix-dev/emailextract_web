import React, { Component } from 'react'
import { HiMenu } from "react-icons/hi";
import NavItems from './NavItems'
import $ from 'jquery'
import Link from 'next/link';

export default class Header extends Component {

    constructor(props){
        super(props)
        this.state={
            hideMobileMenu:true
        }
        this.showHideNavbar=this.showHideNavbar.bind(this)
    }

    componentDidMount(){
        this.setState({hideMobileMenu:false})


        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
              $('.theme-main-menu').addClass('navbarshrink');
            } else {
              $('.theme-main-menu').removeClass('navbarshrink');
            }
          });
    }


    showHideNavbar(){
        if(this.state.hideMobileMenu){
            this.setState({hideMobileMenu:false})
        }else{
            this.setState({hideMobileMenu:true})
        }
    }



    render() {
        console.log(this.state.hideMobileMenu)
        return (
            <>
                        <div className="theme-main-menu sticky-menu theme-menu-three">
                            <div className="d-flex align-items-center justify-content-center">
                            <div className="logo"><Link href='/'><a><img src="/images/email-logo-n.png" alt="" className="w-25" /></a></Link></div>
                            <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
                                <div className="container nav-container">
                                <button className="navbar-toggler navbar-toggler-right" type="button" onClick={this.showHideNavbar}>
                                    <HiMenu />
                                </button>
                                
                                {this.state.hideMobileMenu
                                ?
                                <div className="navbar-collapse collapse show">
                                    <NavItems />
                                </div>
                                :
                                <div className="navbar-collapse collapse">
                                    <NavItems />
                                </div>
                                }

                                
                                </div> 
                            </nav>
                            </div>
                        </div> 
            </>
        )
    }
}
