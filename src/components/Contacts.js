import React from 'react';
import styled from 'styled-components';
import telegram from '../assets/telegram.svg';
import phone from '../assets/phone.svg';
import whatsapp from '../assets/whatsapp.svg';
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <Wrapper className='nav-contacts'>
      <div>
        <p>+7 555 555-55-55</p>
      </div>
      <div>
        <button>
          <Link to='#'>
            <img src={telegram} alt='telegram' />
          </Link>
        </button>
        <button>
          <Link to='#'>
            <img src={phone} alt='phone' />
          </Link>
        </button>
        <button>
          <Link to='#'>
            <img src={whatsapp} alt='whatsapp' />
          </Link>
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  p {
    font-weight: 500;
  }
  @media screen and (min-width: 1200px) {
    margin-left: auto;
    display: flex;

    p {
      margin-right: 5rem;
      font-size: 1.6rem;
      height: 2.4rem;
      line-height: 2.4rem;
    }
    button {
      height: 2.4rem;
      line-height: 2.4rem;
    }
    button:nth-child(2) {
      margin: 0 3.3rem;
    }
  }
`;

export default Contacts;
