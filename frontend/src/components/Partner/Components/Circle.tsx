import React from 'react'

interface ICircleProp {
    image: any;
}
function Circle({ image }: ICircleProp) {
    return (
        <div className='w-full flex justify-evenly mt-6 flex-wrap'>
            <div className='w-[250px] h-[250px] border-2 rounded-full p-2 bg-midblue transition-all hover:scale-110 hover:bg-white'>
                <img src={image} alt="" className='w-full h-full rounded-full' />
            </div>
            <div className='w-[250px] h-[250px] border-2 rounded-full p-2 bg-midblue hover:scale-110 transition-all hover:bg-white'>
                <img src={image} alt="" className='w-full h-full rounded-full' />
            </div>
            <div className='w-[250px] h-[250px] border-2 rounded-full p-2 bg-midblue transition-all hover:scale-110 hover:bg-white'>
                <img src={image} alt="" className='w-full h-full rounded-full' />
            </div>
            <div className='w-[250px] h-[250px] border-2 rounded-full p-2 bg-midblue transition-all hover:scale-110 hover:bg-white'>
                <img src={image} alt="" className='w-full h-full rounded-full' />
            </div>
            <div className='w-[250px] h-[250px] border-2 rounded-full p-2 bg-midblue transition-all hover:scale-110 hover:bg-white'>
                <img src={image} alt="" className='w-full h-full rounded-full' />
            </div>
        </div>
    )
}

export default Circle