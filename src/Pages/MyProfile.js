
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import { Productcart } from '../Redux/ProductAction';
import { useState } from "react";
import '../Styles/header.css'
import Header from '../Components/Header';
import Footer from '../ProductPage/ProductFooter';
import { useForm } from "react-hook-form";


function Profile(props) {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Saved")
    }
    console.log(errors)

    return (
        <div>
            <Header />

            <div class="mt-10 sm:mt-0">
                <div class="md:grid md:grid-row-3 md:gap-6">
                    <div class="md:col-span-1">
                        <div class="px-4 sm:px-0 ">
                            <h3 class="text-2xl  font-medium font-taviraj leading-6 text-gray-900">Personal Information</h3>

                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit(onSubmit)} action="" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label class="block text-xl font-medium font-taviraj text-gray-700">First name</label>
                                            <input type="text" placeholder="Ex: Rasyidin Arsyad Nasution" autocomplete="given-name" className="text-xl font-taviraj mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm  border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label className="block text-xl font-medium font-taviraj text-gray-700">Last name</label>
                                            <input type="text" placeholder="Ex: Rasyidin Arsyad Nasution" autocomplete="family-name" className="text-xl font-taviraj mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm  border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label className="block text-xl font-medium font-taviraj text-gray-700">Email address</label>
                                            <input type="text" placeholder="Ex: rasyid.arsyad@gmail.com" autocomplete="email" className="text-xl font-taviraj mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm  border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label className="block text-xl font-medium font-taviraj text-gray-700">Mobile Number</label>
                                            <input type="number" placeholder="Ex: 089111888999" autocomplete="email" className="text-xl font-taviraj mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm  border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label className="block text-xl font-medium font-taviraj text-gray-700">Country / Region</label>
                                            <select name="country" autocomplete="country" className="text-xl font-taviraj mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm  h-12 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option className="block text-xl" >United States</option>
                                                <option className="block text-xl" >Canada</option>
                                                <option className="block text-xl" >Mexico</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6">
                                            <label className="block text-xl font-medium font-taviraj text-gray-700">Street address</label>
                                            <input type="text" placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman" autocomplete="street-address" className=" text-xl font-taviraj mt-1 focus:ring-indigo-500 focus:border-indigo-500 h-12 block w-full shadow-sm  border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label className="block text-xl font-medium font-taviraj text-gray-700">City</label>
                                            <input type="text" placeholder="United States" className=" text-xl font-taviraj mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 h-12 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label className="block text-xl font-medium font-taviraj text-gray-700">State / Province</label>
                                            <input type="text" placeholder="London" className=" text-xl font-taviraj mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 h-12 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label className="block text-xl font-taviraj font-medium  text-gray-700">ZIP / Postal</label>
                                            <input type="text" placeholder="382470" autocomplete="postal-code" className="text-xl font-taviraj mt-1 focus:ring-indigo-500 text-xl font-taviraj focus:border-indigo-500 block w-full h-12 shadow-sm  border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" onSubmit={handleSubmit(onSubmit)} className="inline-flex justify-center py-2 font-taviraj px-4 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-linkColor  hover:bg-green-600 h-12 w-24 ">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}



export default Profile



