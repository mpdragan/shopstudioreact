import React from 'react'
import './Catalog.css';

export function Catalog() {
  return (
    <div className="container">
     <div className="section-main">
      <div className="shop__content-catalog">
          <div class="shop__content-catalog_title">
              Каталог товарів
          </div>
          <div class="shop__content-catalog_ul">
              <ul>
                  <li>
                      <a href="">1. Веб-розробка:</a>
                      <ul>
                          <li>
                              <a href=""> - Веб-дизайн:</a>
                              <ul>
                                  <li><a href=""> -- PSD та Fig шаблони</a></li>
                              </ul>
                          </li>
                          <li>
                              <a href=""> - Верстка:</a>
                              <ul>
                                  <li><a href=""> -- Html шаблони</a></li>
                              </ul>
                          </li>
                          <li>
                              <a href=""> - Графічний дизайн</a>
                              <ul>
                                  <li><a href=""> -- Логотипи</a></li>
                                  <li><a href=""> -- Іконки</a></li>
                                  <li><a href=""> -- Ілюстрації</a></li>
                                  <li><a href=""> -- Анімація</a></li>
                              </ul>
                          </li>
                          <li><a href=""> - Фронтенд. Бекенд</a></li>
                      </ul>
                  </li>
                  <li><a href="">2. Програмування. Програми</a></li>
                  <li><a href="">3. Штучний інтеллект</a></li>
                  <li><a href="">4. Електроніка та робототехніка</a></li>
                  <li><a href="">5. 3D моделювання</a></li>
                  <li><a href="">6. Картини</a></li>
                  <li><a href="">7. Проза. Вірші</a></li>
                  <li><a href="">8. Пісні. Музика</a></li>
                  <li><a href="">9. Будівництво</a></li>
                  <li><a href="">10. Кулінарія</a></li>
                  <li><a href="">11. Пошив одягу та взуття</a></li>
                  <li><a href="">12. Сільськогосподарські товари</a></li>
                  <li><a href="">13. Вело-, мото-, авто-</a></li>
                  <li><a href="">14. Скульптура</a></li>
                  <li><a href="">15. Плетіння із лози</a></li>
                  <li><a href="">16. Гончарство</a></li>
                  <li><a href="">17. Зварювання. Вироби із металу</a></li>
                  <li><a href="">18. Охота та рибальство</a></li>
                  <li><a href="">19. Фотографія</a></li>
                  <li><a href="">20. Анімація та кіно</a></li>
                  <li><a href="">21. Курси та відеокурси</a></li>
                  <li><a href="">22. Підручники та книги</a></li>
              </ul>
          </div>
      </div>
      <div className="section-main__right">
        Нові надходження
        Популярні товари
      </div>
     </div>
    </div>
  )
}

export default Catalog;
