import React from 'react'
import './Button.scss'

const Button = ({title}:{title:string}) => {
  return (
        <a href="#"  className='btn overflow-hidden'>
        {title}
        </a>
  )
}

export default Button