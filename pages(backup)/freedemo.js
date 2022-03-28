import React, { Component } from 'react'
import Body from './components/Body'
import Head from 'next/head'
import { Container, Row, Col, Form,Button,FloatingLabel } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'


export default class freedemo extends Component {
    render() {
        return (
            <Body>
                <Head>
                    <title>freedemo</title>
                </Head>

                <>
                    <Container>
                        <div className="free-demo-form">
                            <Row>
                                <Col sm={6}>
                                    <div className="free-demo-form-left">
                                        <h3>Your Personal Webdemo</h3>
                                        <p>Get to know Personio! In just 30 minutes, 
                                            our product experts will guide you through the solution and answer any questions you have.</p>
                                        <div className="free-demo-form-list">
                                            <ul>
                                                <li><FaCheck /> &nbsp;Introduction to all product features</li>
                                                <li><FaCheck /> &nbsp;Introduction to all product features</li>
                                                <li><FaCheck /> &nbsp;Introduction to all product features</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="free-demo-form-right mb-5">
                                        <h3>Book Your Free Demo</h3>
                                        <Form>
                                            <Row>
                                                <Col sm={6}>
                                                    <Form.Control className="mb-2" id="inlineFormInput" placeholder="First Name" />
                                                </Col>
                                                <Col sm={6}>
                                                    <Form.Control className="mb-2" id="inlineFormInput" placeholder="Last Name" />
                                                </Col>
                                            </Row>
                                            <Row>
                                            <Col sm={12}>
                                                <Form.Control className="mb-2" id="inlineFormInput" placeholder="Company Name" />
                                            </Col>
                                            </Row>
                                            <Row>
                                            <Col sm={12}>
                                            <Form.Select aria-label="Floating label select example">
                                                <option>Company Size</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                            </Col>
                                            </Row>
                                            <Row>
                                            <Col sm={12} className="mb-2">
                                            <Form.Select aria-label="Floating label select example">
                                                <option>Country</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                            </Col>
                                            
                                            </Row>
                                            <Row>
                                            <Col sm={12}>
                                                <Form.Control placeholder="Business Email" className="bemail" />
                                            </Col>
                                            </Row>

                                            <Row className="g-2 mt-1">
                                            <Col md={3}>
                                                
                                                <Form.Select aria-label="Floating label select example">
                                                    <option>County Code</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Col>
                                            <Col md={9}>
                                                <Form.Control className="mb-2" id="inlineFormInput" placeholder="Mobile no" />
                                            </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={12}>
                                                    <p className="mt-2">We will only contact you to book an 
                                                        appoint that works for you and understand your specific requirements.</p>
                                                </Col>
                                            </Row>
                                            <Button variant="primary" type="submit" className="w-100">Submit</Button>
                                            
                                        </Form>
                                         <Row>
                                                <Col sm={12}>
                                                    <p className="my-3">We will only contact you to book an 
                                                        appoint that works for you and understand your specific requirements.</p>
                                                </Col>
                                            </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </Container>
                    
                </>

            </Body>
        )
    }
}