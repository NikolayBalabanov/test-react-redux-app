import axios from "axios"
import { Dispatch } from "redux"
import { IProduct } from "../../types/product"
import { ActionTypes, IAction } from "../../types/products"


export const fetchProducts = () => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({type: ActionTypes.FETCH_PRODUCTS})
      const response = await axios.get('https://fakestoreapi.com/products')
      const products: IProduct[] = response.data.map((product: { like: boolean }) => {
        return {...product, like: false}
      })
      dispatch({type: ActionTypes.FETCH_PRODUCTS_SUCCESS, payload: products})
    } catch (e) {
      dispatch({
        type: ActionTypes.FETCH_PRODUCTS_ERROR,
        payload: 'Произошла ошибка при загрузке катрочек товаров'
      })
    }
  }
}
