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
		<link rel="stylesheet" type="text/css" href="/responsive.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

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