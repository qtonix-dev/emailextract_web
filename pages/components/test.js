import React  from "react"
import Body from './Body'
import Head from 'next/head'
import { Container } from 'react-bootstrap'

function test() {

    return (

        <>
            <Body>
                <Head>
                    <title>Test</title>
                </Head>
                <Container>
                    
                    <div>
                        <h3>hello world</h3>
                    </div>
                </Container>
            </Body>
        </>

    )

}

export default test