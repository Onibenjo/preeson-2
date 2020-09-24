import NavBar from "../components/landingPage/Navbar";
import Head from 'next/head'
export default function Contact() {
    return (
        <div class="wrapper" id="wrapper">
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
                                        <h2>Contact  <span>Us </span></h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="wn_contact_area bg--white pt--80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="contact-form-wrap">
                                <h2 className="contact__title">Get in touch</h2>
                                {/* <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                                    quod
                                    mazim placerat facer possim assum. </p> */}
                                <form id="contact-form" action="mail.php" method="post">
                                    <div className="single-contact-form space-between">
                                        <input type="text" name="firstname" placeholder="First Name*"/>
                                        <input type="text" name="lastname" placeholder="Last Name*"/>
                                    </div>
                                    <div className="single-contact-form space-between">
                                        <input type="email" name="email" placeholder="Email*"/>
                                        <input type="text" name="website" placeholder="Website*"/>
                                    </div>
                                    <div className="single-contact-form">
                                        <input type="text" name="subject" placeholder="Subject*"/>
                                    </div>
                                    <div className="single-contact-form message">
                                        <textarea name="message" placeholder="Type your message here.."></textarea>
                                    </div>
                                    <div className="contact-btn">
                                        <button type="submit">Send Email</button>
                                    </div>
                                </form>
                            </div>
                            <div className="form-output">
                                <p className="form-messege"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 md-mt-40 sm-mt-40">
                            <div className="wn__address">
                                <h2 className="contact__title">Get office info.</h2>
                                {/* <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                                    lectorum.
                                    Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit
                                    litterarum formas humanitatis per seacula quarta decima et quinta decima. </p> */}
                                <div className="wn__addres__wreapper">

                                    <div className="single__address">
                                        <i className="icon-location-pin icons"></i>
                                        <div className="content">
                                            <span>address:</span>
                                            <p>Suite 79, Lekan Salami Shopping Complex <br/>
                Opposite Ibadan Recreation Club, <br/>
                Adamasingba, Ibadan, <br/>
                Nigeria.</p>
                                        </div>
                                    </div>

                                    <div className="single__address">
                                        <i className="icon-phone icons"></i>
                                        <div className="content">
                                            <span>Phone Number:</span>
                                            <p>07038019000 & 08055532300 </p>
                                        </div>
                                    </div>

                                    <div className="single__address">
                                        <i className="icon-envelope icons"></i>
                                        <div className="content">
                                            <span>Email address:</span>
                                            <p>info@schonpeesol.com</p>
                                        </div>
                                    </div>

                                    {/* <div className="single__address">
                                        <i className="icon-globe icons"></i>
                                        <div className="content">
                                            <span>website address:</span>
                                            <p>716-298-1822</p>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
