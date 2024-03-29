# project_book-store / книжный интернет-магазин на API Google Books

**Для запуска проекта выполнить действия:**

- клонировать репозиторий на свой ПК: git clone https://github.com/Ivan-ISS/project_book-store.git;<br>
- последовательно выполнить команды в терминале: npm install ==> npm run build;<br>
- открыть index.html в браузере из папки src

---

## Цель:
***Сверстать главную страницу интернет-магазина Bookshop***

## Описание проекта
__Проект *Book store*__ - это главная страница книжного магазина с возможностью загрузки книг из Google Books API в соответствии с выбранной категорией.<br>

__Проект *Book store*__ представлен в виде приложения, которое позволяет:
- Загружать список книг из Google Books API в соответствии с выбранной категорией;
- Загружать дополнительно список книг порциями при клике на кнопку *"Load more"*;
- Отображать список книг на экране (производится автоматически по результатам получения списка книг от сервера);
- Добавлять книги в корзину при клике на кнопку *"Buy now"* и исключать их из корзины при повторном клике;
- Перелистывать изображения на слайдере с помощью точек под ним.<br>

__Интерфейс приложения__ представлен элементами:
- *"Список категорий книг"*, - при клике на категорию список книг перезагружается и отображаются книги из выбранной категории;
- кнопка *"Load more"* - при клике загружается и отображается следующая порция книг текущей выбранной категории;
- кнопка *"Buy now"* - при клике товар добавляется в корзину (повторный клик убирает товар удаляется из корзины);
- кнопки *"Точки под слайдером"* - перелистывают изображения.<br>

## Технологии:
<img src="https://img.shields.io/badge/HTML5-red?logo=html5&logoColor=white" alt="HTML5"/>&nbsp;
<img src="https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white" alt="CSS3"/>&nbsp;
<img src="https://img.shields.io/badge/-Sass-DB7093?logo=sass&logoColor=white" alt="SASS"/>&nbsp;
<img src="https://img.shields.io/badge/-JavaScript-f0db4f?logo=javaScript&logoColor=black" alt="JS"/>&nbsp;
<img src="https://img.shields.io/badge/BEM-18d0ff?logo=bem&logoColor=white" alt="BEM"/>&nbsp;

## В проекте реализованы функциональные требования:
&nbsp; :heavy_check_mark: На странице должен быть следующий набор элементов: шапка сайта, слайдер, список категорий и список книг, карточка книги<br>

&nbsp; :heavy_check_mark: Шапка:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Содержит логотип, навигацию и набор кнопок<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - При добавлении товара в корзину у иконки появляется бейджик с кол-вом товара в корзине<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Ссылки в меню пустые, кнопки авторизации, поиска и корзины неактивны<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - При прокрутке сайта шапка остается закреплённой в верхней части экрана<br>

&nbsp; :heavy_check_mark: Слайдер:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Автоматически меняет изображения каждые 5 сек<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - После последнего изображения вновь переключается на первое<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Перелистывать изображения можно также с помощью точек под слайдером<br>

&nbsp; :heavy_check_mark: список категорий и список книг:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Активная категория выделена визуально<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - По умолчанию в качестве активной выбрана первая категория в списке<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Клик на неактивную категорию делает её активной, и список книг перезагружается, чтобы отобразить книги из этой категории<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Книги из активной категории отображаются на экране<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Реализована ленивая загрузка: сначала подгружаются первые 6 книг, по клику на кнопку «Load more» — ещё 6, и т.д.<br>

&nbsp; :heavy_check_mark: Список книг подгружается из Google Books API в соответствии с выбранной категорией.<br>

&nbsp; :heavy_check_mark: Карточка книги (содержит следующую информацию):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Обложка. Если API не возвращает обложку, вместо неё добавляется картинка-плейсхолдер<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Автор. Если авторов несколько, они перечислены через запятую<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Заголовок.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Рейтинг. От 1 до 5 звёздочек и общее количество отзывов. Если нет данных рейтинга, строка не показыается<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Описание. Если текст в описании занимает больше 3-х строк, то он обрезан, а в конце добавлено многоточие<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Цена. С указанием валюты. Если нет данных о цене, то строка не показывается<br>

&nbsp; :heavy_check_mark: Под описанием каждой книги расположена кнопка «Buy now»<br>
&nbsp; :heavy_check_mark: При клике на «Buy now» товар добавляется в корзину, а кнопка меняет внешний вид<br>
&nbsp; :heavy_check_mark: При повторном нажатии на кнопку «Buy now» товар убирается из корзины<br>
&nbsp; :heavy_check_mark: Информация о книгах, добавленных в корзину, должна сохраняться в localStorage<br>

## В проекте реализованы технические требования:
&nbsp; :heavy_check_mark: Книжный магазин реализован по принципу SPA (все действия пользователя: подгрузка книг, переключение категории — происходят без перезагрузки страницы)<br>
&nbsp; :heavy_check_mark: JS-файлы в проекте разделены на ES6-модули<br>
&nbsp; :heavy_check_mark: Для создания проекта используется npm<br>

&nbsp; :heavy_check_mark: К проекту подключен Webpack:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - CSS-файлы является частью сборки<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - CSS подключается отдельным файлом<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - JS и CSS-файлы минифицируются в процессе сборки<br>

&nbsp; :heavy_check_mark: Использованы инструменты оптимизации разработки:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Методология БЭМ<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - CSS-препроцессор Sass<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Webpack Dev Server<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Линтер<br>

## В проекте реализованы требования к верстке, CSS и др.:
&nbsp; :heavy_check_mark: Приложение должно корректно отображаться на различных разрешениях<br>
&nbsp; :heavy_check_mark: Отзывчивая и адаптивная верстка (десктоп, планшет и мобильные телефоны)<br>
&nbsp; :heavy_check_mark: Соблюдение семантической верстки<br>
&nbsp; :heavy_check_mark: Использование осмысленных имен для всех переменных, классов и функций<br>
&nbsp; :heavy_check_mark: Соблюдение правил написания кода – кодстайла<br>

---

**Для запуска проекта выполнить действия:**

&nbsp; :heavy_check_mark: клонировать репозиторий на свой ПК: git clone https://github.com/Ivan-ISS/project_book-store.git;<br>
&nbsp; :heavy_check_mark: поставить пакеты: npm install;<br>
&nbsp; :heavy_check_mark: выполнить команду: npm run build;<br>
&nbsp; :heavy_check_mark: открыть index.html в браузере из папки src

**Ссылка для просмотра проекта:** *временно отсутствует*