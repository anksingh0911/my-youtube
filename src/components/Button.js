import React from 'react'
import { useSelector } from 'react-redux';

const Button = (props) => {
  const {name} = props;
  const isDark = useSelector((store)=>store?.app.isDark)
  return (
    <button className={`rounded-md text-sm bg-gray-300 px-4 py-[6px] mx-2 ${isDark ? "dark border-[0.5px]" : ''}`}>
      {name}
    </button>
  )
}

export default Button