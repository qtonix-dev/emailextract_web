import React, { Component } from 'react'
import Loader from "react-loader-spinner";
import $ from "jquery";
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios'
import cookie from 'react-cookies'
import {  toast } from 'react-toastify';
import Link from 'next/link'
import { Row, Col, Form } from 'react-bootstrap'
import Head from 'next/head'

import { FaHome, FaGoogle } from 'react-icons/fa'


export default class forgotpassword extends Component {



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

          
        axios.get(`${process.env.backendURL}/user/passwordreset/${this.state.email}`)
        .then(response=>{
            $("#myForm :input").prop('readonly', false);
            this.setState({formLoading:false})
            if(response.data.response){
                toast.success('Success. Please check your email', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    // theme:'colored'
                  });

            }else{
                    toast.error('Please enter a registrated email.', {
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


            // axios.post(`${process.env.backendURL}/user/login`,this.state)
            // .then(response=>{

            //     if(response.data.response){

            //         cookie.remove('qtonixemailextractweb_userdata', { path: '/' })
            //         cookie.remove('qtonixemailextractweb_userlogin', { path: '/' })
            //         cookie.remove('qtonixemailextractweb_userid', { path: '/' })


            //         var expires = new Date();
            //         expires.setSeconds(21600);
            //         cookie.save('qtonixemailextractweb_userdata', response.data.user, { path: '/',expires });
            //         cookie.save('qtonixemailextractweb_userid', response.data.user._id, { path: '/',expires });
            //         cookie.save('qtonixemailextractweb_userlogin',true, { path: '/',expires })

                

            //                window.location.assign(`${process.env.appURL}/securelogincheck/${response.data.user._id}/${response.data.loginid}`);
                    
            //     }else{
            //         this.setState({formLoading:false})
            //         $("#myForm :input").prop('readonly', false);
            //         toast.error('Incorrect email and password', {
            //           position: "top-right",
            //           autoClose: 5000,
            //           hideProgressBar: false,
            //           closeOnClick: true,
            //           pauseOnHover: true,
            //           draggable: true,
            //           progress: undefined,
            //           // theme:'colored'
            //         });
            //     }

                

            // })

        }else{
          this.validator.showMessages();
          this.forceUpdate();
          $("#myForm :input").prop('readonly', false);

        }
    }

    render() {
        return (
            <>
            <Head>
                <title>Forgot Password</title>
            </Head>
               <div className="main-page-wrapper p0 vh-100">
                
                <div className="user-data-page clearfix d-lg-flex">
                    <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
                    <h3 className="font-rubik">We have a “strategic” plan its <br /> called doing things.</h3>
                    <div className="illustration-holder">
                        <img src="images/assets/ils_08.svg" alt="" className="illustration" />
                        <img src="images/foregot.png" alt="" className="shapes shape-one" />
                        {/* <img src="images/assets/ils_08.2.svg" alt="" className="shapes shape-two" /> */}
                    </div>
                    </div>
                    <div className="form-wrapper">
                    
                    <div className="d-flex justify-content-between">
                      <Row>
                        <Col xs={9}><div className="logo"><Link href='/'><a><img src="/images/logo-b.png" alt="" className="w-50" /></a></Link></div></Col>
                        <Col xs={3} className="text-right go-to-home"><Link href='/'><a className="font-rubik go-back-button"><FaHome />&nbsp; Go to home</a></Link></Col>
                      </Row>
                    </div>
                    <form onSubmit={this.handleSubmit} className="user-data-form mt-30" id="myForm">
                        <h2>Forgot Password?</h2>
                        <p className="header-info pt-30 pb-50">If you have lost or forgotten your password, enter your email to have your password sent to the email address.</p>
                        <div className="row ">
                        
                     
                        <div className="col-12 d-none">
                            <div className="input-group-meta mb-50">
                            <label>Email</label>
                            <input type="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('email', this.state.email, 'required|email')}</h6>
                            </div>
                        </div>
                        
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="you@example.com" name="email" value={this.state.email} onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('email', this.state.email, 'required|email')}</h6>
                          </Form.Group>

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
                          :<button className="theme-btn-one mt-1 mb-30" type='submit'>Send Email</button>
                          }
                        </div>
                        
                        </div>
                    </form>

                      <div className="form-bottom">

                          <div className="or-sec text-center mb-4">
                              <a>Or</a>
                          </div>

                          <div className="theme-btn-google text-center">
                              <a className="signinGoogle">
                              <FaGoogle /> &nbsp;Signin with Google
                              </a>
                          </div>  
                              
                          <div className="theme-btn-reg mb-4">
                              <p className="log-sec-new">
                              Already have an Account ? <Link href='/login'><a>Sign In Now</a></Link>
                              </p>
                          </div> 
                      
                      </div>

                      <div className="col-12">
                              <p className="text-center font-rubik copyright-text">© Copyright 2021 <a href="https://emailextractonline.com/">Email Extracter</a></p>
                      </div>

                    </div> 
                </div> 
                </div>
 
            </>
        )
    }
}
