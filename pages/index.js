import Head from 'next/head'
import Body from '../components/Body'

import {Container,Accordion} from 'react-bootstrap'

export default function Home() {
  return (
    <Body>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container-fluid p-2">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <a className="navbar-brand mx-auto" href="#"> <img src="https://www.mailercloud.com/img/brand/mailercloud-logo.svg" width="129px" /> </a>
          </div>
          <div className="mx-auto order-0">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Feature</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ContactUs</a>
              </li>
            </ul>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link btn btn-primary btn-sm navloginbtn" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link btn btn-primary btn-sm ms-2 text-white navgetstartedbtn" href="#">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      </section>
      <section>
        <div className="herobgimage">
          <Container>
            <div className="jumbotron jumbotron-fluid d-flex align-items-center pat2">
              <div className="container">
                <div className="row col-12 col-sm-12 col-md-12 col-lg-6 offset-lg-3 justify-content-center text-center">
                    <h1 className="h1">Find emails for any domain name <br /> Enter a domain to start for free  </h1>
                    <p>Lorem ipsum doloiunt quibusdam possimus! Dolor nisi quod dignissimos, quae a magnam eligendi odit veritatis ipsum non placeat, veniam saepe harum.</p>
                    <br />
                    <div className="card banner_box">
                      <div className="card-body ">
                      <form className="row g-0">
                        <div className="input-group mb-3">
                          <input type="text" className="form-control banner_box_input" placeholder="Recipient's username" />
                          <button className="btn btn-outline-secondary banner_box_input_button" type="submit" >Find email addresses</button>
                        </div>
                      </form>
                      <p>Lorem ipsum dolor uam tempore nisi quo cum amet aute.</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      
      <section>
        <Container>
          <div className="homesection2">
            <h5 className="text-center">Trusted by major business worldwide</h5>
            <div className="row align-items-center">
              <div className="col-6 col-md">
                <center className="m-4 ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/VOGUE_LOGO.svg/1544px-VOGUE_LOGO.svg.png" className="w-75" alt="image1" />
                </center>
              </div>
              <div className="col-6 col-md">
              <center className="m-4 ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/ISOBAR_LOGO_RGB_POS.jpg" className="w-75" alt="image1" />
                </center>
              </div>
              <div className="col-6 col-md">
              <center className="m-4 ">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Ogilvy_logo.svg/1200px-Ogilvy_logo.svg.png" className="w-75" alt="image1" />
                </center>
              </div>
              <div className="col-6 col-md">
              <center className="m-4 ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png" className="w-75" alt="image1" />
                </center>
              </div>
              <div className="col-6 col-md">
              <center className="m-4 ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1960s_Gucci_Logo.svg/640px-1960s_Gucci_Logo.svg.png" className="w-75" alt="image1" />
                </center>
              </div>
            </div>
            <hr />
          </div>
        </Container>
      </section>
      <br /><br /><br />


      <section>
        <Container>
          <div className="homesection3">
            <div className="row">
              <div className="col-md-8 offset-md-2">
              {/* <svg width="200" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <image href="/bitu.svg" height="200" width="200"/>
              </svg>
              <h6>ssss</h6>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis tempora enim beatae reprehenderit velit blanditiis neque. Distinctio, quis. Praesentium, qui! Voluptatum vitae, quisquam repellat ipsa necessitatibus illum doloremque alias!</p>
              
               */}
              <h5 className="text-center text-fade1">Get the email address behind any website</h5>         
              </div>
              <div className="col-md-6 offset-md-3">
                <p className="text-fade2 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur cum consequatur ullam nostrum et excepturi dolore alias quaerat quo laboriosam itaque, numquam iste esse debitis nesciunt officia. In, nostrum a.</p>
              </div>



            </div>
            <div className="row d-none d-lg-block">
                <div className="col-lg-12">
                  <span>Favorite and Collect Emails</span>
                  <svg width="200" height="200"
                    xmlns="http://www.w3.org/2000/svg">
                    <image href="/bitu.svg" height="200" width="200"/>
                  </svg>
                  

                  <div className="card" style={{width:'300px'}}>
                    <div className="card-body">
                      <p>hello</p>
                      <p>hello</p>
                      <p>hello</p>
                      <p>hello</p>
                    </div>
                  </div>


                  <span className="float-end">Realtime Email Finder</span>
                </div>  
                <div className="col-md-6 offset-md-3">
                  <h5>sss</h5>
                </div>
            </div>
            
          </div>
        </Container>
      </section>
      <br /><br /><br />


      <section>
        <Container>
          <div className="homesection4">
            <div className="row">
              <div className="col-md-8 offset-md-2">
              <h5 className="text-center text-fade1">Frequently Asked Questions</h5>         
              </div>
              <div className="col-md-10 offset-md-1">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </div>
            </div>
            
          </div>
        </Container>
      </section>
      <br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
    </Body>
  )
}
