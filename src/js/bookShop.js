// Переменные используемые в модуле Книжный магазин и которые необходимо подать на вход:
// apiKey - ваш Google Books API-ключ;
// startIndex - позиция в списке, с которой будет начинаться загрузка;
// maxResults - максимальное количество загружаемых книг;
// langRestrict - выбор языка для выдачи книг;
// btnCategory - массив с основными кнопками категорий книг ===> const btnCategory = document.querySelectorAll('.showcase__btn-category');
// btnLoadMore - элемент кнопки Load More ===> const btnLoadMore = document.querySelector('.button-load__more-btn');
// displayPlaceBooks - элемент куда будем вставлять карточки с книгами ===> const displayPlaceBooks = document.querySelector('.showcase__set-books');
// shopBagCount - элемент с отображением кол-ва товаров в корзине ===> const shopBagCount = document.querySelector('.header__shop-bag-count');
// btnBuyNameClass - наименование класса кнопок "BUY NOW" для формирования селектора ===> const btnBuyNameClass = '.showcase__buy-btn';


import { BookCategories } from './bookCategories';                          // Подключаем модуль с функциональностью формирования запросов по результатам выбора категории книг или кнопки 'Load More';
import { Cards } from './cards';                                            // Подключаем модуль с функциональностью формирования карточек книг и отображением их на экран;
import { ShopBag } from './shopBag';                                        // Подключаем модуль с функциональностью корзины;


export class BookShop {
    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, shopBagCount, btnBuyNameClass, classActive, textBuyNow, textInTheCart) {
        this.card = new Cards(displayPlaceBooks, this);
        this.bookCategory = new BookCategories(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, classActive, this);
        this.shopBag = new ShopBag(shopBagCount, btnBuyNameClass, classActive, textBuyNow, textInTheCart);

        this.requestEvent = new Event('requestCompleted');                  // Создание кастомного события по завершению каждого запроса на сервер
        this.createContentEvent = new Event('createContentCompleted');      // Создание кастомного события по завершению формирования каждой карточки книг
    }

    run() {
        this.bookCategory.defaultLoad();                                    // Запуск первоначальной загрузки книг с сервера
        this.bookCategory.handlerBtnCategory();                             // Запуск обработчика событий клика на элементы списка категорий книг
        this.bookCategory.handlerBtnLoadMore();                             // Запуск обработчика событий клика на кнопку Load More

        document.addEventListener('requestCompleted', () => {
            this.card.displayCard();                                        // Запуск функции формирования карточек книг по завершению запроса
            this.shopBag.handlerBtnBuy();                                   // Запуск обработчика событий клика на кнопки 'BUY NOW' и 'IN THE CART'
        });

        document.addEventListener('createContentCompleted', () => {
            this.shopBag.checkingBooksInShopBag();                          // Запуск функции проверки наличия книги в корзине
        });
    }
}