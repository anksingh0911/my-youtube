import React from 'react'
import Button from './Button'

const ButtonsList = () => {
  const list = ["All", "Live", "Cricket","Football","Javascript","Web Development", "Comedy", "BGMI" ]
  return (
    <div className='my-3'>
      {list.map((item, index)=>(
        <Button key={index} name={item}/>
      ))}
    </div>
  )
}
export default ButtonsList;