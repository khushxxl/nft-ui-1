import Head from 'next/head'
import Image from 'next/image'
import Creative from '../components/Creative.jsx'
import Featured from '../components/Featured.jsx'
import Footer from '../components/Footer.js'
import Hero from '../components/Hero.jsx'
import More from '../components/More.jsx'
import Navbar from '../components/Navbar.jsx'
import Trending from '../components/Trending.jsx'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>NFTs</title>
        <meta name="description" content="NFT MARKETPLACE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#000b18]">
        <Navbar />
        <Hero />
        <Featured />
        <Trending />
        <More />
        <Creative />
        <Footer />
      </div>
    </div>
  )
}
