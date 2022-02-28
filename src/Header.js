import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from 'firebase';

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth().signOut();
    }
  };

  return (
    <Container>
      <Link to="/">
        {/* logo on the left */}
        <div><img className="header__logo "src="../images/logo.png" alt=".amazon-logo" /><span class="title-span">.in</span></div>
      </Link>
      {/* search box */}
      <SearchInput>
        <input type="text" />
        <SearchBtn />
      </SearchInput>
      {/* 3 links */}
      <LinkContainer>
        {/* 1st Link */}
        <Link to={!user && "/login"} class="header__link">
          <div onClick={login} class="header__option">
            <span class="header__optionLineOne">Hello, {user?.email}</span>
            <span class="header__optionLineTwo">Sign {user ? "Out" : "In"}</span>
          </div>
        </Link>
        {/* 2nd Link */}
        <Link to="/" class="header__link">
          <div class="header__option">
            <span class="header__optionLineOne">Returns</span>
            <span class="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link to="/" class="header__link">
          <div class="header__option">
            <span class="header__optionLineOne">Your</span>
            <span class="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th Link */}
        <Link to="/checkout" class="header__link ">
          <div className="header__optionBasket">
            {/* basket icon */}
            <ShoppingBasketIcon />
            {/* number of items in the basket */}
            <span class="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </LinkContainer>

    </Container>
  )
}

export default Header

const Container = styled.div`
  background-color: #0F1111;
  display:flex;
  align-items: center;
  position:sticky;
  top:0;
  z-index:100;
  div{
    display: flex;
    align-items: center;
  }
  img{
    object-fit:contain;
    width:100px;
    margin: 18px 1px 0 20px;
  }
  .title-span{
    color: white;
    font-weight: 500;
    font-size: 18px;
    margin-right: 13px;
  }
`

const SearchInput=styled.div`
  display: flex;
  flex:1;
  input{
    padding: 10px;
    height:12px;
    width: 100%;
    border: none;
  }
`
const SearchBtn = styled(SearchIcon)`
  cursor:pointer;
  padding: 5px;
  height: 22px !important;
  margin-right:10px;
  background-color:#CD9042;
`
const LinkContainer =styled.div`
  display:flex;
  justify-content: space-evenly;
  margin:0 10px;
  .header__link{
    color: white;
    text-decoration: none;
  }.header__option{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:0 4px;
    padding:5px;
    cursor:pointer;
  }
  .header__optionLineOne{
    font-size:12px;
  }
  .header__optionLineTwo{
    font-size:14px;
    font-weight:800;
  }
  .header__optionBasket{
    display:flex;
    align-items:center;
  }
  .header__basketCount{
    margin-left:5px; 
    margin-right:10px; 
  }
`
