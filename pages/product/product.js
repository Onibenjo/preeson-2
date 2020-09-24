import NavBar from "../../components/landingPage/Navbar";
import React, {Component} from 'react'
import Head from 'next/head'
// import { Provider } from 'react-redux';
import {addToCart} from '../../components/actions/cartActions'
import {connect} from 'react-redux'
class ProductPage extends Component{
  handleClick = (id)=>{
    this.props.addToCart(id); 
}
  render(){
    let itemList = this.props.items.map(item=>{
    return(
        <>
            <Head>
          <title>Schon Peesol Energy | Solar Company</title>
          <link rel="icon" href="/favicon.ico" />
          </Head>
            <NavBar/>
            <div
                className="slider-area brown__nav slider--15 slide__activation slide__arrow01 owl-carousel owl-theme">
                <div className="slide animation__style10 bg-image--1 fullscreen align__center--left">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="slider__content">
                                    <div className="contentbox">
                                        <h2>Our  <span>Products </span></h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="page-shop-sidebar left--sidebar bg--white section-padding--lg">
             
                <div className="container" >
               
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab__container">
                                <div className="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                            
                                            <div className="product"key={item.id}>
                                                <div className="product__thumb">
                                                    <a className="first__img" href="single-product.html">
                                                        <img
                                                        src={item.img} alt="product image"/>
                                                        </a>
                                                    <a className="second__img animation1"
                                                       href="single-product.html">
                                                        <img src={item.img}
                                                        alt="product image"/>
                                                       </a>
                                                    <div className="new__box">
                                                        <span className="new-label">Hot</span>
                                                    </div>
                                                    <ul className="prize position__right__bottom d-flex">
                                                        <li>₦{item.price}</li>
                                                        {/* <li className="old_prize">$55.00</li> */}
                                                    </ul>
                                                    <div className="action">
                                                        <div className="actions_inner">
                                                            <ul className="add_to_links">
                                                                <li><a className="cart" href="cart.html"></a></li>
                                                                <li><a className="wishlist" href="wishlist.html"></a>
                                                                </li>
                                                                <li><a className="compare" href="compare.html"></a></li>
                                                                <li><a data-toggle="modal" title="Quick View"
                                                                       className="quickview modal-view detail-link"
                                                                       href="#productmodal"></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product__content">
                                                    <h4><a href="single-product.html">{item.name}</a></h4>
                                                    {/* <ul className="rating d-flex">
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul> */}
                                                    <button onClick={()=>{this.handleClick(item.id)}}>Add to Cart</button>
                                                </div>
                                            </div>
                                            
                                      </div>
                                        
                                        
                                        
                    </div>
                </div>
                </div>
                </div>
                </div>
                
                </div>
                 
            </section>

        </>
    ) 
    })
}
}
const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
  
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)