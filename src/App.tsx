import React from 'react'
import { ProductsList } from './components/ProductsList/ProductsList'
import { Header } from './components/Header/Header'
import './App.css'

export const App = () => {
  return (
    <div>
      <Header/>
      <ProductsList/>
    </div>
  )
}

