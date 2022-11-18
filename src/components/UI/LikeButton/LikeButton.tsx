import React from 'react'
import { LikeIcon } from '../Icons';
import './LikeButton.css'

interface IPropsLike {
  like: boolean;
  likeFn: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const LikeButton = (props: IPropsLike) => {

  return (
    <button
      className={props.like ? 'like like--active' : 'like'}
      onClick={props.likeFn}
      title={"Like this product"}
    >
      <LikeIcon size='30'/>
    </button>
  )
}
