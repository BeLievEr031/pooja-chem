import Hr from '../Hr/Hr'
import Card from './components/Card'
// import image from "../../assets/copper_sulphate.jpg"
import React from 'react'

function Product() {
    const image = "https://dwcb0wot6vzye.cloudfront.net/assets/copper_sulphate.jpg"
    return (
        <div className='p-2 mt-6 max-sm:w-full '>
            <h1 className='text-3xl text-center font-bold'>Our Products</h1>
            <Hr/>
            <div className='mt-12 flex md:justify-evenly max-sm:justify-between max-sm:flex-wrap'>
                <Card image={image}/>
                <Card image={image}/>
                <Card image={image}/>
                <Card image={image}/>

            </div>
        </div>

    )
}

export default Product