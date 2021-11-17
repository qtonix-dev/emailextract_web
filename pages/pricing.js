import React, { Component } from 'react'
import Body from './components/Body'
import PricingBox from './components/pricing/PricingBox'
import PricingBoxPaid from './components/pricing/PricingBoxPaid'
import Faq from "react-faq-component";
import axios from 'axios';
import _ from "lodash";
import Head from 'next/head'

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
            "The Email Extract Online uses the most comprehensive database of public email addresses to find the correct contact information. All the email addresses go through an email verification process before being returned. The email addresses with a green shield mean they have been checked and found deliverable. You can use them safely and those email addresses with red shields are either unauthorized or are not in use. ",
      },
      {
        title: "Can you verify Bulk emails at once?",
        content: `Yes, with the bulk extraction feature, you can verify an unlimited number of emails within seconds. `,
      },
      {
        title: "How protected are my emails, which I upload on your software, or do you share with any 3rd party?",
        content: "It's 100% protected and safe. Any emails you upload into our software can only be accessed by you after login, and we don’t have any access to that as it gets stored in your storage.",
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
                    <title>Pricing</title>
                </Head>
              {/*
              =====================================================
                Pricing Section Six
              =====================================================
              */}
                <div className="pricing-section-six mt-100 md-mt-100 " id="pricing">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-10  m-auto">
                        <div className="title-style-seven text-center">
                          <h2>Solo, Agency or Team? <br />We’ve got you <span>covered.</span></h2>
                        </div> {/* /.title-style-six */}
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
                                <div className="faq-classic with-bg">
                                    <img src="images/shape/86-1.png" alt="" className="shapes shape-one" />
                                    <img src="images/shape/87-1.png" alt="" className="shapes shape-two" />
                                    <img src="images/shape/88-1.png" alt="" className="shapes shape-three" />
                                    <img src="images/shape/89-1.png" alt="" className="shapes shape-four" />
                                    <img src="images/shape/90-1.png" alt="" className="shapes shape-five" />
                                    <img src="images/shape/91-1.png" alt="" className="shapes shape-six" />
                                    <div className="container">
                                    <div className="title-style-four text-center mb-100 md-mb-70">
                                        <div className="row">
                                        <div className="col-lg-7 m-auto">
                                            <h6>Common questions about the pricing</h6>
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




export async function getStaticProps(){
  const response = await axios.get(`${process.env.backendURL}/package`);
  return {
    props: {
      package:response.data.data,
    },
    revalidate: 5,
  }
}