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


export default class index extends Component {

    constructor(props){
      super(props)
      this.state={
        pageLoading:true
      }
    }


    componentDidMount(){

        if(cookie.load('qtonixemailextractweb_userid')===undefined){
            Router.push('/login')
        }else{


            var userid=Router.router.query.userid;
            var verificationcode=Router.router.query.verificationcode;

            var dataTemp = {
                userid:Router.router.query.userid,
                verificationcode:Router.router.query.verificationcode
            }
            

            axios.post(`${process.env.backendURL}/user/matchemailverificationcode`,dataTemp)
            .then(response=>{
                console.log(response.data)
                if(response.data.response){

                    cookie.remove('qtonixemailextractweb_emailverification', { path: '/' });
    

                    var expires = new Date();
                    expires.setSeconds(21600);
                    cookie.save('qtonixemailextractweb_emailverification', 'Verified', { path: '/' });

                    window.location.replace(`${process.env.appURL}/securelogincheck/${response.data.user._id}/${response.data.user.loginid}`);

                
                }else{
                    toast.warning('Failed, Please try again', {
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

        }        
    }





    render() {
        var user = cookie.load('qtonixemailextractweb_userdata');
        
        return (
            <>
            <Head>
                <title>Email Verification</title>
            </Head>
                
                
                <div className="main-page-wrapper p0 vh-100">
                
                <div className="user-data-page clearfix d-lg-flex">
                    <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
                    <h3 className="font-rubik">We have a “strategic” plan its <br /> called doing things.</h3>
                    <div className="illustration-holder w-75 mt-5">
                        <img src="/images/assets/ils_08.svg" alt="" className="illustration" />
                        <img src="/images/assets/ils_08.1.svg" alt="" className="shapes shape-one" />
                        <img src="/images/assets/ils_08.2.svg" alt="" className="shapes shape-two" />
                    </div>
                    </div>
                    <div className="form-wrapper">
                    
                    <div className="d-flex justify-content-between">
                      <Row>
                        <Col xs={9}><div className="logo"><Link href='/'><a><img src="/images/logo-b.png" alt="" className="w-50" /></a></Link></div></Col>
                        <Col xs={3} className="text-right go-to-home"><Link href='/'><a className="font-rubik go-back-button"><FaHome />&nbsp; Go to home</a></Link></Col>
                      </Row>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                        
                        <h2 className="text-center">Email Verification</h2>
                        <br />

                        <p className="header-info pt-30">
                            {this.state.pageLoading
                            ?
                            <center><Loader
                            type="TailSpin"
                            color="#101621"
                            height={50}
                            width={50}
                          />
                        <span>We are verifying your email please wait...</span>
                          </center>
                            :
                            <center>
                                <h4>Failed please try again</h4>
                                <h6> <Link href='/login'>Click here</Link> </h6>  
                            </center>
                            }
                        </p>
                       

                      

                        
                        
                    </div> 
                </div> 
                </div>
               

               



 
            </>
        )
    }
}