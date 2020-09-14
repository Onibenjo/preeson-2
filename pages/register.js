import NavBar from "../components/landingPage/Navbar";

export default function Register() {
    return (
        <>
            <NavBar/>
            <section className="my_account_area pt--80 pb--55 bg--white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="my__account__wrapper">
                                <h3 className="account__title">Register</h3>
                                <form action="#">
                                    <div className="account__form">
                                        <div className="input__box">
                                            <label>Email address <span>*</span></label>
                                            <input type="email"/>
                                        </div>
                                        <div className="input__box">
                                            <label>Password<span>*</span></label>
                                            <input type="password"/>
                                        </div>
                                        <div className="form__btn">
                                            <button>Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
