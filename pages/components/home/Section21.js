import React, { Component } from 'react'
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap'

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
                        <div className="col-md-6 py-4">

                                {this.state.active===1
                                ?<><img src="images/assets/ils_10.svg" alt="" /></>
                                :<></>
                                }

                                {this.state.active===2
                                ?<><img src="images/assets/ils_11.svg" alt="" /></>
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
                                        <h4>A home for your team, best-practices & thoughts.</h4>
                                        <p>With deksi docs, you can write, edit, let it collaborate wherever you are lorem dumy text introduction.</p>
                                    </div>
                                </p>
                                
                                <p className={this.state.active===2?'how-it-works-first':''} onClick={()=>this.changeImage(2)}>
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
                                </p>
                            
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}
