import NavBar from "../../components/landingPage/Navbar";
import {useState} from 'react'
export default function ProductPage(){
  const [cart, setCart] =useState([])
    const [post]= useState([
  {
    id: 1,
    name: "A&E Power Inverters",
    description:
      "(5.0KVA/48V, 7.5KVA/48V, 10KVA/48V, 15KVA/48V)",
    img: "/AE.jpg",
    price: 100,
  },

  {
    id: 2,
    name: "iCell Inverters",
    description:
      "(XX2-1512, 2012, 2024, 3524,3548, 5024, 6524,8048,10048)",
    img: "/icell.jpg",
    price: 100,
  },

  {
    id: 3,
    name: "MultiPower Smart",
    description:
      "INVERTER – Multipower Smart, (1KVA/12V, 2KVA/24V)",
    img: "/mulitu-power1.jpg",
    price: 100,
  },

  {
    id: 4,
    name: "Outback Inverter(VFXR3048E)",
    description:
      "INVERTER – Outback (VFXR3048E)",
    img: "/outback-inverter.jpg",
    price: 100,
  },

  {
    id: 5,
    name: "Outback Inverter/Charger",
    description:
      "Outback VFX3048E Inverter/Charger",
    img: "/outback2.jpg",
    price: 100,
  },

  {
    id: 6,
    name: "Conext XW+ Hybrid",
    description:
      "Conext XW+ hybrid inverter/charger",
    img: "/XW3.png",
    price: "100,000",
  },

  {
    id: 7,
    name: "Sukam Inverter",
    description:
      "(1KVA/12V, 2KVA/24V, 2.5KVA/48V, 2.2KVA/36V , 3.5KVA/48V, 5.0KVA/48V, 5.0KVA/96V,)",
    img: "/sukam2.jpg",
    price: 100,
  },

  {
    id: 8,
    name: "TBB-CD-3060M-H",
    description:
      "Click to enlarge INVERTERS -TBB (TBB-CD-3060M-H)",
    img: "/tbb2.jpg",
    price: 100,
  },

  {
    id: 9,
    name: "Schneider Inverter",
    description:
      "(XW8548E, XW7548E, XW4845E) XW+ is an adaptable single-phase and three-phase inverter/charger system with grid-tie functionality and dual AC power inputs. Available solar charge controllers, monitoring, and automated generator control modules enable further adaptability.",
    img: "/XW3.png",
    price: 100,
  },
])
const addToCart = (posts) => {
  console.log('added to cart')
  let newCart = [...cart];
  let itemInCart = newCart.find(
    (item) => posts.name === item.name
  );
  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    itemInCart = {
      ...posts,
      quantity: 1,
    };
    newCart.push(itemInCart);
  }
  setCart(newCart);
};
    return(
        <>
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
            { post.map(posts => (
                <div className="container" >
               
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab__container">
                                <div className="shop-grid tab-pane fade show active" id="nav-grid" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                            
                                            <div className="product"key={post.id}>
                                                <div className="product__thumb">
                                                    <a className="first__img" href="single-product.html">
                                                        <img
                                                        src={posts.img} alt="product image"/>
                                                        </a>
                                                    <a className="second__img animation1"
                                                       href="single-product.html">
                                                        <img src={posts.img}
                                                        alt="product image"/>
                                                       </a>
                                                    <div className="new__box">
                                                        <span className="new-label">Hot</span>
                                                    </div>
                                                    <ul className="prize position__right__bottom d-flex">
                                                        <li>₦{posts.price}</li>
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
                                                    <h4><a href="single-product.html">{posts.name}</a></h4>
                                                    {/* <ul className="rating d-flex">
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li className="on"><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul> */}
                                                    <button onClick={() => addToCart(posts)}>Add to Cart</button>
                                                </div>
                                            </div>
                                            
                                      </div>
                                        
                                        
                                        
                    </div>
                </div>
                </div>
                </div>
                </div>
                
                </div>
                ))}
            </section>

        </>
    )
}
