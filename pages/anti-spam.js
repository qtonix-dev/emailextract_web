import React, { Component } from 'react'
import Body from './components/Body'
import Head from 'next/head'

export class antispam extends Component {
    render() {
        return (
            <Body>
                <Head>
                    <title>Anti Spam</title>
                </Head>
                {/* 
                =============================================
                    Fancy Hero Five
                ============================================== 
                */}
                    <div className="fancy-hero-five">
                    <img src="images/shape/95.svg" alt="" className="shapes shape-one" />
                    <img src="images/shape/96.svg" alt="" className="shapes shape-two" />
                    <div className="bg-wrapper">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12 m-auto text-center">
                            <h1 className="heading">
                                <span>Anti Spam<img src="/images/shape/line-shape-11.svg" alt="ss" /></span>
                            </h1>
                            </div>
                        </div>
                        </div>
                    </div> {/* /.bg-wrapper */}
                    </div> {/* /.fancy-hero-five */}



                    {/*
                    =====================================================
                    Terms and Condition
                    =====================================================
                    */}
                    <div className="terms_and_policy" style={{marginBottom:'100px'}}>
                        <div className="container">
                            <div className="row">
                            
                            <div className="col-lg-12">
                                <div className="tab-content">
                                <div id="opt1" className="tab-pane fade active show">
                                    
                                    <h3>1. Introduction</h3>
                                    <p>We have taken a number of steps to comply with the GDPR. For more details about our compliance and how we handle your data please check our latest legal documents below:</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex expedita ipsa saepe impedit consequatur placeat veritatis, inventore laborum odit sapiente Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eaque quos ipsa culpa error quibusdam porro perspiciatis, ut, eos officia dicta cumque consequuntur reiciendis possimus amet recusandae voluptatibus maiores provident. sequi quasi dolore, minus distinctio error tenetur cumque eaque. Molestias?</p>

                                    <br />

                                    <h3>2. About us</h3>
                                    <p>When you use Ticket Tailor for selling tickets and collecting data from your attendees you are the “data controller” of all your attendees’ data. We are a “data processor”, which means that we won’t do anything with your attendees’ data other than what you need us to in order to provide our service. We won’t be sending your attendees any marketing emails, sharing their data with anyone and if you want us to delete the data, just ask. It’s your data. 100</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti praesentium doloremque deserunt corporis maiores, quaerat soluta impedit sequi quo eaque aut tempora quas earum iusto veniam ipsa provident, eius voluptatibus.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat hic repellendus et quidem quia fuga eum sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis, earum cupiditate, culpa recusandae tenetur quod quis corporis delectus Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, porro rem. Voluptatibus est nostrum a vero ad aut illo fugiat officiis ut. Laboriosam quibusdam nisi iste dolores eum cum consequatur? explicabo voluptate, obcaecati provident? Distinctio quibusdam, dolorem vel maxime cupiditate tempore! asperiores voluptatum vel eius vero repudiandae, voluptate, explicabo rem ex sint molestias corrupti!</p>
                                    <br />

                                    <h3>3. Accessing our Website</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto aliquid fugiat temporibus esse, impedit magni architecto ut quos, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, corrupti qui id quia harum neque iure placeat voluptas alias hic expedita dolorem culpa eveniet iste quis, nemo facilis debitis pariatur. aliquam aperiam voluptate provident iure suscipit, quaerat odio itaque magnam cum?</p>
                                    <p>The servers and databases that power Ticket Tailor are located in the EU in Ireland. We inevitably use a small number of third parties, some of which are outside of the EU, to provide our ticketing service and we have contracts with each of them that oblige them to comply with the GDPR. You can find the full list of these third parties and what we use them for here.</p>
                                
                                
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </Body>
        )
    }
}

export default antispam
