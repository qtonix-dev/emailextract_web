import React, { Component } from 'react'
import Loader from "react-loader-spinner";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios'

export class register extends Component {


    constructor(props){
        super(props)
        this.state={
            email:'',
            email:'',
            password:'',
            loadingSubmitBtn:false,
        }
        this.validator = new SimpleReactValidator();
        this.handleChange=this.handleChange.bind(this);
    }


    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    
    handleSubmit=e=>{
        e.preventDefault();
        if (this.validator.allValid()) {
            // alert('You submitted the form and stuff!');

            axios.post(`${process.env.backendURL}/user`,this.state)
            .then(response=>{
                console.log(response.data)
            })



          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
    }
    


    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}>
                    Register
                    </Col>
                    <Col md={6}>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} />
                            <p>{this.validator.message('name', this.state.name, 'required')}</p>
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" placeholder="Enter company" name="company" value={this.state.company} onChange={this.handleChange} />
                            <p>{this.validator.message('company', this.state.company, 'required')}</p>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                            <p>{this.validator.message('email', this.state.email, 'required|email')}</p>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                            <p>{this.validator.message('password', this.state.password, 'required')}</p>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>


                        {this.state.loadingSubmitBtn
                        ?
                        <>
                        <Button variant="primary" type="submit" disabled={false}>
                            <Loader
                                type="TailSpin"
                                color="white"
                                height={20}
                            />
                        </Button>
                        </>
                        :
                        <>
                        <Button variant="primary" type="submit" disabled={false}>Submit</Button>
                        </>
                        }
                    </Form>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default register
