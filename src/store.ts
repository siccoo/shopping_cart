import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productData } from "./data/product";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const initialState = {
    products: []
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = (state: any, action: any) => {
    return {
        products: productData
    }
}

export const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
