var fieldDemon;
var mas = new Array;

window.onload = function(){
    var Field = document.getElementById('Field');

    for (var i  = 0; i < 32; i++){
        if (i % 8 === 0){
            Field.appendChild(document.createElement('br'));
        }
        Field.appendChild(setField());
    }
    fieldDemon = document.getElementsByClassName('demonField');

    for(var i = 0; i < 32; i++){
        mas[i] = i;
    }

}

function setField(){
    var demonField = document.createElement('div');
    demonField.className = 'demonField';

    var circleImg = document.createElement('IMG');
    circleImg.src = 'img/circle.jpg';
    circleImg.className = 'circleImg';

    var demonImg = document.createElement('IMG');
    demonImg.src = 'img/demon.jpg';
    demonImg.className = 'demonImg';
    demonImg.style.width = '0%';

    var bloodImg = document.createElement('IMG');
    bloodImg.src = 'img/blood.jpg';
    bloodImg.className = 'bloodImg';
    bloodImg.style.width = '0%';

    demonImg.onclick = function(){
        bloodImg.style.width = '10%';
        demonImg.style.width = '0%';

        for(var i = 0; i < mas.length; i++){
            if(fieldDemon[mas[i]].childNodes[2].style.width !== '0%'){
                mas.splice(i,1);
            }
        }  
    }

    demonImg.onmousedown = function(){return false;}
    circleImg.onmousedown = function(){return false;}
    bloodImg.onmousedown = function(){return false;}


    demonField.appendChild(circleImg);
    demonField.appendChild(demonImg);
    demonField.appendChild(bloodImg);

    return demonField;
}

function demonDisplay(){
    //console.log("start");
    var ind = Math.floor(Math.random()*(mas.length-1));
    fieldDemon[mas[ind]].childNodes[1].style.width = '8%';
    setTimeout(function(){
        fieldDemon[mas[ind]].childNodes[1].style.width = '0%';
    },1000)
}

var timerId = setInterval(function(){

    if(mas.length === 0){
        clearTimeout(timerId);

        setTimeout(
            function () {
                if (confirm("Игра окончена! Повторим?")) {
                    location.reload();
                } else {
                    alert("Слабенький =)");
                }
            }, 500
        );

        return;
    }

    //console.log("start");
    
    setTimeout(demonDisplay(),10);
},2000);