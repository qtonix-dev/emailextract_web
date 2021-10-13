import React from 'react'
import { AiOutlineCheck,AiOutlineClose } from "react-icons/ai";

export default function PricingBox() {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="pr-table-wrapper active" style={{backgroundColor:'#6bd0ff'}}>
              <div className="pack-name" style={{background: '#FFECEC'}}>Basic</div>
              <div className="mypristrike" style={{visibility:'hidden'}}>$18.99</div>

              <div className="price">Free</div>
              <div className="pack-details">TAKE GREAT NOTES</div>
              <ul className="pr-feature">
                <li><AiOutlineCheck /> <b>25</b> Total Domain Search </li>
                <li><AiOutlineCheck /> <b>25</b> Total Email Search </li>
                <li><AiOutlineCheck /> <b>25</b> Total Email Verification </li>
                <li><AiOutlineCheck /> <b>25</b> Bulk Domain Search </li>
                <li><AiOutlineCheck /> <b>250</b> Bulk Domain Upload  </li>
                <li><AiOutlineCheck /> Unlimited Results </li>
                <li><AiOutlineCheck /> Unlimited Storage </li>
                <li style={{textDecoration:'line-through'}}><AiOutlineClose /> CSV Exporting  </li>
                <li style={{textDecoration:'line-through'}}><AiOutlineClose /> Techinical Support  </li>

                
              </ul>
              <a href="#" className="trial-button">Try it Free</a>
              <br />
              {/* <div className="trial-text">No card required, cancel any time</div> */}
            </div> {/* /.pr-table-wrapper */}
          </div>
    )
}
