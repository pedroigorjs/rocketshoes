import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/logo.svg';

function Header({ cart }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{`${cart.length} ${cart.length > 1 ? 'itens' : 'item'}`}</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cart: state.cart,
}))(Header);
