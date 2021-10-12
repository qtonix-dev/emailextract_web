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
import Loader from "react-loader-spinner";

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
                title: "Lorem ipsum dolor sit amet,",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
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
            mainformLoading:false,
            domain:'',
            foundemails:'',
            emailsdata:null
        }
        this.handleChange=this.handleChange.bind(this);
    }


    handleChange(e){
        this.setState({
            foundemails:'',
            emailsdata:null,
            [e.target.name]:e.target.value
        })
    }



    handleSubmit=e=>{
        e.preventDefault();
        // axios.get('')
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
            this.setState({mainformLoading:true})

            axios.get(`${process.env.backendURL}/domainsearch/finddomain/${this.state.domain}/webuser`)
            .then(response=>{

                $("#myForm :input").prop('readonly', false);
                if(response.data.response){
                    this.setState({
                        foundemails:'found',
                        emailsdata:response.data,
                        mainformLoading:false,
                    })
                }else{
                    this.setState({
                        mainformLoading:false,
                        foundemails:'notfound',
                        emailsdata:response.data

                    })
                }

                
                console.log(response.data)
            })
        }
    }
    
    render() {
        return (

            <Body>
            {/* 
                                =============================================
                                                Theme Hero Banner
                                ============================================== 
                                */}
                                <div className="hero-banner-three">
                                    <div className="container">
                                    <div className="row">
                                        <div className="col-xl-9 col-lg-11 col-md-8 m-auto">
                                        <h1 className="font-rubik">Doc software you looking for.</h1>
                                        </div>
                                        <div className="col-xl-8 col-lg-9 m-auto">
                                        <p className="sub-text font-rubik">With deski Docs, you can write, edit, and collaborate wherever you are with 7 day trial</p>
                                        </div>
                                    </div>
                                    <div className="search-filter-form">
                                        {this.state.mainformLoading
                                            ?
                                            <center>
                                            <img src="https://cdn.dribbble.com/users/2450224/screenshots/4933013/adspy_loading_animation.gif" alt="asas" style={{height:'84px'}} />
                                                <h5>searching {this.state.domain}...</h5>
                                            </center>
                                            :
                                            <form onSubmit={this.handleSubmit} id='myForm'>
                                                <input type="text" placeholder="company.com.." name="domain" value={this.state.domain} onChange={this.handleChange} />
                                                <button><img src="images/icon/54.svg" alt="" /></button>
                                            </form>
                                        }
                                        

                                        
                                    </div>

                                    {this.state.foundemails==='found'
                                    ?
                                        this.state.emailsdata.length>5
                                        ?
                                        <div className="row">
                                            <div className="col-xl-7 col-lg-9 col-md-12 m-auto">
                                            <div className="findemailshome">
                                                <h6>
                                                    
                                                
                                                    <ReactImageFallback
                                                    src={`https://logo.clearbit.com/${this.state.emailsdata.domain}`}
                                                    fallbackImage="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png"
                                                    initialImage={`https://logo.clearbit.com/${this.state.emailsdata.domain}`}
                                                    alt="cool image should be here"
                                                    className="my-image" />


                                                    <span>{this.state.emailsdata.length} emails</span>  </h6>

                                                    <p>{this.state.emailsdata.emails[0].email}  {this.state.emailsdata.emails[0].email.verified?<span className="findemailshome_verified"><MdVerifiedUser /></span>:<span className="findemailshome_notverified"><MdInfoOutline /></span>}</p>
                                                    <p>{this.state.emailsdata.emails[1].email}  {this.state.emailsdata.emails[1].email.verified?<span className="findemailshome_verified"><MdVerifiedUser /></span>:<span className="findemailshome_notverified"><MdInfoOutline /></span>}</p>
                                                    <p>{this.state.emailsdata.emails[2].email}  {this.state.emailsdata.emails[2].email.verified?<span className="findemailshome_verified"><MdVerifiedUser /></span>:<span className="findemailshome_notverified"><MdInfoOutline /></span>}</p>
                                                    <p>{this.state.emailsdata.emails[3].email}  {this.state.emailsdata.emails[3].email.verified?<span className="findemailshome_verified"><MdVerifiedUser /></span>:<span className="findemailshome_notverified"><MdInfoOutline /></span>}</p>
                                                    <p>{this.state.emailsdata.emails[4].email}  {this.state.emailsdata.emails[4].email.verified?<span className="findemailshome_verified"><MdVerifiedUser /></span>:<span className="findemailshome_notverified"><MdInfoOutline /></span>}</p>
                                                    

                                                    <h5>and {this.state.emailsdata.length-5} more results</h5>
                                                    <hr />
                                                    <h3 className="addme">minelead.io is completely FREE, Signup right now to get unlimited cutting edge lead generation.</h3>
                                            </div>
                                            </div>
                                        </div>
                                        :
                                        <div className="row">
                                            <div className="col-xl-7 col-lg-9 col-md-12 m-auto">
                                            <div className="findemailshome">
                                                <h6>
                                                    
                                                
                                                    <ReactImageFallback
                                                    src={`https://logo.clearbit.com/${this.state.emailsdata.domain}`}
                                                    fallbackImage="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png"
                                                    initialImage={`https://logo.clearbit.com/${this.state.emailsdata.domain}`}
                                                    alt="cool image should be here"
                                                    className="my-image" />


                                                    <span>{this.state.emailsdata.length} emails</span>  </h6>

                        
                                                    {this.state.emailsdata.emails.map((email)=>{
                                                        return(
                                                            <p key={email.email}>{email.email}  {email.verified?<span className="findemailshome_verified"><MdVerifiedUser /></span>:<span className="findemailshome_notverified"><MdInfoOutline /></span>}  </p>
                                                             
                                                        )
                                                    })}

                                                    <hr />
                                                    <h3 className="addme">minelead.io is completely FREE, Signup right now to get unlimited cutting edge lead generation.</h3>

                              
                                            </div>
                                            </div>
                                        </div>
        
                                    :
                                    <></>
                                    }


                                    {this.state.foundemails==='notfound'
                                    ?
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-9 col-md-12 m-auto">
                                            <div className="notfindemailshome">
                                                <h5>Oh no! We couldnt find any leads for {this.state.emailsdata.domain}.</h5>
                                                <br />
                                                <p>our trackers are searching the internet for leads of the highest quality, unfortunately we dont have any for this company, YET. but rest assured, we are working on it.
                                                </p>
                                                <hr />
                                                <h3 className="addme">in the meantime, minelead.io is completely FREE, Signup right now to get unlimited cutting edge lead generation.</h3>
                                            </div>
                                        </div>
                                    </div>
                                    :<></>
                                    }
                                    


                                    {/* {this.state.foundemails==='found'
                                    ?
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-9 col-md-12 m-auto">
                                        <div className="findemailshome">
                                            <h6>
                                                
                                            
                                                <ReactImageFallback
                                                src={`https://logo.clearbit.com/${this.state.emailsdata.domain}`}
                                                fallbackImage="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png"
                                                initialImage={`https://logo.clearbit.com/${this.state.emailsdata.domain}`}
                                                alt="cool image should be here"
                                                className="my-image" />


                                                <span>{this.state.emailsdata.length} mails</span>  </h6>

                                                <p>{this.state.emailsdata.emails[0].email}  <span className="findemailshome_verified"><MdVerifiedUser /></span></p>
                                                <p>{this.state.emailsdata.emails[1].email}  <span className="findemailshome_verified"><MdVerifiedUser /></span></p>
                                                <p>{this.state.emailsdata.emails[2].email}  <span className="findemailshome_verified"><MdVerifiedUser /></span></p>
                                                <p>{this.state.emailsdata.emails[3].email}  <span className="findemailshome_verified"><MdVerifiedUser /></span></p>
                                                <p>{this.state.emailsdata.emails[4].email}  <span className="findemailshome_verified"><MdVerifiedUser /></span></p>
                                                
                                                {this.state.emailsdata.length>5
                                                ?
                                                <h5>and xx more results</h5>
                                                :
                                                <></>}


                                                {this.state.emailsdata.emails.map((email)=>{
                                                    return(
                                                        <p>{email.email}  <span className="findemailshome_verified"><MdVerifiedUser /></span></p>
                                                        
                                                    )
                                                })}

                                                <p>hr@tcs.com  <span className="findemailshome_verified"><MdVerifiedUser /></span></p>
                                                <p>info@tcs.com <span className="findemailshome_notverified"><MdInfoOutline /></span> </p>
                                                <p>admin@tcs.com <span className="findemailshome_verified"><MdVerifiedUser /></span></p>
                                                <p>help@tcs.com <span className="findemailshome_verified"><MdVerifiedUser /></span></p>

                                                
                                        </div>
                                        </div>
                                    </div>
                                    :<></>
                                    } */}

                                    

                                    
                                    <p className="sing-in-call">Already using deski? <a href="login.html" className="font-rubik">Sign in</a>.</p>
                                
                                    </div> {/* /.container */}




                                    
                                    <img src="images/shape/68.svg" alt="" className="shapes shape-one" />
                                    <img src="images/shape/69.svg" alt="" className="shapes shape-two" />
                                    <img src="images/shape/70.svg" alt="" className="shapes shape-three" />
                                    <img src="images/shape/71.svg" alt="" className="shapes shape-four" />
                                    <img src="images/shape/72.svg" alt="" className="shapes shape-five" />
                                    <img src="images/shape/73.svg" alt="" className="shapes shape-six" />
                                    <img src="images/shape/74.svg" alt="" className="shapes shape-seven" />
                                    <img src="images/shape/75.svg" alt="" className="shapes shape-eight" />
                                    <img src="images/shape/76.svg" alt="" className="shapes shape-nine" />
                                    <img src="images/shape/77.svg" alt="" className="shapes shape-ten" />
                                </div> {/* /.hero-banner-three */}




                                        {/* 
                    =============================================
                        Fancy Text Block Nineteen
                    ============================================== 
                    */}
                    <div className="fancy-text-block-nineteen mt-150 mb-100 md-mt-150 md-mb-150">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1200}>
                            <img src="images/media/img_57.png" alt="" className="m-auto" />
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1200}>
                            <div className="text-wrapper">
                            <div className="client-info font-rubik">Over <span>150,000+ client</span></div>
                            <div className="title-style-five">
                                <h2><span>Best event &amp; online</span> ticket platform.</h2>
                            </div>
                            <p className="font-rubik">Things go wrong. You’ll have questions. We understand. So we have people, not bots, on hand to help.</p>
                            <p className="font-rubik">We aim to answer any query in less than 10 minutes.</p>
                            <div className="name font-slab">Mitchell Garner</div>
                            </div> {/* /.text-wrapper */}
                        </div>
                        </div>
                    </div>
                    </div> {/* /.fancy-text-block-nineteen */}








                    










                                {/*
                                            =====================================================
                                                Fancy Feature Eight
                                            =====================================================
                                            */}
                                <div className="fancy-feature-eight pt-100 md-pt-100">
                                    <div className="container">
                                    <div className="title-style-four text-center mb-60 md-mb-40">
                                        <div className="row">
                                        <div className="col-lg-10 m-auto">
                                            <h6>How it works</h6>
                                            <h2>Awesome place to start creating your
                                            <span>first doc with <img src="images/shape/line-shape-2.svg" alt="" /></span>deski
                                            </h2>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="block-style-twelve">
                                        <div className="row">
                                        <div className="col-lg-6 col-md-8 ml-auto order-lg-last">
                                            <div className="illustration-holder">
                                            <img src="images/assets/ils_10.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5 order-lg-first">
                                            <div className="text-wrapper">
                                            <h6>Documentation</h6>
                                            <h2 className="font-rubik title">A home for your team, best-practices &amp; thoughts.</h2>
                                            <p>With deksi docs, you can write, edit, let it collaborate wherever you are lorem  dumy text introduction.</p>
                                            </div> {/* /.text-wrapper */}
                                        </div>
                                        </div>
                                    </div> {/* /.block-style-twelve */}
                                    <div className="block-style-twelve">
                                        <div className="row">
                                        <div className="col-lg-6 col-md-8 mr-auto">
                                            <div className="illustration-holder">
                                            <img src="images/assets/ils_11.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="text-wrapper">
                                            <h6>User Guides</h6>
                                            <h2 className="font-rubik title">Docs for your APIs, products, FAQs and user guides,</h2>
                                            <p>With deksi docs, you can write, edit, let it collaborate wherever you are lorem  dumy text introduction.</p>
                                            </div> {/* /.text-wrapper */}
                                        </div>
                                        </div>
                                    </div> {/* /.block-style-twelve */}
                                    <div className="block-style-twelve">
                                        <div className="row">
                                        <div className="col-lg-6 col-md-8 ml-auto order-lg-last">
                                            <div className="illustration-holder">
                                            <img src="images/assets/ils_12.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5 order-lg-first" data-aos="fade-right">
                                            <div className="text-wrapper">
                                            <h6>Combine Idea</h6>
                                            <h2 className="font-rubik title">A place to think and track ideas for you &amp; your team</h2>
                                            <p>With deksi docs, you can write, edit, let it collaborate wherever you are lorem  dumy text introduction.</p>
                                            </div> {/* /.text-wrapper */}
                                        </div>
                                        </div>
                                    </div> {/* /.block-style-twelve */}
                                    </div>
                                </div> {/* /.fancy-feature-eight */}
                                
                                {/*
                                            =====================================================
                                                Useable Tools
                                            =====================================================
                                            */}
                                <div className="useable-tools-section-three mt-200 mb-200 md-mt-100 md-mb-80">
                                    <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                        <div className="title-style-four">
                                            <h2>
                                            <span>Who is using ours <img src="images/shape/line-shape-10.svg" alt="" /></span>
                                            deski docs?
                                            </h2>
                                        </div>
                                        <p className="sub-text">Deski ties into your existing tools, services, &amp; workflow. Get notifications or create story with others tools.</p>
                                        <a href="#" className="all-button">See all partners <i className="flaticon-right-arrow" /></a>
                                        </div>
                                    </div>
                                    </div> {/* /.container */}
                                    <div className="logo-wrapper d-flex flex-wrap justify-content-center align-items-center">
                                    <div className="logo d-flex align-items-center justify-content-center"><img src="images/logo/logo-32.png" alt="" /></div>
                                    <div className="logo d-flex align-items-center justify-content-center"><img src="images/logo/logo-33.png" alt="" /></div>
                                    <div className="logo d-flex align-items-center justify-content-center"><img src="images/logo/logo-34.png" alt="" /></div>
                                    <div className="logo d-flex align-items-center justify-content-center"><img src="images/logo/logo-35.png" alt="" /></div>
                                    <div className="logo d-flex align-items-center justify-content-center"><img src="images/logo/logo-36.png" alt="" /></div>
                                    <div className="logo d-flex align-items-center justify-content-center"><img src="images/logo/logo-37.png" alt="" /></div>
                                    <div className="logo d-flex align-items-center justify-content-center"><img src="images/logo/logo-38.png" alt="" /></div>
                                    </div> {/* /.logo-wrapper */}
                                </div> {/* /.useable-tools-section-three */}
                                
                                
                                
                                
                                
                                {/* 
                                =============================================
                                    Fancy Feature Nineteen
                                ============================================== 
                                */}
                    <div className="fancy-feature-nineteen mt-100 md-mt-100" id="effect">
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-9 col-lg-11 m-auto" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="title-style-eight text-center mb-80 md-mb-40">
                            <h2>Unleash Creativity with Pro Effects</h2>
                            <p>Explore advanced video editing features that only professionals have access to!</p>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="block-style-nineteen" style={{borderLeftColor: '#FFCE22'}}>
                            <div className="d-flex align-items-start">
                                <img src="images/icon/112.svg" alt="" className="icon" />
                                <div className="text">
                                <h4>Green Screen</h4>
                                <p>Change your background and create special effects using the Green Screen tool.</p>
                                </div>
                            </div>
                            </div> {/* /.block-style-nineteen */}
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={150}>
                            <div className="block-style-nineteen" style={{borderLeftColor: '#8F6BF6'}}>
                            <div className="d-flex align-items-start">
                                <img src="images/icon/113.svg" alt="" className="icon" />
                                <div className="text">
                                <h4>Audio Mixer</h4>
                                <p>Adjust the audio of each individual track on your timeline lorem elit extract.</p>
                                </div>
                            </div>
                            </div> {/* /.block-style-nineteen */}
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="block-style-nineteen" style={{borderLeftColor: '#FF5C5C'}}>
                            <div className="d-flex align-items-start">
                                <img src="images/icon/114.svg" alt="" className="icon" />
                                <div className="text">
                                <h4>Pan &amp; Zoom</h4>
                                <p>Add panning and zooming movements to still footage.</p>
                                </div>
                            </div>
                            </div> {/* /.block-style-nineteen */}
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={150}>
                            <div className="block-style-nineteen" style={{borderLeftColor: '#63EAA9'}}>
                            <div className="d-flex align-items-start">
                                <img src="images/icon/115.svg" alt="" className="icon" />
                                <div className="text">
                                <h4>Advanced Text Editing</h4>
                                <p>Edit the color, size, font, and even animation of your text and titles.</p>
                                </div>
                            </div>
                            </div> {/* /.block-style-nineteen */}
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="block-style-nineteen" style={{borderLeftColor: '#5BE2FF'}}>
                            <div className="d-flex align-items-start">
                                <img src="images/icon/116.svg" alt="" className="icon" />
                                <div className="text">
                                <h4>Color Tuning</h4>
                                <p>Adjust the white balance and dynamic range of your clips &amp; long videos.</p>
                                </div>
                            </div>
                            </div> {/* /.block-style-nineteen */}
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={150}>
                            <div className="block-style-nineteen" style={{borderLeftColor: '#FF56EE'}}>
                            <div className="d-flex align-items-start">
                                <img src="images/icon/117.svg" alt="" className="icon" />
                                <div className="text">
                                <h4>3D Lut</h4>
                                <p>Choose from a selection of color grading presets inspired by popular movies.</p>
                                </div>
                            </div>
                            </div> {/* /.block-style-nineteen */}
                        </div>
                        </div>
                    </div>
                    </div> {/* /.fancy-feature-nineteen */}
                                
                                
                                


{/*
                                            =====================================================
                                                Client Feedback Slider Two
                                            =====================================================
                                            */}
                                <div className="client-feedback-slider-two mt-180 md-mt-100">
                                    <img src="images/shape/78.svg" alt="" className="shapes shape-one" />
                                    <img src="images/shape/79.svg" alt="" className="shapes shape-two" />
                                    <img src="images/shape/80.svg" alt="" className="shapes shape-three" />
                                    <img src="images/shape/81.svg" alt="" className="shapes shape-four" />
                                    <img src="images/shape/82.svg" alt="" className="shapes shape-five" />
                                    <img src="images/shape/83.svg" alt="" className="shapes shape-six" />
                                    <img src="images/shape/84.svg" alt="" className="shapes shape-seven" />
                                    <img src="images/shape/85.svg" alt="" className="shapes shape-eight" />
                                    <div className="container">
                                    <div className="title-style-four text-center mb-100 md-mb-60">
                                        <div className="row">
                                        <div className="col-lg-7 col-md-9 m-auto">
                                            <h6>Feedback</h6>
                                            <h2>What’s Our Client Say
                                            <span>About Us <img src="images/shape/line-shape-2.svg" alt="" /></span>
                                            </h2>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="">
                                    <div className="">



                                    <Slider {...settings}>
                                    <div className="item">
                                        <div className="bg-wrapper">
                                            <img src="images/logo/logo-9.png" alt="" className="logo" />
                                            <p>Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.</p>
                                            <div className="name font-rubik">Zubayer Hasan.</div>
                                            <div className="desig">CEO &amp; Founder Heloshape</div>
                                        </div> {/* /.bg-wrapper */}
                                        </div>
                                        <div className="item">
                                        <div className="bg-wrapper">
                                            <img src="images/logo/logo-10.png" alt="" className="logo" />
                                            <p>Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.</p>
                                            <div className="name font-rubik">Eh Jewel</div>
                                            <div className="desig">Senior Developer</div>
                                        </div> {/* /.bg-wrapper */}
                                        </div>
                                        <div className="item">
                                        <div className="bg-wrapper">
                                            <img src="images/logo/logo-9.png" alt="" className="logo" />
                                            <p>Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.</p>
                                            <div className="name font-rubik">Zubayer Hasan.</div>
                                            <div className="desig">CEO &amp; Founder Heloshape</div>
                                        </div> {/* /.bg-wrapper */}
                                        </div>
                                        <div className="item">
                                        <div className="bg-wrapper">
                                            <img src="images/logo/logo-10.png" alt="" className="logo" />
                                            <p>Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.</p>
                                            <div className="name font-rubik">Eh Jewel</div>
                                            <div className="desig">Senior Developer</div>
                                        </div> {/* /.bg-wrapper */}
                                        </div>
                                    </Slider>








                                        
                                        
                                    </div>
                                    </div> {/* /.slider-content */}
                                </div> {/* /.client-feedback-slider-two */}













                                
                                
                                
                                
                                
                                
                                {/*
                                            =====================================================
                                                Faq Classic
                                            =====================================================
                                            */}
                                <div className="faq-classic with-bg">
                                    <img src="images/shape/86.svg" alt="" className="shapes shape-one" />
                                    <img src="images/shape/87.svg" alt="" className="shapes shape-two" />
                                    <img src="images/shape/88.svg" alt="" className="shapes shape-three" />
                                    <img src="images/shape/89.svg" alt="" className="shapes shape-four" />
                                    <img src="images/shape/90.svg" alt="" className="shapes shape-five" />
                                    <img src="images/shape/91.svg" alt="" className="shapes shape-six" />
                                    <div className="container">
                                    <div className="title-style-four text-center mb-100 md-mb-70">
                                        <div className="row">
                                        <div className="col-lg-7 m-auto">
                                            <h6>FAQ’s</h6>
                                            <h2>
                                            <span>Questions &amp; Answers<img src="images/shape/line-shape-2.svg" alt="" /></span>
                                            </h2>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                        <Faq
                                            data={data}
                                            styles={styles}
                                            config={config}
                                        />
                                        </div>
                                        <div className="col-md-6">
                                        <Faq
                                            data={data}
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
