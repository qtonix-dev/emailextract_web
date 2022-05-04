import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'

export class Body extends Component {
    render() {
        return (
            <>
                

                <div className="main-page-wrapper">
                        <Header />

                        {this.props.children}

                        
                        

                        <Footer />


                        </div> {/* /.main-page-wrapper */}



            </>
        )
    }
}

export default Body
