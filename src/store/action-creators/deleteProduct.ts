import { Dispatch } from "redux"
import { IProduct } from "../../types/product"
import { ActionTypes, IAction } from "../../types/products"


export const deleteProduct = (state: IProduct[], deleteId: number) => {
  return async (dispatch: Dispatch<IAction>) => {
    const newProducts = state.slice().filter(el => el.id !== deleteId)
    dispatch({type: ActionTypes.DELETE_PRODUCTS, payload: newProducts})
  }
}
