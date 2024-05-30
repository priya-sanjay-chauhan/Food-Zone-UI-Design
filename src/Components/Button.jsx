import React from 'react'

const Button = ({onClick,children}) => {
  return (
    <div>
        <button onClick={onClick} className='bg-red-500 text-white text-xs md:text-base px-3 py-1.5 border border-none rounded-md '>{children}</button>
    </div>
  )
}

export default Button