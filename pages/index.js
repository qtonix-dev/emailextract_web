import Head from 'next/head'
import Body from './components/Body'

import {Container,Accordion} from 'react-bootstrap'

export default function Home() {
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
                                <form action="#">
                                <input type="text" placeholder="Search Somthing.." />
                                <button><img src="images/icon/54.svg" alt="" /></button>
                                {/* <select className="form-control" id="exampleFormControlSelect1">
                                    <option>All</option>
                                    <option>Layout</option>
                                    <option>API</option>
                                    <option>Doc</option>
                                </select> */}
                                </form>
                            </div>
                            <p className="sing-in-call">Already using deski? <a href="login.html" className="font-rubik">Sign in</a>.</p>
                            <img src="images/assets/ils_09.svg" alt="" className="illustration" />
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
                                        Fancy Feature Eight
                                    ============================================== 
                                    */}
                        <div className="fancy-feature-eight mt-110 md-mt-80">
                            <div className="container">
                            <div className="row">
                                <div className="col-xl-12 m-auto">
                                <div className="title-style-four text-center mb-80 md-mb-30">
                                    <h2>Create documentation with technical-free writing,
                                    <span> &amp; effortless <img src="images/shape/line-shape-3.svg" alt="" /></span>
                                    hosting.
                                    </h2>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-11 m-auto">
                                <div className="row">
                                    <div className="col-md-6">
                                    <div className="block-style-ten">
                                        <div className="icon"><img src="images/icon/55.svg" alt="" /></div>
                                        <h6 className="title">Personal</h6>
                                        <p>With deski docs, you can write, edit, and collaborate wherever you are. For Free.</p>
                                        <a href="#"><img src="images/icon/56.svg" alt="" /></a>
                                    </div> {/* /.block-style-ten */}
                                    </div>
                                    <div className="col-md-6">
                                    <div className="block-style-ten">
                                        <div className="icon"><img src="images/icon/57.svg" alt="" /></div>
                                        <h6 className="title">Business</h6>
                                        <p>The deski Docs you love with added security and control for teams.</p>
                                        <a href="#"><img src="images/icon/56.svg" alt="" /></a>
                                    </div> {/* /.block-style-ten */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div> {/* /.fancy-feature-eight */}
                        {/* 
                                    =============================================
                                        Fancy Text block Sixteen
                                    ============================================== 
                                    */}
                        <div className="fancy-text-block-sixteen mt-200 md-mt-80">
                            <div className="container">
                            <div className="img-slick-slider">
                                <div className="item"><img src="images/assets/feature-img-12.png" alt="" /></div>
                                <div className="item"><img src="images/assets/feature-img-12.png" alt="" /></div>
                                <div className="item"><img src="images/assets/feature-img-12.png" alt="" /></div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-lg-3 col-md-4">
                                <div className="block-style-eleven mt-40">
                                    <div className="num font-rubik">01</div>
                                    <div className="title">Personal Notes</div>
                                    <p className="font-rubik">A place to think and track ideas for you and your team</p>
                                </div> {/* /.block-style-eleven */}
                                </div>
                                <div className="col-lg-3 col-md-4">
                                <div className="block-style-eleven mt-40">
                                    <div className="num font-rubik">02</div>
                                    <div className="title">Knowledge Base</div>
                                    <p className="font-rubik">A home for your team, best practices and thoughts.</p>
                                </div> {/* /.block-style-eleven */}
                                </div>
                                <div className="col-lg-3 col-md-4">
                                <div className="block-style-eleven mt-40">
                                    <div className="num font-rubik">03</div>
                                    <div className="title">Products Doc</div>
                                    <p className="font-rubik">Beautiful docs for your APIs, Products, FAQs, &amp; User Guides,</p>
                                </div> {/* /.block-style-eleven */}
                                </div>
                            </div>
                            </div>
                        </div> {/* /.fancy-text-block-sixteen */}
                        {/*
                                    =====================================================
                                        Fancy Feature Eight
                                    =====================================================
                                    */}
                        <div className="fancy-feature-eight pt-150 md-pt-100">
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
                            <div className="slider-content">
                            <div className="clientSliderTwo">
                                <div className="item">
                                <div className="bg-wrapper">
                                    <img src="images/logo/logo-8.png" alt="" className="logo" />
                                    <p>Lorem ipsum dolor sit, consectetu qsu some adipiscing elit eiusmod temp incididu nt ut labore e dol magna great aliqua.mollit ani muim.</p>
                                    <div className="name font-rubik">Rashed Ka.</div>
                                    <div className="desig">Founder CreativeGigs</div>
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
                            </div>
                            </div> {/* /.slider-content */}
                        </div> {/* /.client-feedback-slider-two */}
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
                                <div className="col-lg-6">
                                {/* ================== FAQ Panel ================ */}
                                <div id="accordion">
                                    <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link">
                                            How the affiliate programe works?
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="collapse">
                                        <div className="card-body">
                                        <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link">
                                            How delete my account?
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse">
                                        <div className="card-body">
                                        <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link">
                                            Ho to invite people with refferel link?
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" className="collapse">
                                        <div className="card-body">
                                        <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card">
                                    <div className="card-header" id="headingFive">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link">
                                            Is ios app available for the iphone?
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFive" className="collapse">
                                        <div className="card-body">
                                        <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6">
                                {/* ================== FAQ Panel ================ */}
                                <div id="accordiontwo">
                                    <div className="card">
                                    <div className="card-header" id="headingOne2">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link">
                                            How the affiliate programe works?
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne2" className="collapse">
                                        <div className="card-body">
                                        <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card">
                                    <div className="card-header" id="headingTwo2">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link">
                                            How to create customer panel?
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo2" className="collapse show">
                                        <div className="card-body">
                                        <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card">
                                    <div className="card-header" id="headingThree2">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link">
                                            How delete my account?
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree2" className="collapse">
                                        <div className="card-body">
                                        <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card">
                                    <div className="card-header" id="headingFour2">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link">
                                            Ho to invite people with refferel link?
                                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour2" className="collapse">
                                        <div className="card-body">
                                        <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div> {/* /.faq-classic */}
      
    </Body>
  )
}
