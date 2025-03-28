import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);
  // console.log('food_list',food_list);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      {/* <img src={food_list[0].image} alt='notfound'/> */}
      <div className='food-display-list'>
        {food_list.map((item)=>{
          // console.log('item',item);
          if (category==="All" || category===item.category) {
            return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
