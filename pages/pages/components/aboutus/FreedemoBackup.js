import React, { useState, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import countryList from "react-select-country-list";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

export default function Freedemo() {
  // const { register, handleSubmit } = useForm();
  // const { register, formState: { errors }, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // freedemo = JSON.stringify(data);
    console.log(JSON.stringify(data));
  };
  const intialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    console.log(value);
    setValue(value);
  };

  const [value_c, setValue_c] = useState("");

  const changeHandler_c = (value_c) => {
    console.log(value_c);
    setValue_c(value_c);
  };

  //   console.log(freedemo);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container>
      <div className="free-demo-form">
        <Row className="mb-5">
          <Col sm={6}>
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
                {/* <img src="images/people-standing.png" alt="img-email" /> */}
                <p>
                  So book a free demo class with us now and see for yourself why
                  leading businesses around the world trust Email Extract Online
                  to grow better each day!
                </p>
                <p className="mt-4">
                  {/* <img src="images/ipaydna.png" alt="emailicon" className="w-25" /> */}
                </p>
              </div>
              <div className="free-demo-form-list-btn">
                <ul>
                  <li className="schedule-demo">
                    <Link href="/register">Register Now</Link>
                  </li>
                  {/* <li className="schedule-demo-free">Try For Free</li> */}
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="free-demo-form-right mb-5">
              <h3>Book Your Free Demo</h3>
              <Form method="post" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col sm={6}>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="First Name"
                      name="fname"
                      defaultValue={intialValues.firstName}
                      {...register("firstName", {
                        validate: (value) => value !== "",
                      })}
                    />
                    <h6 className="form-error-message">
                      {errors.firstName && <p>Your firstname is empty</p>}
                    </h6>

                    {/* <h6 className="form_error_message">{this.validator.message('fname', this.state.fname, 'required|fname')}</h6> */}
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Last Name"
                      name="lname"
                      defaultValue={intialValues.firstName}
                      {...register("lastName", {
                        validate: (value) => value !== "",
                      })}
                    />
                    <h6 className="form-error-message">
                      {errors.lastName && <p>Your lastname is empty</p>}
                    </h6>
                    {/* <h6 className="form_error_message">{this.validator.message('lname', this.state.lname, 'required|lname')}</h6> */}
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Company Name"
                      name="cname"
                      defaultValue={intialValues.companyName}
                      {...register("companyName", {
                        validate: (value) => value !== "",
                      })}
                    />
                    <h6 className="form-error-message">
                      {errors.lastName && <p>Your Company name is empty</p>}
                    </h6>
                    {/* <h6 className="form_error_message">{this.validator.message('cname', this.state.cname, 'required|cname')}</h6> */}
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} className="mb-2 cSize">
                    <Form.Control
                      id="inlineFormInput"
                      placeholder="Company Size"
                      name="csize"
                      defaultValue={intialValues.companysize}
                      {...register("csize", {
                        validate: (value) => value !== "",
                      })}
                    />
                    <h6 className="form-error-message">
                      {errors.csize && <p>Enter your Company Strength</p>}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} className="mb-2">
                    {/* <Form.Select aria-label="Floating label select example" {...register("country", {validate: (value) => value !== ""})}>
                                                <option value="">Country</option>
                                                <option>India</option>
                                                <option>Usa</option>
                                                <option>Australia</option>
                                                <option>Canada</option>
                                            </Form.Select> */}
                    <Select
                      options={options}
                      value={value}
                      onChange={changeHandler}
                    />

                    {/* <h6 className="form-error-message">{errors.country && <p>Enter your Country Name</p>}</h6> */}
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Form.Control
                      placeholder="Business Email"
                      className="bemail"
                      name="email"
                      defaultValue={intialValues.email}
                      {...register("email", {
                        validate: (value) => value !== "",
                      })}
                    />
                    <h6 className="form-error-message">
                      {errors.email && <p>Your email is empty</p>}
                    </h6>
                    {/* <h6 className="form_error_message">{this.validator.message('email', this.state.email, 'required|email')}</h6> */}
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col sm={6}>
                    <DatePicker
                      className="form-control"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      type="time"
                      id="appt"
                      name="appt"
                      min="09:00"
                      max="18:00"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row className="g-2 mt-1">
                  {/* <Col md={3}>
                                                
                                                <Form.Select aria-label="Floating label select example">
                                                    <option>County Code</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Col> */}
                  <Col md={12}>
                    <PhoneInput
                      className="phoneno-input"
                      international
                      defaultCountry="IN"
                      value={value_c}
                      onChange={changeHandler_c}
                      defaultValue={intialValues.phone}
                    />
                    {/* <h6 className="form-error-message">{errors.phone && <p>Your phone no is empty</p>}</h6> */}
                    {/* <Form.Control className="mb-2" id="inlineFormInput" placeholder="Mobile no" 
                                                type="tel" name="phone"
                                                {...register("Mobile number", {
                                                    validate: (value) => value !== "",
                                                    required: true,
                                                    maxLength: 11,
                                                    minLength: 8
                                                  })}
                                                  
                                                /> */}
                    {/* <h6 className="form_error_message">{this.validator.message('phone', this.state.email, 'required|phone')}</h6> */}
                  </Col>
                </Row>
                <Button
                  type="submit"
                  className="w-100 mt-3 btn-lg free-demo-btn"
                >
                  Submit
                </Button>
              </Form>
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
  );
}
