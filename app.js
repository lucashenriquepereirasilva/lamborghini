const animContainer = document.querySelector('.anim-container');

const carousels = [...document.querySelectorAll('.carousel')];
const indicators = [...document.querySelectorAll('.indicators span')];

let carousel_index = 0;

setTimeout(() => {
    animContainer.remove();
    carousels[0].classList.add('active');
    setIntervalForSlider();
}, 3500);

const setIntervalForSlider = () => {
    setInterval(() => {
        
        indicators[carousel_index].classList.remove('active');
        carousels[carousel_index].classList.remove('active');

        if(carousel_index == carousels.length - 1){
            carousel_index = 0
        } else{
            carousel_index++;
        }

        indicators[carousel_index].classList.add('active');
        carousels[carousel_index].classList.add('active');

    }, 3000);
}