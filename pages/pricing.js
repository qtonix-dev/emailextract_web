import React, { Component } from 'react'
import Body from './components/Body'
import PricingBox from './components/pricing/PricingBox'
import PricingBoxPaid from './components/pricing/PricingBoxPaid'
import Faq from "react-faq-component";

//=======FAQ=======//
const data = {
  // title: "FAQ (How it works)",
  rows: [
      {
          title: "Lorem ipsum dolor sit amet,",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
          ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
          In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
          Fusce sed commodo purus, at tempus turpis.`,
      },
      {
          title: "Nunc maximus, magna at ultricies elementum",
          content:
              "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
          title: "What is the package version",
          content: <p>current version is 1.2.1</p>,
      },
  ],
};
const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
//=======FAQ=======//

export class pricing extends Component {
  
    render() {
        return (
            <Body>
              {/*
			=====================================================
				Pricing Section Six
			=====================================================
			*/}
<div className="pricing-section-six mt-100 md-mt-100 " id="pricing">
  <div className="container">
    <div className="row">
      <div className="col-xl-10  m-auto">
        <div className="title-style-seven text-center">
          <h2>Solo, Agency or Team? We’ve got you <span>covered.</span></h2>
        </div> {/* /.title-style-six */}
      </div>
    </div>
    {/* Nav tabs */}
    <ul className="nav  justify-content-center pricing-nav-four">
      <li className="nav-item">
        <a className="nav-link active" data-toggle="tab" href="#month">Monthly</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#year">Yearly</a>
      </li>
    </ul>
  </div>
  <div className="pricing-table-area-six">
    <div className="tab-content">
      <div className="tab-pane active" id="month">
        <div className="row justify-content-center">

          
          
          
          <PricingBoxPaid />
          <PricingBoxPaid />
          <PricingBox />

          <PricingBoxPaid />


          
          {/* <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}>
            <div className="pr-table-wrapper">
              <div className="pack-name" style={{background: '#FBF3E5'}}>Business</div>
              <div className="price">$17.99</div>
              <div className="pack-details">Get more with team</div>
              <ul className="pr-feature">
                <li>Everthing is premium</li>
                <li>Find notes fast with search</li>
                <li>and tags</li>
                <li>Apply rich formatting</li>
                <li>Clip web pages</li>
                <li>25MB maximum note size</li>
                <li>Access notes offline</li>
                <li>18GB monthly upload limit</li>
              </ul>
              <a href="#" className="trial-button">Try it Free</a>
              <div className="trial-text">No card required, cancel any time</div>
            </div> 
          </div> */}
        </div>
      </div>
      <div className="tab-pane fade" id="year">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration={1200}>
            <div className="pr-table-wrapper">
              <div className="pack-name" style={{background: '#FFECEC'}}>Basic</div>
              <div className="price">Free</div>
              <div className="pack-details">TAKE GREAT NOTES</div>
              <ul className="pr-feature">
                <li>Sync up to 2 devices </li>
                <li>Find notes fast with search</li>
                <li>and tags</li>
                <li>Clip web pages</li>
                <li>25MB maximum note </li>
                <li>60MB monthly upload limit</li>
              </ul>
              <a href="#" className="trial-button">Try it Free</a>
              <div className="trial-text">No card required, cancel any time</div>
            </div> {/* /.pr-table-wrapper */}
          </div>
          <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}>
            <div className="pr-table-wrapper active">
              <div className="pack-name" style={{background: '#E3F8EF'}}>Reguler</div>
              <div className="price">$68.99</div>
              <div className="pack-details">BE MORE PRODUCTIVE</div>
              <ul className="pr-feature">
                <li>Sync up to 2 devices </li>
                <li>Find notes fast with search</li>
                <li>and tags</li>
                <li>Apply rich formatting</li>
                <li>Clip web pages</li>
                <li>25MB maximum note size</li>
                <li>Access notes offline</li>
                <li>10GBmonthly upload limit</li>
                <li>Annotate PDFs</li>
              </ul>
              <a href="#" className="trial-button">Try it Free</a>
              <div className="trial-text">No card required, cancel any time</div>
            </div> {/* /.pr-table-wrapper */}
          </div>
          <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}>
            <div className="pr-table-wrapper">
              <div className="pack-name" style={{background: '#FBF3E5'}}>Business</div>
              <div className="price">$189.99</div>
              <div className="pack-details">Get more with team</div>
              <ul className="pr-feature">
                <li>Everthing is premium</li>
                <li>Find notes fast with search</li>
                <li>and tags</li>
                <li>Apply rich formatting</li>
                <li>Clip web pages</li>
                <li>25MB maximum note size</li>
                <li>Access notes offline</li>
                <li>18GB monthly upload limit</li>
              </ul>
              <a href="#" className="trial-button">Try it Free</a>
              <div className="trial-text">No card required, cancel any time</div>
            </div> {/* /.pr-table-wrapper */}
          </div>
        </div>
      </div>
    </div>
  </div> {/* /.pricing-table-area-six */}
</div> {/* /.pricing-section-six */}


{/*
                                            =====================================================
                                                Faq Classic
                                            =====================================================
                                            */}
                                <div className="faq-classic with-bg">
                                    <img src="images/shape/86.svg" alt="" className="shapes shape-one" />
                                    <img src="images/shape/87.svg" alt="" className="shapes shape-two" />
                                    <img src="images/shape/88.svg" alt="" className="shapes shape-three" />
                                    <img src="images/shape/89.svg" alt="" className="shapes shape-four" />
                                    <img src="images/shape/90.svg" alt="" className="shapes shape-five" />
                                    <img src="images/shape/91.svg" alt="" className="shapes shape-six" />
                                    <div className="container">
                                    <div className="title-style-four text-center mb-100 md-mb-70">
                                        <div className="row">
                                        <div className="col-lg-7 m-auto">
                                            <h6>Common questions about the pricing</h6>
                                            <h2>
                                            <span>Questions &amp; Answers<img src="images/shape/line-shape-2.svg" alt="" /></span>
                                            </h2>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                        <Faq
                                            data={data}
                                            styles={styles}
                                            config={config}
                                        />
                                        </div>
                                        <div className="col-md-6">
                                        <Faq
                                            data={data}
                                            styles={styles}
                                            config={config}
                                        />
                                        </div>
                                    </div>
                                    </div>
                                </div> {/* /.faq-classic */}



            </Body>
        )
    }
}

export default pricing
