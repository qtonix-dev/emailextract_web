import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import countryList from "react-select-country-list";
// import Select from "react-select";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import SimpleReactValidator from 'simple-react-validator'
import axios from 'axios';


export class Freedemo extends Component {

  constructor(props) {
    super(props)
    this.state={
      formLoading:false,
      showMessages:false,
      fname:'',
      lname:'',
      email:'',
      phone:'',
      message:'',
    }
    this.validator = new SimpleReactValidator();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }




  handleSubmit=(e)=>{
    e.preventDefault();
    if (this.validator.allValid()){
      console.log(this.state)

      axios.post(`${process.env.backendURL}/webapi/bookfreedemo`,this.state)
        .then(response=>{
          this.setState({formLoading:false,showMessages:true})
        })


    } else{
      this.validator.showMessages();
      this.forceUpdate();
    }
  }


  render() {
    return (
      <Container>
      <div className="">
        <Row className="mb-5">
          <Col lg={6} className="align-self-center">
            <div className="free-demo-form">
            <div className="free-demo-form-left">
              <h3>SCHEDULE A FREE DEMO</h3>
              <p>
                Is your organization looking for a powerful solution to extract
                email addresses of your potential prospects from legitimate
                sources? Get to know Email Extract Online in just 30 minutes!
                Registering for a free demo session with one of our product
                experts will let you know about all our product features while
                giving you a clear insight into how to get the most out of our
                product.
              </p>
              <div className="free-demo-form-list">
                <ul>
                  <li>
                    <FaAngleDoubleRight /> &nbsp;
                    <b>Introduction to all product features</b>
                  </li>
                  <li>
                    <FaAngleDoubleRight /> &nbsp;
                    <b>Tailored to your business priorities</b>
                  </li>
                  <li>
                    <FaAngleDoubleRight /> &nbsp;
                    <b>Answers to any questions you have</b>
                  </li>
                </ul>
                {/* {/ <img src="images/people-standing.png" alt="img-email" /> /} */}
                <p>
                  So book a free demo class with us now and see for yourself why
                  leading businesses around the world trust Email Extract Online
                  to grow better each day!
                </p>
                <p className="mt-4">
                  {/* {/ <img src="images/ipaydna.png" alt="emailicon" className="w-25" /> /} */}
                </p>
              </div>
              <div className="free-demo-form-list-btn">
                <ul>
                  <li className="schedule-demo">
                    <Link href="/register">Register Now</Link>
                  </li>
                  {/* {/ <li className="schedule-demo-free">Try For Free</li> /} */}
                </ul>
              </div>
            </div>
            </div>
            
          </Col>
          <Col lg={6}>
            <div className="free-demo-form-right mb-5">
              <h3>Book Your Free Demo</h3>
              

                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <div className="col-md-6" data-aos="fade-right" data-aos-duration={1200}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" name="fname" onChange={this.handleChange} />
                                <h6 className="form_error_message">{this.validator.message('firstname', this.state.fname, 'required')}</h6>

                            </Form.Group>
                        </div>
                        <div className="col-md-6" data-aos="fade-right" data-aos-duration={1200}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" name="lname" onChange={this.handleChange} />
                                <h6 className="form_error_message">{this.validator.message('firstname', this.state.lname, 'required')}</h6>

                            </Form.Group>
                        </div>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control className="mb-2" id="inlineFormInput" placeholder="Company Name" name="companyname" onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('companyname', this.state.companyname, 'required')}</h6>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Label>Company Size</Form.Label>
                            <Form.Control className="mb-2" id="inlineFormInput" placeholder="Company Size" name="companysize" onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('companysize', this.state.companysize, 'required')}</h6>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className="mb-2">
                            <Form.Label>Select Country</Form.Label>
                            <Form.Select aria-label="Floating label select example" name='country' onChange={this.handleChange}>
                                <option value="">Select</option>
                                <option>India</option>
                                <option>Usa</option>
                                <option>Australia</option>
                                <option>Canada</option>
                            </Form.Select>
                            <h6 className="form_error_message">{this.validator.message('country', this.state.country, 'required')}</h6>

                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col sm={12}>
                            <Form.Label>Business Email</Form.Label>
                            <Form.Control placeholder="Business Email" className="bemail" name="businessemail" onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('businessemail', this.state.businessemail, 'required')}</h6>
                                                
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" className="form-control" name="date" onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('date', this.state.date, 'required')}</h6>

                        </Col>
                        <Col sm={6}>
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="time" id="appt" name="time" className="form-control" onChange={this.handleChange} />
                            <h6 className="form_error_message">{this.validator.message('time', this.state.time, 'required')}</h6>

                        </Col>
                    </Row>
                    <Row className="g-2 mt-1">
                        <Col md={12}>
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control type='tel' className="form-control" name="phone" placeholder="Phone no."  onChange={this.handleChange}/>      
                            <h6 className="form_error_message">{this.validator.message('phone', this.state.phone, 'required')}</h6>

                        </Col>
                    </Row>
                    {this.state.formLoading===false
                ?<div className="col-12" data-aos="fade-up" data-aos-duration={1200}><button className="theme-btn-six lg">Send Message</button></div>
                :<img src='https://swedlook.com/wp-content/uploads/2016/07/585d0331234507.564a1d239ac5e.gif' alt='image' style={{width:'100px'}} />
                }
                
                {this.state.showMessages
                ?<h3 className='text-warning'>Thanks for your message</h3>
                :<></>}
                </form>


              <Row>
                <Col sm={12}>
                  <p className="my-3">
                    We will only contact you to book an appoint that works for
                    you and understand your specific requirements.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    )
  }
}

export default Freedemo