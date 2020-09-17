import NavBar from "../../../components/landingPage/Navbar";
import {useState} from 'react'
import  Router  from "next/router";
export default function Register() {
    const [user, setUser] = useState({
        id:"",
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        phoneNumber:"" 
      });
      // {
        
      //     useState.map(u => <Profilepage key={u.id} {...u} />)
          
      // }
      const handleChange = (e) => setUser({ 
          ...user, [e.target.name]: e.target.value
          });
      // const history = useHistory();
      const handleSubmit = async (e) => {
          e.preventDefault();
          console.log("hey");
    try {
            console.log("heyd");

    const res = await fetch(
      "https://schon-api.herokuapp.com/user/auth/register",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
        
      }
      
    );
    console.log("heyjson");

    const json = await res.json();
    //this example here is how you will save the token in the browser for later useage
    // localStorage.setItem(
    //   "token",
      
    // );
    //you can get the token this way
    // console.log(localStorage.getItem("token"));
    console.log(json);
    console.log(json.status);
    if(json.status === true){
        localStorage.setItem(
            "token",
            json.data.token
        );
        console.log(localStorage.getItem("token"));
        localStorage.setItem('email', json.data.user.email)
        localStorage.setItem('id', json.data.user.id)
        console.log(localStorage.getItem('id'))
        Router.push("/user/account/dashboard")
        alert("Registration successful Enter Login details!")
    }
    else{
      console.log("you idiot");
    }
    
  } catch (e) {
    console.log("An error occurred", e);
  }
};
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
                                        <h2>Register  <span>With US </span></h2>

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
                        <div className="col-lg-6 col-md-6">
                            <div className="my__account__wrapper">
                                <h3 className="account__title"> </h3>
                                <form 
                                action="https://schon-api.herokuapp.com/user/account/profile"
                                method="get"
                                onSubmit={handleSubmit}
                                >
                                    <div className="account__form">
                                       <div className="input__box">
                                            <label>Firstname <span>*</span></label>
                                            <input 
                                            
                                            placeholder="firstname"
                                            name="firstName"
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            />
                                        </div>
                                        <div className="input__box">
                                            <label>Lastname <span>*</span></label>
                                            <input 
                                            
                                            placeholder="Lastname"
                                            name="lastName"
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            />
                                        </div>
                                        <div className="input__box">
                                            <label>Email address <span>*</span></label>
                                            <input 
                                            placeholder="E-mail"
                                            name="email"
                                            onChange={handleChange}
                                            required
                                            type="email"/>
                                        </div>
                                        <div className="input__box">
                                            <label>Password <span>*</span></label>
                                            <input 
                                            
                                            placeholder="Password"
                                            name="password"
                                            onChange={handleChange}
                                            required
                                            type="password"
                                            />
                                        </div>
                                        <div className="input__box">
                                            <label>Phonenumber <span>*</span></label>
                                            <input 
                                            
                                            placeholder="Phonenumber"
                                            name="phoneNumber"
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            />
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
