import {createStore} from 'redux';
import {reducer} from './ProductReducer';

export let store = createStore(reducer);