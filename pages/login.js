import React, { Component } from 'react'
import Loader from "react-loader-spinner";
import $ from "jquery";
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios'
import cookie from 'react-cookies'
import {  toast } from 'react-toastify';
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import Head from 'next/head'

import { FaHome } from "react-icons/fa";


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

          // console.log(this.state)


          axios.post(`${process.env.backendURL}/user/login`,this.state)
            .then(response=>{

                if(response.data.response){

                    cookie.remove('qtonixemailextractweb_userdata', { path: '/' })
                    cookie.remove('qtonixemailextractweb_userlogin', { path: '/' })
                    cookie.remove('qtonixemailextractweb_userid', { path: '/' })


                    var expires = new Date();
                    expires.setSeconds(21600);
                    cookie.save('qtonixemailextractweb_userdata', response.data.user, { path: '/',expires });
                    cookie.save('qtonixemailextractweb_userid', response.data.user._id, { path: '/',expires });
                    cookie.save('qtonixemailextractweb_userlogin',true, { path: '/',expires })

                

					          window.location.assign(`${process.env.appURL}/securelogincheck/${response.data.user._id}/${response.data.loginid}`);
                    
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

    render() {
        return (
            <>
            <Head>
                <title>Login</title>
            </Head>
               <div className="main-page-wrapper p0 vh-100">
                
                <div className="user-data-page clearfix d-lg-flex">
                    <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
                    <h3 className="font-rubik">We have a “strategic” plan its <br /> called doing things.</h3>
                    <div className="illustration-holder">
                        <img src="images/assets/ils_08.svg" alt="" className="illustration" />
                        <img src="images/assets/ils_08.1.svg" alt="" className="shapes shape-one" />
                        <img src="images/assets/ils_08.2.svg" alt="" className="shapes shape-two" />
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
                        <h2>Join with thousands of startup!</h2>
                        <p className="header-info pt-30 pb-50">Need account?  <Link href='/register'><a>Register</a></Link></p>
                        <div className="row ">
                        
                     
                        <div className="col-12">
                            <div className="input-group-meta mb-50">
                            <label>Email</label>
                            <input type="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('email', this.state.email, 'required|email')}</h6>
                            </div>
                        </div>
                        
                        <div className="col-12">
                            <div className="input-group-meta mb-50">
                            <label>Password</label>
                            <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange}  />
                            <h6 className="form_error_message">{this.validator.message('password', this.state.password, 'required')}</h6>
                            </div>
                        </div>
                        {/* <div className="col-12">
                            <div className="agreement-checkbox d-flex justify-content-between align-items-center sm-mt-10">
                            <div>
                                <input type="checkbox" id="agree_to_policy" />
                                <label htmlFor="agree_to_policy">By clicking "SIGN UP" I agree to the Terms and Conditions and Privacy Policy.</label>
                            </div>
                            </div> 
                        </div> */}
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
