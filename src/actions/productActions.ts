import { PRODUCT_LIST_REQUEST } from "../constants/productConstants";

export const listProducts = () => (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
}