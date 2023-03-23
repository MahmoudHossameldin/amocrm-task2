import React from 'react';
import styled from 'styled-components';
import Contacts from './Contacts';
import Menu from './Menu';
import Logo from './Logo';

function Header() {
  return (
    <Wrapper className='header'>
      <div className='container'>
        <Logo />
        <Menu />
        <Contacts />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #0e1014;

  @media screen and (min-width: 1200px) {
    background-color: transparent;
    position: static;
    margin-top: 4.6rem;
    margin-bottom: 9.4rem;

    .container {
      display: flex;
    }
  }
`;

export default Header;
