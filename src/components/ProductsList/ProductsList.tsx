import React, { useEffect } from 'react'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Product } from '../Product/Product';
import FetchButton from '../UI/FetchButton/FetchButton';
import Loader from '../UI/Loader/Loader';
import './ProductsList.css'

export const ProductsList: React.FC = () => {
  const {error, isLoading, products, filter} = useTypedSelector(state => state.products)
  const {fetchProducts} = useActions()
  let renderProducts = filter
    ? products.filter(el => el.like === true)
    : products

  useEffect(() => {
    fetchProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return (
      <div className='container'>
        <div className='products'>
          <Loader/>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='container'>
        <div className='products'>
          <h1>{error}</h1>
        </div>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className='container'>
        <div className='products'>
          <h1>Упс, продукты закончились. Загрузить еще?</h1>
          <FetchButton/>
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='products'>
        {renderProducts.map(prod =>
          <Product key={prod.title} product={prod}/>
        )}
      </div>
    </div>
  )
}
