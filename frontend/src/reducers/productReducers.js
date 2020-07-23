import * as constants from '../constants/productConstants';

function productListReducer(state = { products : [] }, action) {
    switch (action.type){
        case constants.PRODUCT_LIST_REQUEST:
            return { loading:true };
        case constants.PRODUCT_LIST_SUCCESS:
            return { loading:false, products:action.payload  };
        case constants.PRODUCT_LIST_FAIL:
            return { loading:false, error: action.payload };
        default:
            return state;
    }
}

function productDetailsReducer(state = { product : [] }, action) {
    switch (action.type){
        case constants.PRODUCT_DETAILS_REQUEST:
            return { loading:true };
        case constants.PRODUCT_DETAILS_SUCCESS:
            return { loading:false, product: action.payload };
        case constants.PRODUCT_DETAILS_FAIL:
            return { loading:false, error: action.payload };
        default:
            return state;
    }
}

function productsCategoriesReducer(state = { categories : [] }, action) {
    switch (action.type){
        case constants.PRODUCT_CATEGORY_REQUEST:
            return { loading:true };
        case constants.PRODUCT_CATEGORY_SUCCESS:
            return { loading:false, categories: action.payload };
        case constants.PRODUCT_CATEGORY_FAIL:
            return { loading:false, error: action.payload };
        default:
            return state;
    }
}


export {
    productListReducer,
    productDetailsReducer,
    productsCategoriesReducer
}