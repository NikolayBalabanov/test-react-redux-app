import React from "react";

interface IIconProp {
  size?: string
}

export function DeleteIcon({ size = "null" }: IIconProp) {
  return (
    <svg style={{ width: `${size}`, height: `${size}` }}
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8899a4"
      strokeWidth="0"
    >
      <path d="M14 20H4C2.89543 20 2 19.1046 2 18V5H0V3H4V2C4 0.89543 4.89543 0 6 0H12C13.1046 0 14 0.89543 14 2V3H18V5H16V18C16 19.1046 15.1046 20 14 20ZM4 5V18H14V5H4ZM6 2V3H12V2H6ZM12 16H10V7H12V16ZM8 16H6V7H8V16Z" fill="#182233"/>
    </svg>
  )
}
