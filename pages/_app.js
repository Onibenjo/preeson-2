import '../styles/css/custom.css'
import '../styles/css/plugins.css'
import '../styles/css/bootstrap.min.css'
import '../styles/style.css'
import cartReducer from '../components/reducers/cartReducer'
import App, {Container} from 'next/app'

import withRedux from "next-redux-wrapper";
import React from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
class MyApp extends App {
  
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
     return {pageProps: pageProps};
    }
    
    render(){
      const {Component, pageProps, store} = this.props;
  return (
       
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    
  
    )
    }
}
const store = createStore(cartReducer);
const makeStore = () => store;
export default MyApp
// wrapper.withRedux(makeStore, {debug:true})(MyApp)
//you can remove the comment the from the above and use it with the export
