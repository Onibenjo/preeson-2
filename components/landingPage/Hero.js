

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
                                        <li className="drop with--one--item"><a href="index.html">Home</a>
                                        <li className="drop"><a href="#">Shop</a>
                                        </li>
                                        <li className="drop"><a href="shop-grid.html">Books</a>
                                        </li>
                                        <li className="drop"><a href="shop-grid.html">Kids</a>
                                        </li>
                                        <li className="drop"><a href="#">Pages</a>
                                            <div className="megamenu dropdown">
                                                <ul className="item item01">
                                                    <li><a href="about.html">About Page</a></li>
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="cart.html">Cart Page</a></li>
                                                    <li><a href="checkout.html">Checkout Page</a></li>
                                                    <li><a href="wishlist.html">Wishlist Page</a></li>
                                                    <li><a href="error404.html">404 Page</a></li>
                                                    <li><a href="faq.html">Faq Page</a></li>
                                                    <li><a href="team.html">Team Page</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="drop"><a href="blog.html">Blog</a>
                                            <div className="megamenu dropdown">
                                                <ul className="item item01">
                                                    <li><a href="blog.html">Blog Page</a></li>
                                                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                    <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="row d-none">
                            <div className="col-lg-12 d-none">
                                <nav className="mobilemenu__nav">
                                    <ul className="meninmenu">
                                        <li><a href="index.html">Home</a>
                                            <ul>
                                                <li><a href="index.html">Home Style Default</a></li>
                                                <li><a href="index-2.html">Home Style Two</a></li>
                                                <li><a href="index-box.html">Home Box Style</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages</a>
                                            <ul>
                                                <li><a href="about.html">About Page</a></li>
                                                <li><a href="portfolio.html">Portfolio</a>
                                                    <ul>
                                                        <li><a href="portfolio.html">Portfolio</a></li>
                                                        <li><a href="portfolio-three-column.html">Portfolio 3 Column</a>
                                                        </li>
                                                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="cart.html">Cart Page</a></li>
                                                <li><a href="checkout.html">Checkout Page</a></li>
                                                <li><a href="wishlist.html">Wishlist Page</a></li>
                                                <li><a href="error404.html">404 Page</a></li>
                                                <li><a href="faq.html">Faq Page</a></li>
                                                <li><a href="team.html">Team Page</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="shop-grid.html">Shop</a>
                                            <ul>
                                                <li><a href="shop-grid.html">Shop Grid</a></li>
                                                <li><a href="shop-list.html">Shop List</a></li>
                                                <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                <li><a href="shop-no-sidebar.html">Shop No sidebar</a></li>
                                                <li><a href="single-product.html">Single Product</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog.html">Blog</a>
                                            <ul>
                                                <li><a href="blog.html">Blog Page</a></li>
                                                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
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
