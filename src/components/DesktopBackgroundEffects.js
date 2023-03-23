import React from 'react';
import styled from 'styled-components';

function DesktopBackgroundEffects() {
  return (
    <Wrapper>
      <div className='bg-effect red-light'></div>
      <div className='bg-effect red-ball-lg'></div>
      <div className='bg-effect red-ball-sm'></div>
      <div className='bg-effect purple-light'></div>
      <div className='bg-effect purple-ball'></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (min-width: 1200px) {
    /* EXTRACT TO MOBILE */
    .bg-effect {
      z-index: -1;
    }
    .purple-light {
      position: absolute;
      width: 259px;
      height: 259px;
      left: 80.625%;
      top: 162px;
      background: #833ab4;
      opacity: 0.5;
      filter: blur(196px);
    }
    .red-light {
      position: absolute;
      width: 211px;
      height: 210px;
      left: -17.2%;
      top: 296px;
      background: #961a1a;
      opacity: 0.5;
      filter: blur(196px);
    }
    .red-ball-lg {
      position: absolute;
      width: 43px;
      height: 43px;
      left: 9%;
      top: 457px;
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
      backdrop-filter: blur(2px);
    }
    .purple-ball {
      position: absolute;
      width: 40px;
      height: 40px;
      left: 92.5%;
      top: 291px;
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

    /* DESKTOP */
    .red-light {
      width: 311px;
      height: 311px;
      left: -7%;
      top: 251px;
    }
    .red-ball-lg {
      width: 83px;
      height: 83px;
      left: 36%;
      top: 83px;
    }
    .red-ball-sm {
      position: absolute;
      width: 28px;
      height: 28px;
      left: 59.1%;
      top: 547px;
      border-radius: 50%;
      background: radial-gradient(
        64% 64% at 27.25% 26.5%,
        rgba(255, 208, 208, 0.48) 0%,
        rgba(212, 93, 93, 0.248) 59.67%,
        rgba(167, 49, 49, 0.264) 78.59%,
        rgba(130, 25, 25, 0.232) 100%
      );
      box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
      filter: blur(2.5px);
      backdrop-filter: blur(2px);
    }
    .purple-light {
      left: 41.8%;
      top: -154px;
    }
    .purple-ball {
      width: 60px;
      height: 60px;
      left: 60.27%;
      top: -2px;
    }
  }
`;
export default DesktopBackgroundEffects;
