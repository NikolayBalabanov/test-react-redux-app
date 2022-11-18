import React from 'react'
import { DeleteIcon } from '../Icons'
import './DeleteButton.css'

export const DeleteButton = (props: { deleteFn: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
  return (
    <button
      className={'delete'}
      onClick={props.deleteFn}
      title={"Delete this product"}
    >
      <DeleteIcon size='30'/>
    </button>
  )
}
