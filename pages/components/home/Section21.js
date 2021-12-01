import React, { Component } from 'react'
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa';

export default class Section21 extends Component {

    constructor(props){
        super(props)
        this.state={
            active:1
        }
    }

    changeImage=(imageno)=>{
        this.setState({
            active:imageno
        })
    }


    render() {
        return (
            <>
                <Container className="py-5">
                    <div className="row">
                        <div className="col-md-6 py-3">

                                {this.state.active===1
                                ?<><img src="images/emailfinder1.png" alt="img-alt" /></>
                                :<></>
                                }

                                {this.state.active===2
                                ?<><img src="images/verifiernew.png" alt="" /></>
                                :<></>
                                }

                                {this.state.active===3
                                ?<><img src="images/assets/ils_12.svg" alt="" /></>
                                :<></>
                                }


                        </div>

                        <div className="col-md-6">
                                
                                <p className={this.state.active===1?'how-it-works-first':''} onClick={()=>this.changeImage(1)}>
                                    
                                        <div className="feature-sec-desc active px-4 py-3">
                                            <h3 className="cursor-pointer">Email Finder</h3>
                                            {/* <p className="cursor-pointer">Find verified email of any targeted professional from their name and company.</p> */}
                                            <h6>A Faster Way To Find Anyone</h6>
                                            <p>The Email Extract Online tool helps you to connect with people that matter the most for your business. </p>
                                            {/* <p>The Email Extract Online tool helps you to connect with people that matter the most for your business. You just need to hit search by entering the prospect’s full name and company domain, and the tool will 
                                                search relevant websites and scan them to collect the right and verified email addresses in seconds.</p> */}
                                            <div className="btn-feature-section"><Link href="/pricing">View More </Link> &nbsp;<FaArrowCircleRight /></div>
                                        </div>
                                    
                                </p>
                                
                                <p className={this.state.active===2?'how-it-works-first':''} onClick={()=>this.changeImage(2)}>
                                  
                                    <div className="feature-sec-desc active px-4 py-3">
                                        <h3>Email Verifier</h3>
                                        {/* <p>Verify any professional email address and boost email deliverability with the most 
                                            reliable email verifier tool.</p> */}
                                        <h6>Verifying Emails Is Now Super Quick And Easy</h6>
                                        <p>In order to help you send the correct email lists to the right inbox every time, we have designed a simple yet the most powerful tool- Email Extract Online. </p>
                                        <div className="btn-feature-section"><Link href="/pricing">View More </Link> &nbsp;<FaArrowCircleRight /></div>
                                    </div>
                                    
                                </p>
                            
                                {/* <p className={this.state.active===3?'how-it-works-first':''} onClick={()=>this.changeImage(3)}>
                                    
                                    <div className="feature-sec-desc active px-4 py-2">
                                            <h3 className="cursor-pointer">Bulk Extractor</h3>
                                            
                                            <h6>Find Verified Bulk Emails At once</h6>
                                            <p>Extracting bulk email has never been so much easier. With the Email Extract Online Bulk Extractor, you can 
                                                find large numbers of verified email addresses in seconds. </p>
                                            <div className="btn-feature-section"><Link href="/pricing">View More </Link> &nbsp;<FaArrowCircleRight /></div>
                                    </div>
                                    
                                </p> */}
                            
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}
