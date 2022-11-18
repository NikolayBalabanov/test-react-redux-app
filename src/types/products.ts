import { IProduct } from "./product";

export interface IProductsState {
  products: IProduct[];
  isLoading: boolean;
  error: null | string;
  filter: boolean;
};

export enum ActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',
  DELETE_PRODUCTS = 'DELETE_PRODUCTS',
  LIKE_PRODUCTS = 'LIKE_PRODUCTS',
}

interface IActionFetch {
  type: ActionTypes.FETCH_PRODUCTS;
};

interface IActionSuccess {
  type: ActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: IProduct[];
};

interface IActionError {
  type: ActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
};

interface IActionFilter {
  type: ActionTypes.FILTER_PRODUCTS;
  payload: boolean;
};

interface IActionDelete {
  type: ActionTypes.DELETE_PRODUCTS;
  payload: IProduct[];
};

interface IActionLike {
  type: ActionTypes.LIKE_PRODUCTS;
  payload: IProduct[];
};

export type IAction = IActionFetch | IActionSuccess | IActionError | IActionFilter | IActionDelete | IActionLike
