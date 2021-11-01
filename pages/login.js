import React, { Component } from 'react'
import Loader from "react-loader-spinner";
import $ from "jquery";
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios'
import cookie from 'react-cookies'
import { toast } from 'react-toastify';
import Link from 'next/link'
import { Row, Col, Form } from 'react-bootstrap'
import Head from 'next/head'
import { FaHome, FaGoogle } from "react-icons/fa";
import Router from 'next/router'

import { GoogleLogin } from 'react-google-login';






export default class login extends Component {



    constructor(props){
      super(props)
      this.state={
        formLoading:false
      }
      this.validator = new SimpleReactValidator();
      this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(){
      
    }

    handleChange(e){
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    handleSubmit=e=>{
      e.preventDefault();
 
        if (this.validator.allValid()){
          $("#myForm :input").prop('readonly', true);
          this.setState({formLoading:true})


          axios.post(`${process.env.backendURL}/user/login`,this.state)
            .then(response=>{

                if(response.data.response){

                    // cookie.remove('qtonixemailextractweb_userdata', { path: '/' })
                    // cookie.remove('qtonixemailextractweb_userlogin', { path: '/' })
                    // cookie.remove('qtonixemailextractweb_userid', { path: '/' })


                    // var expires = new Date();
                    // expires.setSeconds(21600);
                    // cookie.save('qtonixemailextractweb_userdata', response.data.user, { path: '/',expires });
                    // cookie.save('qtonixemailextractweb_userid', response.data.user._id, { path: '/',expires });
                    // cookie.save('qtonixemailextractweb_userlogin',true, { path: '/',expires })

                

                    cookie.remove('qtonixemailextractweb_userdata', { path: '/' })
                    cookie.remove('qtonixemailextractweb_userlogin', { path: '/' })
                    cookie.remove('qtonixemailextractweb_userid', { path: '/' })
                    cookie.remove('qtonixemailextractweb_emailverification', { path: '/' });
    
    
    
                    var expires = new Date();
                    expires.setSeconds(21600);
                    cookie.save('qtonixemailextractweb_userdata', response.data.user, { path: '/',expires });
                    cookie.save('qtonixemailextractweb_userid', response.data.user._id, { path: '/',expires });
                    cookie.save('qtonixemailextractweb_userlogin',true, { path: '/',expires });
                    cookie.save('qtonixemailextractweb_emailverification', response.data.user.emailverification, { path: '/' });



                  if(response.data.user.emailverification==='NotVerified'){
                    Router.push('/emailverification')

                  }else{
                              window.location.assign(`${process.env.appURL}/securelogincheck/${response.data.user._id}/${response.data.loginid}`);

                  }



                    
                }else{
                    this.setState({formLoading:false})
                    $("#myForm :input").prop('readonly', false);
                    toast.error('Incorrect email and password', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      // theme:'colored'
                    });
                }

                

            })

        }else{
          this.validator.showMessages();
          this.forceUpdate();
          $("#myForm :input").prop('readonly', false);

        }
    }

   responseGoogle = (response) => {
      console.log(response);
    }

    render() {
        return (
            <>
            <Head>
                <title>Login</title>
            </Head>
               <div className="main-page-wrapper p0 vh-100">
                
                <div className="user-data-page clearfix d-lg-flex">
                    <div className="illustration-wrapper d-flex align-items-center flex-column">
                    <h3 className="font-rubik">We have a “strategic” plan its <br /> called doing things.</h3>
                    <div className="illustration-holder">
                        <img src="images/assets/ils_08.svg" alt="" className="illustration" />
                        <img src="images/log.png" alt="" className="shapes shape-one" />
                        {/* <img src="images/assets/ils_08.2.svg" alt="" className="shapes shape-two" /> */}
                    </div>
                    </div>
                    <div className="form-wrapper">
                    
                    <div className="d-flex justify-content-between">
                      <Row>
                        <Col xs={9}><div className="logo"><Link href='/'><a><img src="/images/email-logo-n.png" alt="" className="w-75" /></a></Link></div></Col>
                        <Col xs={3} className="text-right go-to-home"><Link href='/'><a className="font-rubik go-back-button"><FaHome />&nbsp; Go to home</a></Link></Col>
                      </Row>
                    </div>
                    <form onSubmit={this.handleSubmit} className="user-data-form mt-5" id="myForm">
                        <h2 className="mb-4">Good afternoon! <br />Welcome back.</h2>
                        <p className="header-info pt-30 pb-50 d-none">Need account?  <Link href='/register'><a>Register</a></Link></p>
                        <div className="row ">
                        
                     
                        <div className="col-12 d-none">
                            <div className="input-group-meta mb-50">
                            <label>Email</label>
                            <input type="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('email', this.state.email, 'required|email')}</h6>
                            </div>
                        </div>
                        
                        <div className="col-12 d-none">
                            <div className="input-group-meta mb-50">
                            <label>Password</label>
                            <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange}  />
                            <h6 className="form_error_message">{this.validator.message('password', this.state.password, 'required')}</h6>
                            </div>
                        </div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="you@example.com" name="email" value={this.state.email} onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('email', this.state.email, 'required|email')}</h6>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('password', this.state.password, 'required')}</h6>
                          </Form.Group>
                          <div className="forgot-section">
                            <Link href='/forgotpassword'><a>Forgot Password ?</a></Link>
                          </div>

                        <div className="col-12">
                        {this.state.formLoading
                          ?
                          <center className="m-5">
                            <Loader
                              type="TailSpin"
                              color="#101621"
                              height={50}
                              width={50}
                            />
                          </center>
                          :<button className="theme-btn-one mt-1 mb-30" type='submit'>Login</button>
                          }
                        </div>
                        {/* <p>Forgot your password? <Link href='/forgotpassword'>Click Here</Link></p> */}
                         <div className="or-sec text-center mb-4">
                            <a>or</a>
                          </div>

                          <div className="google-signin mb-3">
                            <GoogleLogin
                                  clientId="372190396984-42v070uptnpu15m5i0cie4sggbtphauf.apps.googleusercontent.com"
                                  buttonText="Sign in with Google"
                                  onSuccess={this.responseGoogle}
                                  onFailure={this.responseGoogle}
                                  className="w-100"
                            />
                          </div>

                          
                          
                          
                          <div className="theme-btn-reg mb-4">
                            <p className="register-sec-new">
                              Donot have an Account ? <Link href='/register'><a>Register Here</a></Link>
                            </p>
                          </div>

                        <div className="col-12">
                            <p className="text-center font-rubik copyright-text">© Copyright 2021 <a href="https://emailextractonline.com/">Email Extracter</a></p>
                        </div>
                        </div>
                    </form>


                    </div> 
                </div> 
                </div>
 
            </>
        )
    }
}
