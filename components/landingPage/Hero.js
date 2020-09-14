

export default function Hero(){
    return(
        <div>
            <div >
                <header id="wn__header" className="header__area header__absolute sticky__header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-6 col-lg-2">
                                <div className="logo">
                                    <a href="index.html">
                                        {/*<img src="images/logo/logo.png" alt="logo images"/>*/}
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 d-none d-lg-block">
                                <nav className="mainmenu__nav">
                                    <ul className="meninmenu d-flex justify-content-start">
                                        <li className="drop with--one--item"><a href="/">Home</a>
                                            <li className="drop"><a href="#">Shop</a>
                                            </li>
                                            <li className="drop"><a href="/about">About</a>
                                            </li>
                                            <li className="drop"><a href="shop-grid.html">Kids</a>
                                            </li>
                                            <li className="drop"><a href="/product">Product</a>
                                            </li>
                                        </li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="row d-none">
                            <div className="col-lg-12 d-none">
                                <nav className="mobilemenu__nav">
                                    <ul className="meninmenu">
                                        <li><a href="/">Home</a>
                                        </li>
                                        <li className="drop"><a href="#">Shop</a>
                                        </li>
                                        <li className="drop"><a href="/about">About</a>
                                        </li>
                                        <li className="drop"><a href="shop-grid.html">Kids</a>
                                        </li>
                                        <li className="drop"><a href="/product">Product</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-8 col-sm-8 col-5 col-lg-2">
                                <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
                                    <li className="shop_search"><a className="search__active" href="#"></a></li>
                                    <li className="wishlist"><a href="#"></a></li>
                                    <li className="shopcart"><a className="cartbox_active" href="#"><span
                                        className="product_qun">3</span></a>
                                    </li>
                                    <li className="setting__bar__icon"><a className="setting__active" href="#"></a>
                                        <div className="searchbar__content setting__block">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mobile-menu d-block d-lg-none">
                        </div>
                    </div>
                </header>

                <div
                    className="slider-area brown__nav slider--15 slide__activation slide__arrow01 owl-carousel owl-theme">
                    <div className="slide animation__style10 bg-image--1 fullscreen align__center--left">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slider__content">
                                        <div className="contentbox">
                                            <h2>Buy <span>your </span></h2>
                                            <h2>favourite <span>Book </span></h2>
                                            <h2>from <span>Here </span></h2>
                                            <a className="shopbtn" href="#">shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
