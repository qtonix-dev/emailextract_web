import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>

        <link rel="canonical" href="https://www.emailextractonline.com/" />
        <link rel="icon" type="image/png" href="/Favicon-mail.png"/>

        <link rel="stylesheet" type="text/css" href="/css/style.css" />
		    <link rel="stylesheet" type="text/css" href="/css/responsive.css" />
       
        <meta name="google-site-verification" content="yxd1eZtLZwfmfjdlSnePMlYLaBWhSIfqVDGNc5BtDIw" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Global site tag (gtag.js) - Google Analytics  */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-JXZLGN5W8Z"></script>
          
          {/* <script async src="/vendor/jquery.min.js" />
          <script async src="/vendor/popper.js/popper.min.js" />
          <script async src="/vendor/bootstrap/js/bootstrap.min.js" />
          <script async src="/vendor/mega-menu/assets/js/custom.js" />
          <script async src="/vendor/aos-next/dist/aos.js" />
          <script async src="/vendor/jquery.appear.js" />
          <script async src="/vendor/jquery.countTo.js" />
          <script async src="/vendor/slick/slick.min.js" />
          <script async src="/js/theme.js" /> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument