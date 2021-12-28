import React from 'react';
import Header from '../Components/Header';
import LandingPage from '../Components/LandingPage';
import Banner from '../Components/Banner';
import MonthlyDeals from '../Components/MonthlyDeals';
import RecentNews from '../Components/RecentNews';
import Category from '../Components/Category';
import Testinomials from '../Components/Testinomials';
import Instagram from '../Components/Instagram';
import Footer from '../ProductPage/ProductFooter';
import { useSelector } from 'react-redux';
import ProductsCart from '../Components/ProductCart';


function Home() {
    const cartpopup = useSelector(state => state.popup)
    console.log(cartpopup)
    return (
        <>
            <div className="relative">
                {cartpopup && <ProductsCart />}
                <Header />
                <LandingPage />
                <Banner />
                 <MonthlyDeals />
                <RecentNews />
                <Category />
                <Testinomials />
                <Instagram />
                <Footer />

            </div>

        </>
    )
}

export default Home
