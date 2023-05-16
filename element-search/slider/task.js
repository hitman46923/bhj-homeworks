let sliders = document.querySelectorAll('.slider__item');
let arrowPrev = document.querySelector('.slider__arrow_prev');
let arrowNext = document.querySelector('.slider__arrow_next');
let counter = 0;


let sliderShow = (index) => {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('slider__item_active');



    }

    sliders[index].classList.add('slider__item_active');




}


let prevSlide = () => {

    counter++;
    if (counter >= sliders.length) {
        counter = 0;
    }


    sliderShow(counter);


}




let nextSlide = () => {

    counter--;
    if (counter < 0) {
        counter = sliders.length - 1;
    }


    sliderShow(counter);


}

arrowNext.addEventListener('click', nextSlide);
arrowPrev.addEventListener('click', prevSlide);

