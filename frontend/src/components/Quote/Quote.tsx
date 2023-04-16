import React from 'react'
// import video from     "../../assets/video.mp4"

function Quote() {
    const video = "https://dwcb0wot6vzye.cloudfront.net/assets/video.mp4"
    return (
        <div className='h-[350px] relative'>
            <div className='absolute w-full h-full bg-gray-900 z-10 top-0 left-0 opacity-40'>

            </div>
            <h1 className='absolute flex justify-center items-center text-center px-14 font-bold text-blueRgb w-full h-full md:text-[40px] max-sm:text-lg font-sans z-10 top-0 left-0'>Transforming elements into solutions for a better tomorrow. That's the power of chemistry, and the heart of our company.</h1>
            <video src={video} autoPlay={true}  loop muted className='w-[100%] h-[100%] object-cover'></video>
        </div >
    )
}

export default Quote