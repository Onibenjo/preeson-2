import NavBar from "../components/landingPage/Navbar";

export default function About() {
    return (
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
                                        <h2>About  <span>Us </span></h2>

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
