import { Dispatch } from "redux"
import { ActionTypes, IAction } from "../../types/products"


export const filterProducts = (state: boolean) => {
  return async (dispatch: Dispatch<IAction>) => {
    dispatch({type: ActionTypes.FILTER_PRODUCTS, payload: !state})
  }
}
