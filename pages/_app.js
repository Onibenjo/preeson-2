import '../styles/css/custom.css'
import '../styles/css/plugins.css'
import '../styles/css/bootstrap.min.css'
import '../styles/style.css'
import cartReducer from '../components/reducers/cartReducer'
// import App, {Container} from 'next/app'

import { createWrapper }from 'next-redux-wrapper'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// classbased
// class MyApp extends App {
//   static async getInitialProps(ctx) {
//     const appProps = await App.getInitialProps(ctx);
//     return { ...appProps };
//   }
//   render(){
//    const {Component, pageProps, store} = this.props;
//     return (
//         <Provider store={store}>
//           <Component {...pageProps} />
//         </Provider>
//       )
//     }
// }

//function based
const MyApp = ({ Component, pageProps, store }) =>  <Provider store={store}><Component {...pageProps} /> </Provider>

const store = createStore(cartReducer);
const makeStore = () => store;
// export default MyApp
// wrapper.withRedux(makeStore, {debug:true})(MyApp)
//you can remove the comment the from the above and use it with the export
const wrapper = createWrapper(makestore, {debug: true})
export default wrapper.withRedux(MyApp)
