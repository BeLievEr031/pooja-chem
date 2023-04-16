import React from 'react'
import { Carousel } from "flowbite-react"

function Carousal() {
    return (
        <div className="h-64 sm:h-[40rem] ">
            <Carousel

            >
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    alt="..."
                />
            </Carousel>
        </div>
    )
}

export default Carousal