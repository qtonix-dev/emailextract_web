import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from './components/Body'
import Faq from "react-faq-component";
import Slider from "react-slick";
import ReactImageFallback from "react-image-fallback";
import { MdVerifiedUser,MdInfoOutline } from "react-icons/md";
import { toast } from 'react-toastify';
import axios from 'axios'
import $ from "jquery";
// import Loader from "react-loader-spinner";
import Link from 'next/link'
import {Animated} from "react-animated-css";
import Head from 'next/head'
import Section21 from './components/home/Section21'
import Section22 from './components/home/Section22'

import { Tab, Row, Col, Nav, Container,Modal,Button, Form } from 'react-bootstrap'
import { FaViruses, FaHandshake, FaSearch, FaCheck } from "react-icons/fa"
import { BiSupport } from "react-icons/bi"
import { AiOutlineFileProtect } from "react-icons/ai"
import { MdEditNote } from "react-icons/md"


    //=======SLIDER=======//
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        responsive: [
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
        }
    
    ],
        customPaging: function(i) {
            return (
            <a></a>
            );
        },

    };


    //=======FAQ=======//
    const data = {
        // title: "FAQ (How it works)",
        rows: [
            {
                title: "Why do I need to verify Email?",
                content: <p>For an effective email marketing process, it is very important to verify the existence of 
                an email address so as to acquire a new subscriber. For this, you invest lots of time and money to 
                buy an email list from 3rd party vendors. But you are not sure whether these contact emails are 
                authentic enough to deliver your marketing campaign or not. If you send email messages to fake email 
                addresses, the bounce-back email ratio will increase and have a negative impact on your mail server’s 
                reputation. That’s why identifying and removing invalid 
                email addresses are essential to protect your email reputation and bounce-free email campaigns.
                <br /><br />By verifying email lists with our Email Extract Online tool, you can improve many of your options, such as:
                    <ul>
                        <li>•	Open Rates</li>
                        <li>•	Bounce Rates</li>
                        <li>•	Click-Through Rates</li>
                        <li>•	Conversion Rates</li>
                    </ul>
                </p>,
            },
            {
                title: "How accurate is the Email Extract Online?",
                content:
                    <p>The Email Extract Online uses the most comprehensive database of public email addresses to find the correct contact information. All the email addresses go through an email verification process before being returned. The email addresses with a green shield mean they have been checked and found deliverable. You can use them safely and those email addresses with red shields are either unauthorized or are not in use. </p>
                    ,
            },
            {
                title: "Can you verify Bulk emails at once?",
                content: <p>Yes, with the bulk extraction feature, you can verify an unlimited number of emails within seconds. </p>,
            },
            {
                title: "How protected are my emails, which I upload on your software, or do you share with any 3rd party?",
                content: <p>It's 100% protected and safe. Any emails you upload into our software can only be accessed by you after login, and we don’t have any access to that as it gets stored in your storage.</p>,
            },
        ],
    };
    const data1 = {
        // title: "FAQ (How it works)",
        rows: [
            {
                title: "How fast is your email extraction tool?",
                content: <p>It’s absolutely super-fast and quick, which extracts and verifies emails within seconds on your PC.
                Note: The performance and speed also depend on your PC as well.</p>,
            },
            {
                title: "Do you offer a free trial to test the tool before buying it?",
                content:
                    <ul className="listing-faq">
                        <li>•	<b>10</b> Total Domain Search</li>
                        <li>•	<b>10</b> Total Email Search</li>
                        <li>•	<b>10</b> Total Email Verification</li>
                        <li>•	<b>15000</b> Bulk Domain Search</li>
                        <li>•	<b>500</b> Bulk Domain Upload</li>
                        <li>•	Unlimited Results</li>
                        <li>•	Unlimited Storage for free per user</li>
                    </ul>,
            },
            {
                title: "What should I do if the Email Finder doesn't return any result?",
                content: 
                <p>If the Email Finder can&quot;t find the email address, we recommend you to verify the following elements:
                    <ul className="listing-faq">
                        <li>•	Did you correctly enter the company or organization domain name for 
                            emails? In some cases, the domain name used for emails is different from the 
                            domain name used for the website.</li>
                        <li>•	Does the person you want to find still in the company or organization?</li>
                        <li>•	Have you misspelled the person&quot;s name?</li>

                    </ul>
                    <p><a>If the Email Finder is not able to find any result after verifying all these elements, you may be required to initiate a manual search</a></p>
                </p>
                
                
                
                
            },
            {
                title: "Why choose Email Extract Online over other email extract tools?",
                content: <p>We started Email Extract Online because we found that other similar services were charging a lot of money for data that is either publicly available on the internet or not authorized. Our goal is to help YOU find suitable leads and build a million-dollar business, and to do that you need to save time and as much money as you can. We want to bring people together so that they can provide value for each other, and we plan on doing that by providing the best Email Extract Online tool ever.</p>,
            },
        ],
    };
    const styles = {
        // bgColor: 'white',
        titleTextColor: "blue",
        rowTitleColor: "blue",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };

    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };
    //=======FAQ=======//





export class index extends Component {

    constructor(props){
        super(props)
        this.state={
            hiddenContent:false,
            mainformLoading:false,
            domain:'',
            foundemails:'',
            email: "",
            emailsdata:null,
            allresponsedata:null
        }
        this.handleChange=this.handleChange.bind(this);
         this.onChange = this.onChange.bind(this);
    }


    onChange(e) {
        this.setState({
          email: e.target.value,
        });
      }
    handleChange(e){
        this.setState({
            foundemails:'',
            emailsdata:null,
            [e.target.name]:e.target.value
        })
    }
    onSubmit(){

           if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)){

           console.log(this.state.email)

     } 

     else{
        toast.error('please type valid email id', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
     }
    }


    handleClearAll=e=>{
        e.preventDefault();

        this.setState({domain:'',
        foundemails:'',
        email: "",
        emailsdata:null,
        allresponsedata:null})

    }


    handleSubmit=e=>{
        e.preventDefault();
        // axios.get('')

        this.setState({allresponsedata:null})
        if(this.state.domain===''){
            toast.warning('Please enter the domain name', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            
        }else{
            $("#myForm :input").prop('readonly', true);
            this.setState({mainformLoading:true,hiddenContent:true})
            
        if(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(this.state.domain)) {
              
            axios.get(`https://server-2-bulkextract-getinfo-mi83t.ondigitalocean.app/extract/${this.state.domain}/deep/true/true`)
            .then(response=>{

                $("#myForm :input").prop('readonly', false);
                // if(response.data.response){
                //     this.setState({
                //         foundemails:'found',
                //         emailsdata:response.data,
                //         mainformLoading:false,
                //     })
                // }else{
                //     this.setState({
                //         mainformLoading:false,
                //         foundemails:'notfound',
                //         emailsdata:response.data
                //     })
                // }


                if(response.data.response.status==='Found'){
                    this.setState({
                        foundemails:'found',
                        mainformLoading:false,
                        allresponsedata:response.data.response
                    })
                }else{
                     this.setState({
                        mainformLoading:false,
                        foundemails:'notfound',
                        allresponsedata:response.data.response
                    })
                }

                
                console.log(response.data.response)
            })


        }
        else {
            $("#myForm :input").prop('readonly', false);
            toast.error('invalid domain', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            
        this.setState({mainformLoading:false,hiddenContent:false})
    
        }
    }    
        
    }
   

    
      
    render() {
        return (

            <Body>

                <Head>
                    <title>Email Extractors - Scrape Emails From Websites | Email Extract online</title>
                    <meta name="description" content="Email Extract Online is a web-based software that can be used to scrape email addresses along with the phone numbers of potential clients just with the click of a button" />
                    <meta name="keywords" content="email extractor online, email extractor from website, scrape emails from website, Scrape Email, online email extractor" />
                </Head>

            {/* 
                                =============================================
                                                Theme Hero Banner
                                ============================================== 
                                */}

                    <div style={{ backgroundImage: "#f7faff" }} className="ban-main-home">
                            <div className="hero-banner-three">
                                <div className="container">
                                <div
                                    className="row banner-header-content"
                                    hidden={this.state.hiddenContent}
                                >
                                    <div className="col-xl-9 col-lg-11 col-md-8 m-auto">
                                    <h1 className="font-rubik ban-head text-center">
                                        <span>
                                        STOP MANUAL, WE AUTOMATE ALL! <br /> BEST EMAIL EXTRACTOR
                                        </span>
                                        <span className="rocket">🚀</span>{" "}
                                    </h1>
                                    </div>
                                    <div className="col-xl-8 col-lg-9 m-auto">
                                    <p className="sub-text font-rubik">
                                        Increase sales with the most powerful & easy-to-use email
                                        finding tool. Email Extract Online lets you find and extract
                                        email addresses from any websites in seconds. Enter a domain
                                        to start For Free!{" "}
                                    </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xl-7 col-lg-9 col-md-12 m-auto'>
                                    <div className="search-filter-form">
                                    {this.state.mainformLoading ? (
                                    <center>
                                        <img
                                        src="https://cdn.dribbble.com/users/1208688/screenshots/4575084/anime_search_event.gif"
                                        alt="asas"
                                        style={{ height: "84px" }}
                                        />
                                        <h5>searching {this.state.domain}...</h5>
                                    </center>
                                    ) : (
                                    <form
                                        onSubmit={this.handleSubmit}
                                        id="myForm"
                                        // className="searchForm w-75"
                                    >
                                        <input
                                        type="text"
                                        placeholder="company.com.."
                                        name="domain"
                                        value={this.state.domain}
                                        onChange={this.handleChange}
                                        />
                                        <button>Find Email Address</button>
                                    </form>
                                    )}
                                </div>
                                    </div>
                                </div>
                                

                                {this.state.allresponsedata !== null ? (
                                    <div className="row">
                                    <div className="col-xl-7 col-lg-9 col-md-12 m-auto">
                                        <div className="findemailshome">
                                        <h6 style={{float: 'right', marginTop: '-20px', marginRight: '-13px', cursor:'pointer', color:'red'}} onClick={this.handleClearAll}>X</h6>

                                        <h6>
                                            <ReactImageFallback
                                            src={`https://logo.clearbit.com/${this.state.allresponsedata.domain}`}
                                            fallbackImage="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png"
                                            initialImage={`https://logo.clearbit.com/${this.state.domain}`}
                                            alt="cool image should be here"
                                            className="my-image"
                                            />
                                            <span>
                                            {this.state.allresponsedata.emails.length} emails
                                            </span>{" "}

                                            
                                        </h6>

                                        {this.state.allresponsedata.emails.map((email) => {
                                            return (
                                            <p key={email}>
                                                {email}
                                                {/* {email.verified?<span className="findemailshome_verified"><MdVerifiedUser /></span>:<span className="findemailshome_notverified"><MdInfoOutline /></span>}   */}
                                            </p>
                                            );
                                        })}

                                        {this.state.allresponsedata.emails.length===0
                                        ?
                                        <h5>
                                            Oh no! We couldn't find any emails for{" "}
                                            {this.state.domain}.
                                        </h5>
                                        :
                                        <>
                                        
                                        </>}
                                        



                                        <hr />

                                        <h6>Other social profiles:</h6>
                                        <div className="H54ASS">
                                        {this.state.allresponsedata.emails.length > 0 ? (
                                                                    <>
                                                                    <span>
                                                                        
                                                                        <img src="https://img.icons8.com/fluency/30/000000/email.png" />
                                                                    </span>{" "}
                                                                    &nbsp;&nbsp;
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {this.state.allresponsedata.tel.length > 0 ? (
                                                                    <>
                                                                    <span>
                                                                        <img src="https://img.icons8.com/fluency/30/000000/call.png" />
                                                                    </span>{" "}
                                                                    &nbsp;&nbsp;
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {this.state.allresponsedata.facebook.length > 0 ? (
                                                                    <>
                                                                    
                                                                    <span>
                                                                    <a href={this.state.allresponsedata.facebook[0]} target="_blank">
                                                                    <img src="https://img.icons8.com/fluency/30/000000/facebook.png" />
                                                                    </a>
                                                                        
                                                                    </span>{" "}
                                                                    &nbsp;&nbsp;
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {this.state.allresponsedata.googleplus.length > 0 ? (
                                                                    <>
                                                                    <span>
                                                                    <a href={this.state.allresponsedata.googleplus[0]} target="_blank">
                                                                    <img src="https://img.icons8.com/fluent/30/google-plus-squared.png" />
                                                                    </a>
                                                                    </span>{" "}
                                                                    &nbsp;&nbsp;
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {this.state.allresponsedata.instagram.length > 0 ? (
                                                                    <>
                                                                    <span>
                                                                    <a href={this.state.allresponsedata.instagram[0]} target="_blank">
                                                                    <img src="https://img.icons8.com/fluent/30/instagram-new.png" />
                                                                    </a>
                                                                    </span>{" "}
                                                                    &nbsp;&nbsp;
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {this.state.allresponsedata.linkedin.length > 0 ? (
                                                                    <>
                                                                    <span>
                                                                    <a href={this.state.allresponsedata.linkedin[0]} target="_blank">
                                                                    <img src="https://img.icons8.com/fluency/30/000000/linkedin.png" />
                                                                    </a>
                                                                    </span>{" "}
                                                                    &nbsp;&nbsp;
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {this.state.allresponsedata.printrest.length > 0 ? (
                                                                    <>
                                                                    <span>
                                                                    <a href={this.state.allresponsedata.printrest[0]} target="_blank">
                                                                    <img src="https://img.icons8.com/fluency/30/000000/pinterest.png" />
                                                                    </a>
                                                                    </span>{" "}
                                                                    &nbsp;&nbsp;
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {this.state.allresponsedata.skype.length > 0 ? (
                                                                    <>
                                                                    <span>
                                                                    <a href={this.state.allresponsedata.skype[0]} target="_blank">
                                                                    <img src="https://img.icons8.com/fluency/30/000000/skype.png" />
                                                                    </a>
                                                                    </span>{" "}
                                                                    &nbsp;&nbsp;
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {this.state.allresponsedata.twitter.length > 0 ? (
                                                                    <>


                                                                    <span>
                                                                    <a href={this.state.allresponsedata.twitter[0]} target="_blank">
                                                                    <img src="https://img.icons8.com/fluency/30/000000/twitter.png" />
                                                                    </a>
                                                                    </span>{" "}
                                                                    &nbsp;&nbsp;
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {this.state.allresponsedata.whatsapp.length > 0 ? (
                                                                    <>
                                                                    <span>
                                                                    <a href={this.state.allresponsedata.whatsapp[0]} target="_blank">
                                                                    <img src="https://img.icons8.com/fluency/30/000000/whatsapp.png" />
                                                                    </a>
                                                                    </span>{" "}
                                                                    &nbsp;&nbsp;
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {this.state.allresponsedata.youtube.length > 0 ? (
                                                                    <>
                                                                    <span>
                                                                    <a href={this.state.allresponsedata.youtube[0]} target="_blank">
                                                                    <img src="https://img.icons8.com/fluency/30/000000/youtube.png" />
                                                                    </a>
                                                                    </span>{" "}
                                                                    &nbsp;&nbsp;
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                        </div>

                                        <hr />

                                        
                                        <h3 className="addme  font-rubik">
                                            Email Extract Online is completely FREE,{" "}
                                            <Link href="/register">Signup</Link> right now to get
                                            unlimited cutting edge lead generation.
                                        </h3>
                                        </div>
                                    </div>
                                    </div>
                                ) : (
                                    <></>
                                )}

                                {/* {this.state.foundemails === "notfound" ? (
                                    <div className="row">
                                    <div className="col-xl-7 col-lg-9 col-md-12 m-auto">
                                        <div className="notfindemailshome">
                                        <h5>
                                            Oh no! We couldn&quot;t find any leads for{" "}
                                            {this.state.domain}.
                                        </h5>
                                        <br />
                                        <p>
                                            Our trackers are searching the internet for leads of the
                                            highest quality. Unfortunately, we don&quot;t have any
                                            for this company yet. But rest assured, we are working
                                            on it.
                                        </p>
                                        <hr />
                                        <h3 className="addme  font-rubik">
                                            In the meantime,{" "}
                                            <Link href="/register">
                                            <a className="font-rubik">Email Extract Online</a>
                                            </Link>{" "}
                                            is completely FREE. Signup right now to get 50 free
                                            credits per month.
                                        </h3>
                                        </div>
                                    </div>
                                    </div>
                                ) : (
                                    <></>
                                )} */}

                                

                                <p className="sing-in-call">
                                    50 Free Credits Every Month • GDPR Alligned & CCPA Compligned •
                                    Get Started In Seconds •{" "}
                                    <Link href="/register">
                                    <a className="font-rubik">Sign Up</a>
                                    </Link>
                                </p>

                                <div className="icon-images-ban">
                                    <ul>
                                    <li>
                                        <img src="images/g2.png" alt="img-ban" />
                                    </li>
                                    <li>
                                        <img src="images/captera.png" alt="img-ban" />
                                    </li>
                                    <li>
                                        <img src="images/trustpilot.png" alt="img-ban" />
                                    </li>
                                    </ul>
                                </div>
                                </div>

                                {/* <img src="images/shape/68-1.png" alt="" className="shapes shape-one" /> */}
                                {/* <img src="images/shape/69-1.png" alt="" className="shapes shape-two" /> */}
                                {/* <img src="images/shape/70-1.png" alt="" className="shapes shape-three" />
                                                        <img src="images/shape/75-1.png" alt="" className="shapes shape-four" />
                                                        <img src="images/shape/72-1.png" alt="" className="shapes shape-five" />
                                                        <img src="images/shape/73-1.png" alt="" className="shapes shape-six" />
                                                        <img src="images/shape/74-1.png" alt="" className="shapes shape-seven" />
                                                        <img src="images/shape/75-1.png" alt="" className="shapes shape-eight" />
                                                        <img src="images/shape/76-1.png" alt="" className="shapes shape-nine" />
                                                        <img src="images/shape/68-1.png" alt="" className="shapes shape-ten" /> */}
                            </div>
                            <div className="img-ban-main-new">
                                {/* <img src="images/banner-right.png" alt="img-email" className="img-ban-main-new-right" />
                                                        <img src="images/banner-left.png" alt="img-email" className="img-ban-main-new-left" /> */}
                            </div>
                            </div>

                                {/* /.hero-banner-three */}




                                        {/* 
                    =============================================
                        Fancy Text Block Nineteen
                    ============================================== 
                    */}
                    
                    <div className="fancy-text-block-nineteen mt-50  mb-20 md-mb-20">
                    <div className="container">
                        {/* <div className="fancy-text-block-section-main mb-5">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="fancy-text-block-section">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <img src="images/nums-1.png" alt="img-email" />
                                            </div>
                                            <div className="col-lg-10">
                                                <h4>150,000+</h4>
                                                <p style={{marginTop:'-19px'}}>companies on board</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="fancy-text-block-section">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <img src="images/nums-2.png" alt="img-email" />
                                            </div>
                                            <div className="col-lg-10">
                                                <h4>1M+</h4>
                                                <p style={{marginTop:'-19px'}}>websites crawled everyday</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="fancy-text-block-section">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <img src="images/nums-3.png" alt="img-email" />
                                            </div>
                                            <div className="col-lg-10">
                                                <h4>750,000+</h4>
                                                <p style={{marginTop:'-19px'}}>leads verified daily</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        
                        <div className="row align-items-center container ">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1200}>
                            <img src="images/peopleholding.png" alt="" className="m-auto w-100" />
                        </div>
                        <div className="col-lg-6 " data-aos="fade-left" data-aos-duration={1200} >
                            <Animated  isVisible={true}>
                            <div className="text-wrapper">
                            <div className="client-info font-rubik">Over <span>150,000+ client</span></div>
                            <div className="title-style-five">
                                <h2><span>Grow Your Network</span> In Automation</h2>
                            </div>
                            <p className="font-rubik">From small businesses to FORTUNE 500** companies, over 150,000+ clients are using our quick and reliable Email Extract Online tool to find, 
                            extract & build high-quality leads from the internet in just one click.</p>
                            <p className="font-rubik">In short, it saves the hassle of collecting emails manually by running this 
                            process automatically, thereby providing you with a client database within seconds with confidence scores, 
                            department filters and detailed sources.</p>
                            {/* <div className="name font-slab">Sam Gibbs</div> */}
                            </div> {/* /.text-wrapper */}
                            </Animated>
                        </div>
                        </div>
                    </div>
                    </div> {/* /.fancy-text-block-nineteen */}
                    

                    {/*
                        =====================================================
                            Fancy Feature Eight Main
                        =====================================================
                    */}

                                {/*
                                            =====================================================
                                                Fancy Feature Eight
                                            =====================================================
                                            */}
                                <div className="fancy-feature-eight">
                                    <div className="container">
                                        <div className="title-style-five text-center mb-40 md-mb-40">
                                            <div className="row">
                                                <div className="col-lg-10 m-auto">
                                                        <div className="title-style-five">
                                                            <h2><span>How it works</span></h2>
                                                        </div>
                                                        
                                                        <h6>Find verified email of any targeted&nbsp;
                                                            <span>professional from their name and company.</span>
                                                        </h6>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* /.block-style-twelve */}
                                    </div>
                                </div> {/* /.fancy-feature-eight */}



                                <Section21 />
                                <Section22 />
                                {/* <Section23 /> */}
                                
                                

                                {/*
                                            =====================================================
                                                Fancy Feature Eight
                                            =====================================================
                                            */}
                                
                                
                                {/*
                                            =====================================================
                                                Useable Tools
                                            =====================================================
                                            */}
                                <div className="useable-tools-section-three mt-50 mb-80 md-mt-50 md-mb-80">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="title-style-five">
                                                    <h2  className="font-rubik">
                                                    <span>Who is using our</span> Email Extract Tool
                                                    </h2>
                                                </div>
                                                <p className="sub-text">Email Extract Online is used by 1,000,000+ professionals and leading companies worldwide.</p>
                                                {/* <a href="#" className="all-button">See all partners <i className="flaticon-right-arrow" /></a> */}
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="logo-wrapper d-flex flex-wrap justify-content-center align-items-center">
                                                <div className="logo d-flex align-items-center justify-content-center"><img src="images/cisco.png" alt="emailicon" className="w-75" /></div>
                                                <div className="logo d-flex align-items-center justify-content-center"><img src="images/ibm.png" alt="emailicon" className="w-75" /></div>
                                                <div className="logo d-flex align-items-center justify-content-center"><img src="images/ekwb.png" alt="emailicon" className="w-75" /></div>
                                                <div className="logo d-flex align-items-center justify-content-center"><img src="images/ipaydna.png" alt="emailicon" className="w-75" /></div>
                                                <div className="logo d-flex align-items-center justify-content-center"><img src="images/mcdonald.png" alt="emailicon" className="w-75" /></div>
                                                <div className="logo d-flex align-items-center justify-content-center"><img src="images/lorel.png" alt="emailicon" className="w-75" /></div>
                                                {/* <div className="logo d-flex align-items-center justify-content-center"><img src="images/iconsmain/bitcanny.png" alt="emailicon" /></div> */}
                                            </div>
                                        </div>
                                    
                                    </div> {/* /.container */}
                                    
                                    </div> {/* /.logo-wrapper */}
                                </div> {/* /.useable-tools-section-three */}
                                
                                
                                
                                {/* 
                                =============================================
                                    Fancy Feature Nineteen New
                                ============================================== 
                                */}

                                <div className="fancy-feature-nineteen-new">
                                    <Container>
                                        
                                    </Container>
                                </div>
                                
                                {/* 
                                =============================================
                                    Fancy Feature Nineteen
                                ============================================== 
                                */}
                    <div className="fancy-feature-nineteen mt-70 md-mt-70" id="effect">
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-9 col-lg-11 m-auto" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="title-style-eight text-center mt-30 mb-30 md-mb-30">
                                <div className="title-style-five">
                                    <h2  className="font-rubik"><span>Why Choose</span> Us</h2>
                                </div>
                            
                            {/* <p>Explore advanced video editing features that only professionals have access to!</p> */}
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        
                            <Row>
                                            <Col sm={4}>
                                                <div className="fancy-feature-nineteen-new-inner text-center">
                                                    {/* <img src="images/availability1.png" alt="img-email" /> */}
                                                    <AiOutlineFileProtect />
                                                    <h5>Data Protection and Accuracy</h5>
                                                    <p className='sub-text'>We don&#39;t share your information with any third party. 
                                                        We confirm that 99.5% of the data are correct.</p>
                                                </div>
                                            </Col>
                                            
                                            <Col sm={4}>
                                                <div className="fancy-feature-nineteen-new-inner text-center">
                                                    {/* <img src="images/eu-gdpr-compliant1.png" alt="img-email" /> */}
                                                    <BiSupport />
                                                    <h5>Technical support 24/7</h5>
                                                    <p className='sub-text'>Contact us anytime, 24 hours * 7 days, to get the most detailed answers to any of your questions.</p>
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="fancy-feature-nineteen-new-inner text-center">
                                                    {/* <img src="images/working-with-enterprises1.png" alt="img-email" /> */}
                                                    <FaSearch />
                                                    <h5>Free trial</h5>
                                                    <p className='sub-text'>Try any of the features of our tool for free before purchasing.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col sm={4}>
                                                <div className="fancy-feature-nineteen-new-inner text-center">
                                                    {/* <img src="images/integration-with-all-major-ats1.png" alt="img-email" /> */}
                                                    <FaViruses />
                                                    <h5>Malware free</h5>
                                                    <p className='sub-text'>Whenever you download and install our tool, we guarantee the safety and security of your PC.</p>
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="fancy-feature-nineteen-new-inner text-center">
                                                    {/* <img src="images/secured1.png" alt="img-email" /> */}
                                                    <MdEditNote />
                                                    <h5>GDPR compliant</h5>
                                                    <p className='sub-text'>Though we are not a member of EU member states, yet all our products and services are GDPR compliant.</p>
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="fancy-feature-nineteen-new-inner text-center">
                                                    {/* <img src="images/enabling-unbiased-hiring1.png" alt="img-email" /> */}
                                                    <FaHandshake />
                                                    <h5>Highly recommended</h5>
                                                    <p className='sub-text'>All of our products are highly recommended by the professionals of small to large organizations.</p>
                                                </div>
                                            </Col>
                                        </Row>

                        </div>
                    </div>
                    </div> {/* /.fancy-feature-nineteen */}
                                
                                
                                


{/*
                                            =====================================================
                                                Client Feedback Slider Two
                                            =====================================================
                                            */}
                                <div className="client-feedback-slider-two mt-40 md-mt-40">
                                    {/* <img src="images/shape/78-1.png" alt="" className="shapes shape-one" />
                                    <img src="images/shape/79-1.png" alt="" className="shapes shape-two" />
                                    <img src="images/shape/80-1.png" alt="" className="shapes shape-three" />
                                    <img src="images/shape/81-1.png" alt="" className="shapes shape-four" />
                                    <img src="images/shape/82-1.png" alt="" className="shapes shape-five" />
                                    <img src="images/shape/83-1.png" alt="" className="shapes shape-six" />
                                    <img src="images/shape/84-1.png" alt="" className="shapes shape-seven" />
                                    <img src="images/shape/85-1.png" alt="" className="shapes shape-eight" /> */}
                                    <div className="container">
                                    <div className="title-style-five text-center mb-20 md-mb-20">
                                        <div className="row">
                                        <div className="col-lg-7 col-md-9 m-auto">
                                            <div className="title-style-five">
                                                <h2  className="font-rubik"><span>Feedba</span>ck</h2>
                                            </div>
                                            
                                            <h6>What Our Client Say&nbsp;<span>About Us</span>
                                            </h6>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="">
                                    <div className="container">

                                    
                                

                                    <Slider {...settings}>
                                    <div className="item">
                                        <div className="bg-wrapper">
                                            <img src="images/ipaydna.png" alt="img-logo" className="logo" />
                                            <p className="bg-wrapper-text-sec">Absolutely love it! I would like to<br /> say it is a brilliant tool for marketers like me. 
                                                I have tried a lot of other ones but only found lots of problems, bugs, incorrect harvesting, 
                                                constant blockages by servers. Email Extract Online is well programmed and it gets what you 
                                                really need. Definitely recommend it!</p>
                                            <div className="text-section-testimonial">
                                                <div className="name font-rubik">Guan</div>
                                                <div className="desig">Founder ipaydna</div>
                                            </div>
                                            
                                        </div> {/* /.bg-wrapper */}
                                        </div>
                                        <div className="item">
                                        <div className="bg-wrapper">
                                            <img src="images/ibm.png" alt="emailicon" className="logo" />
                                            <p className="bg-wrapper-text-sec">A huge thank you to the team<br /> at Email Extract Online. I bought this tool 6 months ago and even after all this time when I reach out for any help they are brilliant. So many online extracting products promise the world and then 
                                                fail to deliver - this is a robust tool and a great bunch of people behind it. Highly recommended.</p>
                                                <div className="text-section-testimonial">
                                                    <div className="name font-rubik">Eh Jewel</div>
                                                    <div className="desig">Senior Developer</div>
                                                </div>
                                        </div> {/* /.bg-wrapper */}
                                        </div>
                                        <div className="item">
                                        <div className="bg-wrapper">
                                            <img src="images/ekwb.png" alt="emailicon" className="logo" />
                                            <p className="bg-wrapper-text-sec">My name is David, I tried Email<br /> Extract Online and Email Bulk Finder and found both of them to be very useful. The truth is unless you try this tool, you will not know what you are missing out on. I recommend the Email Extract Online tool to small and large businesses - it is profitable 
                                                especially when you want to develop reasonable contacts and good relationships with others.</p>
                                            <div className="text-section-testimonial">
                                            <div className="name font-rubik">Johny Horoscope</div>
                                            <div className="desig">EKWB</div>
                                            </div>
                                            
                                        </div> {/* /.bg-wrapper */}
                                        </div>
                                        <div className="item">
                                        <div className="bg-wrapper">
                                            <img src="images/c2.png" alt="emailicon" className="logo" />
                                            <p className="bg-wrapper-text-sec">Email Extract Online is very good<br /> and many thanks to the developers for making such an inexpensive 
                                                tool. Very frankly, after using this tool, I started seeing a big increase in my sales. In the past, 
                                                I tried many other resources as well as other email harvesters to boost my sales but nothing was as 
                                                effective as your product. I found your product 
                                                beyond my expectations. Once again I thank you for making such an effective product that really works.</p>
                                            <div className="text-section-testimonial">
                                            <div className="name font-rubik">Alex Wilson</div>
                                            <div className="desig">C2rio</div>
                                            </div>
                                        </div> {/* /.bg-wrapper */}
                                        </div>
                                        <div className="item">
                                        <div className="bg-wrapper">
                                            <img src="images/mcdonald.png" alt="emailicon" className="logo" />
                                            <p className="bg-wrapper-text-sec">I was looking for the best solution<br /> to extract emails of some prospective clients to promote my services. Finally, I found it: Email Extract Online. 
                                                Today I am really pleased with the way this tool works and the benefits, I get from email marketing.</p>
                                                <div className="text-section-testimonial">
                                                <div className="name font-rubik">Johny Horoscope</div>
                                                <div className="desig">Trip Exotica</div>
                                                </div>
                                        </div> {/* /.bg-wrapper */}
                                        </div>
                                        <div className="item">
                                        <div className="bg-wrapper">
                                            <img src="images/cybernetm.png" alt="emailicon" className="logo" />
                                            <p className="bg-wrapper-text-sec">I bought the Email Extract Online<br /> some time ago, it is so good that I felt like sharing. Email Extract Online is a small investment that can be made by any business but in a short period of time, it can really bring profits for your business. It helps to extract emails with superior potential 
                                                for reaching good customers. This software can be the best asset for any business. Highly recommended!</p>
                                                <div className="text-section-testimonial">
                                                    <div className="name font-rubik">Paul Wilson</div>
                                                    <div className="desig">Cybernet</div>
                                                </div>
                                        </div> {/* /.bg-wrapper */}
                                        </div>
                                    </Slider>
                                        
                                        
                                    </div>
                                    </div> {/* /.slider-content */}
                                </div> {/* /.client-feedback-slider-two */}
                                
                                <div className='free-liveChart'>
                                    <div className='container'>
                                        <h2>Start a free LiveChat now!</h2>
                                        <p>Supercharge your website and social media profiles. <br />Turn visits into sales, customers into fans.</p>
                                        <form className='w-75 free-liveChartForm'>
                                            <Row>
                                                <Col sm={8}>
                                                    <Form.Control placeholder="Enter Your Email Address"   value={this.state.email}
                                                      onChange={this.onChange} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Button variant="primary" className="btn-large w-100 btn-liveChat" type="submit" onClick={() => this.onSubmit()}>
                                                        Submit
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </form>
                                        <ul>
                                            <li><FaCheck /> &nbsp;Free 14-day trial</li>
                                            <li><FaCheck /> &nbsp;Ticketing system</li>
                                            <li><FaCheck /> &nbsp;Analytics</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/*
                                            =====================================================
                                                Faq Classic
                                            =====================================================
                                            */}
                                <div className="faq-classic with-bg">
                                    {/* <img src="images/shape/86-1.png" alt="" className="shapes shape-one" />
                                    <img src="images/shape/87-1.png" alt="" className="shapes shape-two" />
                                    <img src="images/shape/88-1.png" alt="" className="shapes shape-three" />
                                    <img src="images/shape/89-1.png" alt="" className="shapes shape-four" />
                                    <img src="images/shape/90-1.png" alt="" className="shapes shape-five" />
                                    <img src="images/shape/91-1.png" alt="" className="shapes shape-six" /> */}
                                    <div className="container">
                                    <div className="title-style-five text-center mb-20 md-mb-20">
                                        <div className="row">
                                        <div className="col-lg-7 m-auto">
                                            <div className="title-style-five">
                                            <h2  className="font-rubik"><span>FAQ</span>’s</h2>
                                            </div>
                                            
                                            <h6>
                                            <span>Questions &amp; Answers</span>
                                            </h6>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                        <Faq
                                            data={data}
                                            styles={styles}
                                            config={config}
                                        />
                                        </div>
                                        <div className="col-12">
                                        <Faq
                                            data={data1}
                                            styles={styles}
                                            config={config}
                                        />
                                        </div>
                                    </div>
                                    </div>
                                </div> {/* /.faq-classic */}

                                
            
            </Body>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)