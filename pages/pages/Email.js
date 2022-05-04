import React from 'react'
import Body from './components/Body'
import { Container,Row,Col } from 'react-bootstrap';

const Email = () => {
    return (
        <Body>
            <Container className="email_leading">
  <Row >
    <Col sm={6}>
       <h2 className='type_writer'>TEST OUR EMAIL VERIFIER</h2>
       <div className="welcome_search_bar">
                    <input type="text" placeholder="person@company.com" className="welcome_search_input" />
                    <input type="submit" value="Check Email" className="welcome_search_btn" />
         </div>


          <div className='emailfind_btn'>
              
          <Row>
    <Col md={2}> <img src="rev.svg" alt="thumb" className='img_svg'></img></Col>
    <Col md={8}>
      <h3>We verify everyday <span style={{color:"#DA5F42"}}>millions of emails</span> <br /> for <span style={{color:"#6530D3"}}>thousands of users</span> <br />  </h3>
     <a href='#' className='email_btn1'> GET 100 FREE VERIFICATIONS EVERY MONTH</a>
      <p className='eml_par'>No Card Required</p>
    </Col>
    <Col md={2}> <img src="mes.svg" alt="email" className='img_svg'></img></Col>
  </Row>
              
              
               
               
        </div>       
 </Col>
     
    <Col sm={6}>  <img src="/1.svg" alt="important" className="img-meta" /></Col>
  </Row>
  </Container > 



<section className='sect_2'>
     

  <Container   >
        <h3 className='sec2_head'>CHECK THE VALIDITY OF<span style={{color:"green"}}>  EMAILS</span> IN THE WEB</h3>

  <Row className="part2" >
    <Col >
    <img src="/2.svg" alt="important" className="img-meta1" />
    
     </Col>
     
    <Col>  <img src="/3.png" alt="important" className="img-meta2" /></Col>
  </Row>
 



</Container>
</section>
<Container >
  <Row className="part4"   >
    <Col style={{display:"block"}} >
      

      <div className='div1'>
                    <h3 className='text1'>Type</h3>
                    <br />
                    <p className='extra_text'>Check if the email is professional or personal</p>
                </div>
      
                <div className='div1'>
                    <h3 className='text2'>Form</h3>
                   
                    <p className='extra_text1'>Check if the form is valid or not</p>
                </div>
                <div className='div1'>
                    <h3 className='text3'>Email server</h3>
                  
                    <p className='extra_text2'>Check if the host has SMTP Server</p>
                </div>
                <div className='div1'>
                    <h3 className='text4'>Email exists</h3>
                  
                    <p className='extra_text3'>Check if the email exists or not</p>
                </div>
                
      
    
     </Col>
     
    <Col>  <img src="/4.svg" alt="" className="img-metalast" /></Col>
  </Row>
 


</Container>

        </Body>
    )
}

export default Email
