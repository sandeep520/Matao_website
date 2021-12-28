import React from 'react';
import {
    Link
} from "react-router-dom";
// import '../Product/RelateProdcuts.css'
import '../Styles/monthlyDeals.css'
import { useDispatch } from 'react-redux';
import { Productcart } from '../Redux/ProductAction'

function RelateProdcuts(props) {
    let dispatch = useDispatch();
    return (
        <div className="mt-4 mb-32 pb-4 overflow-hidden mx-4 lg:mx-0">
            <div className="relative mb-6 sm:mb-12 md:mb-24 lg:mb-24"><h1 className="not-italic font-medium font-taviraj text-2xl md:text-3xl lg:text-4xl ">Relate Prodcuts</h1><div className="absolute w-170 h-223 bg-black -bottom-2 md:w-208 lg:w-64"></div></div>
            <div className="flex flex-wrap justify-center gap-2 items-center sm:md-4 md:flex-nowrap md:justify-start md:gap-6 lg:gap-8">
                
                <div className="cardComponent relative w-64 h-500 bg-white shadow-lg">
                <p className="relative h-8 w-24 ml-32 -mt-4 bg-linkColor text-white px-2 py-1 font-taviraj">20% OFF</p>
                    <div className="relative w-full h-1/2 md:h-2/5 flex justify-center items-start">
                        <img className="h-48 object-cover w-full relative mt-20 h-auto  md:h-56 md:-top-10 lg:w-56 lg:absolute" src="/images/watchcard1.svg" />
                    </div>
                    <div className="mx-4 my-6  mt-32   lg:mt-24  md:my-12 md:mx-4 w-full h-3/5">
                        <h1 className="not-italic font-medium text-lg leading-8 font-taviraj mb-0 md:mb-0.5 md:text-2xl">Singo Maple</h1>
                        <p className="not-italic font-normal text-sm md:text-base leading-6 font-taviraj line-through mb-0 md:mb-1">Rp 1.500.000</p>
                        <p className="not-italic font-normal text-base md:text-2xl leading-8 font-taviraj">Rp 1.264.000 </p>
                        <div className="addCartLink flex items-center mt-0 md:mt-4">
                            <span className=" flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 border border-linkBorderColor"><img src="/images/heart.svg" alt="" /></span>
                            <Link className="bg-linkColor ml-1 py-1 px-2 lg:py-2 lg:px-8 text-white" onClick={() => dispatch(Productcart(props))}>Add to Cart</Link>
                        </div>
                    </div>
                </div>

                <div className="cardComponent relative w-64 h-500 bg-white shadow-lg">
                <p className="relative h-8 w-24 ml-32 -mt-4 bg-linkColor text-white px-8 py-1 font-taviraj">New</p>
                    <div className="relative w-full h-1/2 md:h-2/5 flex justify-center items-start">
                        <img className="h-48 object-cover w-full relative mt-20 h-auto  md:h-56 md:-top-10 lg:w-56 lg:absolute" src="/images/watchcard5.svg" />
                    </div>
                    
                    <div className="mx-4 my-6  mt-32   lg:mt-24  md:my-12 md:mx-4 w-full h-3/5">
                        <h1 className="not-italic font-medium text-lg leading-8 font-taviraj mb-0 md:mb-0.5 md:text-2xl">Sikks (Ebony & Maple)</h1>
                        <p className="not-italic font-normal text-base md:text-2xl leading-8 font-taviraj">Rp 1.264.000 </p>
                        <div className="addCartLink flex items-center mt-0 md:mt-4">
                            <span className=" flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 border border-linkBorderColor"><img src="/images/heart.svg" alt="" /></span>
                            <Link className="bg-linkColor ml-1 py-1 px-2 lg:py-2 lg:px-8 text-white"  onClick={() => dispatch(Productcart(props))}>Add to Cart</Link>
                        </div>
                    </div>
                </div>

                <div className="cardComponent relative w-64 h-500 bg-white shadow-lg">
                    <div className="relative w-full h-1/2 md:h-2/5 flex justify-center items-start">
                        <img className="h-48 object-cover w-full relative mt-20 h-auto  md:h-56 md:-top-10 lg:w-56 lg:absolute" src="/images/watchcard6.svg" />
                    </div>
                    
                    <div className="mx-4 my-6  mt-32   lg:mt-24  md:my-12 md:mx-4 w-full h-3/5">
                        <h1 className="not-italic font-medium text-lg leading-8 font-taviraj mb-0 md:mb-0.5 md:text-2xl">Sunda</h1>
                        <p className="not-italic font-normal text-base md:text-2xl leading-8 font-taviraj">Rp 1.170.000 </p>
                        <div className="addCartLink flex items-center mt-0 md:mt-4">
                            <span className=" flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 border border-linkBorderColor"><img src="/images/heart.svg" alt="" /></span>
                            <Link className="bg-linkColor ml-1 py-1 px-2 lg:py-2 lg:px-8 text-white"  onClick={() => dispatch(Productcart(props))}>Add to Cart</Link>
                        </div>
                    </div>
                </div>

                <div className="cardComponent relative w-64 h-500 bg-white shadow-lg">
                <p className="relative h-8 w-24 ml-32 -mt-4 bg-linkColor text-white px-2 py-1 font-taviraj">20% OFF</p>
                    <div className="relative w-full h-1/2 md:h-2/5 flex justify-center items-start">
                        <img className="h-48 object-cover w-full relative mt-20 h-auto  md:h-56 md:-top-10 lg:w-56 lg:absolute" src="/images/watchcard1.svg" />
                    </div>
                    <div className="mx-4 my-6  mt-32   lg:mt-24  md:my-12 md:mx-4 w-full h-3/5">
                        <h1 className="not-italic font-medium text-lg leading-8 font-taviraj mb-0 md:mb-0.5 md:text-2xl">Singo Maple</h1>
                        <p className="not-italic font-normal text-sm md:text-base leading-6 font-taviraj line-through mb-0 md:mb-1">Rp 1.500.000</p>
                        <p className="not-italic font-normal text-base md:text-2xl leading-8 font-taviraj">Rp 1.264.000 </p>
                        <div className="addCartLink flex items-center mt-0 md:mt-4">
                            <span className=" flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 border border-linkBorderColor"><img src="/images/heart.svg" alt="" /></span>
                            <Link className="bg-linkColor ml-1 py-1 px-2 lg:py-2 lg:px-8 text-white"  onClick={() => dispatch(Productcart(props))}>Add to Cart</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default RelateProdcuts