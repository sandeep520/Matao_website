import React from 'react';
import {
    Link
} from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="mt-4 pt-6 lg:pt-12 lg:pb-12 lg:pl-270 lg:pr-270  bg-FooterColor md:mt-12 lg:mt-20">
                <div className="max-w-223 m-auto">
                    <div>
                        <div className="flex  justify-center">
                            <img className="w-12 sm:w-20 mr-2 sm:mr-6 md:w-24 md:h-24 md:mr-12 lg:mr-24" src="/images/logo1.svg" />
                            <img className="w-12 sm:w-20 mr-2 sm:mr-6 md:w-24 md:h-24 md:mr-12 lg:mr-24" src="/images/logo2.svg" />
                            <img className="w-12 sm:w-20 mr-2 sm:mr-6 md:w-24 md:h-24 md:mr-12 lg:mr-24" src="/images/logo3.svg" />
                            <img className="w-12 sm:w-20 mr-2 sm:mr-6 md:w-24 md:h-24 md:mr-12 lg:mr-24" src="/images/logo4.svg" />
                            <img className="w-12 sm:w-20 mr-2 sm:mr-6 md:w-24 md:h-24 md:mr-12 lg:mr-24" src="/images/logo5.svg" />
                        </div>
                        <div className="flex mt-6 justify-center">
                            <img className="w-12 sm:w-20 mr-2 sm:mr-6 md:w-24 md:h-24 md:mr-12 lg:mr-24" src="/images/logo6.svg" />
                            <img className="w-12 sm:w-20 mr-2 sm:mr-6 md:w-24 md:h-24 md:mr-12 lg:mr-24" src="/images/logo7.svg" />
                            <img className="w-12 sm:w-20 mr-2 sm:mr-6 md:w-24 md:h-24 md:mr-12 lg:mr-24" src="/images/logo8.svg" />
                            <img className="w-12 sm:w-20 mr-2 sm:mr-6 md:w-24 md:h-24 md:mr-12 lg:mr-24" src="/images/logo9.svg" />
                            <img className="w-12 sm:w-20 mr-2 sm:mr-6 md:w-24 md:h-24 md:mr-12 lg:mr-24" src="/images/logo10.svg" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-linkColor">
                <div className="h-700 w-222 flex flex-wrap">
                    <div className="py-20 px-12 w-1/2 lg:w-1/4">
                        <img className="" src="/images/logoImage.svg" />
                        <p className="mt-10 mb-4 text-white sm:text-1xl md:text-3xl lg:text-xl  font-taviraj">Address</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base font-taviraj">Store & Office </p>
                        <p className="mb-2 text-white md:text-sm lg:text-base font-taviraj">J1. Setrasari Kulon III, No. 10-12,</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base font-taviraj">Sukarasa, Sukasari, Bandung,</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base font-taviraj">Jawa Barat, Indonesia 40152</p>

                        <div className="mt-8 flex-row py-8 ">
                            <p className="mb-4  text-white sm:text-sm md:text-base lg:text-xl  font-taviraj">Office Hour</p>
                            <p className="mb-2  text-white md:text-sm lg:text-base font-taviraj">Monday-Sunday</p>
                            <p className="mb-2  text-white md:text-sm lg:text-base font-taviraj">10.00 -18.00</p>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------------ */}

                    <div className="w-1/2 lg:w-1/4 py-8 px-12 ">
                        <p className="mt-10 mb-8 text-white sm:text-1xl md:text-1xl lg:text-2xl  font-taviraj">Get in touch</p>
                        <div className="absolute w-24 h-223 bg-white -mt-6 mb-6  sm:w-220 md:w-220 lg:w-225"></div>
                        <p className="mb-2 md:text-sm lg:text-base text-white  font-taviraj">Phone 022-20277564</p>
                        <p className="mb-2 md:text-sm lg:text-base text-white  font-taviraj">Service 0811-233-8899 </p>
                        <p className="mb-2 md:text-sm lg:text-base text-white  font-taviraj">Center</p>
                        <p className="mb-2 md:text-sm lg:text-base text-white  font-taviraj">Customer 0811-233-9988</p>
                        <p className="mb-2 md:text-sm lg:text-base text-white  font-taviraj">Service</p>

                        <div className=" flex mt-20 mr-12  ">
                            <img className="mr-1 sm:mr-2 md:mr-4 h-8 w-8" src="/images/Facebook.svg" />
                            <img className="mr-1 sm:mr-2 md:mr-4 h-8 w-8 " src="/images/Instagram.svg" />
                            <img className="mr-1 sm:mr-2 md:mr-4 h-8 w-8" src="/images/Twitter.svg" />
                            <img className="mr-1 sm:mr-2 md:mr-4 h-8 w-8" src="/images/Youtube.svg" />
                        </div>
                    </div>



                    {/* ------------------------------------------------------------------------ */}

                    <div className="w-1/2 lg:w-1/4 py-4 px-12 -mt-20 lg:mt-4">
                        <p className="mt-10 mb-8 text-white  sm:text-1xl md:text-1xl lg:text-2xl  font-taviraj">Useful Link</p>
                        <div className="absolute w-24 h-223 bg-white -mt-6 mb-6  sm:w-220 md:w-220 lg:w-225"></div>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Warranty & Complaints</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Order & Shipping</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Tracking Order</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">About Us</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Repair</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Terms</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">FAQ</p>
                    </div>


                    {/* -------------------------------------------------------------------- */}

                    <div className="w-1/2 lg:w-1/4 py-8 px-12 -mt-24 lg:-mt-2 ">
                        <p className="mt-10 mb-8 text-white  sm:text-1xl md:text-1xl lg:text-2xl  font-taviraj">Campaign</p>
                        <div className="absolute w-24 h-223 bg-white -mt-6 mb-6  sm:w-220 md:w-220 lg:w-225"></div>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Mengenal Arti Cukup</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Tell Your Difference</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Waykambas</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Rebrand</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Gallery</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Singo</p>
                        <p className="mb-2 text-white md:text-sm lg:text-base text-white font-taviraj">Rakai</p>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Footer