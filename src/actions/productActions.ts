import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const listProducts = () => async (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        // const { data } = await fetch("product.js");
        // dispatch({ type: PRODUCT_LIST_SUCCESS, products: data })
        dispatch({ type: PRODUCT_LIST_SUCCESS })
    } catch {
        dispatch({ type: PRODUCT_LIST_FAIL })
    }
}