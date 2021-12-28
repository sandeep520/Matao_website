import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import '../Styles/header.css'
import {
    Link
} from "react-router-dom";
import Footer from '../ProductPage/ProductFooter';
import Header from '../Components/Header';

function ConfirmationPage() {
    return (

        <>
            <Header/>
           

            <div className="w-full flex justify-around">
                <img className="w-12" src="/images/checkout1.svg" />
                <img className="w-12" src="/images/payment.svg" />
                <img className="w-12" src="/images/confirm1.svg" />
            </div>

            <div className="mx-1 xl:mx w-full flex sm:ml-2 md:ml-12 lg:ml-36">
                <h1 className="sm:text-xs md:text-sm lg:text-xl font-taviraj text-gray-400 font-semibold">1. CheckOut</h1>
                <img className="overflow-hidden sm:w-8  md:w-24  lg:w-52 ml-4" src="/images/Line.svg" />
                <h1 className="sm:text-xs md:text-sm lg:text-xl font-taviraj text-gray-400 font-semibold ml-8">2. Payment</h1>
                <img className="overflow-hidden sm:w-8 md:w-24 lg:w-52 ml-4" src="/images/Line.svg" />
                <h1 className="sm:text-xs md:text-sm lg:text-xl font-taviraj text-red-500 font-semibold ml-8 sm:ml-2">3. Confirmation</h1>
            </div>



            <div className="flex justify-center flex-col mt-2 sm:mt-4 md:mt-8 lg:mt-10 sm:flex-row gap-y-2 sm:gap-y-0 gap-x-0 sm:gap-x-4 mx-4 lg:mx-0">
                <div className="flex flex-col items-center w-full md:w-1/2 bg-white px-4 py-4 sm:px-8 sm:py-8 md:px-12 md:py-12 lg:px-16 lg:py-20">
                    <img className="mb-3 sm:mb-4 md:mb-8 lg:mb-10 w-full h-32 sm:h-48 md:h-56 lg:h-64" src="/images/completing.svg" alt="" />
                    <h1 className="not-italic font-medium text-base md:text-xl lg:text-2xl leading-8 text-gray-800 font-taviraj tracking-wide mb-2 md:mb-4">Order Confirmed</h1>
                    <p className="not-italic font-normal text-xs md:text-sm lg:text-base leading-2 lg:leading-6 text-center text-gray-800 font-n
                                  unito tracking-wide mb-4 sm:mb-8 md:mb-12 lg:mb-16">Your order have been confirmed, please wait and track your order</p>
                    <Link className="flex justify-center items-center bg-linkColor w-full h-8 md:h-12 lg:h-16 not-italic font-medium text-base md:text-lg lg:text-xl leading-8 font-taviraj tracking-wide" style={{ color: 'white' }}>Go to track page</Link>
                </div>
                <div className=" w-full md:w-1/2 bg-white p-4 md:p-8">
                    <div className="flex mb-2 sm:mb-4 lg:mb-8">
                        <span className="flex mr-2 sm:mr-4 lg:mr-10 items-center"><img className="mr-2 sm:mr-3 w-5 h-5" src="/images/confirmWatch.svg" alt="" /><p className="not-italic font-normal text-xs md:text-sm leading-8 font-nunito tracking-wide" style={{ color: 'black' }}>10 days delivery</p></span>
                        <span className="flex mr-2 sm:mr-4 lg:mr-10 items-center"><img className="mr-2 sm:mr-3 w-5 h-5" src="/images/courier.svg" alt="" /><p className="not-italic font-normal text-xs md:text-sm leading-8 font-nunito tracking-wide" style={{ color: 'black' }} >DHL Express</p></span>
                    </div>
                    <ul className="mb-2 md:mb-4">
                        <li className="not-italic font-normal text-base md:text-lg lg:text-xl leading-2 md:leading-8 text-black font-taviraj tracking-wide">Way Kambas Mini Ebony</li>
                        <li className="not-italic font-normal text-xs md:text-base leading-2 md:leading-8 text-gray-500">2 x IDR 1.024.000</li>
                        <li className="not-italic font-normal text-base md:text-lg lg:text-xl leading-2 md:leading-8 text-black font-taviraj tracking-wide">Sikka (Ebony & Mapple)</li>
                        <li className="not-italic font-normal text-xs md:text-base leading-2 md:leading-8 text-gray-500">1 x IDR 1.264.000</li>
                    </ul>
                    <ul className="mb-2 md:mb-4">
                        <li className="not-italic font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 flex gap-x-0 sm:gap-x-2 justify-between font-taviraj tracking-wide mb-1 md:mb-3 lg:mb-4"><p className="w-1/2 sm:w-3/5 ">Subtotal</p><p className="w-1/2 sm:w-2/5">Rp 2.152.000</p></li>
                        <li className="not-italic font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 flex gap-x-0 sm:gap-x-2 justify-between font-taviraj tracking-wide mb-1 md:mb-3 lg:mb-4"><p className="w-1/2 sm:w-3/5 ">Shipping Cost</p><p className="w-1/2 sm:w-2/5">Rp  50.000</p></li>
                        <li className="not-italic font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 flex gap-x-0 sm:gap-x-2 justify-between font-taviraj tracking-wide mb-1 md:mb-3 lg:mb-4"><p className="w-1/2 sm:w-3/5 ">Packaging</p><p className="w-1/2 sm:w-2/5">Rp 50.000</p></li>
                    </ul>
                    <div className="w-full bg-gray-300 mb-2 md:mb-4 lg:mb-6" style={{ height: '1px' }}></div>
                    <span className="flex justify-between">
                        <p className="not-italic font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-taviraj tracking-wide">Grand Total</p><p className="not-italic font-medium text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-800 font-taviraj tracking-wide">Rp 2.702.000</p>
                    </span>
                    <div className="w-full bg-gray-300 mb-2 md:mb-4 lg:mt-6 mb-4" style={{ height: '1px' }}></div>
                    <sp an className="flex justify-between">
                        <p className="w-1/3 sm:w-2/5 not-italic font-normal text-base md:text-lg lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">Shipping Address</p><p className="w-2/3 sm:w-3/5 not-italic font-normal text-base md:text-lg lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">18 Richardson Drive
                            Fountain Valley, CA 92708</p>
                    </sp>
                </div>
            </div>
            <Footer/>


        </>

    )
}

export default ConfirmationPage