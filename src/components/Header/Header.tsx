import React from 'react'
import FilterButton from '../UI/FilterButton/FilterButton';
import './Header.css'

export const Header = () => {

  return (
    <header className='header'>
      <div className='container header__container'>
        <span className='header__text'>Лайкнутые товары</span>
        <FilterButton isFiltered={false}></FilterButton>
      </div>
    </header>
  )
}
