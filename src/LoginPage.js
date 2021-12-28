import React, { useState, useEffect } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { useForm } from "react-hook-form";



import {
    useHistory
} from "react-router-dom";
import { passwordValidation, emailValidation } from "./utils";


function LoginPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();


    const history = useHistory();

    const [users, setUsers] = useState();
    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem('Users')))
    }, []);

    const onSubmit = (data) => {
        if (users) {
            let index = users.findIndex(item => item.emailId === data.emailId)
            let user = users[index];
            if (user) {
                if (user.password == data.password) {
                    localStorage.setItem("validUser", user.id)
                    // console.log("Hello")
                    history.push("/home")
                } else {

                    alert("Password un Mtched")
                }
            } else {

                alert("Please signup your account")
            }
        } else {

            alert("Please signup your account")
        }

    }
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
                            <label type="email" className=" font-taviraj text-base text-gray-500 "> Email address </label>
                            <input {...register("emailId", emailValidation("Email id"))} className="appearance-none rounded-none relative mb-2 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-xl" placeholder="Email address" />
                            {errors.emailId && <p className="text-red-400 font-semibold">{errors.emailId.message && !errors.emailId.message}Email id not valid</p>}
                        </div>

                        <div>
                            <label type="password" className="font-taviraj text-base text-gray-500"> Password </label>
                            <input {...register("password", passwordValidation("password"))}  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-xl" placeholder="Password" />
                            {errors.password && <p className="text-red-400 font-semibold">{errors.password.message}</p>}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
                            <label type="remember-me" className="ml-2 block font-taviraj text-xl text-gray-500"> Remember me </label>
                        </div>

                        <div className="text-base fon-taviraj">
                            <a href="#" className="font-medium text-red-400 hover:text-green-500"> Forgot your password? </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-taviraj text-2xl rounded-md text-white bg-FooterColor hover:bg-green-500 ">
                            <span className="absolute left-0 inset-y-0 flex items-center   pl-3">
                            </span>
                            Sign in
                        </button>


                        <button type="submit" onClick={() => history.push("/signup")} className="group relative w-full flex justify-center py-2 px-6 border border-transparent text-sm mt-6 font-taviraj text-2xl rounded-md text-white bg-FooterColor hover:bg-green-500 ">
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

export default LoginPage

