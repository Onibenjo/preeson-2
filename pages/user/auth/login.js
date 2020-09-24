import NavBar from "../../../components/landingPage/Navbar";
import {useState} from 'react'
import Head from 'react/head'
export default function Login() {
    const [user, setUser]=useState({
        email:"",
        password: ""
    })
    
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = async (e)=>{
        e.preventDefault(),
        console.log("hola")
        try{
            console.log("holanext")
            console.log(user.email)
            // console.log(setUser.password)
            const res = await fetch(
                "https://schon-api.herokuapp.com/user/auth/login",
                {
                    method: "POST",
                    body: JSON.stringify(user),
                    header:  { "Content-Type": "application/json" }
                }
            )
            console.log("holajsonafterfetch")
            const json = await res.json()

            // localStorage.setItem(
            //     "token",
            //     " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJpYXQiOjE1OTkwOTU1NTQsImV4cCI6MTU5OTA5OTE1NH0.rF89AuN7Dv6FQN85meKWItLjROzS5lYNHtyl5aW2bdk"
            // )
            // console.log(localStorage.getItem("token"))
            console.log(json)
            console.log(json.status)
            if(json.status === true){
                localStorage.setItem(
                    "token", json.data.token
                );
                localStorage.setItem('email', json.data.user.email)
                localStorage.setItem('id', json.data.user.id)
                console.log(localStorage.getItem("token"));
                Router.push("/user/account/dashboard")
              }
              else{
                console.log("you idiot");
              }
        }
        catch (e){
            console.log('an error occured', e)
        }
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
                                        <h2>  <span>Login    </span></h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="my_account_area pt--80 pb--55 bg--white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="my__account__wrapper">
                                <h3 className="account__title">Login</h3>
                                <form 
                                action="https://schon-api.herokuapp.com/user/account/profile/1"
                                method="get"
                                onSubmit={handleSubmit}
                                >
                                    <div className="account__form">
                                        <div className="input__box">
                                            <label>Email address <span>*</span></label>
                                            <input 
                                            placeholder="E-mail"
                                            name="email"
                                            onChange={handleChange}
                                            required
                                            type="email"
                                            />
                                        </div>
                                        <div className="input__box">
                                            <label>Password<span>*</span></label>
                                            <input 
                                            placeholder="Password"
                                            name="password"
                                            onChange={handleChange}
                                            required
                                            type="password"
                                            />
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
