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
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
		<link rel="stylesheet" type="text/css" href="/css/responsive.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* <script src="/vendor/jquery.min.js" />
          <script src="/vendor/popper.js/popper.min.js" />
          <script src="/vendor/bootstrap/js/bootstrap.min.js" />
          <script src="/vendor/mega-menu/assets/js/custom.js" />
          <script src="/vendor/aos-next/dist/aos.js" />
          <script src="/vendor/jquery.appear.js" />
          <script src="/vendor/jquery.countTo.js" />
          <script src="/vendor/slick/slick.min.js" />
          <script src="/js/theme.js" /> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument