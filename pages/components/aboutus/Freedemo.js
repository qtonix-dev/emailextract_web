import React, { useState, useMemo } from 'react'
import { Container, Row, Col, Form,Button,FloatingLabel } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import { useForm } from "react-hook-form"
import countryList from 'react-select-country-list'
import Select from 'react-select'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function Freedemo() {

    // const { register, handleSubmit } = useForm();
    // const { register, formState: { errors }, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);
    
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        // freedemo = JSON.stringify(data);
        console.log(JSON.stringify(data));
      };
      const intialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      };

      const [value, setValue] = useState('')
      const options = useMemo(() => countryList().getData(), [])

            const changeHandler = value => {
                console.log(value)
                setValue(value)
            }


     const [value_c, setValue_c] = useState('')

            const changeHandler_c = value_c => {
                console.log(value_c)
                setValue_c(value_c)
            }

    //   console.log(freedemo);
      
    return (
        <Container>
            <div className="free-demo-form">
                            <Row className="mb-5">
                                <Col sm={6}>
                                    <div className="free-demo-form-left">
                                        <h3>Your Personal Webdemo</h3>
                                        <p>Get to know Personio! In just 30 minutes, 
                                            our product experts will guide you through the solution and answer any questions you have.</p>
                                        <div className="free-demo-form-list">
                                            <ul>
                                                <li><FaCheck /> &nbsp;Introduction to all product features</li>
                                                <li><FaCheck /> &nbsp;Introduction to all product features</li>
                                                <li><FaCheck /> &nbsp;Introduction to all product features</li>
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
                                                    <Form.Control className="mb-2" id="inlineFormInput" placeholder="First Name" 
                                                    name="fname" 
                                                    defaultValue={intialValues.firstName} 
                                                    {...register("firstName", {validate: (value) => value !== ""})}
                                                    />
                                                    <h6 className="form-error-message">{errors.firstName && <p>Your firstname is empty</p>}</h6>
                                                    
                                                    {/* <h6 className="form_error_message">{this.validator.message('fname', this.state.fname, 'required|fname')}</h6> */}
                                                </Col>
                                                <Col sm={6}>
                                                    <Form.Control className="mb-2" id="inlineFormInput" placeholder="Last Name" 
                                                    name="lname"
                                                    defaultValue={intialValues.firstName} 
                                                    {...register("lastName", {validate: (value) => value !== ""})}
                                                     />
                                                     <h6 className="form-error-message">{errors.lastName && <p>Your lastname is empty</p>}</h6>
                                                    {/* <h6 className="form_error_message">{this.validator.message('lname', this.state.lname, 'required|lname')}</h6> */}
                                                </Col>
                                            </Row>
                                            <Row>
                                            <Col sm={12}>
                                                <Form.Control className="mb-2" id="inlineFormInput" 
                                                placeholder="Company Name" name="cname" 
                                                defaultValue={intialValues.companyName} 
                                                {...register("companyName", {validate: (value) => value !== ""})}
                                                />
                                                <h6 className="form-error-message">{errors.lastName && <p>Your Company name is empty</p>}</h6>
                                                {/* <h6 className="form_error_message">{this.validator.message('cname', this.state.cname, 'required|cname')}</h6> */}
                                            </Col>
                                            </Row>
                                            <Row>
                                            <Col sm={12} className="mb-2">
                                                    <Form.Control className="mb-2" id="inlineFormInput" placeholder="Company Size" 
                                                    name="csize" 
                                                    defaultValue={intialValues.companysize} 
                                                    {...register("csize", {validate: (value) => value !== ""})}
                                                    />
                                                    <h6 className="form-error-message">{errors.csize && <p>Enter your Company Strength</p>}</h6>
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
                                            <Select options={options} value={value} onChange={changeHandler} />
                                                
                                            
                                            {/* <h6 className="form-error-message">{errors.country && <p>Enter your Country Name</p>}</h6> */}
                                            </Col>
                                            
                                            </Row>
                                            <Row>
                                            <Col sm={12}>
                                                <Form.Control placeholder="Business Email" 
                                                name="email"
                                                defaultValue={intialValues.email} 
                                                {...register("email", {validate: (value) => value !== ""})}
                                                />
                                                <h6 className="form-error-message">{errors.email && <p>Your email is empty</p>}</h6>
                                                {/* <h6 className="form_error_message">{this.validator.message('email', this.state.email, 'required|email')}</h6> */}
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
                                            <PhoneInput className="phoneno-input"
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
                                            <Row>
                                                <Col sm={12}>
                                                    <p>We will only contact you to book an 
                                                        appoint that works for you and understand your specific requirements.</p>
                                                </Col>
                                            </Row>
                                            <Button variant="primary" type="submit" className="w-100">Submit</Button>
                                            
                                        </Form>
                                         <Row>
                                                <Col sm={12}>
                                                    <p className="my-3">We will only contact you to book an 
                                                        appoint that works for you and understand your specific requirements.</p>
                                                </Col>
                                            </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>

</Container>
    )
}
