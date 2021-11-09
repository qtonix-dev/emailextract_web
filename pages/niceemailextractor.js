import React, { Component } from 'react'
import Body from './components/Body'
import Head from 'next/head'
import { Form } from 'react-bootstrap'
import axios from 'axios'

export class niceemailextractor extends Component {

    constructor(props){
        super(props)
        this.state={
            domains:'',
            domainCreate:'',
            datas:[],
            totaldomains:0,
            count:0,
            status:'Waiting'
        }
        this.handleChange=this.handleChange.bind(this);
        this.fetchRecord=this.fetchRecord.bind(this);
    }



    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    handleSubmit=e=>{
        e.preventDefault();

        
        const word = this.state.domains;
        const domains = word.split("\n");

        var domainCreate = [];
        domains.forEach(domainFunction);
        function domainFunction(domainurl, index) {

            if(domainurl===''){

            }else{
                var data={
                    domain:domainurl
                }
                domainCreate.push(data);
            }
            
        }

        this.setState({
            domainCreate:domainCreate,
            totaldomains:domainCreate.length
        })

        console.log(domainCreate[0])

        axios.get(`https://emailextractserver2bulkgetinfo.herokuapp.com/extract/${domainCreate[this.state.count].domain}`)
        .then(response=>{
          
            var bulkdomainextratdata = this.state.datas;
            var msdata= response.data.response;
            bulkdomainextratdata.push(msdata);

            this.setState({
                count:this.state.count+1,
                datas:bulkdomainextratdata,
                status:'Processing...'
            })
            this.fetchRecord();
        }).catch(err=>{

            var bulkdomainextratdata = this.state.datas;
            var msdata= {
                response: true,
                domain: this.state.domainCreate[this.state.count].domain,
                status: "Not Found",
                emails: [ ],
                tel: [ ]
            }
            bulkdomainextratdata.push(msdata);

            this.setState({
                count:this.state.count+1,
                datas:bulkdomainextratdata,
                status:'Processing...'
            })
            this.fetchRecord();
        })
    }


    fetchRecord(){
        
        if(this.state.totaldomains===this.state.count){
            this.setState({
                status:'Completed'
            })
        }else{
            
            axios.get(`https://e157-103-171-4-131.ngrok.io/extract/${this.state.domainCreate[this.state.count].domain}`,{timeout:7000})

            // axios.get(`https://emailextractserver2bulkgetinfo.herokuapp.com/extract/${this.state.domainCreate[this.state.count].domain}`,{timeout:7000})
            .then(response=>{
                var bulkdomainextratdata = this.state.datas;
                var msdata= response.data.response;
                bulkdomainextratdata.push(msdata);
                this.setState({
                    count:this.state.count+1,
                    datas:bulkdomainextratdata
                })
                this.fetchRecord();
            }).catch(err=>{
                var bulkdomainextratdata = this.state.datas;
                var msdata= {
                    response: true,
                    domain: this.state.domainCreate[this.state.count].domain,
                    status: "Not Found",
                    emails: [ ],
                    tel: [ ]
                }
                bulkdomainextratdata.push(msdata);
                this.setState({
                    count:this.state.count+1,
                    datas:bulkdomainextratdata
                })
                this.fetchRecord();
            })


        }


    }


    render() {
        console.log(this.state.datas)

        return (
            <Body>
                <Head>
                    <title>Fast Email Extractor</title>
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
                                    <span>Fast Email Extractor<img src="/images/shape/line-shape-11.svg" alt="ss" /></span>
                                </h1>
                                </div>
                            </div>
                            </div>
                        </div> 
                    </div> 



                
                    <div className="terms_and_policy" style={{marginBottom:'100px'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="col-12" data-aos="fade-up" data-aos-duration={1200}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Domains</Form.Label>
                                                <Form.Control as="textarea" placeholder="Your Domains" onChange={this.handleChange} name="domains" value={this.state.domains}  rows={10} />
                                            
                                            </Form.Group>
                                        </div>
                                        <div className="col-12" data-aos="fade-up" data-aos-duration={1200}><button className="theme-btn-six lg" type="submit">Extract</button></div>
                                    </form>
                                </div>
                                <div className="col-lg-12 mt-3 p-4">
                                    <hr/>
                                    
                                    <h4>Status: {this.state.status}</h4>
                                    <h4>Total Domains: {this.state.totaldomains}</h4>
                                    <h4>Total Fetched: {this.state.count}</h4>


                                    <hr/>
                                    <br />
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                            <th scope="col">Domain</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Tel</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.datas===0
                                            ?<></>
                                            :
                                            <>
                                            {this.state.datas.map((dta)=>{
                                                return(
                                                    <tr key={dta.domain}>
                                                        <td>{dta.domain}</td>
                                                        <td>
                                                            {dta.status==='Found'
                                                            ?
                                                            <>
                                                            {dta.emails.map((em)=>{
                                                                return(
                                                                    <>
                                                                        {em},&nbsp;
                                                                    </>
                                                                )
                                                                
                                                            })}
                                                            </>
                                                            :
                                                            <>-</>}
                                                        </td>
                                                        <td>-</td>
                                                    </tr>
                                                )
                                            })}

                                            </>
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
            </Body>
        )
    }
}

export default niceemailextractor
