import React from 'react'
import { useActions } from '../../../hooks/useActions';

export default function FetchButton() {

  const {fetchProducts} = useActions()

  function refetch() {
    fetchProducts()
  }

  return (
    <button onClick={() => refetch()} className= 'btn '>
      Загрузить
    </button>
  )
}
