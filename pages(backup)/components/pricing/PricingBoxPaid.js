import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import Link from 'next/link'

export default function PricingBoxPaid({data}) {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className={`pr-table-wrapper ${data.name==='Growth'?`mybgprice`:``}`}>
              <div className="pack-name" style={{background: '#E3F8EF'}}>{data.name}</div>
              <div className="mypristrike">${data.mainprice}</div>

              <div className="price">${data.displayprice}</div>
              <div className="pack-details">{data.type==='Monthly'?`BILLED MONTHLY`:`BILLED YEARLY`}</div>
              <ul className="pr-feature">
                <li><AiOutlineCheck /> <b>{data.totalsingledomain}</b> Total Domain Search </li>
                <li><AiOutlineCheck /> <b>{data.totalemailsearch}</b> Total Email Search </li>
                <li><AiOutlineCheck /> <b>{data.totalemailverification}</b> Total Email Verification </li>
                <li><AiOutlineCheck /> <b>{data.totalbuldomainkextract}</b> Bulk Domain Search </li>
                <li><AiOutlineCheck /> <b>{data.bulkuploaddomainatatime}</b> Bulk Domain Upload  </li>
                <li><AiOutlineCheck /> Unlimited Results </li>
                <li><AiOutlineCheck /> Unlimited Storage </li>
                <li><AiOutlineCheck /> {data.displayspeed}x Speed  </li>
                <li><AiOutlineCheck /> CSV Exporting  </li>
                <li><AiOutlineCheck /> Techinical Support  </li>
                
              </ul>
              <Link href='/login'><a className="trial-button">Try it Free</a></Link>
              <br />
            </div> {/* /.pr-table-wrapper */}
          </div>
    )
}
