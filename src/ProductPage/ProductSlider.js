import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import '../Product/ProductSlider.css'
import '../Redux/ProductReducer';
import { useDispatch } from 'react-redux';
import { Productcart } from '../Redux/ProductAction';

import {
    Link,
    useHistory
} from "react-router-dom";

function ProductSlider(props) {
    const [image, setImage] = useState("");
    let dispatch = useDispatch();


    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
        // responsive: [undefined]
    };

    const history = useHistory();
 


    useEffect(() => {
        setImage("/images/bannerWatch.svg")
    }, [])
    return (
        <>
            <div className="mb-8 md:mb-12 lg:mb-20  ">
                <div className="px-4 max-w-223 m-auto mb-1"><span className="flex not-italic font-normal text-xs md:text-base md:leading-7 font-taviraj tracking-wide"><p className="">  Home</p> /<p className="">  Product</p>  /<p className="">  Watches</p> /<p className="text-red-600"> Way Kambas Mini Ebony</p></span> </div>
                <div className="flex flex-col sm:flex-row">
                    <div className="relative flex-1" style={{ background: 'linear-gradient(90deg, #F1DDC9 70%, transparent 30%)', overflow: 'hidden' }}>
                        <div className="productSlider h-full ml-4 lg:ml-40 lg:my-8">
                            <Slider style={{ width: '20%', height: '100%' }} {...settings}>
                                {["/images/bannerWatch.svg", "/images/bannerWatch.svg", "/images/watch1.svg", "/images/watch2.svg", "/images/watchbox.svg"].map((item, index) => {
                                    return (<div className="hover:border-none" onClick={() => { setImage(item) }}>
                                        <img src={item} alt="" />
                                    </div>)
                                })}
                            </Slider>
                            <img src={image} className="absolute" style={{ top: '5%', right: '1%', width: '50%', height: '94%' }} />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center mt-2 md:mt-0">
                        <h1 className="not-italic font-normal text-xl lg:text-6xl text-gray-800 font-taviraj tracking-wide leading-normal text-center sm:text-left">WAY KAMBAS
                            MINI EBONY</h1>
                        <p className="not-italic font-normal text-xs lg:text-xl lg:leading-7 text-gray-600 font-taviraj tracking-wide line-through  mt-1 text-center sm:text-left">Rp 1.280.000</p>
                        <p className="not-italic font-normal text-xs lg:text-2xl lg:leading-7 text-gray-600 font-taviraj tracking-wide mt-1 text-center sm:text-left">Rp 1.024.000</p>
                        <p className="not-italic font-semibold leading-7 text-base text-gray-600 font-taviraj tracking-wide mt-2 text-center sm:text-left">Choose Model</p>
                        <span className="flex mt-2 justify-center sm:justify-start">
                            <img className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 mr-4" src="/images/chhoseModel1.svg" />
                            <img className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 mr-4" src="/images/chhoseModel2.svg" />
                        </span>
                        <span className="flex  justify-center sm:justify-start mt-2 lg:mt-12 items-center">
                            <span className="flex items-center justify-center w-5 h-5 bg-white border border-gray-300"><img className="w-3" src="/images/minusIcon.svg" /></span>
                            <p className="ml-2 mr-2 text-lg">5</p>
                            <span className="flex items-center justify-center w-5 h-5 bg-linkColor mr-1 lg:mr-10"><img className="w-3" src="/images/plusIcon.svg" /></span>


                            <div className="flex flex-row items-center justify-center sm:flex-row sm:justify-start">
                                <Link className="flex  items-center bg-linkColor py-1 px-4 mr-4 sm:mb-0 sm:py-3 sm:px-8"><img className="w-5 h-4 mr-4" src="/images/cartImageBanner.svg" /><p className="not-italic font-normal text-xs md:text-base lg:text-lg font-taviraj text-white"  onClick={() => dispatch(Productcart(props))}>Add to cart</p></Link>
                                <Link className="flex items-center border-2 border-linkBorderColor py-1 px-1 sm:py-2 sm:px-8"><img src="/images/bannerLinkImage.svg" className="w-5 h-4 md:w-8 md:h-8" /></Link>
                            </div>
                        </span>
                    </div>
                </div>


            </div>

        </>
    )
}


export default ProductSlider











