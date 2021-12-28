import React, { useState, useEffect } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import '../Styles/header.css'
import { Link } from "react-router-dom";
import Headers from "../Components/Header";
import Footer from '../ProductPage/ProductFooter';
import { useDispatch } from 'react-redux';
import { Productcart } from '../Redux/ProductAction';
import { useForm } from "react-hook-form";

import {
    useHistory
} from "react-router-dom";
import { mobileValidation, nameValidation, emailValidation, addressValidation } from "./../utils";


function Checkout(props) {
    const [sidebar, setSidebar] = useState(false);
    let dispatch = useDispatch();
    // const history = useHistory();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const [users, setUsers] = useState();

    console.log(users)
    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        // alert("Order Successfully")

        let myObjs;
        if (!users) {
            myObjs = [];
        } else {
            myObjs = users;
        }
        let myObj = { firstName: data.firstname, lastName: data.lastName, emailId: data.emailId,  number: data.number, id: Math.random() }
        myObjs.push(myObj)
        localStorage.setItem("Users", JSON.stringify(myObjs));
        history.push("/payment")
    }
    console.log(errors)



    return (
        <>
            {/* <Headers /> */}


            <div className="header">
                <div className="header__left">
                    <span className="block mx-2 lg:hidden"><MenuIcon onClick={() => setSidebar(true)} className=" text-gray-400 " /></span>
                    <Link to="/home"><img src="/images/MainLogo.svg" className="flex items-center w-24 h-5 md:w-48" /></Link>
                </div>
                <div className="hidden lg:header__middle lg:block">
                    <ul className="header__middle__lists">
                        <li className="h-8 text-xl">Watches</li>
                        <li className="h-8 text-xl">Eyewear</li>
                        <li className="h-8 text-xl">Accessories</li>
                        <li className="h-8 text-xl">News</li>
                    </ul>
                </div>
                <div className="header__right">
                    <img src="/images/logoSearch.svg" className="w-4 mr-3 md:w-8" />
                    <span className="flex items-center w-12 mx-6 md:mx-12">
                        <img src="/images/logoAvatar.svg" className="header__right_avtarimg lg:w-8" />
                        <p className="not-italic font-normal text-md font-taviraj font-normal leading-8 md:text-xl">Login</p>
                    </span>
                    <div className="w-12 h-12 flex items-center justify-center bg-bagBg rounded-full md:header__right_shoppingbagdesk">
                        <img className="w-4" src="/images/logoShoppingBag.svg" onClick={() => history.push("/ProductDetails")} />
                    </div>
                </div>
            </div>



            <div className="w-full flex justify-around">
                <img className="w-12" src="/images/checkout.svg" />
                <img className="w-12" src="/images/payment.svg" />
                <img className="w-12" src="/images/confirm.svg" />
            </div>

            <div className="mx-1 xl:mx w-full flex sm:ml-24 md:ml-12 lg:ml-36">
                <h1 className="sm:text-xs md:text-sm lg:text-xl font-taviraj text-red-600 font-semibold">1. CheckOut</h1>
                <img className="overflow-hidden sm:w-24  md:w-24  lg:w-52 ml-4" src="/images/Line.svg" />
                <h1 className="sm:text-xs md:text-sm lg:text-xl font-taviraj text-gray-500 font-semibold mx-4">2. Payment</h1>
                <img className="overflow-hidden sm:w-24 md:w-24 lg:w-52 ml-4" src="/images/Line.svg" />
                <h1 className="sm:text-xs md:text-sm lg:text-xl font-taviraj text-gray-500 font-semibold mx-4 sm:ml-2">3. Confirmation</h1>
            </div>




            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-x-0 gap-y-2 sm:gap-y-0 sm:gap-x-4 mt-12 mx-4 lg:mx-0">
                <div className="w-full sm:w-1/2 bg-white p-8">
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


                <div className="w-full sm:w-1/2">
                    <div className="bg-white p-2 p-8">
                        <h1 className="not-italic font-semibold text-base sm:text-lg md:text-xl lg:text-4xl text-gray-800 font-taviraj tracking-wide leading-8">Billing Address</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">

                                <div>
                                    <label className="not-italic font-normal text-xs lg:text-base leading-8 text-black font-taviraj tracking-wide ">Fullname</label><br />
                                    <input {...register("fullname", nameValidation("Full Name"))} placeholder="Ex: Rasyidin Arsyad Nasution" type="text" className="mb-2 pb-2 pt-1 w-full border-b border-gray-300 outline-none not-italic font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-6 text-gray-500 font-taviraj tracking-wide" />
                                    {errors.fullname && <p className="text-red-400 font-semibold">{errors.fullname.message}</p>}

                                    <label className="not-italic font-normal text-xs lg:text-base leading-8 text-black font-taviraj tracking-wide">Email Address</label><br />
                                    <input {...register("emailId", emailValidation("Email id"))} placeholder="Ex: rasyid.arsyad@gmail.com" type="email" className="mb-2 pb-2 pt-1 w-full border-b border-gray-300 outline-none not-italic font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-6 text-gray-500 font-taviraj tracking-wide" />
                                    {errors.emailId && <p className="text-red-400 font-semibold">{errors.emailId.message && !errors.emailId.message}Email id not valid</p>}

                                    <label className="not-italic font-normal text-xs lg:text-base leading-8 text-black font-taviraj tracking-wide">Phone Number</label><br />
                                    <input  {...register("number", mobileValidation("Mobile number"))} placeholder="Ex: 089111888999" type="number" className="mb-2 pb-2 pt-1 w-full border-b border-gray-300 outline-none not-italic font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-6 text-gray-500 font-taviraj tracking-wide" />
                                    {errors.number && <p className="text-red-400 font-semibold">{errors.number.message}</p>}

                                    <label className="not-italic font-normal text-xs lg:text-base leading-8 text-black font-taviraj tracking-wide">Shipping Address</label><br />
                                    <input {...register("address", addressValidation("Address"))} placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman" type="text" className="mb-2 pb-2 pt-1 w-full border-b border-gray-300 outline-none not-italic font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-6 text-gray-500 font-taviraj tracking-wide" />
                                    {errors.address && <p className="text-red-400 font-semibold">{errors.address.message && !errors.address.message}Address is not valid</p>}

                                    <label className="not-italic font-normal text-xs lg:text-base leading-8 text-black font-taviraj tracking-wide ">Country</label><br />
                                    <select className="bg-white w-full  border-b border-gray-300 not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj  tracking-wide md:py-2" name="Wooden Packaging">
                                        <option className="not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 30.000)" selected>United State of America (USA)</option>
                                        <option className="not-italic font-medium text-xs leading-2  md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 50.000)" >India (IND)</option>
                                    </select>


                                    <div className="flex gap-x-2 items-center">
                                        <span className="w-1/2 my-4">
                                            <label className="not-italic font-normal text-xs lg:text-base leading-8 text-black font-taviraj tracking-wide">City</label><br />
                                            <select className="bg-white w-full border-b border-gray-300  not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" name="Wooden Packaging">
                                                <option className="not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 30.000)" selected>California</option>
                                                <option className="not-italic font-medium text-xs leading-2  md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 50.000)" >Gujarat</option>
                                            </select>
                                        </span>
                                        <span className="w-1/2 my-4 overflow-hidden">
                                            <label className="not-italic font-normal text-xs lg:text-base leading-8 text-black font-taviraj tracking-wide ">Zip Code</label><br />
                                            <input placeholder="Ex: 94024" type="text" className="outline-none not-italic font-normal border-b border-gray-300 text-sm sm:text-sm md:text-lg lg:text-base  leading-6 text-gray-800 font-taviraj tracking-wide" />
                                        </span>
                                    </div>

                                    <label className="not-italic font-normal text-xs lg:text-base leading-8 text-black font-taviraj tracking-wide">Choose Courier</label><br />
                                    <select className="bg-white w-full border-b border-gray-300  not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" name="Wooden Packaging">
                                        <option className="not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 30.000)" selected>DHL</option>
                                        <option className="not-italic font-medium text-xs leading-2  md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 50.000)" >FedEx</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex my-2 sm:my-4 md:my-10 gap-x-1 md:gap-x-2 lg:gap-x-4 justify-center items-center">
                                <Link className="w-1/2 px-2 py-2 sm:px-1 sm:px-1 md:px-2 md:py-2 lg:px-4 lg:py-4 flex justify-center items-center border border-linkBorderColor not-italic font-medium text-xs sm:text-sm md:text-base lg:text-xl leading-2 lg:leading-8 text-red-600 font-taviraj tracking-wide">Continue Shopping</Link>
                                <button type="submit" className="w-1/2 px-2 py-2 sm:px-1 sm:px-1 md:px-2 md:py-2 lg:px-4 lg:py-4 flex justify-center items-center border border-linkBorderColor bg-linkColor not-italic font-medium text-xs sm:text-sm md:text-base lg:text-xl leading-2 lg:leading-8 text-red-600 font-taviraj tracking-wide" style={{ color: 'white' }}>Place My Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />

        </>



    )
}

export default Checkout



















































































