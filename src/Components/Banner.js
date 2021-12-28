import React from 'react';
import '../Styles/Banner.css';
import {Link} from "react-router-dom";

function Banner() {
    return (
        <>
        <div className="mx-4 gap-8 flex flex-col mb-8 sm:flex-row md:mx-0 md:mb-16 lg:mb-24">
            <div className="flex-1 bg-white pr-5">
                <div className="ml-8 mt-8">
                    <h3 className="not-italic font-normal text-xl leading-8 text-black font-taviraj tracking-wide mb-1 md:text-3xl">Luxurious Eyewear</h3>
                    <p className="not-italic w-2/3 font-normal text-sm leading-6 text-gray-600 font-nunito tracking-wide md:text-base" >See the beauty of exotic world with the luxurious glasses</p>
                </div>
                <div className="flex ml-8">
                <span className="flex-1 md:flex-0.3"><div className="relative"><Link className="not-italic font-semibold text-sm leading-7 text-gray-800 font-taviraj tracking-wide md:text-base">Discover Now</Link><div className="absolute w-95 h-223 bg-black -bottom-1 md:w-110 md:h-223"></div></div></span>
                <span className="flex-1 flex justify-end items-center md:flex-0.7"><img className="w-32 h-32 md:w-330 md: h-32" src="/images/glassesCard.svg"/></span>
                </div>
            </div>
            <div className="flex-1 bg-white pr-5">
                <div className="ml-8 mt-8">
                    <h3 className="not-italic font-normal text-xl leading-8 text-black font-taviraj tracking-wide mb-1 md:text-3xl">Comfortable Watches</h3>
                    <p  className="not-italic w-2/3 font-normal text-sm leading-6 text-gray-600 font-nunito tracking-wide md:text-base">Feels the balancing function and beauty in our wooden watches</p>
                </div>
                <div className="flex ml-8">
                <span className="flex-1 md:flex-0.3"><div className="relative"><Link className="not-italic font-semibold text-sm leading-7 text-gray-800 font-taviraj tracking-wide md:text-base">Discover Now</Link><div className="absolute w-95 h-223 bg-black -bottom-1 md:w-110 md:h-223"></div></div></span>
                <span className="flex-1 flex justify-end items-center md:flex-0.7"><img className="w-32 h-32 md:w-40 md:h-40" src="/images/watchcard.svg"/></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner
