import React, { useContext } from 'react';
import Nav from '../components/Nav';
import Categories from '../Category';
import Card from '../components/Card';
import { food_items } from '../food.js';
import { dataContext } from '../context/UserContext.jsx';
import { RxCross2 } from "react-icons/rx";
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
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>
   

      <div 
  className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-4 
    transition-transform duration-300 
    ${showCart ? 'translate-x-0' : 'translate-x-full'}`}
>
  <header className='w-full flex justify-between items-center p-4'>
    <span className='text-yellow-400 text-[18px] font-semibold'>Order items</span>
    
    <RxCross2 
      className='w-[30px] h-[20px] text-yellow-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600' 
      onClick={() => setShowCart(false)}
    />
  </header>
</div>

    </div>
  );
}

export default Home;


//1:55:19 create card
