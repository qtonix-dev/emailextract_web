import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function error() {
    return (
        <div className="main-page-wrapper p0">
            <Head>
                <title>404</title>
            </Head>
            {/* ===================================================
                            Loading Transition
                        ==================================================== */}
            <section>
            </section>
            <div className="error-page d-lg-flex align-items-center">
                <div className="img-holder order-lg-last">
                <img src="/images/media/404.svg" alt="" className="w-100 illustration" />
                <img src="/images/media/404-q.svg" alt="" className="shapes qus" />
                </div>
                <div className="text-wrapper order-lg-first">
                {/* <div className="logo"><a href="index.html"><img src="images/logo/deski_05.svg" alt="" /></a></div> */}
                <h1 className="font-slab">Sorry, <br />The Page Can’t <br />be Found.</h1>
                <p className="font-rubik">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <Link href='/'>
                <a className="back-home font-rubik d-flex align-items-center justify-content-center">
                    <span>Back to Home</span>
                    <img src="images/icon/53.svg" alt="" />
                </a>
                </Link>
                </div> {/* /.text-wrapper */}
            </div> {/* /.error-page */}
            
            </div>

    )
}
