import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import '../Styles/header.css'
import { useState, useEffect } from "react";

import {
    Link,useHistory
} from "react-router-dom";
import Footer from '../ProductPage/ProductFooter';
import Header from '../Components/Header';

function Payment() {
    const history = useHistory();
    



return (

    <>
        <Header/>
  
        <div className="w-full flex justify-around">
            <img className="w-12" src="/images/checkout1.svg" />
            <img className="w-12" src="/images/payment1.svg" />
            <img className="w-12" src="/images/confirm.svg" />
        </div>

        <div className="mx-1 xl:mx w-full flex sm:ml-24 md:ml-12 lg:ml-36">
            <h1 className="sm:text-xs md:text-sm lg:text-xl font-taviraj text-gray-400 font-semibold">1. CheckOut</h1>
            <img className="overflow-hidden sm:w-24  md:w-24  lg:w-52 ml-4" src="/images/Line.svg" />
            <h1 className="sm:text-xs md:text-sm lg:text-xl font-taviraj text-red-500 font-semibold mx-4">2. Payment</h1>
            <img className="overflow-hidden sm:w-24 md:w-24 lg:w-52 ml-4" src="/images/Line.svg" />
            <h1 className="sm:text-xs md:text-sm lg:text-xl font-taviraj text-gray-500 font-semibold mx-4 sm:ml-2">3. Confirmation</h1>
        </div>


        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-x-0 gap-y-2 sm:gap-y-0 sm:gap-x-4 mt-12 mx-4 lg:mx-0">
            <div className="flex flex-col gap-y-2 sm:gap-y-4 w-full h-full sm:w-1/2">
                <div className=" bg-white p-8 ">
                    <h1 className="not-italic font-semibold text-base sm:text-lg md:text-xl lg:text-4xl text-gray-800 font-taviraj tracking-wide leading-8">Detail Order</h1>
                    <ul className="flex flex-col pt-2 pb-2 md:pt-4 md:pb-4 lg:pt-10 lg:pb-10 border-b border-gray-800">
                        <li className="flex justify-between not-italic font-medium text-xs sm:text-base md:text-lg lg:text-xl text-gray-800 font-taviraj tracking-wide leading-5 lg:leading-loose mb-1 md:mb-2 lg:mb-4"><p>Subtotal</p><p>Rp 2.152.000</p></li>
                        <li className="flex justify-between not-italic font-medium text-xs sm:text-base md:text-lg lg:text-xl text-gray-800 font-taviraj tracking-wide leading-5 lg:eading-loose mb-1 md:mb-2 lg:mb-4"><p>Shipping Cost</p><p>Rp 500.000</p></li>
                        <li className="flex justify-between not-italic font-medium text-xs sm:text-base md:text-lg lg:text-xl text-gray-800 font-taviraj tracking-wide leading-5 lg:leading-loose mb-1 md:mb-2 lg:mb-4"><p>Promo Code</p><p>INDONESIA</p></li>
                        <li className="flex justify-between not-italic font-medium text-xs sm:text-base md:text-lg lg:text-xl text-gray-800 font-taviraj tracking-wide leading-5 lg:leading-loose mb-1 md:mb-2 lg:mb-4"><p>Packaging</p><p>Rp 50.000</p></li>
                    </ul>
                    <span className="flex justify-between mt-6">
                        <p className="not-italic font-medium text-sm md:text-base lg:text-xl text-gray-800 font-taviraj tracking-wide">Grand Total</p>
                        <p className="not-italic font-medium text-sm md:text-base lg:text-2xl text-gray-800 font-taviraj tracking-wide">Rp 2.702.000</p>
                    </span>
                </div>
                <div className=" bg-white p-8 ">
                    <span className="flex items-center justify-between">
                        <h1 className="not-italic font-semibold text-base sm:text-lg md:text-xl lg:text-4xl text-gray-800 font-taviraj tracking-wide leading-8">Payment Detail</h1>
                        <p className="not-italic font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl text-red-600 not-italic font-semibold text-textColor ">11:55:55</p>
                    </span>
                    <p className="mt-4 not-italic font-normal text-sm md:text-base leading-2 md:leading-8 text-gray-800 font-nunito trecking-wide">Please make a payment according with the limit time specified, starting from now</p>
                </div>


            </div>
            <div className="w-full sm:w-1/2">
                <div className="bg-white p-2 p-8">
                    <h1 className="not-italic font-semibold text-base sm:text-lg md:text-xl lg:text-4xl text-gray-800 font-taviraj tracking-wide leading-8">Billing Address</h1>
                    <ul className="pt-4 md:pt-10">
                        <li className="flex justify-between mb-6"><p className="w-1/3 not-italic font-normal  text-xs sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">Order Number</p><div className="w-2/3 flex flex-col"><span className="mb-1 md:mb-2 flex justify-between items-center"><p className="not-italic font-normal  text-xs sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8  text-gray-800 font-taviraj tracking-wide">MTAWEB-3A86D4DB</p><button className="not-italic font-bold text-xs sm:text-base md:text-lg lg:text-xl leading-2 md:leading-6   text-red-600 font-taviraj tracking-wide">Copy</button></span>
                            <p className="not-italic font-normal  text-xs sm:text-base  lg:text-lg leading-2 md:leading-8  text-gray-600 font-nunito tracking-wide">Always remember Order Number for easy tracking</p>
                        </div></li>
                        <li className="flex justify-between mb-6"><p className="w-1/3 not-italic font-normal text-xs sm:text-base md:text-lg lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">Purchase Date</p><p className="w-2/3 not-italic font-normal text-xs sm:text-base  sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8  text-gray-800 font-taviraj tracking-wide">2019-11-07 14:01:48</p></li>
                        <li className="flex justify-between mb-6"><p className="w-1/3 not-italic font-normal  text-xs sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8  text-gray-800 font-taviraj tracking-wide">Items</p><p className="w-2/3 not-italic font-normal text-xs sm:text-base md:text-lg lg:text-xl leading-2 md:leading-8  text-gray-800 font-taviraj tracking-wide">Way Kambas Mini Ebony<br />
                            <small className="text-xs md:text-base text-gray-500">2 x IDR 1.024.000</small><br />
                            Sikka (Ebony & Mapple)<br />
                            <small className="text-xs md:text-base text-gray-500">1 x IDR 1.264.000</small>
                        </p></li>
                        <li className="flex justify-between mb-6"><p className="w-1/3 not-italic font-normal text-xs sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">Name</p><p className="w-2/3 not-italic font-normal text-xs sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8  text-gray-800 font-taviraj tracking-wide">Rasyidin Arsyad Nasution</p></li>
                        <li className="flex justify-between mb-6"><p className="w-1/3 not-italic font-normal text-xs sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8  text-gray-800 font-taviraj tracking-wide">Phone</p><p className="w-2/3 not-italic font-normal text-xs sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8  text-gray-800 font-taviraj tracking-wide">+18911188899</p></li>
                        <li className="flex justify-between mb-6"><p className="w-1/3 not-italic font-normal text-xs sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">Email</p><p className="w-2/3 not-italic font-normal text-xs sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8  text-gray-800 font-taviraj tracking-wide">rasyid.arsyad@gmail.com</p></li>
                        <li className="flex justify-between mb-6"><p className="w-1/3 not-italic font-normal text-xs sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8  text-gray-800 font-taviraj tracking-wide">Shipping Address</p><p className="w-2/3 not-italic font-normal text-xs sm:text-base  md:text-lg lg:text-xl leading-2 md:leading-8  text-gray-800 font-taviraj tracking-wide">18 Richardson Drive
                            Fountain Valley, CA 92708</p></li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="mt-8 bg-white mx-4 lg:mx-0 px-4 py-3 sm:px-8 sm:py-6">
            <h1 className="not-italic font-semibold text-base sm:text-lg md:text-xl lg:text-4xl text-gray-800 font-taviraj tracking-wide leading-8">Payment Method</h1>
            <form className="mt-2 sm:mt-4 md:mt-8 lg:mt-10 flex flex-wrap sm:flex-nowrap items-center">
                <span className="flex items-center">
                    <input className="md:w-4 md:h-4 lg:w-6 lg:h-6 mr-2 lg:mr-4" type="radio" name="payment method" />
                    <label className="mr-2 md:mr-4 lg:mr-12 not-italic font-normal text-xs sm:text-sm md:text-base lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">BNI Cicilan 0%</label>
                </span>
                <span className="flex items-center">
                    <input className="md:w-4 md:h-4 lg:w-6 lg:h-6 mr-2 lg:mr-4" type="radio" name="payment method" />
                    <label className="mr-2 md:mr-4 lg:mr-12 not-italic font-normal text-xs sm:text-sm md:text-base lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">Mandiri Cicilan 0%</label>
                </span>
                <span className="flex items-center">
                    <input className="md:w-4 md:h-4 lg:w-6 lg:h-6 mr-2 lg:mr-4" type="radio" name="payment method" />
                    <label className="mr-2 md:mr-4 lg:mr-12 not-italic font-normal text-xs sm:text-sm md:text-base lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">Bank Transfer</label>
                </span>
                <span className="flex items-center">


                    <input className="md:w-4 md:h-4 lg:w-6 lg:h-6 mr-2 lg:mr-4" type="radio" name="payment method" />
                    <label className="not-italic font-normal text-xs sm:text-sm md:text-base lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">Credit Card</label>
                </span>


            </form>
            <div className="flex flex-wrap justify-start sm:justify-between px-1 md:px-6 lg:px-12">
                <img className="w-1/3 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" src="/images/paymentLogo1.svg" alt="" />
                <img className="w-1/3 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" src="/images/paymentLogo2.svg" alt="" />
                <img className="w-1/3 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" src="/images/paymentLogo3.svg" alt="" />
                <img className="w-1/3 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" src="/images/paymentLogo4.svg" alt="" />
                <img className="w-1/3 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" src="/images/paymentLogo5.svg" alt="" />
            </div>
            <form className="mt-2 sm:mt-4 md:mt-8 lg:mt-10 flex flex-wrap sm:flex-nowrap items-center">
                <span className="flex items-center">
                    <input className="md:w-4 md:h-4 lg:w-6 lg:h-6 mr-2 lg:mr-4" type="radio" name="payment method" />
                    <label className="mr-2 md:mr-4 lg:mr-12 not-italic font-normal text-xs sm:text-sm md:text-base lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)</label>
                </span>
                <span className="flex items-center">
                    <input className="md:w-4 md:h-4 lg:w-6 lg:h-6 mr-2 lg:mr-4" type="radio" name="payment method" />
                    <label className="mr-2 md:mr-4 lg:mr-12 not-italic font-normal text-xs sm:text-sm md:text-base lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">GO-PAY</label>
                </span>
                <span className="flex items-center">
                    <input className="md:w-4 md:h-4 lg:w-6 lg:h-6 mr-2 lg:mr-4" type="radio" name="payment method" />
                    <label className="mr-2 md:mr-4 lg:mr-12 not-italic font-normal text-xs sm:text-sm md:text-base lg:text-xl leading-2 md:leading-8 text-gray-800 font-taviraj tracking-wide">Krdivo</label>
                </span>


            </form>
            <div className="flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between px-1 md:px-6 lg:px-12">
                <div className="flex justify-around">
                    <img className="w-16 h-16 mr-2 md:mr-6 lg:mr-8 sm:w-20 sm:h-20 lg:w-24 lg:h-24" src="/images/paymentLogo6.svg" alt="" />
                    <img className="w-16 h-16 mr-2 md:mr-6 lg:mr-8 sm:w-20 sm:h-20 lg:w-24 lg:h-24" src="/images/paymentLogo7.svg" alt="" />
                    <img className="w-16 h-16  sm:w-20 sm:h-20 lg:w-24 lg:h-24" src="/images/paymentLogo8.svg" alt="" />
                </div>
                <div className="flex justify-around">
                    <img className="w-16 h-16 mr-2 md:mr-6 lg:mr-8  sm:w-20 sm:h-20 lg:w-24 lg:h-24" src="/images/paymentLogo9.svg" alt="" />
                    <img className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" src="/images/paymentLogo10.svg" alt="" />
                </div>
            </div>


        </div>
        <div className="flex justify-end"><Link className="mt-4 sm:mt-6 md:mt-10 mx-4 lg:mx-0 w-full sm:w-1/2 md:w-1/4 px-2 py-2 sm:px-1 sm:px-1 md:px-2 md:py-2 lg:px-2 lg:py-4 flex justify-center items-center border border-linkBorderColor bg-linkColor not-italic font-medium text-xs sm:text-sm md:text-base lg:text-xl leading-2 lg:leading-8 text-red-600 font-taviraj tracking-wide" style={{ color: 'white' }} onClick={() => history.push("/confirmationPage")} >Proceed Payment</Link>
        </div>

        <Footer />


    </>
)
}

export default Payment