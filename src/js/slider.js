const setEntity = (index, picture, entities) => {
    picture.src = `${entities[index].img}`;
};

/* let currentIndex = 0; */

//----------------------------------------------------------------------------------------------------
//----------------------------------SELECTING-THE-FIRST-POSITION--------------------------------------

function startPosition(btnCircle, cssBtnCircle, picture, entities) {
    for (let i = 0; i < entities.length; i = i + 1) {
        if (entities[i].img === picture.getAttribute('src')) {
            //btnList[i].classList.add(cssBtnList);
            btnCircle[i].classList.add(cssBtnCircle);
        }
    }
}

//----------------------------------------------------------------------------------------------------
//-----------------------------------------CIRCLE-BUTTONS---------------------------------------------

function circleSwitch(btnCircle, cssBtnCircle, picture, entities) {
    startPosition(btnCircle, cssBtnCircle, picture, entities);
    btnCircle.forEach((element, num) => {
        element.addEventListener('click', () => {
            setEntity(num, picture, entities);
            for (let i = 0; i < btnCircle.length; i = i + 1) {
                btnCircle[i].classList.remove(cssBtnCircle);
                /* btnList[i].classList.remove(cssBtnList); */
            }
            btnCircle[num].classList.add(cssBtnCircle);
            /* btnList[num].classList.add(cssBtnList); */
            /* currentIndex = num; */
        });
    });
}

//----------------------------------------------------------------------------------------------------

export {circleSwitch};