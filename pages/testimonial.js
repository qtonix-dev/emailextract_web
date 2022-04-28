import React, { Component } from 'react'
import Head from 'next/head';
import Body from './components/Body'

class testimonial extends Component {
  render() {
    return (
        <Body>
        <Head>
            <title>Testimonial</title>
        </Head>

        <div className="fancy-hero-four bg-doc space-fix gdpr-title-main">
            <div className="bg-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-11 col-md-10 m-auto">
                            <div className="title-style-seven text-center">
                            <h2><span>Testi</span> monial</h2>
                            
                            {/* <p>We deliver an analytics experience with no hidden costs or additional products required. Understand the price you pay upfront, with no surprises. Buy our simple, capability-rich packages to upscale your business with verified emails.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='testimonial-main'>
            <div className="container">
                <h3>Our Client&apos;s Say</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <div className='testimonial_sec'>

                    <div className='row'>
                        <div className="col-xl-2 m-auto">
                            <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' alt='email' className='w-50' />
                        </div>
                        <div className="col-xl-10 m-auto">
                            <p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>
                            <h6>Adam Gibbs</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-xl-2 m-auto">
                            <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' alt='email' className='w-50' />
                        </div>
                        <div className="col-xl-10 m-auto">
                            <p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>
                            <h6>Adam Gibbs</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Body>
    )
  }
}

export default testimonial





