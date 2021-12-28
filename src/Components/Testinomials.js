import React from 'react'

function Testinomials() {
    return (
        <div className="flex mt-8 sm:mt-12 lg:mx-0 lg:mt-24">
            <div className="flex-0.5 pt-8 sm:pt-12 md:pt-18 lg:pt-24 pl-2 relative">
                <img className="z-50 relative  flex w-full objet-cover " src="/images/testimoniImage.svg" />
                <div className=" absolute bg-boxHomeBg w-full h-2/5 sm:h-3/4 right-1/4  top-0 bottom-4/5"></div>
                <span className="flex mt-4 ml-4 z-10">
                    <img src="/images/leftTestimonyArrow.svg" className=" z-10"/>
                    <img className="ml-4 z-10 " src="/images/rightTestimonyArrow.svg"/>
                </span>
            </div>
            <div className="flex-0.5 px-1   sm:px-2 md:px-10  ">
                <div className="relative mb-6 sm:mb-12 md:mb-18"><h1 className="not-italic  font-semibold font-medium font-taviraj text-base md:text-2xl lg:text-4xl ">Testimonials</h1><div className="absolute w-24 h-223 bg-black -bottom-2 md:w-208 lg:w-32"></div></div>
                <p className="not-italic font-normal text-xs md:text-base lg:text-base leading-7 font-nunito  tracking-wide mb-8">Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</p>
                <h3 className="not-italic font-medium text-2xl leading-8 text-gray-800 font-taviraj  tracking-wide">Gita Savitri</h3>
                <p className="not-italic font-light text-base leading-8 text-gray-600 font-taviraj  tracking-wide">Content Creator/Influencer</p>
            </div>
        </div>
    )
}

export default Testinomials
