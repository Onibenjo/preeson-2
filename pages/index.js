import Head from 'next/head'
import Hero from "../components/landingPage/Hero";
import Product from "../components/landingPage/Products";
export default function Home() {
    return (
        <div className="wrapper" id="wrapper">
            <Hero/>
            <Product/>
        </div>
    )
}
