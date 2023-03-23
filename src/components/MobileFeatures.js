import React from 'react';
import styled from 'styled-components';

function MobileFeatures() {
  return (
    <Wrapper className='features'>
      <div className='row'>
        <div className='feature'>
          <div></div>Skype аудит
        </div>
        <div className='feature'>
          <div></div>Dashboard
        </div>
      </div>
      <div className='row'>
        <div className='feature'>
          <div></div>30 виджетов
        </div>
        <div className='feature'>
          <div></div>Месяц аmoCRM
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  text-transform: uppercase;

  .row {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .feature {
    display: flex;
    align-items: center;

    div {
      width: 1rem;
      height: 0.1rem;
      background: linear-gradient(90deg, #fcb045 36.99%, #fd1d1d 100%);
      margin-right: 0.5rem;
    }
  }
`;

export default MobileFeatures;
