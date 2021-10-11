import React, { Component } from 'react'
import { HiMenu } from "react-icons/hi";
import NavItems from './NavItems'

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
