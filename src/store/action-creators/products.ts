import axios from "axios"
import { Dispatch } from "redux"
import { ActionTypes, IAction } from "../../types/products"


export const fetchProducts = () => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({type: ActionTypes.FETCH_PRODUCTS})
      const response = await axios.get('https://fakestoreapi.com/products')
      dispatch({type: ActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})

    } catch (e) {
      dispatch({
        type: ActionTypes.FETCH_PRODUCTS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователя'
      })
    }
  }
}
