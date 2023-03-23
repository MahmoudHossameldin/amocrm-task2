import React from 'react';
import styled from 'styled-components';

function DesktopFeatures() {
  return (
    <Wrapper>
      <div>
        <div className='grid-cell-title'>Виджеты</div>
        <div className='grid-cell-content'>
          30 готовых <br /> решений
        </div>
      </div>
      <div>
        <div className='grid-cell-title'>Dashboard</div>
        <div className='grid-cell-content'>с показателями вашего бизнеса</div>
      </div>
      <div>
        <div className='grid-cell-title'>Skype Аудит</div>
        <div className='grid-cell-content'>
          отдела продаж <br />и CRM системы
        </div>
      </div>
      <div>
        <div className='grid-cell-title'>35 дней</div>
        <div className='grid-cell-content'>
          использования
          <br />
          CRM
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(React.Fragment)``;

export default DesktopFeatures;
