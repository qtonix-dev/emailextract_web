import React, { Component } from 'react'
import Body from './components/Body'

export class contactus extends Component {
    render() {
        return (
            <Body>
  {/* 
			=============================================
				Fancy Hero Four
			============================================== 
			*/}
  <div className="fancy-hero-four bg-doc space-fix">
    <div className="bg-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-11 col-md-10 m-auto">
            <h6>Contact us</h6>
            <h2>Feel free to contact us or just say hi!</h2>
          </div>
        </div>
      </div>
    </div> {/* /.bg-wrapper */}
  </div> {/* /.fancy-hero-four */}
  {/* 
			=============================================
				Contact Style Two
			============================================== 
			*/}
  <div className="contact-style-two">
    <div className="container">
      <div className="contact-info-wrapper">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 d-lg-flex">
            <div className="address-info">
              <div className="icon d-flex align-items-end"><img src="images/icon/44.svg" alt="" /></div>
              <div className="title">Location</div>
              <p className="font-rubik">Dhaka, Kawran Bazar <br /> 1201 Metro</p>
            </div> {/* /.address-info */}
          </div>
          <div className="col-lg-4 col-sm-6 d-lg-flex">
            <div className="address-info">
              <div className="icon d-flex align-items-end"><img src="images/icon/45.svg" alt="" /></div>
              <div className="title">Contact</div>
              <p className="font-rubik">bawejkor@duwvude.gov <br />(779) 564-1593</p>
            </div> {/* /.address-info */}
          </div>
          <div className="col-lg-4 col-sm-6 d-lg-flex">
            <div className="address-info">
              <div className="icon d-flex align-items-end"><img src="images/icon/46.svg" alt="" /></div>
              <div className="title">Social Media</div>
              <p className="font-rubik">Find on social media</p>
              <ul className="d-flex justify-content-center">
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
              </ul>
            </div> {/* /.address-info */}
          </div>
        </div>
        <img src="images/shape/64.svg" alt="" className="shapes shape-one" />
      </div> {/* /.contact-info-wrapper */}
      <div className="form-style-classic mt-150 md-mt-80">
        <form action="#" id="contact-form" data-toggle="validator">
          <div className="messages" />
          <div className="row controls">
            <div className="col-md-6" data-aos="fade-right" data-aos-duration={1200}>
              <div className="input-group-meta form-group mb-60">
                <label>First Name</label>
                <input type="text" placeholder="Michel" name="Fname" required="required" data-error="Name is required." />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-duration={1200}>
              <div className="input-group-meta form-group mb-60">
                <label>Last Name</label>
                <input type="text" placeholder="Hawkins" name="Lname" required="required" data-error="Name is required." />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-12" data-aos="fade-up" data-aos-duration={1200}>
              <div className="input-group-meta form-group mb-60">
                <label>Email Address</label>
                <input type="email" placeholder="saeslal@zouj.co.uk" name="email" required="required" data-error="Valid email is required." />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-12" data-aos="fade-up" data-aos-duration={1200}>
              <div className="input-group-meta form-group lg mb-40">
                <label>Your Message</label>
                <textarea placeholder="your message here.." name="message" required="required" data-error="Please,leave us a message." defaultValue={""} />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-12" data-aos="fade-up" data-aos-duration={1200}><button className="theme-btn-six lg">Send Message</button></div>
          </div>
        </form>
      </div> {/* /.form-style-classic */}
    </div>
  </div> {/* /.contact-style-two */}

            </Body>
        )
    }
}

export default contactus
