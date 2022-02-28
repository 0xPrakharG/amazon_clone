import React from 'react'
import styled from 'styled-components';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to Basket..
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <Products>
    <div class="product">
      <div class="product__info">
        <p>{title}</p>
        <p class="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div class="product__rating">
          {Array(rating)
          .fill()
          .map((_)=>(
            <p>⭐️</p>
          ))}
        </div>
      </div>
      <img src={image} alt="book cover" />
      <button onClick={addToBasket}>Add to Basket</button>
      
    </div>
    </Products>
  )
}

export default Product

const Products = styled.div`
  display:flex;
  justify-content: center;
  margin:10px;
  padding:20px;
  width:100%;
  max-height:fit-content;
  min-width: 100px;
  background-color: white;
  z-index:1;
  .product{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  }
  .product__info{
    height:fit-content;
    margin-bottom:10px;
  }
  .product__price{
    margin-top:5px;
  }
  .product__rating{
    display:flex;
  }
  img{
    max-height: 200px;
    height:180px;
    width:100%;
    object-fit: contain;
    margin-bottom: 15px;
  }
  button{
    background-color: #F0C14B;
    border: 1px solid;
    border-color:#A88734 #9C7E31 #846A29;
    color:#111;
    cursor: pointer;
  }
`