import JSslider from './jsslider.js'

const init = () => {
    const imagesList = document.querySelectorAll('.gallery__item');
    imagesList.forEach( img => {
        img.dataset.sliderGroupName = Math.random() > 0.5 ? 'nice' : 'good';
    }); 

 

let JSSlider = new JSslider();
}

document.addEventListener('DOMContentLoaded', init);


