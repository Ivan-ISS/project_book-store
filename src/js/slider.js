// Переменные используемые слайдером:
// btnCircle - массив с основными кнопками слайдера (круглыми) ===> const btnCircle = document.querySelectorAll('.selection__circle-btn');
// cssBtnCircle - наименование селектора (класса), которому заданы стили "нажатой" кнопки;
// picture - элемент img (содержащий scr изображения) ===> const picture = document.querySelector('.banner__image-slide');
// entities - массив объектов содержащих данные для вставки на страницу (в данном случае относительные адреса изображений);

let currentIndex = 1;

//----------------------------------------------------------------------------------------------------
//-----------------------------ФУНКЦИЯ ВСТАВКИ ИЗОБРАЖЕНИЯ В ЭЛЕМЕНТ----------------------------------
const setEntity = (picture, entities, index) => {
    picture.src = `${entities[index].img}`;
};

//----------------------------------------------------------------------------------------------------
//------------ФУНКЦИЯ ДЛЯ УСТАНОВКИ СТИЛЯ "НАЖАТОЙ" КНОПКИ ДЛЯ СТАРТОВОГО ИЗОБРАЖЕНИЯ-----------------

function startPosition(btnCircle, cssBtnCircle, picture, entities) {
    for (let i = 0; i < entities.length; i = i + 1) {
        if (entities[i].img === picture.getAttribute('src')) {
            btnCircle[i].classList.add(cssBtnCircle);
        }
    }
}

//----------------------------------------------------------------------------------------------------
//-------------ФУНКЦИЯ ОБРАБОТКИ НАЖАТИЙ НА КРУГЛЫЕ КНОПКИ (ОСНОВНОЙ ФУНКЦИОНАЛ СЛАЙДЕРА)-------------

function circleSwitch(btnCircle, cssBtnCircle, picture, entities) {

    startPosition(btnCircle, cssBtnCircle, picture, entities);      // Вызов функции для определения стартового изображения на странице и задания стиля "нажатой" (соответствующей) кнопки
    
    btnCircle.forEach((element, num) => {
        element.addEventListener('click', () => {
            
            setEntity(picture, entities, num);                      // Вызов функции вставки очередного изображения
            
            for (let i = 0; i < btnCircle.length; i = i + 1) {
                btnCircle[i].classList.remove(cssBtnCircle);
            }
            btnCircle[num].classList.add(cssBtnCircle);

            currentIndex = num + 1;
            if (currentIndex === btnCircle.length) {
                currentIndex = 0;
            }
        });
    });
}

//----------------------------------------------------------------------------------------------------
//-----------ФУНКЦИЯ АВТОМАТИЧЕСКОЙ СМЕНЫ ИЗОБРАЖЕНИЙ (ДОПОЛНИТЕЛЬНЫЙ ФУНКЦИОНАЛ СЛАЙДЕРА)------------

function automaticSwitch(btnCircle, cssBtnCircle, picture, entities) {

    setInterval(() => {
        
        setEntity(picture, entities, currentIndex);                 // Вызов функции вставки очередного изображения

        for (let i = 0; i < btnCircle.length; i = i + 1) {
            btnCircle[i].classList.remove(cssBtnCircle);
        }
        btnCircle[currentIndex].classList.add(cssBtnCircle);

        currentIndex++;
        if (currentIndex === btnCircle.length) {
            currentIndex = 0;
        }
    }, 5000);
}

//----------------------------------------------------------------------------------------------------

export {circleSwitch, automaticSwitch};