import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function ShoppingCart({moveToBag,cartValue,toggleCart}) {
  let navigate = useNavigate()
    return (
    <div>
      <Link to="/">back to main page</Link> 

        <div className='nav-bar'>
            <FaShoppingCart  onClick={()=>{navigate('/bag')}}/>
           
           
      
        <div className='amount-container'>
            <p>{cartValue}</p>

            </div>
        </div>
    </div>
  )
}


// onClick={()=>toggleCart()}