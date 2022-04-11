// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../scss/main.scss'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


// if (typeof window === 'undefined') {
//   global.window = {}
// }

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp



import App from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../store/store'
import { ToastContainer } from 'react-toastify'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


// *** IMPORTANT MAIN.SCSS (not included)


import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';



class MyApp extends App {

  

  render(){
    const {Component,pageProps} = this.props;
    return(
      <Provider store={store}>
          <GoogleReCaptchaProvider
      language="es-AR"
      reCaptchaKey="6Lf3JqwZAAAAAM7EVYnGEw3QtmXEI8gWxjr3rdGZ"
    >
          <Component {...pageProps}></Component>
          <ToastContainer />
          </GoogleReCaptchaProvider>
      </Provider>
      
    )
  }
}


const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);

