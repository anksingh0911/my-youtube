import React from 'react'

const Button = (props) => {
  const {name} = props;
  return (
    <button className='rounded-md text-sm bg-gray-300 px-2 py-1 mx-1'>{name}</button>
  )
}

export default Button