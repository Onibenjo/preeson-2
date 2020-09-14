import NavBar from "../../components/landingPage/Navbar";

export default function Single() {
    return (
        <>
            <NavBar/>
            <div className="maincontent bg--white pt--80 pb--55">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-12">
                            <div className="wn__single__product">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="wn__fotorama__wrapper">
                                            <div className="fotorama wn__fotorama__action" data-nav="thumbs">
                                                {/*<a href="1.jpg"><img src="images/product/1.jpg" alt=""></a>*/}
                                                {/*<a href="2.jpg"><img src="images/product/2.jpg" alt=""></a>*/}
                                                {/*<a href="3.jpg"><img src="images/product/3.jpg" alt=""></a>*/}
                                                {/*<a href="4.jpg"><img src="images/product/4.jpg" alt=""></a>*/}
                                                {/*<a href="5.jpg"><img src="images/product/5.jpg" alt=""></a>*/}
                                                {/*<a href="6.jpg"><img src="images/product/6.jpg" alt=""></a>*/}
                                                {/*<a href="7.jpg"><img src="images/product/7.jpg" alt=""></a>*/}
                                                {/*<a href="8.jpg"><img src="images/product/8.jpg" alt=""></a>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="product__info__main">
                                            <h1>Chaz Kangeroo Hoodie</h1>
                                            <div className="product-info-stock-sku d-flex">
                                                <p>Availability:<span> In stock</span></p>
                                                <p>SKU:<span> MH01</span></p>
                                            </div>
                                            <div className="product-reviews-summary d-flex">
                                                <ul className="rating-summary d-flex">
                                                    <li><i className="zmdi zmdi-star-outline"></i></li>
                                                    <li><i className="zmdi zmdi-star-outline"></i></li>
                                                    <li><i className="zmdi zmdi-star-outline"></i></li>
                                                    <li className="off"><i className="zmdi zmdi-star-outline"></i></li>
                                                    <li className="off"><i className="zmdi zmdi-star-outline"></i></li>
                                                </ul>
                                                <div className="reviews-actions d-flex">
                                                    <a href="#">(1 Review)</a>
                                                    <a href="#">Add Your Review</a>
                                                </div>
                                            </div>
                                            <div className="price-box">
                                                <span>$52.00</span>
                                            </div>

                                            <div className="box-tocart d-flex">
                                                <span>Qty</span>
                                                <input id="qty" className="input-text qty" name="qty" min="1" value="1"
                                                       title="Qty" type="number"/>
                                                    <div className="addtocart__actions">
                                                        <button className="tocart" type="submit" title="Add to Cart">Add
                                                            to Cart
                                                        </button>
                                                    </div>
                                            </div>
                                            <div className="product-addto-links clearfix">
                                                <a className="wishlist" href="#"></a>
                                                <a className="compare" href="#"></a>
                                                <a className="email" href="#"></a>
                                            </div>
                                            <div className="product__overview">
                                                <p>Ideal for cold-weather training or work outdoors, the Chaz Hoodie
                                                    promises superior warmth with every wear. Thick material blocks out
                                                    the wind as ribbed cuffs and bottom band seal in body heat.</p>
                                                <ul className="pro__attribute">
                                                    <li>• Two-tone gray heather hoodie.</li>
                                                    <li>• Drawstring-adjustable hood.</li>
                                                    <li>• Machine wash/dry.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__info__detailed">
                                <div className="pro_details_nav nav justify-content-start" role="tablist">
                                    <a className="nav-item nav-link active" data-toggle="tab" href="#nav-details"
                                       role="tab">Details</a>
                                    <a className="nav-item nav-link" data-toggle="tab" href="#nav-review"
                                       role="tab">Reviews</a>
                                </div>
                                <div className="tab__container">
                                    <div className="pro__tab_label tab-pane fade show active" id="nav-details"
                                         role="tabpanel">
                                        <div className="description__attribute">
                                            <p>Ideal for cold-weather training or work outdoors, the Chaz Hoodie
                                                promises superior warmth with every wear. Thick material blocks out the
                                                wind as ribbed cuffs and bottom band seal in body heat.Ideal for
                                                cold-weather training or work outdoors, the Chaz Hoodie promises
                                                superior warmth with every wear. Thick material blocks out the wind as
                                                ribbed cuffs and bottom band seal in body heat.Ideal for cold-weather
                                                training or work outdoors, the Chaz Hoodie promises superior warmth with
                                                every wear. Thick material blocks out the wind as ribbed cuffs and
                                                bottom band seal in body heat.Ideal for cold-weather training or work
                                                outdoors, the Chaz Hoodie promises superior warmth with every wear.
                                                Thick material blocks out the wind as ribbed cuffs and bottom band seal
                                                in body heat.</p>
                                            <ul>
                                                <li>• Two-tone gray heather hoodie.</li>
                                                <li>• Drawstring-adjustable hood.</li>
                                                <li>• Machine wash/dry.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pro__tab_label tab-pane fade" id="nav-review" role="tabpanel">
                                        <div className="review__attribute">
                                            <h1>Customer Reviews</h1>
                                            <h2>Hastech</h2>
                                            <div className="review__ratings__type d-flex">
                                                <div className="review-ratings">
                                                    <div className="rating-summary d-flex">
                                                        <span>Quality</span>
                                                        <ul className="rating d-flex">
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>

                                                    <div className="rating-summary d-flex">
                                                        <span>Price</span>
                                                        <ul className="rating d-flex">
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="rating-summary d-flex">
                                                        <span>value</span>
                                                        <ul className="rating d-flex">
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="review-content">
                                                    <p>Hastech</p>
                                                    <p>Review by Hastech</p>
                                                    <p>Posted on 11/6/2018</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-fieldset">
                                            <h2>You're reviewing:</h2>
                                            <h3>Chaz Kangeroo Hoodie</h3>
                                            <div className="review-field-ratings">
                                                <div className="product-review-table">
                                                    <div className="review-field-rating d-flex">
                                                        <span>Quality</span>
                                                        <ul className="rating d-flex">
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-field-rating d-flex">
                                                        <span>Price</span>
                                                        <ul className="rating d-flex">
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="review-field-rating d-flex">
                                                        <span>Value</span>
                                                        <ul className="rating d-flex">
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                            <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
