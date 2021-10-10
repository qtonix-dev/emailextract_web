import React, { Component } from 'react'
import Body from './components/Body'

export class pricing extends Component {
    render() {
        return (
            <Body>
  {/* 
			=============================================
				Pricing Section One
			============================================== 
			*/}
  <div className="pricing-section-one mb-150 md-mb-80">
    <div className="fancy-hero-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-11 m-auto">
            <h2 className="font-rubik">Choose package match your budget</h2>
          </div>
          <div className="col-12 m-auto">
            <p className="font-rubik">5 minute installation · Try Team plan features for 14 days · No credit card required</p>
          </div>
        </div>
        {/* Nav tabs */}
        <ul className="nav nav-tabs justify-content-center pricing-nav-one">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#month">Monthly</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#year">Yearly</a>
          </li>
        </ul>
        <div className="offer-text font-rubik">Save 30% on annual plan</div>
      </div>
      <div className="bubble-one" />
      <div className="bubble-two" />
      <div className="bubble-three" />
      <div className="bubble-four" />
      <div className="bubble-five" />
      <div className="bubble-six" />
    </div> {/* /.fancy-hero-one */}
    <div className="pricing-table-area">
      <img src="images/shape/62.svg" alt="" className="shapes shape-one" />
      <img src="images/shape/63.svg" alt="" className="shapes shape-two" />
      <div className="container">
        <div className="tab-content">
          <div className="tab-pane active" id="month">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="pr-table-wrapper">
                  <div className="pack-name">Starter</div>
                  <div className="price font-rubik">$18.<sup>99</sup></div>
                  <div className="pack-rec font-rubik">Small office / Home office</div>
                  <img src="images/icon/38.svg" alt="" className="icon" />
                  <div className="bill-cycle">Billed per agent</div>
                  <ul className="pr-feature">
                    <li>60-day chat history</li>
                    <li>Basic widget customization</li>
                    <li>Ticketing system</li>
                    <li>Data security</li>
                  </ul>
                  <a href="#" className="theme-btn-four">Choose Plan</a>
                  <div className="trial-text font-rubik">Get your 30 day free trial</div>
                </div> {/* /.pr-table-wrapper */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pr-table-wrapper">
                  <div className="pack-name">Team</div>
                  <div className="price font-rubik">$29.<sup>99</sup></div>
                  <div className="pack-rec font-rubik">Small office / Home office</div>
                  <img src="images/icon/40.svg" alt="" className="icon" />
                  <div className="bill-cycle">Billed per agent</div>
                  <ul className="pr-feature">
                    <li>60-day chat history</li>
                    <li>Basic widget customization</li>
                    <li>Ticketing system</li>
                    <li>Data security</li>
                  </ul>
                  <a href="#" className="theme-btn-four">Choose Plan</a>
                  <div className="trial-text font-rubik">Get your 30 day free trial</div>
                </div> {/* /.pr-table-wrapper */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pr-table-wrapper">
                  <div className="pack-name">Business</div>
                  <div className="price font-rubik">$50.<sup>99</sup></div>
                  <div className="pack-rec font-rubik">Small office / Home office</div>
                  <img src="images/icon/41.svg" alt="" className="icon" />
                  <div className="bill-cycle">Billed per agent</div>
                  <ul className="pr-feature">
                    <li>60-day chat history</li>
                    <li>Basic widget customization</li>
                    <li>Ticketing system</li>
                    <li>Data security</li>
                  </ul>
                  <a href="#" className="theme-btn-four">Choose Plan</a>
                  <div className="trial-text font-rubik">Get your 30 day free trial</div>
                </div> {/* /.pr-table-wrapper */}
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="year">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="pr-table-wrapper">
                  <div className="pack-name">Starter</div>
                  <div className="price font-rubik">$8.<sup>99</sup></div>
                  <div className="pack-rec font-rubik">Small office / Home office</div>
                  <img src="images/icon/38.svg" alt="" className="icon" />
                  <div className="bill-cycle">Billed per agent</div>
                  <ul className="pr-feature">
                    <li>60-day chat history</li>
                    <li>Basic widget customization</li>
                    <li>Ticketing system</li>
                    <li>Data security</li>
                  </ul>
                  <a href="#" className="theme-btn-four">Choose Plan</a>
                  <div className="trial-text font-rubik">Get your 30 day free trial</div>
                </div> {/* /.pr-table-wrapper */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pr-table-wrapper">
                  <div className="pack-name">Team</div>
                  <div className="price font-rubik">$19.<sup>99</sup></div>
                  <div className="pack-rec font-rubik">Small office / Home office</div>
                  <img src="images/icon/40.svg" alt="" className="icon" />
                  <div className="bill-cycle">Billed per agent</div>
                  <ul className="pr-feature">
                    <li>60-day chat history</li>
                    <li>Basic widget customization</li>
                    <li>Ticketing system</li>
                    <li>Data security</li>
                  </ul>
                  <a href="#" className="theme-btn-four">Choose Plan</a>
                  <div className="trial-text font-rubik">Get your 30 day free trial</div>
                </div> {/* /.pr-table-wrapper */}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pr-table-wrapper">
                  <div className="pack-name">Business</div>
                  <div className="price font-rubik">$35.<sup>99</sup></div>
                  <div className="pack-rec font-rubik">Small office / Home office</div>
                  <img src="images/icon/41.svg" alt="" className="icon" />
                  <div className="bill-cycle">Billed per agent</div>
                  <ul className="pr-feature">
                    <li>60-day chat history</li>
                    <li>Basic widget customization</li>
                    <li>Ticketing system</li>
                    <li>Data security</li>
                  </ul>
                  <a href="#" className="theme-btn-four">Choose Plan</a>
                  <div className="trial-text font-rubik">Get your 30 day free trial</div>
                </div> {/* /.pr-table-wrapper */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> {/* /.pricing-table-area */}
  </div> {/* /.pricing-section-one */}
  {/*
			=====================================================
				Counter Info Standard
			=====================================================
			*/}
  <div className="counter-info pb-150 md-pb-80">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6">
          <div className="counter-box-two">
            <h2 className="number"><span className="timer">0</span>.<span className="timer" >0</span></h2>
            <p className="font-rubik">Positive review and counting</p>
          </div> {/* /.counter-box-two */}
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="counter-box-two">
            <h2 className="number"><span className="timer">0</span>k</h2>
            <p className="font-rubik">Subscirber trust on our services</p>
          </div> {/* /.counter-box-two */}
        </div>
        <div className="col-lg-4 col-sm-6" >
          <div className="counter-box-two">
            <h2 className="number"><span className="timer" >0</span>k+</h2>
            <p className="font-rubik">Order complete successfully</p>
          </div> {/* /.counter-box-two */}
        </div>
      </div>
    </div>
  </div> {/* /.counter-info */}
  {/* 
			=============================================
				Fancy Text Block Fifteen
			============================================== 
			*/}
  <div className="fancy-text-block-fifteen">
    <div className="shapes shape-one" />
    <div className="shapes shape-two" />
    <div className="shapes shape-three" />
    <div className="shapes shape-four" />
    <div className="container">
      <div className="bg-wrapper">
        <div className="row">
          <div className="col-lg-6 order-lg-last" >
            <div className="text-wrapper md-pb-40">
              <img src="images/icon/42.svg" alt="" className="icon" />
              <div className="more-text">More Over <span>1500+ customers</span></div>
              <p className="font-rubik">Just simply amazing. Feel lucky use their service. Highly recommended andappriciate their service &amp; highly trusted.</p>
              <h6>Jimmy Klein. <span>California USA</span></h6>
            </div> {/* /.text-wrapper */}
          </div>
          <div className="col-lg-6 order-lg-first" >
            <img src="images/media/img_40.png" alt="" className="main-img" />
          </div>
        </div>
      </div> {/* /.bg-wrapper */}
      <div className="contact-banner mt-100 md-mt-60">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-7 col-lg-8" >
            <p className="font-rubik">Want a custome pricing for your business? Send us mail</p>
          </div>
          <div className="col-xl-4 col-lg-3" ><a href="contact-us(light).html" className="theme-btn-four ml-auto">Contact us</a></div>
        </div>
      </div> {/* /.contact-banner */}
    </div>
  </div> {/* /.fancy-text-block-fifteen */}
  {/*
			=====================================================
				Faq Classic
			=====================================================
			*/}
  <div className="faq-classic pt-150 pb-130 md-pt-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="title-style-one">
            <h6 className="font-rubik">Find your answers</h6>
            <h2>Have any thought? Look here.</h2>
          </div> {/* /.title-style-one */}
          <a href="faqs.html" className="theme-btn-one mt-50 md-mt-30">Go to Faq</a>
        </div>
        <div className="col-lg-6" >
          {/* ================== FAQ Panel ================ */}
          <div id="accordion" className="md-mt-60">
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
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn btn-link">
                    How to create customer panel?
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse show">
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
        </div> {/* /.col- */}
      </div>
    </div>
  </div> {/* /.faq-classic */}
 
            </Body>
        )
    }
}

export default pricing
