import React, { Component } from 'react'
import Loader from "react-loader-spinner";
import $ from "jquery";
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios'
import { toast } from 'react-toastify';
import Router from 'next/router'
import Link from 'next/link'
import { Row, Col, Form } from 'react-bootstrap'
import { FaHome, FaGoogle } from 'react-icons/fa'
import Head from 'next/head'
import { GoogleLogin } from 'react-google-login'


export class register extends Component {

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

    componentDidMount(){

    }


    handleSubmit=e=>{
        e.preventDefault();
   
          if (this.validator.allValid()){
            $("#myForm :input").prop('readonly', true);
            this.setState({formLoading:true})


            if(this.state.password === this.state.re_enter_password){
                axios.post(`${process.env.backendURL}/user`,this.state)
                .then(response=>{
                    console.log(response.data)
                    if(response.data.response){
                        toast.success('Success', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            // theme:'colored'
                          });
                          Router.push('/login')

                    }else{
                        this.setState({formLoading:false})
                        $("#myForm :input").prop('readonly', false);
                        toast.error('Email already exist. Please try anathor email', {
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
                this.setState({formLoading:false})
                $("#myForm :input").prop('readonly', false);
                
                toast.error('Passowrd and re enter passwords are not matching', {
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
  
                  
  
            //   })
  
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
                <title>Register</title>
            </Head>
               <div className="main-page-wrapper p0">
                
                <div className="user-data-page clearfix d-lg-flex">
                    <div className="illustration-wrapper d-flex align-items-center flex-column">
                    <h3 className="font-rubik">We have a “strategic” plan its <br /> called doing things.</h3>
                    <div className="illustration-holder">
                        <img src="images/assets/ils_08.svg" alt="" className="illustration" />
                        <img src="images/register.png" alt="" className="shapes shape-one" />
                        {/* <img src="images/assets/ils_08.2.svg" alt="" className="shapes shape-two" /> */}
                    </div>
                    </div>
                    <div className="form-wrapper">
                    <div className="d-flex justify-content-between">
                        {/* <div className="logo"><Link href='/'><a><img src="/images/logo-b.png" alt="img-email" className="w-50" /></a></Link></div>
                        <Link href='/'><a className="font-rubik go-back-button">Go to home</a></Link> */}
                        <Row>
                            <Col xs={9}><div className="logo"><Link href='/'><a><img src="/images/email-logo-n.png" alt="" className="w-50" /></a></Link></div></Col>
                            <Col xs={3} className="text-right go-to-home"><Link href='/'><a className="font-rubik go-back-button"><FaHome />&nbsp; Go to home</a></Link></Col>
                        </Row>
                    </div>
                    <form onSubmit={this.handleSubmit} className="user-data-form mt-30" id="myForm">
                        <h2 className="mb-3">Create your free account</h2>
                        <p className="header-info pt-30 pb-50 d-none">Already have an account?  <Link href='/login'><a>Login</a></Link></p>
                        <div className="row">
                        
                        <div className="col-12 d-none">
                            <div className="input-group-meta mb-50">
                            <label>Full Name</label>
                            {/* <input type="text" placeholder="Enter Full Name" name="name" value={this.state.name} onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('name', this.state.name, 'required')}</h6> */}
                            <input type="text" placeholder="Enter Full Name" name="name" value={this.state.name} onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('name', this.state.name, 'required')}</h6>
                            </div>
                        </div>
                        <div className="col-6 d-none">
                            <div className="input-group-meta mb-50">
                            <label>Email</label>
                            <input type="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('email', this.state.email, 'required|email')}</h6>
                            </div>
                        </div>
                        <div className="col-6 d-none">
                            <div className="input-group-meta mb-50">
                            <label>Company</label>
                            <input type="text" placeholder="Enter Company" name="company" value={this.state.company} onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('company', this.state.company, 'required')}</h6>
                            </div>
                        </div>
                        
                        <div className="col-6 d-none">
                            <div className="input-group-meta mb-50">
                            <label>Password</label>
                            <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange}  />
                            <h6 className="form_error_message">{this.validator.message('password', this.state.password, 'required')}</h6>
                            </div>
                        </div>
                        <div className="col-6 d-none">
                            <div className="input-group-meta mb-15">
                            <label>Re-type Password</label>
                            <input type="password" placeholder="Enter Re-type Password" name="re_enter_password" value={this.state.re_enter_password} onChange={this.handleChange}  />
                            <h6 className="form_error_message">{this.validator.message('re_enter_password', this.state.re_enter_password, 'required')}</h6>
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
                        
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="What's your full name?" name="name" value={this.state.name} onChange={this.handleChange} />
                                <h6 className="form_error_message">{this.validator.message('name', this.state.name, 'required')}</h6>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="you@example.com" name="email" value={this.state.email} onChange={this.handleChange} />
                                <h6 className="form_error_message">{this.validator.message('email', this.state.email, 'required|email')}</h6>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Companys Name (optional)</Form.Label>
                                <Form.Control type="text" placeholder="What's your full name?" name="company" value={this.state.company} onChange={this.handleChange} />
                                <h6 className="form_error_message">{this.validator.message('company', this.state.company, 'required')}</h6>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                <h6 className="form_error_message">{this.validator.message('password', this.state.password, 'required')}</h6>
                                </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Conform Password</Form.Label>
                                <Form.Control type="password" placeholder="Conform Password" name="re_enter_password" value={this.state.re_enter_password} onChange={this.handleChange} />
                                <h6 className="form_error_message">{this.validator.message('re_enter_password', this.state.re_enter_password, 'required')}</h6>
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
                                    :<button className="theme-btn-one mt-1 mb-30" type='submit'>Register</button>
                                    }
                            </div>
                        
                        </div>
                    </form>
                    

                    <div className="form-bottom">

                        <div className="or-sec text-center mb-4">
                            <a>Or</a>
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

                        {/* <div className="theme-btn-google text-center">
                            <a className="signinGoogle">
                            <FaGoogle /> &nbsp;Signin with Google
                            </a>
                        </div>   */}
                            
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

export default register
