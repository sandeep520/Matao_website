
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Productcart } from '../Redux/ProductAction';
import { useDispatch } from 'react-redux';


function ProductsCart(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div style={{ background: 'rgba(0, 0, 0, 0.4)', height: '100vh', overflow: 'hidden' }} className="  md:w-74 z-50 fixed">
            <div className="bg-mainBg  max-w-223 h-4/5 mx-4 my-24 overflow-scroll lg:my-24  lg:mx-40">
                <div className="flex- flex-col px-4 py-1 md:px-8 md:py-2">
                    <div className="flex flex-col border-b border-gray-300 pb-4 pt-4 md:pb-8 md:pt-8 sm:flex-row justify-between">
                        <div className="w-full mb-3 sm:mb-0 sm:w-1/2">
                            <div className="flex">
                                <span className="w-24 h-24 md:w-32 md:h-32 bg-boxHomeBg flex justify-center items-center mr-2 md:mr-8"> <img className="w-18 h-24 md:w-24 md:h-32" src="/images/bannerWatch.svg" /></span>
                                A
                                <div>
                                    <h5 className="not-italic font-normal text-base leading-1 md:text-xl md:leading-6 text-gray-800 font-taviraj">Way Kambas Mini Ebony</h5>
                                    <p className="not-italic font-normal text-xs leading-2  md:text-base md:leading-6 text-gray-600 font-taviraj tracking-wide  line-through">Rp 1.280.000</p>
                                    <p className="not-italic font-semibold text-base md:text-2xl leading-2  md:leading-8 text-gray-800 font-taviraj tracking-wide">Rp 1.024.000</p>
                                    <p className="not-italic font-normal text-xs leading-2 md:text-base md:leading-6 text-gray-700 font-taviraj tracking-wide">Custom Engrave</p>
                                    <p className="not-italic font-light text-xs leading-2 md:text-base md:leading-6 text-gray-700 font-nunito tracking-wide">“Happy | Birthday | from”</p>
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-col items-start sm:items-end w-full sm:w-1/2">
                            <h5 className="not-italic font-medium text-base leading-2 md:text-xl md:leading-6 text-gray-800 font-taviraj tracking-wide text-right">Select Packaging</h5>
                            <select className="bg-white w-56 mt-2 px-2 not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide md:mt-4 md:px-4 md:py-2" name="Wooden Packaging">
                                <option className="not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 30.000)" selected>Wooden Packaging (Rp 30.000)</option>
                                <option className="not-italic font-medium text-xs leading-2  md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 50.000)" >Wooden Packaging (Rp 50.000)</option>
                            </select>
                            <div className="mt-2 md:mt-8 flex items-center">


                                <span className="flex items-center justify-center w-5 h-5 bg-white border border-gray-300"><img className="w-3" src="/images/minusIcon.svg" /></span>
                                <p className="ml-1 mr-1 md:ml-2 md:mr-2 text-base">5</p>
                                <span className="flex items-center justify-center w-5 h-5 bg-linkColor mr-1 lg:mr-4"><img className="w-3" src="/images/plusIcon.svg" /></span>
                                <p className="not-italic font-semibold text-base leading-2 md:text-2xl md:leading-8 text-gray-800 font-taviraj tracking-wide mr-2">Rp 2.048.000</p>
                                <span className="w-6 h-6 md:w-8 md:h-8 box-border border border-linkBorderColor flex justify-center items-center"><img className="w-3 h-3 md:w-4 md:h-4" src="/images/deleteProduct.svg" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col border-b border-gray-300 pb-4 pt-4 md:pb-8 md:pt-8 sm:flex-row justify-between">
                        <div className="w-full mb-3 sm:mb-0 sm:w-1/2">
                            <div className="flex">
                                <span className="w-24 h-24 md:w-32 md:h-32 bg-boxHomeBg flex justify-center items-center mr-2 md:mr-8"> <img className="w-18 h-24 md:w-24 md:h-32" src="/images/watch3.svg" /></span>


                                <div>
                                    <h5 className="not-italic font-normal text-base leading-1 md:text-xl md:leading-6 text-gray-800 font-taviraj">Way Kambas Mini Ebony</h5>
                                    <p className="not-italic font-normal text-xs leading-2  md:text-base md:leading-6 text-gray-600 font-taviraj tracking-wide  line-through">Rp 1.280.000</p>
                                    <p className="not-italic font-semibold text-base md:text-2xl leading-2  md:leading-8 text-gray-800 font-taviraj tracking-wide">Rp 1.024.000</p>
                                    <p className="not-italic font-normal text-xs leading-2 md:text-base md:leading-6 text-gray-700 font-taviraj tracking-wide">Custom Engrave</p>
                                    <p className="not-italic font-light text-xs leading-2 md:text-base md:leading-6 text-gray-700 font-nunito tracking-wide">“Happy | Birthday | from”</p>
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-col items-start sm:items-end w-full sm:w-1/2">
                            <h5 className="not-italic font-medium text-base leading-2 md:text-xl md:leading-6 text-gray-800 font-taviraj tracking-wide text-right">Select Packaging</h5>
                            <select className="bg-white w-56 mt-2 px-2 not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide md:mt-4 md:px-4 md:py-2" name="Wooden Packaging">
                                <option className="not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 30.000)" selected>Wooden Packaging (Rp 30.000)</option>
                                <option className="not-italic font-medium text-xs leading-2  md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 50.000)" >Wooden Packaging (Rp 50.000)</option>
                            </select>
                            <div className="mt-2 md:mt-8 flex items-center">


                                <span className="flex items-center justify-center w-5 h-5 bg-white border border-gray-300"><img className="w-3" src="/images/minusIcon.svg" /></span>
                                <p className="ml-1 mr-1 md:ml-2 md:mr-2 text-base">5</p>
                                <span className="flex items-center justify-center w-5 h-5 bg-linkColor mr-1 lg:mr-4"><img className="w-3" src="/images/plusIcon.svg" /></span>
                                <p className="not-italic font-semibold text-base leading-2 md:text-2xl md:leading-8 text-gray-800 font-taviraj tracking-wide mr-2">Rp 2.048.000</p>
                                <span className="w-6 h-6 md:w-8 md:h-8 box-border border border-linkBorderColor flex justify-center items-center"><img className="w-3 h-3 md:w-4 md:h-4" src="/images/deleteProduct.svg" /></span>
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col border-b border-gray-300 pb-4 pt-4 md:pb-8 md:pt-8 sm:flex-row justify-between">
                        <div className="w-full mb-3 sm:mb-0 sm:w-1/2">
                            <div className="flex">
                                <span className="w-24 h-24 md:w-32 md:h-32 bg-boxHomeBg flex justify-center items-center mr-2 md:mr-8"> <img className="w-18 h-24 md:w-24 md:h-32" src="/images/watchcard2.svg" /></span>


                                <div>
                                    <h5 className="not-italic font-normal text-base leading-1 md:text-xl md:leading-6 text-gray-800 font-taviraj">Way Kambas Mini Ebony</h5>
                                    <p className="not-italic font-normal text-xs leading-2  md:text-base md:leading-6 text-gray-600 font-taviraj tracking-wide  line-through">Rp 1.280.000</p>
                                    <p className="not-italic font-semibold text-base md:text-2xl leading-2  md:leading-8 text-gray-800 font-taviraj tracking-wide">Rp 1.024.000</p>
                                    <p className="not-italic font-normal text-xs leading-2 md:text-base md:leading-6 text-gray-700 font-taviraj tracking-wide">Custom Engrave</p>
                                    <p className="not-italic font-light text-xs leading-2 md:text-base md:leading-6 text-gray-700 font-nunito tracking-wide">“Happy | Birthday | from”</p>
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-col items-start sm:items-end w-full sm:w-1/2">
                            <h5 className="not-italic font-medium text-base leading-2 md:text-xl md:leading-6 text-gray-800 font-taviraj tracking-wide text-right">Select Packaging</h5>
                            <select className="bg-white w-56 mt-2 px-2 not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide md:mt-4 md:px-4 md:py-2" name="Wooden Packaging">
                                <option className="not-italic font-medium text-xs leading-2 md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 30.000)" selected>Wooden Packaging (Rp 30.000)</option>
                                <option className="not-italic font-medium text-xs leading-2  md:text-base md:leading-6 text-gray-500 font-taviraj tracking-wide" value="Wooden Packaging (Rp 50.000)" >Wooden Packaging (Rp 50.000)</option>
                            </select>
                            <div className="mt-2 md:mt-8 flex items-center">


                                <span className="flex items-center justify-center w-5 h-5 bg-white border border-gray-300"><img className="w-3" src="/images/minusIcon.svg" /></span>
                                <p className="ml-1 mr-1 md:ml-2 md:mr-2 text-base">5</p>
                                <span className="flex items-center justify-center w-5 h-5 bg-linkColor mr-1 lg:mr-4"><img className="w-3" src="/images/plusIcon.svg" /></span>
                                <p className="not-italic font-semibold text-base leading-2 md:text-2xl md:leading-8 text-gray-800 font-taviraj tracking-wide mr-2">Rp 2.048.000</p>
                                <span className="w-6 h-6 md:w-8 md:h-8 box-border border border-linkBorderColor flex justify-center items-center"><img className="w-3 h-3 md:w-4 md:h-4" src="/images/deleteProduct.svg" /></span>
                            </div>
                        </div>
                    </div>



                    <div className="mt-2 md:mt-8">
                        <div className="flex justify-between flex-wrap">
                            <div className="flex items-center">
                                <h6 className="not-italic font-normal text-sm sm:text-base md:text-lg leading-4 lg:text-xl lg:leading-6 text-gray-800 font-taviraj tracking-wide mr-1 sm:mr-2 md:mr-4 xl:mr-8">Kode Promo</h6>
                                <input placeholder="jane@example.com" className="placeholder-gray-800::placeholder px-2 py-2 outline-none not-italic font-normal text-xs sm:text-base leading-1 md:text-lg md:leading-2 w-32 h-6 md:w-56 md:h-8 lg:w-64 lg:h-10 lg:text-xl lg:leading-6 font-taviraj tracking-wide mr-1 md:mr-2 lg:mr-4" type="text" />
                                <p className="not-italic font-medium text-sm sm:text-base md:text-lg md:leading-2 lg:text-xl lg:leading-6 text-green-900 font-tavir tr">35% OFF</p>
                            </div>
                            <div className="flex items-center">
                                <p className="not-italic font-normal text-sm leading-2 sm:text-base md:text-lg lg:text-xl lg:leading-6 text-gray-800 font-taviraj tracking-wide mr-8">Subtotal</p>
                                <span>
                                    <h6 className="not-italic font-normal text-xs md:text-sm md:leading-2 lg:text-base lg:leading-6 text-gray-600 font-taviraj tracking-wide line-through mb-1">Rp 3.312.000</h6>
                                    <p className="not-italic font-semibold text-sm sm:text-base md:text-lg lg:text-2xl leading-8 text-gray-800 font-taviraj tracking-wide ">Rp 2.152.000</p>
                                </span>
                            </div>
                        </div>
                        <Link className="mt-8 bg-linkColor py-1 md:py-3 lg:py-5 items-center w-full flex justify-center m-auto not-italic font-semibold text-base md:text-lg sm:text-sm md:text-lg lg:text-2xl lg:leading-6 text-white font-taviraj tracking-wide" onClick={() => history.push("/checkout")}>Checkout</Link>
                        <Link className="mt-4 bg-gray-400 py-1 md:py-3 lg:py-5 items-center w-full flex justify-center m-auto not-italic font-semibold text-base md:text-lg sm:text-sm md:text-lg lg:text-2xl lg:leading-6 text-white font-taviraj tracking-wide" onClick={() => dispatch(Productcart(props))}>Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductsCart
