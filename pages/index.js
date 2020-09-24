import Head from 'next/head'
import Hero from "../components/landingPage/Hero";
import Product from "../components/landingPage/Products";
export default function Home() {
    return (
        <div className="wrapper" id="wrapper">
            <Head>
          <title>Schon Peesol Energy | Solar Company</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
            <Hero/>
            <Product/>
        </div>
    )
}
