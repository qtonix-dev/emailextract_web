import React from 'react'
import { AiOutlineCheck,AiOutlineClose } from "react-icons/ai";
import Link from 'next/link'

export default function PricingBox({data}) {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="pr-table-wrapper">
              <div className="pack-name" style={{background: '#FFECEC'}}>{data.name}</div>
              <div className="mypristrike" style={{visibility:'hidden'}}>${data.name}</div>
              <div className="price">${data.displayprice}</div>
              <div className="pack-details">{data.type==='Monthly'?`BILLED MONTHLY`:`BILLED YEARLY`}</div>
                <ul className="pr-feature">
                  <li><AiOutlineCheck /> <b>{data.totalsingledomain===123456789?'Unlimited':data.totalsingledomain}</b> Single Domain Search </li>
                  <li><AiOutlineCheck /> <b>{data.totalemailsearch===123456789?'Unlimited':data.totalemailsearch}</b> Single Email Search </li>
                  <li><AiOutlineCheck /> <b>{data.totalemailverification===123456789?'Unlimited':data.totalemailverification}</b> Total Email Verification </li>
                  <li><AiOutlineCheck /> <b>{data.totalbuldomainkextract===123456789?'Unlimited':data.totalbuldomainkextract}</b> Bulk Domain Search </li>
                  <li><AiOutlineCheck /> <b>{data.bulkuploaddomainatatime}</b> Bulk Domain Upload  </li>
                  <li><AiOutlineCheck /> Unlimited Results </li>
                  <li><AiOutlineCheck /> Unlimited Storage </li>
                  <li><AiOutlineCheck /> {data.displayspeed}x Speed  </li>
                  <li className="price1212"><AiOutlineClose /> CSV Exporting  </li>
                  <li className="price1212"><AiOutlineClose /> Techinical Support  </li>
                </ul>
                <Link href='/login'><a className="trial-button">Try it Free</a></Link>
              <br />
            </div>
          </div>
    )
}
