import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Carousal from '../../components/Carousal/Carousal'
import About from '../../components/About/About'
import Partner from '../../components/Partner/Partner'
import Product from '../../components/Product/Product'
import Quote from '../../components/Quote/Quote'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <div className=''>
                <Carousal />
            </div>
            <div id="about" className='mt-20 py-4'>
                <About />
            </div>
            <div className='mt-10 py-2 px-4'>
                <Partner />
            </div>
            <div id="product" className='mt-10 py-2 px-4'>
                <Product />
            </div>
            <div className='mt-16 py-6'>
                <Quote />
            </div>
            <div id="contact" className='mt-10 py-2 px-4'>
                <Contact />
            </div>
            <div className='mt-10 py-2 px-4'>
                <Footer />
            </div>
        </>
    )
}

export default Home