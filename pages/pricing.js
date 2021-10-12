import React, { Component } from 'react'
import Body from './components/Body'

export class pricing extends Component {
    render() {
        return (
            <Body>
  <div>
  {/* 
			=============================================
				Pricing Section Two
			============================================== 
			*/}
  <div className="pricing-section-two">
    <div className="fancy-hero-four">
      <div className="shapes shape-one" />
      <div className="shapes shape-two" />
      <div className="shapes shape-three" />
      <div className="shapes shape-four" />
      <div className="shapes shape-five" />
      <div className="shapes shape-six" />
      <div className="bg-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11 m-auto">
              <h2>Choose package match your budget</h2>
            </div>
            <div className="col-12 m-auto">
              <p className="font-rubik sub-heading">5 minute installation · Try Team plan features for 14 days · No credit card required</p>
            </div>
          </div>
          {/* Nav tabs */}
          <ul className="nav nav-tabs justify-content-center pricing-nav-two">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#month">Monthly</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#year">Yearly</a>
            </li>
          </ul>
        </div>
      </div> {/* /.bg-wrapper */}
    </div> {/* /.fancy-hero-four */}
    <div className="container">
      <div className="pricing-table-area">
        <div className="clearfix">
          <div className="tab-content">
            <div className="tab-pane active" id="month">
              <div className="row no-gutters">
                <div className="col-lg-3 col-sm-6 pr-bg d-flex">
                  <div className="pr-table-wrapper">
                    <div className="pack-name">FREE</div>
                    <div className="price"><sup>$</sup>0</div>
                    <div className="bill-cycle">3 Free Agents</div>
                    <a href="#" className="theme-btn-three">Sign Up</a>
                    <ul className="pr-feature">
                      <li>Email Ticketing</li>
                      <li>Customer Management</li>
                      <li>Help Center</li>
                      <li>Private Knowledge Base</li>
                      <li>Predefined SLAs</li>
                      <li>Macros</li>
                    </ul>
                  </div> {/* /.pr-table-wrapper */}
                </div>
                <div className="col-lg-3 col-sm-6 pr-bg d-flex">
                  <div className="pr-table-wrapper">
                    <div className="pack-name">Standard</div>
                    <div className="price"><sup>$</sup>29</div>
                    <div className="bill-cycle">Per agent billed</div>
                    <a href="#" className="theme-btn-three">Sign Up</a>
                    <ul className="pr-feature">
                      <li>Social &amp; Community</li>
                      <li>Channels</li>
                      <li>Product-based Ticket</li>
                      <li>Management</li>
                      <li>Help Center Themes</li>
                      <li>Gallery</li>
                      <li>Public Knowledge Base</li>
                      <li>SLAs &amp; Escalations</li>
                      <li>Workflow, Assignment</li>
                    </ul>
                  </div> {/* /.pr-table-wrapper */}
                </div>
                <div className="col-lg-3 col-sm-6 pr-bg d-flex">
                  <div className="pr-table-wrapper">
                    <div className="pack-name">Start up</div>
                    <div className="price"><sup>$</sup>38</div>
                    <div className="bill-cycle">Per agent billed</div>
                    <a href="#" className="theme-btn-three">Sign Up</a>
                    <ul className="pr-feature">
                      <li>Multi-Department Ticketing</li>
                      <li>Team Management</li>
                      <li>Telephony</li>
                      <li>Automatic Time Tracking</li>
                      <li>Blueprint - Basic Process</li>
                      <li>Management</li>
                      <li>Round Robin Ticket</li>
                      <li>Assignment</li>
                      <li>Agent Collision</li>
                      <li>Tasks, Events &amp; Call</li>
                      <li>Activities</li>
                      <li>Mobile SDKs</li>
                    </ul>
                  </div> {/* /.pr-table-wrapper */}
                </div>
                <div className="col-lg-3 col-sm-6 pr-bg d-flex">
                  <div className="pr-table-wrapper">
                    <div className="pack-name">Business</div>
                    <div className="price"><sup>$</sup>56</div>
                    <div className="bill-cycle">Per agent billed</div>
                    <a href="#" className="theme-btn-three">Sign Up</a>
                    <ul className="pr-feature">
                      <li>Live Chat</li>
                      <li>Zia - Artificial Intelligence</li>
                      <li>Help Center</li>
                      <li>Customization</li>
                      <li>Multi-brand Help Center</li>
                      <li>Advanced Process</li>
                      <li>Management</li>
                      <li>Custom Functions</li>
                      <li>Multi-level IVR</li>
                      <li>Global Reports &amp;</li>
                      <li>Dashboards</li>
                      <li>Scheduled Reports</li>
                      <li>Contract Management</li>
                      <li>Validation Rules</li>
                    </ul>
                  </div> {/* /.pr-table-wrapper */}
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="year">
              <div className="row no-gutters">
                <div className="col-lg-3 col-sm-6 pr-bg d-flex">
                  <div className="pr-table-wrapper">
                    <div className="pack-name">FREE</div>
                    <div className="price"><sup>$</sup>0</div>
                    <div className="bill-cycle">3 Free Agents</div>
                    <a href="#" className="theme-btn-three">Sign Up</a>
                    <ul className="pr-feature">
                      <li>Email Ticketing</li>
                      <li>Customer Management</li>
                      <li>Help Center</li>
                      <li>Private Knowledge Base</li>
                      <li>Predefined SLAs</li>
                      <li>Macros</li>
                    </ul>
                  </div> {/* /.pr-table-wrapper */}
                </div>
                <div className="col-lg-3 col-sm-6 pr-bg d-flex">
                  <div className="pr-table-wrapper">
                    <div className="pack-name">Standard</div>
                    <div className="price"><sup>$</sup>129</div>
                    <div className="bill-cycle">Per agent billed</div>
                    <a href="#" className="theme-btn-three">Sign Up</a>
                    <ul className="pr-feature">
                      <li>Social &amp; Community</li>
                      <li>Channels</li>
                      <li>Product-based Ticket</li>
                      <li>Management</li>
                      <li>Help Center Themes</li>
                      <li>Gallery</li>
                      <li>Public Knowledge Base</li>
                      <li>SLAs &amp; Escalations</li>
                      <li>Workflow, Assignment</li>
                    </ul>
                  </div> {/* /.pr-table-wrapper */}
                </div>
                <div className="col-lg-3 col-sm-6 pr-bg d-flex">
                  <div className="pr-table-wrapper">
                    <div className="pack-name">Start up</div>
                    <div className="price"><sup>$</sup>138</div>
                    <div className="bill-cycle">Per agent billed</div>
                    <a href="#" className="theme-btn-three">Sign Up</a>
                    <ul className="pr-feature">
                      <li>Multi-Department Ticketing</li>
                      <li>Team Management</li>
                      <li>Telephony</li>
                      <li>Automatic Time Tracking</li>
                      <li>Blueprint - Basic Process</li>
                      <li>Management</li>
                      <li>Round Robin Ticket</li>
                      <li>Assignment</li>
                      <li>Agent Collision</li>
                      <li>Tasks, Events &amp; Call</li>
                      <li>Activities</li>
                      <li>Mobile SDKs</li>
                    </ul>
                  </div> {/* /.pr-table-wrapper */}
                </div>
                <div className="col-lg-3 col-sm-6 pr-bg d-flex">
                  <div className="pr-table-wrapper">
                    <div className="pack-name">Business</div>
                    <div className="price"><sup>$</sup>156</div>
                    <div className="bill-cycle">Per agent billed</div>
                    <a href="#" className="theme-btn-three">Sign Up</a>
                    <ul className="pr-feature">
                      <li>Live Chat</li>
                      <li>Zia - Artificial Intelligence</li>
                      <li>Help Center</li>
                      <li>Customization</li>
                      <li>Multi-brand Help Center</li>
                      <li>Advanced Process</li>
                      <li>Management</li>
                      <li>Custom Functions</li>
                      <li>Multi-level IVR</li>
                      <li>Global Reports &amp;</li>
                      <li>Dashboards</li>
                      <li>Scheduled Reports</li>
                      <li>Contract Management</li>
                      <li>Validation Rules</li>
                    </ul>
                  </div> {/* /.pr-table-wrapper */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="images/shape/64.svg" alt="" className="shapes shape-one" />
        <img src="images/shape/65.svg" alt="" className="shapes shape-two" />
      </div> {/* /.pricing-table-area */}
    </div>
  </div> {/* /.pricing-section-two */}
  {/* 
			=============================================
				Fancy Text block Seven
			============================================== 
			*/}
  <div className="fancy-text-block-seven mt-130 md-mt-80">
    <div className="bg-wrapper no-bg">
      <img src="images/shape/29.svg" alt="" className="shapes shape-one" />
      <img src="images/shape/30.svg" alt="" className="shapes shape-two" />
      <img src="images/shape/31.svg" alt="" className="shapes shape-three" />
      <img src="images/shape/32.svg" alt="" className="shapes shape-four" />
      <img src="images/shape/33.svg" alt="" className="shapes shape-five" />
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-10 m-auto" data-aos="fade-right" data-aos-duration={1200}>
            <div className="img-holder">
              <img src="images/media/img_19.png" alt="" />
              <img src="images/shape/34.svg" alt="" className="shapes shape-six" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 ml-auto" data-aos="fade-left" data-aos-duration={1200}>
            <div className="quote-wrapper pt-60">
              <img src="images/icon/26.svg" alt="" className="icon" />
              <blockquote className="font-rubik">
                Deski combines excellent live chat, ticketing and automation that allow us to provide quality.
              </blockquote>
              <h6 className="mt-20">Mike Lucas. <span>CEO &amp; Founder deksi</span></h6>
            </div> {/* /.quote-wrapper */}
          </div>
        </div>
      </div>
    </div> {/* /.bg-wrapper */}
  </div> {/* /.fancy-text-block-seven */}
  {/*
			=====================================================
				Useable Tools
			=====================================================
			*/}
  <div className="useable-tools-section-two bg-shape mb-200 mt-150 md-mt-50 md-mb-120">
    <div className="bg-wrapper">
      <div className="shapes shape-one" />
      <div className="shapes shape-two" />
      <div className="shapes shape-three" />
      <div className="shapes shape-four" />
      <div className="container">
        <div className="title-style-two text-center mb-70 md-mb-10">
          <div className="row">
            <div className="col-lg-10 col-md-11 m-auto">
              <p>Integrates with your tools</p>
              <h2>Connect deski with the software you
                <span>use every<img src="images/shape/line-shape-2.svg" alt="" /></span>
                day.
              </h2>
              <a href="#" className="theme-btn-two mt-60 md-mt-40">Try out now</a>
            </div>
          </div>
        </div> {/* /.title-style-two */}
        <div className="icon-wrapper">
          <ul className="clearfix">
            <li>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/09.png" alt="" />
              </div>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/10.png" alt="" />
              </div>
            </li>
            <li>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/11.png" alt="" />
              </div>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/12.png" alt="" />
              </div>
            </li>
            <li>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/13.png" alt="" />
              </div>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/14.png" alt="" />
              </div>
            </li>
            <li>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/15.png" alt="" />
              </div>
            </li>
            <li>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/16.png" alt="" />
              </div>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/17.png" alt="" />
              </div>
            </li>
            <li>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/18.png" alt="" />
              </div>
            </li>
            <li>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/19.png" alt="" />
              </div>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/20.png" alt="" />
              </div>
            </li>
            <li>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/21.png" alt="" />
              </div>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/22.png" alt="" />
              </div>
            </li>
            <li>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/23.png" alt="" />
              </div>
              <div className="icon-box d-flex align-items-center justify-content-center">
                <img src="images/logo/24.png" alt="" />
              </div>
            </li>
          </ul>
        </div> {/* /.icon-wrapper */}
      </div> {/* /.container */}
    </div> {/* /.bg-wrapper */}
  </div> {/* /.useable-tools-section-two */}
</div>




 
            </Body>
        )
    }
}

export default pricing
