let container = document.querySelector(".slider-container"),
    right = document.querySelector(".right-side"),
    left = document.querySelector(".left-side"),
    btnUp = document.querySelector(".up-button"),
    btnDown = document.querySelector(".down-button"),
    Rasmlar = right.querySelectorAll('div').length;
let x = 0;

left.style.top = `-${(Rasmlar -1) * 100}vh`;

btnUp.addEventListener("click", () => changeSlide('up'));
btnDown.addEventListener("click", () => changeSlide('down'));

const changeSlide = (UPorDOWN) => {
    let sliderHeight = container.clientHeight;

    if(UPorDOWN === 'up'){
        x++;
        if(x > (Rasmlar -1)){
            x = 0;
        }
    }
    else if(UPorDOWN === 'down'){
        x--;
        if(x < 0){
            x = (Rasmlar -1);
        }
    }
    right.style.transform = `translateY(-${x * sliderHeight}px)`;
    left.style.transform = `translateY(${x * sliderHeight}px)`;

}