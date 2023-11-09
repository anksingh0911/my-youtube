import React from 'react'
import { useSelector } from 'react-redux';

const Button = (props) => {
  const {name} = props;
  const isDark = useSelector((store)=>store?.app.isDark)
  return (
    <button className={`rounded-md text-sm bg-gray-300 px-2 py-1 mx-1 ${isDark ? "dark border-[0.5px]" : ''}`}>{name}</button>
  )
}

export default Button