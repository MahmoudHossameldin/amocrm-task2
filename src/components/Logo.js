import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import welbex from '../assets/welbex.svg';

function Logo() {
  return (
    <Wrapper className='nav-logo'>
      <div className='logos'>
        <div className='logo-icon'>
          <Link to='#'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='logo-text'>
          <Link to='#'>
            <img src={welbex} alt='welbex' />
          </Link>
        </div>
      </div>
      <div>
        <p className='site-subtitle'>
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
    width: 16.5rem;
    margin-right: 2.7rem;

    .logos {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      cursor: pointer;
    }
    .logo-icon {
      margin-right: 0.8rem;
    }
    .site-subtitle {
      font-family: 'montserrat', sans-serif;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.2rem;
    }
  }
`;

export default Logo;
