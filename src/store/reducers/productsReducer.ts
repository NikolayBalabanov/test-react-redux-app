import { IProductsState, IAction, ActionTypes } from "../../types/products";

const initialState: IProductsState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsReducer = (state = initialState, action: IAction): IProductsState => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { isLoading: true, error: null, products: [] };
    case ActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { isLoading: false, error: null, products: action.payload };
    case ActionTypes.FETCH_PRODUCTS_ERROR:
      return { isLoading: false, error: action.payload, products: [] };
    default:
      return state;
  }
}
