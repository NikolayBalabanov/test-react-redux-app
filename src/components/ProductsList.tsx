import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchProducts } from '../store/action-creators/products';

export const ProductsList: React.FC = () => {
  const {error, isLoading, products} = useTypedSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(fetchProducts())
  }, [])

  if (isLoading) {
    return <h1>Загружаю...</h1>
  }

  if (isLoading) {
    return <h1>{error}</h1>
  }


  return (
    <div>
      {products.map(prod =>
        <div>{prod.title}. {prod.body}</div>
      )}
    </div>
  )
}
