import React from 'react'
import Circle from './Components/Circle'
// import image from "./Asset/logo.jpg"
import Hr from '../Hr/Hr'

function Partner() {
    const image = "https://dwcb0wot6vzye.cloudfront.net/assets/logo.jpg"
    return (
        <div className='p-2 mt-6 relative'>
            <h1 className='text-3xl text-center font-bold'>Our Partners</h1>
            <Hr />
            <div className='mt-8' >
                <Circle image={image}/>
            </div>
        </div>
    )
}

export default Partner