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
import Router from 'next/router'


export default class login extends Component {

    constructor(props){
      super(props)
      this.state={
        formLoading:'null'
      }
      this.validator = new SimpleReactValidator();
      this.sendEmail=this.sendEmail.bind(this);
    }


    componentDidMount(){

        if(cookie.load('qtonixemailextractweb_userid')===undefined){
            Router.push('/login')

        }else{

        }
    }

    


    sendEmail(){
        this.setState({formLoading:'loading'})
        axios.get(`${process.env.backendURL}/user/send_emailverificationlink/${cookie.load('qtonixemailextractweb_userid')}`)
        .then(response=>{
            if(response.data.response){
                this.setState({formLoading:'success'})                
            }else{
                alert('Failed.')
            }
        })
    }



    render() {
        var user = cookie.load('qtonixemailextractweb_userdata');
        console.log(user)
        return (
            <>
            <Head>
                <title>Login</title>
            </Head>
                
                {cookie.load('qtonixemailextractweb_userdata')===undefined
                ?<></>
                :
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
                            <Col xs={9}><div className="logo"><Link href='/'><a><img src="/images/email-logo-n.png" alt="" className="w-75" /></a></Link></div></Col>
                            <Col xs={3} className="text-right go-to-home"><Link href='/'><a className="font-rubik go-back-button"><FaHome />&nbsp; Go to home</a></Link></Col>
                        </Row>
                    </div>
                    <br />
                    <br />

                        <h2>Email Verification</h2>
                        <br />

                        <p className="header-info pt-30">
                            Hi {user.name}  
                        </p>
                        <p className="header-info ">
                            We have sent an email to {user.email} to verify your email address and active your account.
                        </p>

                        {this.state.formLoading==='null'
                        ?
                        <p className="header-info p-30">
                            <span className="text-primary cursor-pointer" onClick={this.sendEmail}>Click here</span> if you did not receive an email.
                        </p>
                        :<></>}

                        {this.state.formLoading==='loading'
                        ?
                        <Loader
                              type="TailSpin"
                              color="#101621"
                              height={50}
                              width={50}
                            />
                        :<></>
                        }   


                        {this.state.formLoading==='success'
                        ?
                        <p className="header-info  pb-50 vls12">
                            Please check your email inbox for verification link.
                        </p>
                        :<></>
                        }

                        
                        
                    </div> 
                </div> 
                </div>
                }

               



 
            </>
        )
    }
}