import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link, useHistory } from 'react-router-dom';
import '../Styles/header.css'
import { useState } from "react";
import { useDispatch } from 'react-redux';



import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Profile from '../Pages/MyProfile';
import Payment from '../CheckOut/PaymentPage';


function Header(props) {
    const [sidebar, setSidebar] = useState(false);
    let dispatch = useDispatch();
    const history = useHistory();

    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);

    const handleClick = (event) => {
        setAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    const logout = () => {
        localStorage.removeItem("validUser");
        history.push("/login")
    }

    return (
        <div className="header">
            {
                sidebar && <div style={{ background: 'rgba(0, 0, 0, 0.4)', width: '10vw', height: '10vh', overflow: 'hidden' }} className="z-50 fixed md:hidden">
                    <div className="w-56 sm:w-72  h-full bg-white fixed z-50 p-4">
                        <span className="flex justify-between">
                            <Link className="" to="/">
                                <img src="/images/MainLogo.svg" className="cursor-pointer flex items-center w-24 h-5 md:w-48" />
                            </Link>
                            <CloseIcon style={{ color: 'rgb(144,134,85)' }} onClick={() => setSidebar(false)} />
                        </span>

                        <ul className="flex flex-col mt-8">
                            <li className="h-8 text-base font-taviraj trecking-wide lg:text-xl hover:text-red-600 cursor-pointer">Watches</li>
                            <li className="h-8 text-base font-taviraj trecking-wide lg:text-xl hover:text-red-600 cursor-pointer">Eyewear</li>
                            <li className="h-8 text-base font-taviraj trecking-wide lg:text-xl hover:text-red-600 cursor-pointer">Accessories</li>
                            <li className="h-8 text-base font-taviraj trecking-wide lg:text-xl hover:text-red-600 cursor-pointer">News</li>
                        </ul>
                    </div>
                </div>
            }


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
                    <button className="not-italic font-normal text-md font-taviraj font-normal leading-8 md:text-xl" onClick={handleClick}>Login</button>



                    <Menu
                        // id="fade-menu"
                        anchorEl={anchor}
                        // keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}>

                        <MenuItem className="w-full" onClick={() => history.push("/profile")}>My Profile</MenuItem>
                        <MenuItem onClick={() => history.push("/ProductDetails")}>Oder List</MenuItem>
                        <MenuItem onClick={() => logout()}>Logout</MenuItem>
                    </Menu>

                </span>
                <div className="w-12 h-12 flex items-center justify-center bg-bagBg rounded-full md:header__right_shoppingbagdesk">
                    <img className="w-4" src="/images/logoShoppingBag.svg" onClick={() => history.push("/ProductDetails")} />
                </div>
            </div>
        </div>
    )
}

export default Header

