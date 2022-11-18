import { Dispatch } from "redux"
import { IProduct } from "../../types/product"
import { ActionTypes, IAction } from "../../types/products"


export const likeProduct = (state: IProduct[], likedId: number) => {
  return async (dispatch: Dispatch<IAction>) => {
    const updatedProducts = state.slice().map(el => {
      if (el.id === likedId) {
        let isLiked = el.like
        return {...el, like: !isLiked}
      } else {
        return el
      }
    })
    dispatch({type: ActionTypes.LIKE_PRODUCTS, payload: updatedProducts})
  }
}
