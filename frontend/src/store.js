import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer, productsCategoriesReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducers,userRegisterReducers } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo  = Cookie.getJSON("userInfo") || [];

const initialState = {
    cart       : {cartItems},
    userSignin : {userInfo}
};
const reducer = combineReducers({
    productList   : productListReducer,
    productDetails: productDetailsReducer,
    cart          : cartReducer,
    categories    : productsCategoriesReducer,
    userSignin    : userSigninReducers,
    userRegister  : userRegisterReducers
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;