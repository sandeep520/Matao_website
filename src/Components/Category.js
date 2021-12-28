import React from 'react'
import { Link } from 'react-router-dom'

function Category() {
    return (
        <>
        <div className="mx-4 flex flex-col gap-8 lg:flex-row">
            <div className="w-full lg:w-1/3">
                <div>
                <div className="relative mb-6 sm:mb-10 md:mb-12 lg:mb-16"><h1 className="not-italic font-medium font-taviraj text-2xl md:text-3xl lg:text-4xl ">Maple Series</h1><div className="absolute w-24 h-223 bg-black -bottom-2 md:w-208 lg:w-32"></div></div>
                    <div className="flex flex-col sm:flex-row lg:flex-col">
                        <div className="flex w-full mb-1 lg:mb-8">
                        <div className="flex flex-0.3 md:flex-0.4 h-24 w-24 justify-center items-center overflow-hidden lg:h-32 bg-boxHomeBg">
                                <img className="object-cover" src="/images/mapleSeriesWatch1.svg" />
                            </div>
                            <div className="flex flex-0.7 md:flex-0.6 flex-col ml-2 lg:ml-6">
                                <h5 className="not-italic font-normal text-lg sm:text-base lg:text-2xl leading-6 sm:leading-8 font-taviraj mb-1 tracking-wide">Way Kambas Maple</h5>
                                <p className="not-italic font-medium text-xl sm:text-base lg:text-3xl leading-10 font-taviraj tracking-wide">Rp 1.280.000</p>
                            </div>
                        </div>
                        <div className="flex w-full mb-1 lg:mb-8">
                        <div className="flex flex-0.3 md:flex-0.4 h-24 w-24 justify-center items-center overflow-hidden lg:h-32 bg-boxHomeBg">
                                <img className="object-cover" src="/images/mapleSeriesWatch2.svg" />
                            </div>
                            <div className="flex flex-0.7 md:flex-0.6 flex-col ml-2 lg:ml-6">
                                <h5 className="not-italic font-normal text-lg sm:text-base lg:text-2xl leading-6 sm:leading-8 font-taviraj mb-1 tracking-wide">Kaili</h5>
                                <p className="not-italic font-medium text-xl sm:text-base lg:text-3xl leading-10 font-taviraj tracking-wide">Rp 950.000</p>
                            </div>
                        </div>
                        <div className="flex w-full mb-1 lg:mb-8">
                        <div className="flex flex-0.3 md:flex-0.4 h-24 w-24 justify-center items-center overflow-hidden lg:h-32 bg-boxHomeBg">
                                <img className="object-cover" src="/images/mapleSeriesWatch3.svg" />
                            </div>
                            <div className="flex flex-0.7 md:flex-0.6 flex-col ml-2 lg:ml-6">
                                <h5 className="not-italic font-normal text-lg sm:text-base lg:text-2xl leading-6 sm:leading-8 font-taviraj mb-1 tracking-wide">Sunda</h5>
                                <p className="not-italic font-medium text-xl sm:text-base lg:text-3xl leading-10 font-taviraj tracking-wide">Rp 1.170.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3">
                <div>
                <div className="relative mb-6 sm:mb-10 md:mb-12 lg:mb-16"><h1 className="not-italic font-medium font-taviraj text-2xl md:text-3xl lg:text-4xl ">Ebony Series</h1><div className="absolute w-24 h-223 bg-black -bottom-2 md:w-208 lg:w-32"></div></div>
                    <div className="flex flex-col sm:flex-row lg:flex-col">
                        <div className="flex w-full mb-1 lg:mb-8">
                        <div className="flex flex-0.3 md:flex-0.4 h-24 w-24 justify-center items-center overflow-hidden lg:h-32 bg-boxHomeBg">
                                <img className="object-cover" src="/images/ebonySeriesWatch1.svg" />
                            </div>
                          <div className="flex flex-0.7 md:flex-0.6 flex-col ml-2 lg:ml-6">
                                <h5 className="not-italic font-normal text-lg sm:text-base lg:text-2xl leading-6 sm:leading-8 font-taviraj mb-1 tracking-wide">Tomia Ebony</h5>
                                <p className="not-italic font-medium text-xl sm:text-base lg:text-3xl leading-10 font-taviraj tracking-wide">Rp 960.000</p>
                            </div>
                        </div>
                        <div className="flex w-full mb-1 lg:mb-8">
                        <div className="flex flex-0.3 md:flex-0.4 h-24 w-24 justify-center items-center overflow-hidden lg:h-32 bg-boxHomeBg">
                                <img className="object-cover" src="/images/ebonySeriesWatch2.svg" />
                            </div>
                            <div className="flex flex-0.7 md:flex-0.6 flex-col ml-2 lg:ml-6">
                                <h5 className="not-italic font-normal text-lg sm:text-base lg:text-2xl leading-6 sm:leading-8 font-taviraj mb-1 tracking-wide">Mori</h5>
                                <p className="not-italic font-medium text-xl sm:text-base lg:text-3xl leading-10 font-taviraj tracking-wide">Rp 950.000</p>
                            </div>
                        </div>
                        <div className="flex w-full mb-1 lg:mb-8">
                        <div className="flex flex-0.3 md:flex-0.4 h-24 w-24 justify-center items-center overflow-hidden lg:h-32 bg-boxHomeBg">
                                <img className="object-cover" src="/images/ebonySeriesWatch3.svg" />
                            </div>
                            <div className="flex flex-0.7 md:flex-0.6 flex-col ml-2 lg:ml-6">
                                <h5 className="not-italic font-normal text-lg sm:text-base lg:text-2xl leading-6 sm:leading-8 font-taviraj mb-1 tracking-wide">Alor</h5>
                                <p className="not-italic font-medium text-xl sm:text-base lg:text-3xl leading-10 font-taviraj tracking-wide">Rp 1.170.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3">
                <div>
                <div className="relative mb-6 sm:mb-10 md:mb-12 lg:mb-16"><h1 className="not-italic font-medium font-taviraj text-2xl md:text-3xl lg:text-4xl ">Featured</h1><div className="absolute w-24 h-223 bg-black -bottom-2 md:w-208 lg:w-32"></div></div>
                    <div className="flex flex-col sm:flex-row lg:flex-col">
                        <div className="flex w-full mb-1 lg:mb-8">
                        <div className="flex flex-0.3 md:flex-0.4 h-24 w-24 justify-center items-center overflow-hidden lg:h-32 bg-boxHomeBg">
                            <img className="object-cover" src="/images/featuredSeriesWatch1.svg" />
                            </div>
                            <div className="flex flex-0.7 md:flex-0.6 flex-col ml-2 lg:ml-6">
                                <h5 className="not-italic font-normal text-lg sm:text-base lg:text-2xl leading-6 sm:leading-8 font-taviraj mb-1 tracking-wide overflow-ellipsis">Sikka (Ebony & Maple)</h5>
                                <p className="not-italic font-medium text-xl sm:text-base lg:text-3xl leading-10 font-taviraj tracking-wide overflow-ellipsis">Rp 1.198.000</p>
                            </div>
                        </div>
                        <div className="flex w-full mb-1 lg:mb-8">
                        <div className="flex flex-0.3 md:flex-0.4 h-24 w-24 justify-center items-center overflow-hidden lg:h-32 bg-boxHomeBg">
                            <img className="object-cover" src="/images/featuredSeriesWatch2.svg" />
                            </div>
                            <div className="flex flex-0.7 md:flex-0.6 flex-col ml-2 lg:ml-6">
                                <h5 className="not-italic font-normal text-lg sm:text-base lg:text-2xl leading-6 sm:leading-8 font-taviraj mb-1 tracking-wide overflow-ellipsis">Lore Walnut</h5>
                                <p className="not-italic font-medium text-xl sm:text-base lg:text-3xl leading-10 font-taviraj tracking-wide overflow-ellipsis">Rp 1.280.000</p>
                            </div>
                        </div>
                        <div className="flex w-full mb-1 lg:mb-8">
                        <div className="flex flex-0.3 md:flex-0.4 h-24 w-24 justify-center items-center overflow-hidden lg:h-32 bg-boxHomeBg">
                            <img className="object-cover" src="/images/featuredSeriesWatch3.svg" />
                            </div>
                            <div className="flex flex-0.7 md:flex-0.6 flex-col ml-2 lg:ml-6">
                                <h5 className="not-italic font-normal text-lg sm:text-base lg:text-2xl leading-6 sm:leading-8 font-taviraj mb-1 tracking-wide overflow-ellipsis">Way Kambas Limited Edition</h5>
                                <p className="not-italic font-medium text-xl sm:text-base lg:text-3xl leading-10 font-taviraj tracking-wide overflow-ellipsis">Rp 1.170.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Link className="flex justify-center mt-4 md:mt-8 not-italic font-normal text-xl leading-8 font-taviraj leading-10 text-center "><p className="border border-linkBorderColor py-2 px-8 md:py-4 md:px-24 text-red-600">See More</p></Link>
        </>
    )
}

export default Category
