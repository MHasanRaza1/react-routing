import React from 'react'
import './Button.css'

const Button = ({onClick}) => {
  return (
    <div>
      <button className='view-button' onClick={onClick}>View Profile</button>
    </div>
  )
}

export default Button