

import React, { useState, useEffect } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import ReactDOM from "react-dom";
// import React, { useState } from "react";
import { useForm } from "react-hook-form";



import {
    useHistory, useRouteMatch
} from "react-router-dom";
import { passwordValidation, emailValidation, nameValidation, mobileValidation } from "./utils";


function SignupPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();




    const [users, setUsers] = useState();
    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem('Users')))
    }, []);

    console.log(users)
    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        alert("Registartion is successfully")


        let myObjs;
        if (!users) {
            myObjs = [];
        } else {
            myObjs = users;
        }
        let myObj = { firstName: data.firstname, lastName: data.lastName, emailId: data.emailId, password: data.password, number: data.number, id: Math.random() }
        myObjs.push(myObj)
        localStorage.setItem("Users", JSON.stringify(myObjs));
        history.push("/login")
    }
    console.log(errors)

    return (


        <div className="min-h-screen flex items-center justify-center bg-mainBg py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto" src="/images/MainLogo.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-semibold font-taviraj text-red-500">Sign in to your account</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">

                        <div>
                            <label type="email" className=" font-taviraj text-base text-gray-500 "> First Name </label>
                            <input {...register("firstname", nameValidation("First Name "))} className="appearance-none rounded-none relative mb-2 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-xl" placeholder="Enter first name" />
                            {errors.firstname && <p className="text-red-400 font-semibold">{errors.firstname.message && !errors.firstname.message}First Name not valid</p>}
                        </div>

                        <div>
                            <label type="email" className=" font-taviraj text-base text-gray-500 "> Last Name </label>
                            <input {...register("lastname", nameValidation("First Name "))} className="appearance-none rounded-none relative mb-2 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-xl" placeholder="Enter last name" />
                            {errors.lastname && <p className="text-red-400 font-semibold">{errors.lastname.message && !errors.lastname.message}Last Name not valid</p>}
                        </div>

                        <div>
                            <label type="email" className=" font-taviraj text-base text-gray-500 "> Email address </label>
                            <input {...register("emailId", emailValidation("Email id"))} className="appearance-none rounded-none relative mb-2 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-xl" placeholder="Email address" />
                            {errors.emailId && <p className="text-red-400 font-semibold">{errors.emailId.message && !errors.emailId.message}Email id not valid</p>}
                        </div>

                        <div>
                            <label type="password" className="font-taviraj text-base text-gray-500"> Password </label>
                            <input type="password" {...register("password", passwordValidation("password"))} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-xl" placeholder="Password" />
                            {errors.password && <p className="text-red-400 font-semibold">{errors.password.message}</p>}
                        </div>

                        <div>
                            <label type="number" className="font-taviraj text-base text-gray-500"> Mobile Number </label>
                            <input type="number" {...register("mobile number", mobileValidation("mobile number"))} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-xl" placeholder="Mobile number" />
                            {errors.mobilenumber && <p className="text-red-400 font-semibold">{errors.mobilenumber.message}</p>}
                        </div>
                    </div>


                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-taviraj text-2xl rounded-md text-white bg-FooterColor hover:bg-green-500 ">
                            <span className="absolute left-0 inset-y-0 flex items-center   pl-3">
                            </span>
                            Sign up
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupPage

