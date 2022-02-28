import React from 'react'
import styled from 'styled-components'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id,title,image,price,rating }) {
  const [{ basket }, dispatch] = useStateValue();


  const removeFromBasket = () => {
    // remove item from basket...
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    });
  }
  return (
    <CartPage>
    <div class="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p class="checkoutProduct__title">{title}</p>
        <p class="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div class="checkoutProduct__rating">
          {Array(rating)
          .fill()
          .map((_)=>(
            <p>⭐️</p>
          ))}
        </div>
      <button onClick={removeFromBasket}>Remove From Basket</button>

      </div>
    </div>
    </CartPage>
  )
}

export default CheckoutProduct

const CartPage = styled.div`
  .checkoutProduct{
    display:flex;
    margin:10px 0;
  }
  img{
    height:180px;
    width:180px;
    object-fit: contain;
  }
  .checkoutProduct__info{
    padding-left: 20px;
  }
  .checkoutProduct__title{
    font-size:17px;
    font-Weight:600;
  }
  .checkoutProduct__rating{
    display:flex;
    margin-bottom:10px;
  }
  button{
    background-color: #F0C14B;
    border: 1px solid;
    border-color:#A88734 #9C7E31 #846A29;
    color:#111;
    cursor: pointer;
  }
`