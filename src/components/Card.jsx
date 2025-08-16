import React from 'react'

import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice';
function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch()
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 flex flex-col gap-3 shadow-lg hover:border-2 border-yellow-300'>
      <div className='w-[100%] h-[60%] overflow-hidden'>
        <img src={image} alt="" className='object-cover rounded-lg' />
      </div>
      <div className='text-2xl font-semibold '>
        {name}
      </div>
      <div className='w-full flex justify-between items-center'>
        <div className='text-lg text-yellow-500 w-[100%]'>Rs {price}</div>
        <div className='flex justify-center items-center gap-2 text-yellow-500 text-lg font-semibold'>{type === 'veg' ? <LuLeafyGreen /> : <GiChickenOven />} <span>{type}</span></div>
      </div>
      <button className='w-full p-3 rounded-lg bg-yellow-300 text-white hover:bg-yellow-200' onClick={() => dispatch(addItem({ id: id, name: name, price: price, image: image, qty: 1 }))}  >Add to Dish</button>
    </div>
  )
}
export default Card
