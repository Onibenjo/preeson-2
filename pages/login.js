import NavBar from "../components/landingPage/Navbar";

export default function Login() {
    return (
        <>
            <NavBar/>
            <section className="my_account_area pt--80 pb--55 bg--white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="my__account__wrapper">
                                <h3 className="account__title">Login</h3>
                                <form action="#">
                                    <div className="account__form">
                                        <div className="input__box">
                                            <label>Username or email address <span>*</span></label>
                                            <input type="text"/>
                                        </div>
                                        <div className="input__box">
                                            <label>Password<span>*</span></label>
                                            <input type="text"/>
                                        </div>
                                        <div className="form__btn">
                                            <button>Login</button>
                                            <label className="label-for-checkbox">
                                                <input id="rememberme" className="input-checkbox" name="rememberme"
                                                       value="forever" type="checkbox"/>
                                                    <span>Remember me</span>
                                            </label>
                                        </div>
                                        <a className="forget_pass" href="#">Lost your password?</a>
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
