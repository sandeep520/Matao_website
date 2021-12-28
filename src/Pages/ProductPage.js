import React from 'react';
import Details from '../ProductPage/Details';
import Header from '../ProductPage/Header';
import Footer from '../ProductPage/ProductFooter';
import ProductSlider from '../ProductPage/ProductSlider';
import RelateProduct from '../ProductPage/RelateProduct';
import ProductsCart from '../ProductPage/ProductCart';
import { useSelector } from 'react-redux';

function ProductPage() {
    const cartpopup = useSelector(state => state.popup)
    console.log(cartpopup)
    return (
        <>
            <div className="relative">
                {cartpopup && <ProductsCart />}
                <Header />
                <ProductSlider />
                <Details />
                <RelateProduct />
                <Footer />
            </div>

        </>
    )
}

export default ProductPage
