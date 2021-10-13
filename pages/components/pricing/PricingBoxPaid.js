import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";

export default function PricingBoxPaid() {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="pr-table-wrapper active">
              <div className="pack-name" style={{background: '#E3F8EF'}}>Reguler</div>
              <div className="mypristrike">$18.99</div>
              <div className="price">$8.99</div>
              <div className="pack-details">BE MORE PRODUCTIVE</div>
              <ul className="pr-feature">
              <li><AiOutlineCheck /> <b>25</b> Total Domain Search </li>
                <li><AiOutlineCheck /> <b>25</b> Total Email Search </li>
                <li><AiOutlineCheck /> <b>25</b> Total Email Verification </li>
                <li><AiOutlineCheck /> <b>25</b> Bulk Domain Search </li>
                <li><AiOutlineCheck /> <b>250</b> Bulk Domain Upload  </li>
                <li><AiOutlineCheck /> Unlimited Results </li>
                <li><AiOutlineCheck /> Unlimited Storage </li>
                <li><AiOutlineCheck /> CSV Exporting  </li>
                <li><AiOutlineCheck /> Techinical Support  </li>
              </ul>
              <a href="#" className="trial-button">Try it Free</a>
              <br />
            </div> {/* /.pr-table-wrapper */}
          </div>
    )
}
