import * as constants from '../constants/productConstants';
const axios = require("axios");

const listProducts = () => async (dispatch) => {
    try {
        dispatch({type : constants.PRODUCT_LIST_REQUEST});
        const { data } = await axios.get(`/api/v1/products`);
        dispatch({ type: constants.PRODUCT_LIST_SUCCESS, payload : data });
    } catch (error) {
        dispatch({ type: constants.PRODUCT_LIST_FAIL, payload: error.message });
    }
}

const listProductsCategory = (category) => async (dispatch) => {
    try {
        dispatch({type : constants.PRODUCT_LIST_REQUEST});
        const { data } = await axios.get(`/api/v1/products/byCategory/${category}`);
        dispatch({ type: constants.PRODUCT_LIST_SUCCESS, payload : data });
    } catch (error) {
        dispatch({ type: constants.PRODUCT_LIST_FAIL, payload: error.message });
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({type : constants.PRODUCT_DETAILS_REQUEST, payload: productId});
        const { data } = await axios.get(`/api/v1/products/byId/${productId}`);
        dispatch({ type: constants.PRODUCT_DETAILS_SUCCESS, payload : data });
    } catch (error) {
        dispatch({ type: constants.PRODUCT_DETAILS_FAIL, payload: error.message });
    }
}

const productsCategories = () => async (dispatch) => {
    try {
        dispatch({type : constants.PRODUCT_CATEGORY_REQUEST});
        const { data } = await axios.get(`/api/v1/categories/`);
        console.log(data);
        dispatch({ type: constants.PRODUCT_CATEGORY_SUCCESS, payload : data });
    } catch (error) {
        dispatch({ type: constants.PRODUCT_CATEGORY_FAIL, payload: error.message });
    }
}

const searchProducts = (term) => async (dispatch) => {
    try {
        dispatch({type : constants.PRODUCT_LIST_REQUEST});
        const { data } = await axios.get(`/api/v1/products/search?term=${term}`);
        dispatch({ type: constants.PRODUCT_LIST_SUCCESS, payload : data });
    } catch (error) {
        dispatch({ type: constants.PRODUCT_LIST_FAIL, payload: error.message });
    }
}



export { listProducts,
         detailsProduct,
         productsCategories,
         listProductsCategory,
         searchProducts }