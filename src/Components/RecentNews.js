import React from 'react';
import {
    Link
} from "react-router-dom";

function RecentNews() {
    return (
        <div className="mx-4 mb-4 lg:mx-0 lg:mb-18 xl:mb-24 ">
          
            <div className="flex md:h-626 w-full flex-col md:flex-row">
            <div className="w-full mb-4 md:w-2/5 pr-4">
                 <div className="relative mb-6 sm:mb-12 md:mb-24 lg:mb-24"><h1 className="not-italic font-medium font-taviraj text-2xl md:text-3xl lg:text-4xl ">Recent News</h1><div className="absolute w-24 h-223 bg-black -bottom-2 md:w-208 lg:w-32"></div></div>
                 <div className="mt-4 md:mt-48">
                     <h5 className="not-italic font-normal text-base md:text-xl font-taviraj mb-1 md:mb-2">Where To Travel</h5>
                     <h1 className="not-italic font-normal text-xl leading-6 md:text-4xl md:leading-10 font-taviraj tracking-wide mb-6 md:mb-12">Matoa Where To Travel? Yogyakarta</h1>
                     <Link className="border-2 text-red-600 border-linkBorderColor py-2 px-6 mb-4 md:py-4 md:px-12">Discover</Link>
                 </div>
            </div>
            <div className="overflow-hidden h-48 relative w-full md:h-4/5 md:overflow-visible flex items-end lg:h-full xl:h-11/12">
                <img className="z-10 w-48 md:w-4/5 xl:w-11/12" src="/images/recentNews.svg" alt=""/>
                <div className="absolute top-0 left-8 w-48 h-4/5 md:left-24 md:h-80 md:w-full bg-boxHomeBg z-1 lg:w-860 lg:h-500"></div>
            </div>
            </div>
         
        </div>
    )
}

export default RecentNews
