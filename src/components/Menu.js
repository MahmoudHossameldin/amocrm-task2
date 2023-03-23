import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Wrapper className='nav-menu'>
      <ul>
        <li>
          <Link to='#'>Услуги</Link>
        </li>
        <li>
          <Link to='#'>Виджеты</Link>
        </li>
        <li>
          <Link to='#'>Интеграции</Link>
        </li>
        <li>
          <Link to='#'>Кейсы</Link>
        </li>
        <li className='certificates'>
          <Link to='#'>Сертификаты</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .certificates {
    display: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.6rem;
  }
  li a {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
  }
  @media screen and (min-width: 1200px) {
    width: 50.3rem;
    margin-right: 13.7rem;

    .certificates {
      display: block;
    }

    ul {
      padding: 0;
      display: flex;
      justify-content: space-between;
      height: 2.4rem;
      align-items: center;
      background-color: transparent;
    }
    li a {
      font-size: 1.6rem;
      line-height: 1.9rem;
      text-transform: capitalize;
    }
  }
`;

export default Nav;
