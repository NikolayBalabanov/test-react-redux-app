export interface IProductsState {
  products: any[];
  isLoading: boolean;
  error: null | string;
};

export enum ActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
}

interface IActionFetch {
  type: ActionTypes.FETCH_PRODUCTS;
};

interface IActionSuccess {
  type: ActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: any[];
};

interface IActionError {
  type: ActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
};

export type IAction = IActionFetch | IActionSuccess | IActionError
