import React, { Component } from 'react'
import Body from './components/Body'
import PricingBox from './components/pricing/PricingBox'
import PricingBoxPaid from './components/pricing/PricingBoxPaid'
import Faq from "react-faq-component";
import axios from 'axios';
import _ from "lodash";
import Head from 'next/head'
import Freedemo from './components/aboutus/Freedemo'

//=======FAQ=======//
const data = {
  // title: "FAQ (How it works)",
  rows: [
      {
        title: "Is Email Extract Online free to use?",
        content: <p>Yes, we offer one of the most generous free plans in the industry so you get an idea of what our software is capable of.
        <br /><br />Our free tier includes:
            <ul>
                <li>•	5 Total Domain Search</li>
                <li>•	5 Total Email Search</li>
                <li>•	5 Total Email Verification</li>
                <li>•	50 Bulk Domain Search</li>
                <li>•	50 Bulk Domain Upload</li>
                <li>•	Unlimited Results</li>
                <li>•	Unlimited Storage</li>
                <li>•	1x Speed</li>
            </ul>
        </p>,
      },
      {
        title: "What payment methods do you offer?",
        content:
            <p>We accept all payments made via debit card and credit card.</p>,
      },
      {
        title: "What currency are your prices in?",
        content: <p>All our prices are in US dollars.</p>,
      },
      {
        title: "Are there any contracts, hidden charges or setup fees?",
        content: <p>No contracts, no hidden charges, and no setup fees. You can switch your plan or cancel your Email Extract Online subscription at any time.</p>,
      },
      {
        title: "How can I cancel my plan?",
        content: <p>Cancel your account anytime from your Account Settings. After canceling, you’ll still be able to use your plan until the end of the trial or subscription period.</p>,
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

export default class pricing extends Component {


    constructor(props){
      super(props)
      this.state={
        showMonthlyTab:true
      }
      this.changeType=this.changeType.bind(this)
    }


    static async getInitialProps({query}) {
      var data ={query};
      const responsess = await axios.get(`${process.env.backendURL}/page/viewpagedetails/625d3808272e48158360379c`);
    const response = await axios.get(`${process.env.backendURL}/package`);

      return{
        package:response.data.data,
        seo:responsess.data.data
      }
  }


    changeType(e){
        this.setState({showMonthlyTab:e})
    }

  
    render() {

      var packages = this.props.package
      var monthlypackages = _.filter(packages, function(dta) { return dta.type === 'Monthly'});
      var yearlypackages = _.filter(packages, function(dta) { return dta.type === 'Yearly'});


      console.log(yearlypackages)


        return (
            <Body>
              <Head>
                    <title>{this.props.seo.metatitle}</title>
                    <meta name="description" content={this.props.seo.metadesc} />
                    <meta name="keywords" content={this.props.seo.metakey} />
                
            
                </Head>
              {/*
              =====================================================
                Pricing Section Six
              =====================================================
              */}
              <div className="fancy-hero-four bg-doc space-fix">
                <div className="bg-wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-9 col-lg-11 col-md-10 m-auto">
                        <div className="title-style-seven text-center">
                          <h2><span>Simple & Transparent</span> Pricing Plans</h2>
                          <h6>Find the right solution for your needs</h6>
                          <p>We deliver an analytics experience with no hidden costs or additional products required. Understand the price you pay upfront, with no surprises. Buy our simple, capability-rich packages to upscale your business with verified emails.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
                <div className="pricing-section-six mt-10 md-mt-10" id="pricing">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-10  m-auto">
                         {/* /.title-style-six */}
                        
                        
                      </div>
                    </div>
                    {/* Nav tabs */}
                    <ul className="nav  justify-content-center pricing-nav-four">
                      <li className="nav-item">
                        <a className={`nav-link ${this.state.showMonthlyTab?`active`:``}`} onClick={()=>this.changeType(true)} style={{cursor:'pointer'}}>Monthly</a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${this.state.showMonthlyTab?``:`active`}`}  onClick={()=>this.changeType(false)} style={{cursor:'pointer'}}>Yearly</a>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-table-area-six">
                    <div className="tab-content">
                      
                    
                      <div className={this.state.showMonthlyTab?`tab-pane active`:'tab-pane fade'}>
                        <div className="row justify-content-center">

                          
                          {monthlypackages.map((data)=>{
                            if(data.name==='Free'){
                              return(
                                <PricingBox data={data} />
                              )
                            }else{
                              return(
                                <PricingBoxPaid data={data} />
                              )
                            }
                            
                          })}
                          
                          {/* <PricingBoxPaid />
                          <PricingBoxPaid />
                          <PricingBox />
                          <PricingBoxPaid /> */}


                        
                        </div>
                      </div>
                    
                    

                      <div className={this.state.showMonthlyTab?`tab-pane fade`:'tab-pane active'}>
                        <div className="row justify-content-center">
                          
                        {yearlypackages.map((data)=>{
                            if(data.name==='Free'){
                              return(
                                <PricingBox data={data} />
                              )
                            }else{
                              return(
                                <PricingBoxPaid data={data} />
                              )
                            }
                            
                          })}



                        </div>
                      </div>
                   
                      
                      
                    </div>
                  </div> {/* /.pricing-table-area-six */}
                </div> {/* /.pricing-section-six */}


                {/*
                                            =====================================================
                                                Faq Classic
                                            =====================================================
                                            */}
                                <div className="faq-classic with-bg faq-classic-bg">
                                    <img src="images/shape/86-1.png" alt="" className="shapes shape-one" />
                                    <img src="images/shape/87-1.png" alt="" className="shapes shape-two" />
                                    <img src="images/shape/88-1.png" alt="" className="shapes shape-three" />
                                    <img src="images/shape/89-1.png" alt="" className="shapes shape-four" />
                                    <img src="images/shape/90-1.png" alt="" className="shapes shape-five" />
                                    <img src="images/shape/91-1.png" alt="" className="shapes shape-six" />
                                    <div className="container">
                                    <div className="title-style-four text-center mb-30 md-mb-30">
                                        <div className="row">
                                        <div className="col-lg-7 m-auto">
                                          <div className="title-style-five mt-2">
                                          <h2><span>Common questions</span> about the pricing</h2>
                                          </div>
                                            
                                            <h6>
                                            <span>FREQUENTLY ASKED QUESTIONS</span>
                                            </h6>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                        <Faq
                                            data={data}
                                            styles={styles}
                                            config={config}
                                        />
                                        </div>
                                        {/* <div className="col-md-6">
                                        <Faq
                                            data={data}
                                            styles={styles}
                                            config={config}
                                        />
                                        </div> */}
                                    </div>
                                    </div>
                                </div> {/* /.faq-classic */}


                          <section className="free-section-demo-compare">
                            <Freedemo />
                          </section>
            </Body>
        )
    }
}




