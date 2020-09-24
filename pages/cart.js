import NavBar from "../components/landingPage/Navbar";
import Head from 'next/head'
export default function Cart() {

    //need to get the cart and setcart state over here!!
    const clearThecart = () => {
        setCart([]);
      };
    

    const cartAmount = (product, ) =>{
        const New = [...cart] //need that state
    }
    return (
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
                                        <h2>Your  <span>Cart </span></h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-main-area section-padding--lg bg--white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 ol-lg-12">
                            <form action="#">
                                <div className="table-content wnro__table table-responsive">
                                    <table>
                                        <thead>
                                        <tr className="title-top">
                                            <th className="product-thumbnail">Image</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="product-thumbnail"><a href="#">
                                                {/*<img*/}
                                                {/*src="images/product/sm-3/1.jpg" alt="product img">*/}
                                                </a></td>
                                            <td className="product-name"><a href="#">Natoque penatibus</a></td>
                                            <td className="product-price"><span className="amount">$165.00</span></td>
                                            <td className="product-quantity"><input type="number" value="1"/></td>
                                            <td className="product-subtotal">$165.00</td>
                                            <td className="product-remove"><a href="#">X</a></td>
                                        </tr>
                                        {/* <tr>
                                            <td className="product-thumbnail"><a href="#">
                                                <img
                                                src="images/product/sm-3/2.jpg" alt="product img">
                                                </a></td>
                                            <td className="product-name"><a href="#">Quisque fringilla</a></td>
                                            <td className="product-price"><span className="amount">$50.00</span></td>
                                            <td className="product-quantity"><input type="number" value="1"/></td>
                                            <td className="product-subtotal">$50.00</td>
                                            <td className="product-remove"><a href="#">X</a></td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail"><a href="#">
                                                <img
                                                src="images/product/sm-3/3.jpg" alt="product img">
                                                </a></td>
                                            <td className="product-name"><a href="#">Vestibulum suscipit</a></td>
                                            <td className="product-price"><span className="amount">$50.00</span></td>
                                            <td className="product-quantity"><input type="number" value="1"/></td>
                                            <td className="product-subtotal">$50.00</td>
                                            <td className="product-remove"><a href="#">X</a></td>
                                        </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                            <div className="cartbox__btn">
                                <ul className="cart__btn__list d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                                    <li><a href="#">Coupon Code</a></li>
                                    <li><a href="#">Apply Code</a></li>
                                    <li><a href="#">Update Cart</a></li>
                                    <li><a href="#">Check Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="cartbox__total__area">
                                <div className="cartbox-total d-flex justify-content-between">
                                    <ul className="cart__total__list">
                                        <li>Cart total</li>
                                        <li>Sub Total</li>
                                    </ul>
                                    <ul className="cart__total__tk">
                                        <li>$70</li>
                                        <li>$70</li>
                                    </ul>
                                </div>
                                <div className="cart__total__amount">
                                    <span>Grand Total</span>
                                    <span>$140</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
