import { PRODUCT_LIST_REQUEST } from "../constants/productConstants";

export const listProducts = () => async: any: any (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
}