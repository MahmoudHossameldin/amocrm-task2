import React from 'react';
import styled from 'styled-components';
import Contacts from './Contacts';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Wrapper>
      <div className='info'>
        <div>
          <h3>О компании</h3>
          <ul>
            <li>
              <Link to='#'>Партнёрская программа</Link>
            </li>
            <li>
              <Link to='#'>Вакансии</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Меню</h3>
          <ul>
            <li>
              <Link to='#'>Расчёт стоимости</Link>
            </li>
            <li>
              <Link to='#'>Кейсы</Link>
            </li>
            <li>
              <Link to='#'>Услуги</Link>
            </li>
            <li>
              <Link to='#'>Благодарственные письма</Link>
            </li>
            <li>
              <Link to='#'>Виджеты</Link>
            </li>
            <li>
              <Link to='#'>Сертификаты</Link>
            </li>
            <li>
              <Link to='#'>Интеграции</Link>
            </li>
            <li>
              <Link to='#'>Блог на Youtube</Link>
            </li>
            <li>
              <Link to='#'>Наши клиенты</Link>
            </li>
            <li>
              <Link to='#'>Вопрос / Ответ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Контакты</h3>
          <div>
            <Contacts />
            <p>Москва, Путевой проезд 3с1, к 902</p>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>©WELBEX 2022. Все права защищены.</p>
        <p>
          <Link to='/'>Политика конфиденциальности</Link>
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin: 4.5rem auto 6rem;
  padding: 0 1.5rem;

  .nav-contacts {
    display: block;
  }
  .copyright {
    font-family: 'montserrat', sans-serif;
    font-size: 1.2rem;
    margin-top: 5rem;

    a {
      text-decoration: underline;
    }
  }
  .info {
    h3 {
      color: #656566;
      margin-bottom: 2rem;
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.45rem;
    }
    li,
    > div:last-child > div p {
      font-size: 1.4rem;
      line-height: 1.7rem;
      height: unset;
    }
    > div:last-child > div > p {
      margin-top: 1rem;
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
    li:not(:last-child) {
      margin-bottom: 1rem;
    }
    > div:nth-child(2) ul {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 0 4rem;
    }
    > div:last-child > div > p {
      margin-top: 1rem;
    }
    ul {
      margin-bottom: 3rem;
    }
    .nav-contacts p {
      margin-bottom: 0.8rem;
    }
    button:nth-child(2) {
      margin: 0 1rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .info {
      > div:nth-child(2) ul li:nth-child(2) {
        grid-row: 2;
        grid-column: 2;
      }

      > div:nth-child(2) ul li:nth-child(4) {
        grid-row: 1;
        grid-column: 2;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    max-height: 31.5rem;
    margin: 5.5rem 0 2rem;

    .copyright {
      text-align: right;
      margin-top: 3.3rem;
    }
    .info {
      display: flex;
      justify-content: space-between;

      h3 {
        font-size: 1.4rem;
        line-height: 1.7rem;
        letter-spacing: 0.05em;
      }
      > div:last-child {
        text-align: right;
      }
      > div:nth-child(2) ul {
        gap: 0 5rem;
      }
      ul {
        margin-bottom: 0;
      }
      li,
      > div:last-child > div p {
        font-size: 1.6rem;
        line-height: 1.9rem;
      }
      > div:last-child > div > p {
        margin-top: 2rem;
      }
      .nav-contacts {
        flex-direction: column;
      }

      .nav-contacts p {
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }
  }
`;

export default Footer;
