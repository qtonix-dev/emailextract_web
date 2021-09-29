import React, { Component } from 'react'
import Loader from "react-loader-spinner";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios'
import cookie from 'react-cookies'

export class login extends Component {


    constructor(props){
        super(props)
        this.state={
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

            axios.post(`${process.env.backendURL}/user/login`,this.state)
            .then(response=>{

                if(response.data.response){
                    console.log(response.data.user)

                    cookie.remove('qtonixemailextractweb_userdata', { path: '/' })
                    cookie.remove('qtonixemailextractweb_userlogin', { path: '/' })
                    cookie.remove('qtonixemailextractweb_userid', { path: '/' })


                    var expires = new Date();
                    expires.setSeconds(21600);
                    cookie.save('qtonixemailextractweb_userdata', response.data.user, { path: '/',expires });
                    cookie.save('qtonixemailextractweb_userid', response.data.user._id, { path: '/',expires });
                    cookie.save('qtonixemailextractweb_userlogin',true, { path: '/',expires })

                    window.location = process.env.appURL;

                }else{
                    alert('Please check your email and password')
                }

                

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
                    Login
                    </Col>
                    <Col md={6}>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
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



                        <Button variant="primary" type="submit" disabled={false}>
                            {/* <Loader
                                type="TailSpin"
                                color="white"
                                height={20}
                            /> */}
                            Login
                        </Button>
                        
                    </Form>


                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default login
