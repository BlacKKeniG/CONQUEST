'use strict'

function sliderManadger(sliderSelector) {
    
    function run() {
        const navElementPreventSlide = document.querySelector(sliderSelector + " .slider__nav-prev");
        const navElementNexSlide = document.querySelector(sliderSelector + " .slider__nav-next");
        const currentSlideDisplay = document.querySelector(sliderSelector + " .slider__current-slide-number")
        const sliderTape = document.querySelector(sliderSelector + " .slider__tape");
        const slideList = document.querySelectorAll(sliderSelector + " .slider__slide");
        const display = document.querySelector(sliderSelector + " .slider__display");
        const slideWidth = Number(window.getComputedStyle(display).width.replace(/[^0-9]/g, ''));
        const numberOfSlides = slideList.length;
        const sliderTapeWhidth = numberOfSlides * slideWidth;

        let offset = 0;
        let numberOfcurrentSlide = 1;
        
        sliderTape.style.width = sliderTapeWhidth + 'px';
        
        alignWidthSlides(slideList, slideWidth);
        
        navElementPreventSlide.addEventListener('click', () => {
            console.log('cur' + numberOfcurrentSlide);
            if(--numberOfcurrentSlide < 1){
                numberOfcurrentSlide = numberOfSlides;
                offset = -(sliderTapeWhidth - slideWidth);
            } else {
                offset += slideWidth;
            }
            sliderTape.style.transform = `translateX(${offset}px)`;
            currentSlideDisplay.textContent = getZero(numberOfcurrentSlide);
        });
    
        navElementNexSlide.addEventListener('click', () => {
                    
            if(++numberOfcurrentSlide > numberOfSlides){
                numberOfcurrentSlide = 1;
                offset = 0;
            } else {
                offset -= slideWidth;
            }
            sliderTape.style.transform = `translateX(${offset}px)`;
    
            currentSlideDisplay.textContent = getZero(numberOfcurrentSlide);
        });
        
        function alignWidthSlides(slides, width) {
            slides.forEach(
                slide => slide.style.width = width + "px" 
            );
        }

        function getZero(num) {
            return  (num < 10) ? `0${num}` : `${num}`;           
        }
        
    } run();
}

sliderManadger("#banner-slider");