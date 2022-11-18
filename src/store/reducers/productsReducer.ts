import { IProductsState, IAction, ActionTypes } from "../../types/products";

const initialState: IProductsState = {
  products: [],
  isLoading: false,
  error: null,
  filter: false,
};

export const productsReducer = (state = initialState, action: IAction): IProductsState => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { isLoading: true, error: null, products: [], filter: false };
    case ActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { isLoading: false, error: null, products: action.payload, filter: false };
    case ActionTypes.FETCH_PRODUCTS_ERROR:
      return { isLoading: false, error: action.payload, products: [], filter: false };
    case ActionTypes.FILTER_PRODUCTS:
      return { ...state, filter: action.payload };
    case ActionTypes.DELETE_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.LIKE_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
