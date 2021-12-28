import React from 'react';
import '../Styles/landingpage.css';
import Slider from "react-slick";
import { useDispatch } from 'react-redux';
import { Productcart } from '../Redux/ProductAction';



import {
    Link
} from "react-router-dom";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LandingPage(props) {
    let dispatch = useDispatch();
  

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };
    return (
        <div className="landingpagehome h-224 mb-12 sm:mb-18 md:mb-24 lg:mb-32">
            <Slider {...settings}>
                <div className="banner m-0 p-0 justify-center items-center">
                    <span className="banner__image__container flex items-center relative h-224">
                        <img className="flex items-center relative -bottom-10 md:absolute" src="/images/bannerWatch.svg" />
                    </span>
                    <div className="banner__image__body ml-1/3 flex flex-col">
                        <span className="relative mb-2 lg:mb-8"><h1 className="banner__header not-italic text-3xl text-gray-800 font-taviraj w-full md:w-3/5 lg:text-6xl  ">WAY KAMBAS MINI EBONY</h1><div className="absolute w-24 h-px bg-black bottom-0"></div></span>
                        <p className="w-full tracking-wide mb-2  text-sm leading-5 text-black font-nunito font-semibold md:w-3/5 md:text-base">MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</p>
                        <span className="relative mb-2 lg:mb-10"><p className="font-taviraj font-semibold not-italic font-semibold text-base leading-7  tracking-wide">Discover</p><div className="absolute w-225 h-px bg-black bottom-0"></div></span>
                        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start">
                            <Link className="flex mb-2 items-center bg-linkColor py-1 px-4 mr-4 sm:mb-0 sm:py-3 sm:px-8"><img className="w-5 h-4 mr-4" src="/images/cartImageBanner.svg" /><p className="not-italic font-normal text-xl font-taviraj text-white" onClick={() => dispatch(Productcart(props))}>Add to cart</p></Link>
                            <Link className="flex items-center border-2 border-linkBorderColor py-1 px-4 sm:py-2 sm:px-8"><img src="/images/bannerLinkImage.svg" clasName="w-3 h-3" /></Link>
                        </div>
                    </div>
                </div>
                <div className="banner justify-center items-center">
                    <span className="banner__image__container flex items-center relative h-224">
                        <img className="flex items-center relative -bottom-10 md:absolute" src="/images/bannerWatch.svg" />
                    </span>
                    <div className="banner__image__body ml-1/3 flex flex-col">
                        <span className="relative mb-2 lg:mb-8"><h1 className="banner__header not-italic text-3xl text-gray-800 font-taviraj w-full md:w-3/5 lg:text-6xl  ">WAY KAMBAS MINI EBONY</h1><div className="absolute w-24 h-px bg-black bottom-0"></div></span>
                        <p className="w-full tracking-wide mb-2  text-sm leading-5 text-black font-nunito font-semibold md:w-3/5 md:text-base">MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</p>
                        <span className="relative mb-2 lg:mb-10"><p className="font-taviraj font-semibold not-italic font-semibold text-base leading-7  tracking-wide">Discover</p><div className="absolute w-225 h-px bg-black bottom-0"></div></span>
                        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start">
                            <Link className="flex mb-2 items-center bg-linkColor py-1 px-4 mr-4 sm:mb-0 sm:py-3 sm:px-8"><img className="w-5 h-4 mr-4" src="/images/cartImageBanner.svg" /><p className="not-italic font-normal text-xl font-taviraj text-white" onClick={() => dispatch(Productcart(props))}>Add to cart</p></Link>
                            <Link className="flex items-center border-2 border-linkBorderColor py-1 px-4 sm:py-2 sm:px-8"><img src="/images/bannerLinkImage.svg" clasName="w-3 h-3" /></Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default LandingPage
