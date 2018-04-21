var clickCard = false; // инидикатор 1-го клика
var pastCard = document.createElement('div'); // элемент первой открытой в паре карты
var pressC = true; // индикатор отработки анимации
var chekEnd = 8; // счёт открытых карт

function card(srcImg) {
    var t3d = document.createElement('div');
    t3d.className = 't3d';

    var rotate = document.createElement('div');
    rotate.className = 'rotate';

    rotate.onclick = function () {
        if (pressC) {
            clickC(rotate);
        }
    };

    var pic = document.createElement('IMG');

    pic.src = srcImg;
    pic.className = 'oncard';

    rotate.appendChild(pic);

    var bimg2 = document.createElement('div');
    bimg2.className = 'bimg2';

    var pic1 = document.createElement('IMG');
    pic1.src = 'img/shirt.jpg';

    bimg2.appendChild(pic1);

    rotate.appendChild(bimg2);
    t3d.appendChild(rotate);
    return t3d;
}

function clickC(elem) {

    var arrRot = document.getElementsByClassName('rotate');

    var indSame = findSame(elem, arrRot);

    if (pastCard === elem) return;

    if (elem.style.transform === '') {

        elem.style.transform = 'rotateY(180deg)';

        if (!clickCard) {
            pastCard = elem;
        }

        if (clickCard) {

            if (arrRot[indSame].style.transform === '') {
                pressC = false;
                setTimeout(
                    function () {
                        elem.style.transform = '';
                        pastCard.style.transform = '';
                        pastCard = document.createElement('div');
                        pressC = true;
                    }, 400
                );
            } else {

                chekEnd--;

                if (chekEnd == 0) {

                    setTimeout(
                        function () {
                            if (confirm("Игра окончена! Повторим?")) {
                                location.reload();
                            } else {
                                alert("Слабенький =)");
                            }
                        }, 500
                    );

                }

            }


        }

        clickCard = !clickCard;
    }
}

function findSame(elem, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== elem &&
            elem.childNodes[0].src === arr[i].childNodes[0].src) {
            return i;
        }
    }
}

window.onload = function () {
    var mainDiv = document.getElementById('CardTable');

    var cardsImg = new Array();
    cardsImg[0] = 'img/card0.jpg';
    cardsImg[1] = 'img/card1.jpg';
    cardsImg[2] = 'img/card2.jpg';
    cardsImg[3] = 'img/card3.jpg';
    cardsImg[4] = 'img/card4.jpg';
    cardsImg[5] = 'img/card5.jpg';
    cardsImg[6] = 'img/card6.jpg';
    cardsImg[7] = 'img/card7.jpg';

    cardsImg = cardsImg.concat(cardsImg);

    for (var i = 0; i < 16; i++) {
        if (i === 8) {
            mainDiv.appendChild(document.createElement('br'));
        }
        var imgInd = Math.floor(Math.random() * (cardsImg.length));
        mainDiv.appendChild(card(cardsImg[imgInd]));

        cardsImg.splice(imgInd, 1);
    }
};