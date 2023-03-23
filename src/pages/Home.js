import React from 'react';
import styled from 'styled-components';
import MobileFeatures from '../components/MobileFeatures';
import { Link } from 'react-router-dom';
import DesktopFeatures from '../components/DesktopFeatures';
import MobileBackgroundEffects from '../components/MobileBackgroundEffects';
import noise from '../assets/noise.svg';

function Home() {
  return (
    <Wrapper>
      <div className='mobile-bg-effects'>
        <MobileBackgroundEffects />
      </div>
      <div className='container'>
        <div className='noise'></div>
        <section>
          <div className='left'>
            <div>
              Зарабатывайте
              <br />
              больше
            </div>
            <div>с WELBEX</div>
            <div>
              Развиваем и контролируем
              <br />
              продажи за вас
            </div>
          </div>
          <div className='right grid-container'>
            <div className='span-2 together'>
              Вместе с<span> бесплатной</span>
              <br />
              <span>консультацией </span>
              мы дарим:
            </div>
            <MobileFeatures />
            <DesktopFeatures />
            <div className='span-2'>
              <Link to='#'>
                <button className='consultation-btn'>
                  Получить консультацию
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;

  .mobile-bg-effects {
    position: relative;
  }
  .noise {
    background-image: url(${noise});
    background-size: cover;
    background-repeat: no-repeat;
    mix-blend-mode: overlay;
    position: absolute;
    height: 437px;
    width: 100%;
  }
  section {
    padding: 4rem 1.5rem 6rem;
  }
  .left {
    margin-bottom: 4.5rem;
    > div:first-child {
      font-size: 3.6rem;
      line-height: 4.35rem;
    }
    > div:nth-child(2) {
      background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%),
        #e4e5ea;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      font-weight: 900;
      font-size: 3.6rem;
      margin-bottom: 1.5rem;
    }
    > div:last-child {
      font-family: 'montserrat', sans-serif;
      font-size: 1.8rem;
      line-height: 2.2rem;
    }
  }
  .together {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.2rem;
    margin-bottom: 2rem;
  }
  .together span {
    font-weight: 700;

    background: linear-gradient(90deg, #fcb045 36.99%, #fd1d1d 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  .right > *:not(.together):not(.features) {
    display: none;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 9.4rem;

    .mobile-bg-effects {
      display: none;
    }

    .noise {
      display: none;
    }
    section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 7rem;
      align-items: flex-start;
      padding: 0;
    }

    .left,
    .right {
      width: 36.2rem;

      > *:not(.together):not(.features) {
        display: block;
      }
    }
    .left {
      margin-bottom: 0;
      > div:first-child {
        font-size: 4.8rem;
        line-height: 5.8rem;
      }
      > div:nth-child(2) {
        font-size: 4.8rem;
        margin-bottom: 3rem;
      }
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto auto auto auto;
      text-align: right;
      justify-items: end;
    }
    .span-2 {
      grid-column: 1 / span 2;
    }
    .together {
      margin-bottom: 4rem;
      margin-top: 1.5rem;
    }
    .together span {
      text-transform: uppercase;
      letter-spacing: 0.05rem;
    }
    .grid-cell-title {
      margin-bottom: 0.6rem;
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 2.2rem;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
    }
    .grid-cell-content {
      font-family: Montserrat;
      font-size: 1.6rem;
      line-height: 2rem;
    }
    .grid-container > div:not(.span2) {
      margin-bottom: 3rem;
    }
    .consultation-btn {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 6.1rem;
      text-align: center;
      width: 26.2rem;
      height: 6.1rem;
      background-color: #4077f3;
      color: #e4e5ea;
      margin-top: 3rem;
    }
    .features {
      display: none;
    }
  }
`;

export default Home;
