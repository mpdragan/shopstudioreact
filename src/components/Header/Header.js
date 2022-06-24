import React from 'react'
import './Header.css';

export function Header() {
  return (
    <div className='header'>
      <div className='container'>

        <div className='header__top'>
         <div className='logo'> 
            <a href="#">Інтернет-магазин студії Максима Драгана</a>
         </div>
         <div className='nav-top'>
          <ul>
            <li><a href="#">Доставлення</a></li>
            <li><a href="#">Гарантія</a></li>
            <li><a href="#">Сервіс</a></li>
          </ul>
         </div>
         <div className='cart'><a href="#">Кошик</a></div>
        </div>

        <div className='header__bottom'>
          <div className='catalog'>
            <a href="#"> Повний каталог</a>
          </div>
          <div className='nav-bottom'>
            <ul>
              <li><a href="#">- Веб-розробка</a></li>
              <li><a href="#">-- Веб-дизайн</a></li>
              <li><a href="#">-- Верстка</a></li>
              <li><a href="#">-- Графічний дизайн</a></li>
              <li><a href="#">-- Фронтенд</a></li>
              <li><a href="#">-- Бекенд</a></li>
            </ul>
          </div>
        </div>

        <div className='title'>
          <h1>Інтернет-магазин студії <br></br> Максима Драгана</h1>
        </div>
        <div className='subtitle'>
          <p>Найкращі товари власного виробництва для нас</p>
        </div>

      </div>
    </div>
  )
}

export default Header;

