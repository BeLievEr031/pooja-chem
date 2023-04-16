import React from 'react'
import Hr from '../Hr/Hr'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Label, TextInput, Checkbox, Button, Textarea } from "flowbite-react"
// import facebook from "../../assets/facebook.png"
// import whatsapp from "../../assets/whatsapp.png"
// import instagram from "../../assets/instagram.png"

interface IAnyReactComponentProp {
    text: string,
    lat: number,
    lng: number
}
const AnyReactComponent = ({ text }: IAnyReactComponentProp) => <div>{text}</div>;


function Contact() {
    // const position = [51.505, -0.09]
    const facebook = "https://dwcb0wot6vzye.cloudfront.net/assets/facebook.png"
    const instagram = "https://dwcb0wot6vzye.cloudfront.net/assets/instagram.png"
    const whatsapp = "https://dwcb0wot6vzye.cloudfront.net/assets/whatsapp.png"
    return (
        <div className=''>
            <h1 className='text-3xl text-center font-bold'>Contact Us</h1>
            <Hr />
            <div className='w-full flex justify-evenly mt-12 p-4'>
                <div className='w-[45%] h-[500px] bg'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1876.790025244658!2d72.73351253373374!3d19.815395140368413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1681630982559!5m2!1sen!2sin" width="600"
                        className="w-full h-full" loading="lazy" ></iframe>
                </div>

                <div className='w-[50%] h-[500px]'>
                    <div className='flex justify-center'>
                        <img src={facebook} alt="" className='w-[40px] h-[40px] mx-2 cursor-pointer' />
                        <img src={instagram} alt="" className='w-[40px] h-[40px] mx-2 cursor-pointer' />
                        <img src={whatsapp} alt="" className='w-[40px] h-[40px] mx-2 cursor-pointer' />
                    </div>
                    <div className='w-full flex justify-center items-center p-2'>
                        <div className='w-[100px] h-[3px] bg-red-800 mx-2'>

                        </div>
                        <span>
                            OR
                        </span>
                        <div className='w-[100px] h-[3px] bg-red-800 mx-2'>

                        </div>

                    </div>
                    <form className="flex flex-col gap-4">
                        <div className='w-full flex justify-between'>
                            <div className='w-[49%]'>

                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="name"
                                        value="Your Name"
                                    />
                                </div>
                                <TextInput
                                    id="name"
                                    type="text"
                                    placeholder="Pooja"
                                    required={true}
                                    shadow={true}
                                />
                            </div>
                            <div className='w-[49%]'>

                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="lastname"
                                        value="Your Lastname"
                                    />
                                </div>
                                <TextInput
                                    id="lastname"
                                    type="text"
                                    placeholder="Chem"
                                    required={true}
                                    shadow={true}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email2"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email2"
                                type="email"
                                placeholder="poojachem@gmail.com"
                                required={true}
                                shadow={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="number"
                                    value="Your Number"
                                />
                            </div>
                            <TextInput
                                id="number"
                                type="text"
                                placeholder='1234567890'
                                required={true}
                                shadow={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="message"
                                    value="Your Message"
                                />
                            </div>
                            <textarea className='w-full rounded-md' placeholder='Your Message'></textarea>
                        </div>

                        <Button type="submit">
                            Contact Us
                        </Button>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Contact