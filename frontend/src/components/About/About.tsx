import React from 'react'
// import { Tilt } from 'react-tilt'
import Tilt from "react-parallax-tilt";
const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 100000000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function About() {
    return (
        <div className='w-full flex justify-evenly text-justify p-6'>
            <div className='w-1/2'>
                <h1 className='text-[50px]'>Welcome to Pooja Chem</h1>
                <p className='mt-2 text-lg'>
                    At our chemical company, we are dedicated to providing high-quality chemicals and solutions to meet the unique needs of our customers. With years of experience in the industry, we have developed a deep understanding of the complexities and challenges faced by businesses in a wide range of industries.
                    Our team of experts is committed to working closely with each customer to identify their specific requirements and develop customized solutions that deliver superior results. From innovative formulations to advanced manufacturing techniques, we leverage the latest technologies and best practices to deliver exceptional value to our customers.
                </p>
                <p className='mt-2 text-lg'>
                    We take great pride in our commitment to safety and sustainability. We adhere to strict safety standards in all aspects of our operations, and we work tirelessly to minimize our environmental impact. Our goal is to deliver reliable, sustainable solutions that help our customers achieve their goals while also protecting the planet for future generations.
                    Whether you are looking for a trusted supplier of raw materials or a partner to help you develop and manufacture complex chemical products, we have the expertise and capabilities you need. Contact us today to learn more about how we can help your business thrive.
                </p>
            </div>
            <div className='w-[40%]  relative'>
                <div className='absolute top-1/2 left-1/2 z-10'>
                    <Tilt glareEnable={true} tiltMaxAngleX={2}
                        tiltMaxAngleY={2} perspective={1000}
                        glareColor={"rgb(255,0,0)"}>
                        <div className='w-[500px] h-[500px] border-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <img
                                className='h-full w-full'
                                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                                alt="..."
                            />
                        </div>
                    </Tilt>
                </div>
            </div>

        </div>
    )
}

export default About    