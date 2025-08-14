// import React, { useState } from 'react'
// import Nav from '../components/Nav'
// import Categories from '../Category'
// import Card from '../components/Card'
// import { food_items } from '../food.js'
// import UserContect, { dataContext } from '../context/UserContext.jsx'
// function Home() {
//   let {cate,setCate} =UserContect(dataContext);
//   //  let [cate, setCate] = useState(food_items);
//   function filter(category) {
//     if (category === 'All') {
//       setCate(food_items)
//     } else {
//       let newList = food_items.filter((item) => (
//         item.food_category === category
//       ))
//       setCate(newList)
//     }
//   }
//   return (
//     <div className='bg-slate-200 w-full min-h-[100vh]'>
//       <Nav />
//       <div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
//         {Categories.map((item) => {
//           return <div className='w-[140px] h-[150px] bg-white flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-yellow-100 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}>
//             {item.icon}
//             {item.name}
//           </div>
//         })}
//       </div>
//       <div className='w-full flex-wrap gap-5 px-5 flex justify-center items-centers pt-8 pb-8'>
//         {food_items.map((item) => (
//           <Card name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} />
//         ))}
//       </div>
//       {/* <Card/> */}
//     </div>
//   )
// }

// export default Home


import React, { useContext } from 'react';
import Nav from '../components/Nav';
import Categories from '../Category';
import Card from '../components/Card';
import { food_items } from '../food.js';
import { dataContext } from '../context/UserContext.jsx';

function Home() {
  const { cate, setCate,input  } = useContext(dataContext); // ✅ Correct usage

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
      {!input?     <div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
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
      </div>:null}
  
      <div className='w-full flex-wrap gap-5 px-5 flex justify-center items-centers pt-8 pb-8'>
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
    </div>
  );
}

export default Home;
