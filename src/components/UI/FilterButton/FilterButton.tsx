import React from 'react'
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import './FilterButton.css'

interface IFilterButton {
  isFiltered: boolean;
}

export default function FilterButton({isFiltered = false}: IFilterButton) {

  const { filter} = useTypedSelector(state => state.products)
  const {filterProducts} = useActions()

  function switchfilter() {
    filterProducts(filter)
  }

  return (
    <button onClick={() => switchfilter()} disabled={isFiltered ? true : false}  className= 'btn '>
      {filter ? 'Убрать фильтр' : 'Отфильтровать'}
    </button>
  )
}
