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
        
          <Component {...pageProps}></Component>
          <ToastContainer />
          
      </Provider>
      
    )
  }
}


const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);

