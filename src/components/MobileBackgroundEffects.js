import React from 'react';
import styled from 'styled-components';

function MobileBackgroundEffects() {
  return (
    <Wrapper>
      <div className='bg-effect red-light'></div>
      <div className='bg-effect glass'></div>
      <div className='bg-effect yellow-light'></div>
      <div className='bg-effect red-ball-lg'></div>
      <div className='bg-effect purple-light'></div>
      <div className='bg-effect purple-ball'></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (max-width: 1200px) {
    .bg-effect {
      z-index: -1;
    }
    .purple-light {
      position: absolute;
      width: 259px;
      height: 259px;
      left: 80.625%;
      top: 107px;
      background: #833ab4;
      opacity: 0.5;
      filter: blur(196px);
    }
    .red-light {
      position: absolute;
      width: 211px;
      height: 210px;
      left: -17.2%;
      top: 241px;
      background: #961a1a;
      opacity: 0.5;
      filter: blur(196px);
    }
    .yellow-light {
      position: absolute;
      width: 200px;
      height: 200px;
      left: -20.6%;
      top: 519px;
      background: #fcb045;
      opacity: 0.4;
      filter: blur(196px);
    }
    .glass {
      position: absolute;
      width: 100%;
      height: 437px;
      left: 0px;
      top: 0px;

      background: radial-gradient(
        238.53% 189.02% at 3.2% 3.49%,
        rgba(255, 246, 233, 0.1) 0%,
        rgba(26, 29, 35, 0.1) 26.62%,
        rgba(26, 29, 35, 0.1) 52.1%,
        rgba(26, 29, 35, 0.01) 70.17%,
        rgba(26, 29, 35, 0) 100%
      );
      backdrop-filter: blur(7.5px);
    }
    .red-ball-lg {
      position: absolute;
      width: 43px;
      height: 43px;
      left: 9%;
      top: 402px;
      border-radius: 50%;
      z-index: -1;
      background: radial-gradient(
        64% 64% at 27.25% 26.5%,
        rgba(255, 208, 208, 0.536) 0%,
        rgba(212, 93, 93, 0.264) 59.67%,
        rgba(167, 49, 49, 0.248) 78.59%,
        rgba(130, 25, 25, 0.248) 100%
      );
      box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
      filter: blur(2px);
    }
    .purple-ball {
      position: absolute;
      width: 40px;
      height: 40px;
      left: 92.5%;
      top: 236px;
      border-radius: 50%;
      background: radial-gradient(
        64% 64% at 27.25% 26.5%,
        rgba(236, 208, 255, 0.64) 0%,
        rgba(161, 93, 207, 0.24) 59.67%,
        rgba(118, 49, 164, 0.208) 78.59%,
        rgba(86, 24, 128, 0.232) 100%
      );
      box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
      filter: blur(5px);
      backdrop-filter: blur(2px);
    }

    /* END EXTRACT TO MOBILE */
  }
`;
export default MobileBackgroundEffects;
