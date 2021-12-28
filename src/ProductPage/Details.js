import React from 'react';
import '../Product/header.css'
import {Link} from "react-router-dom";


function Details() {
    return (
        <>
            <div className="flex mt-12 sm:ml-6 md:ml-18 lg:ml-24 flex-wrap">
            <span className="flex text-xl "><div className="relative mr-6  "><p className="not-italic font-semibold text-red-500 font-taviraj  md:text-xl ">Detail</p><div className="absolute w-16  h-223  bg-red-600 sm:-bottom-1 md:w-16 md:h-223"></div></div></span>    
                {/* <p className="mr-4 sm:mr-8 md:mr-8 lg:mr-12  text-xl font-taviraj text-red-600 font-medium">Detail</p> */}
                <p className="mr-4 sm:mr-8 md:mr-8 lg:mr-12 text-xl font-taviraj text-gray-400 font-medium">Warranty</p>
                <p className="mr-4 sm:mr-8 md:mr-8 lg:mr-12 text-xl font-taviraj text-gray-400 font-medium">Custom Engre</p>
                <p className="mr-4 sm:mr-8 md:mr-8 lg:mr-12 text-xl font-taviraj text-gray-400 font-medium">How to Adjust</p>
                <p className="mr-4 sm:mr-8 md:mr-8 lg:mr-12 text-xl font-taviraj text-gray-400 font-medium">How to Care</p>
                <p className="mr-4 sm:mr-8 md:mr-8 lg:mr-12 text-xl font-taviraj text-gray-400 font-medium">Gallery</p>   
            </div>

            <div className="mt-6 md:mt-6 w-full border-b border-gray-300"></div>

            <div className="sm:ml-2 md:ml-8 lg:ml-24 mt-10 lg:text-2xl font-taviraj">
                <h1>Material</h1>
                <div className="mt-4 sm:text-xs md:text-base lg:text-xl font-taviraj">
                    <p>MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</p>
                </div>
            </div>

            {/* ----------------------------------------------- */}

            <div className="sm:ml-2 md:ml-8 lg:ml-24 mt-8 lg:text-2xl font-taviraj">
                <h1>Case</h1>
                <div className="mt-4 sm:text-xs md:text-base lg:text-xl font-taviraj">
                    <p>The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</p>
                </div>
            </div>

            {/* ------------------------------------------------------- */}

            <div className="sm:ml-2 md:ml-8 lg:ml-24 mt-8 lg:text-2xl font-taviraj">
                <h1>Movement</h1>
                <div className="mt-4 sm:text-xs md:text-base lg:text-xl font-taviraj">
                    <p>For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching.</p>
                </div>
            </div>

            {/* -------------------------------------------------------------------- */}

            <div className="sm:ml-2 md:ml-8 lg:ml-24 mt-8 lg:text-2xl font-taviraj">
                <h1>Dial</h1>
                <div className="mt-4 sm:text-xs md:text-base lg:text-xl font-taviraj">
                    <p>In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index.</p>
                </div>
            </div>

            {/* --------------------------------------------------------------------------- */}

            <div className="sm:ml-2 md:ml-8 lg:ml-24 mt-8 lg:text-2xl font-taviraj">
                <h1>Hand</h1>
                <div className="mt-4 sm:text-xs md:text-base lg:text-xl font-taviraj">
                    <p>The hour, minute & small second hands on MATOA Way Kambas - Sumatran Rhino is outfitted with skeleton hand and brush finished with Gold Matte color. This new design aims at adding a value for this special edition.</p>
                </div>
            </div>

            {/* ------------------------------------------------------------------------------ */}

            <div className="sm:ml-2 md:ml-8 lg:ml-24 mt-8 lg:text-2xl font-taviraj">
                <h1>Important to Note</h1>
                <div className="mt-4 sm:text-xs md:text-base lg:text-xl font-taviraj">
                    <p> Wood color on watches is produced from a combination of mature and fresh wood but should not be viewed as a defect. It is a very natural process of wood aging.</p>
                </div>
            </div>

            <div className="">
                <img className="lg:h-500 w-635  sm:mt-8 lg:mt-8 sm:ml-12 md:ml-36 lg:ml-56" src="/images/Daigram.svg" />
            </div>


        </>
    )
}

export default Details





