import React, { useContext, useEffect } from 'react'
import { IoRestaurantOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
function Nav() {
  let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext);

  useEffect(() => {
    const newlist = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newlist);
  }, [input]);

    let items = useSelector(state => state.cart);
    console.log(items)
  return (
    <div className='w-full  h-[100px] flex justify-between p-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl '>
        <IoRestaurantOutline className='outline-icon w-[30px] h-[30px] text-yellow-500' />
      </div>
      <form
        className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 shadow-md md:w-[70%]'
        onSubmit={(e) => e.preventDefault()}
      >
        <CiSearch className='text-yellow-500 w-[20px] h-[20px] rounded-md shadow-xl' />
        <input
          type="text"
          placeholder='Search items...'
          className='w-[100%] outline-none text-[10px] md:text-[20px]'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer'
        onClick={() => {
          setShowCart(true);
          console.log('clickme ')
        }}>
          
        <span className='absolute top-0 right-2 text-yellow-500 font-semibold text-[18px]'>{items.length}</span>
        <LuShoppingBag className='w-[30px] h-[30px] text-yellow-500' />
      </div>
    </div>
  )
}
export default Nav