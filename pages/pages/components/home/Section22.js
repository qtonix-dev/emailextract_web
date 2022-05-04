import React, { Component } from 'react'
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa';

export default class Section22 extends Component {

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
                <Container className="">
                    <Row>
                    <div className="col-md-6 py-3">
                                
                    <p className={this.state.active===1?'how-it-works-first':''} onClick={()=>this.changeImage(1)}>
                                    
                                    <div className="feature-sec-desc active px-4 py-3">
                                        <h3 className="cursor-pointer">Bulk Extractor</h3>
                                        {/* <p className="cursor-pointer">Find verified email of any targeted professional from their name and company.</p> */}
                                        <h6>Find Verified Bulk Emails At once</h6>
                                        <p className='sub-text'>Extracting bulk email has never been so much easier. With the Email Extract Online Bulk Extractor, you can 
                                                find large numbers of verified email addresses in seconds.</p>
                                        {/* <p>The Email Extract Online tool helps you to connect with people that matter the most for your business. You just need to hit search by entering the prospect’s full name and company domain, and the tool will 
                                            search relevant websites and scan them to collect the right and verified email addresses in seconds.</p> */}
                                        <div className="btn-feature-section"><Link href="/pricing">View More </Link> &nbsp;<FaArrowCircleRight /></div>
                                    </div>
                                
                            </p>
                            
                            <p className={this.state.active===2?'how-it-works-first':''} onClick={()=>this.changeImage(2)}>
                              
                                <div className="feature-sec-desc active px-4 py-3">
                                    <h3>Domain Search</h3>
                                    {/* <p>Verify any professional email address and boost email deliverability with the most 
                                        reliable email verifier tool.</p> */}
                                    <h6>Stop Manual, We Automate All!</h6>
                                    <p className='sub-text'>Increase Sales With The Most Powerful & Easy-To-Use Email Finding Tool. Email Extract Online Lets You Find & Extract Email Addresses From Any Websites.</p>
                                    <div className="btn-feature-section"><Link href="/pricing">View More </Link> &nbsp;<FaArrowCircleRight /></div>
                                </div>
                                
                            </p>
                        
                            
                                
                                {/* <p className={this.state.active===2?'how-it-works-first':''} onClick={()=>this.changeImage(2)}>
                                    <div className="feature-sec-desc px-4 py-3">
                                        <h4>Docs for your APIs, products, FAQs and user guides,</h4>
                                        <p>With deksi docs, you can write, edit, let it collaborate wherever you are lorem dumy text introduction.</p>
                                    </div>
                                </p>
                            
                                <p className={this.state.active===3?'how-it-works-first':''} onClick={()=>this.changeImage(3)}>
                                    <div className="feature-sec-desc px-4 py-3">
                                        <h4>A place to think and track ideas for you & your team</h4>
                                        <p>With deksi docs, you can write, edit, let it collaborate wherever you are lorem dumy text introduction.</p>
                                    </div>
                                </p> */}
                            
                        </div>

                        <div className="col-md-6 justify-content-center align-items-center align-self-center">

                                {this.state.active===1
                                ?<><img src="https://i.ibb.co/4JdqWYH/bulk-Domain.png" alt="img-email" className="pt-2" /></>
                                :<></>
                                }

                                {this.state.active===2
                                ?<><img src="https://i.ibb.co/fvnG7Hc/bulk-Domain.png" alt="img-email" className="pt-5" /></>
                                :<></>
                                }

                                {this.state.active===3
                                ?<><img src="images/assets/ils_12.svg" alt="img-email" /></>
                                :<></>
                                }


                        </div>

                        
                    </Row>
                </Container>
            </>
        )
    }
}
