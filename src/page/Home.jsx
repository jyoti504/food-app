import React, { useContext } from 'react';
import Nav from '../components/Nav';
import Categories from '../Category';
import Card from '../components/Card';
import { food_items } from '../food.js';
import { dataContext } from '../context/UserContext.jsx';
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2.jsx';
import { useSelector } from 'react-redux';
function Home() {
  const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === 'All') {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => (
        item.food_category === category
      ));
      setCate(newList);
    }
  }
  let items = useSelector(state => state.cart);

  let subtotal = items.reduce((total, items) => total + items.qty*items.price, 0)
  console.log(subtotal);
  let delivaryFee = 20;
  let taxes = subtotal * 0.5 / 100;
  let total = Math.floor(subtotal + delivaryFee + taxes);
  
  return (
    <div className='bg-slate-200 w-full min-h-[100vh]'>
      <Nav />
      {!input ? <div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
        {Categories.map((item) => (
          <div
            key={item.name}
            className='w-[140px] h-[150px] bg-white flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-yellow-100 cursor-pointer transition-all duration-200'
            onClick={() => filter(item.name)}
          >
            {item.icon}
            {item.name}
          </div>
        ))}
      </div> : null}

      <div className='w-full flex-wrap gap-5 px-5 flex justify-center items-center pt-8 pb-8'>
        {cate.map((item) => (

          <Card
            key={item.food_name}
            id={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
          />
 
        ))}
      </div>
      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-4 
    transition-transform duration-300 flex flex-col items-center overflow-auto
    ${showCart ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <header className='w-full flex justify-between items-center p-4'>
          <span className='text-yellow-400 text-[18px] font-semibold'>Order items</span>
          <RxCross2
            className='w-[30px] h-[20px] text-yellow-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600'
            onClick={() => setShowCart(false)}
          />
        </header>
        <div className='w-full mt-8 flex flex-col gap-5 '>
          {items.map((item) => (
            <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
          ))
          }
        </div>

        <div className='w-full border-t-2 border-gray-300 mt flex flex-col gap-4 p-8 border-b-2'>
          <div className='w-full flex justify-between items-center'>
            <span className='text-xl text-gray-600 font-semibold'>subtotal</span>
            <span className='text-yellow-400 font-semibold text-lg'>Rs{subtotal}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-xl text-gray-600 font-semibold'>Delivery</span>
            <span className='text-yellow-400 font-semibold text-lg'>Rs{delivaryFee}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-xl text-gray-600 font-semibold'>Taxes</span>
            <span className='text-yellow-400 font-semibold text-lg'>Rs{taxes}/-</span>
          </div>
        </div>
             <div className='w-full flex justify-between items-center p-9 '>
            <span className='text-2xl text-gray-600 font-semibold '>Total</span>
            <span className='text-yellow-400 font-semibold text-lg'>Rs{total}/-</span>
          </div>
         
        
        <button className='w-[80%] p-3 rounded-lg bg-yellow-300 text-white hover:bg-yellow-200 transition-all' >Place Oreder</button>
      </div>
    </div>
  );
}

export default Home;


 
