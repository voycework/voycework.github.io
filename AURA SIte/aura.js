// js for toggle Menu

let counter = 0;

document.getElementById("bars").addEventListener( "click", function(){

let navlinks = document.getElementById("nav-link");
let countDisp = document.getElementById("counter");



    if (disp() % 2 == 0){
        navlinks.style.display="block";

    }else{
        navlinks.style.display="none";
    }
    counter.innerHTML = "disp()"; 
})

function disp(){
    counter = counter + 1;
    return counter;
}

var swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var appendNumber = 4;
    var prependNumber = 1;
    document
      .querySelector('.prepend-2-slides')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper.prependSlide([
          '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
          '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
      });
    document
      .querySelector('.prepend-slide')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper.prependSlide(
          '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
      });
    document
      .querySelector('.append-slide')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper.appendSlide(
          '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
      });
    document
      .querySelector('.append-2-slides')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper.appendSlide([
          '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
          '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
      });