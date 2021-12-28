import ProductsCart from '../ProductPage/ProductCart';
import { Show_Cart } from './ProductAction';


const Initisalstate = {
    popup: false
}

export let reducer = (state = Initisalstate, action) => {
    let productCart;
    console.log(state)
    switch (action.type) {

        case Show_Cart:
            console.log(state)
            return {
                ...state,
                popup: !state.popup


            };
          
            return Initisalstate;
    }
    return state;
}