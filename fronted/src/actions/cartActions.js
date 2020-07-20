import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import Cookie from 'js-cookie';
const axios = require("axios")

const addToCart = (productId) => async (dispatch, getState) =>{
    try {
        const { data } = await axios.get(`/api/v1/product/${productId}`);
        dispatch({ type: CART_ADD_ITEM, payload:{
            product    : data._id,
            name       : data.name,
            category   : data.category,
            image      : data.image,
            price      : data.price,
            description: data.description
        }});
        const { cart: { cartItems} } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {}
}

const removeFromCart = (productId) => async (dispatch, getState) =>{
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    const { cart: { cartItems} } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}

export { addToCart, removeFromCart }