import React from 'react';
import styled from 'styled-components';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <CheckoutPage>
    <div class="checkout">
      <div className="checkout__left">
        <img class="checkout__ad" src="../images/checkout_ad.jpg" alt="add__image" />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no itms in your basket. To buy one or more items, click "Add To Basket" next to the item.
            </p>
          </div>
        ) : (
          <div class="checkout__item">
            <h2 class="checkout__title">Your Shopping Basket</h2>

            {/* List out all the Checkout Products */}
            {basket.map(item => (
            <CheckoutProduct 
              id = {item.id}
              title = {item.title}
              image = {item.image}
              price = {item.price}
              rating = {item.rating}
            />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
    </CheckoutPage>
  )
}

export default Checkout;

const CheckoutPage = styled.div`
  .checkout{
    display:flex;
    padding: 20px;
    background-color:white;
    height:max-content;
  }
  .checkout__title{
    margin-right: 10px;
    padding: 10px;
    border-bottom:1px solid lightgray;
  }
  .checkout__ad{
    width: 100%;
    margin-bottom: 10px;
  }
  .checkout__item{
    margin-left: 10px;
  }
`