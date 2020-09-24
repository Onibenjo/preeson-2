import NavBar from "../components/landingPage/Navbar";
import Head from 'next/head'
export default function Checkout() {
    return (
        <>

<Head>
          <title>Schon Peesol Energy | Solar Company</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
            <NavBar/>
            <section className="wn__checkout__area section-padding--lg bg__white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 md-mt-40 sm-mt-40">
                            <div className="wn__order__box">
                                <h3 className="onder__title">Your order</h3>
                                <ul className="order__total">
                                    <li>Product</li>
                                    <li>Total</li>
                                </ul>
                                <ul className="order_product">
                                    <li>Buscipit at magna × 1<span>$48.00</span></li>
                                    <li>Buscipit at magna × 1<span>$48.00</span></li>
                                    <li>Buscipit at magna × 1<span>$48.00</span></li>
                                    <li>Buscipit at magna × 1<span>$48.00</span></li>
                                </ul>
                                <ul className="shipping__method">
                                    <li>Cart Subtotal <span>$48.00</span></li>
                                    <li>Shipping
                                        <ul>
                                            <li>
                                                <input name="shipping_method[0]" data-index="0" value="legacy_flat_rate"
                                                       checked="checked" type="radio"/>
                                                    <label>Flat Rate: $48.00</label>
                                            </li>
                                            <li>
                                                <input name="shipping_method[0]" data-index="0" value="legacy_flat_rate"
                                                       checked="checked" type="radio"/>
                                                    <label>Flat Rate: $48.00</label>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="total__amount">
                                    <li>Order Total <span>$223.00</span></li>
                                </ul>
                            </div>
                            <div id="accordion" className="checkout_accordion mt--30" role="tablist">
                                <div className="payment">
                                    <div className="che__header" role="tab" id="headingOne">
                                        <a className="checkout__title" data-toggle="collapse" href="#collapseOne"
                                           aria-expanded="true" aria-controls="collapseOne">
                                            <span>Direct Bank Transfer</span>
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" role="tabpanel"
                                         aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="payment-body">Make your payment directly into our bank account.
                                            Please use your Order ID as the payment reference. Your order won’t be
                                            shipped until the funds have cleared in our account.
                                        </div>
                                    </div>
                                </div>
                                <div className="payment">
                                    <div className="che__header" role="tab" id="headingTwo">
                                        <a className="collapsed checkout__title" data-toggle="collapse"
                                           href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span>Cheque Payment</span>
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" role="tabpanel"
                                         aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="payment-body">Please send your cheque to Store Name, Store
                                            Street, Store Town, Store State / County, Store Postcode.
                                        </div>
                                    </div>
                                </div>
                                <div className="payment">
                                    <div className="che__header" role="tab" id="headingThree">
                                        <a className="collapsed checkout__title" data-toggle="collapse"
                                           href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span>Cash on Delivery</span>
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" role="tabpanel"
                                         aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="payment-body">Pay with cash upon delivery.</div>
                                    </div>
                                </div>
                                <div className="payment">
                                    <div className="che__header" role="tab" id="headingFour">
                                        <a className="collapsed checkout__title" data-toggle="collapse"
                                           href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <span>PayPal
                                                {/*<img src="images/icons/payment.png"*/}
                                                {/*              alt="payment images">*/}
                                                </span>
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="collapse" role="tabpanel"
                                         aria-labelledby="headingFour" data-parent="#accordion">
                                        <div className="payment-body">Pay with cash upon delivery.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
