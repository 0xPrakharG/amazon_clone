import React from 'react'
import styled from 'styled-components';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <SubtotalSection>
    <div class="subtotal">
      {/* Price */}

      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
            </p>
            <small class="subtotal__gift">
              <input type="checkbox" />This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType= {"text"}
        thousandSeperator={true}
        prefix={"₹"}
      />
      <button>Proceed To Checkout</button>
    </div>
    </SubtotalSection>
  )
}

export default Subtotal

const SubtotalSection = styled.div`
  .subtotal{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height:100px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #dddddd;
    border-radius: 4px;
    button{
      background: #F0C14B;
      border-radius: 2px;
      width:100%;
      height:30px;
      border: 1px solid;
      margin-top: 10px;
      border-color: #A88734 #9C7E31 #846A29;
      color: #111;
    }
  }
  .subtotal__gift{
    display: flex;
    align-items: center;
  }
  .subtotal__gift input{
    margin-right:5px;
  }

`