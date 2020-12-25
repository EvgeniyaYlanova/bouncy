 //Слайдер 1

 var swiper = new Swiper('.swiper1', {
     slidesPerView: 1,
     spaceBetween: 30,
     loop: true,
     pagination: {
         el: '.swiper-pagination',
         clickable: true,
     },
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
 });
 //Слайдер 1 //Слайдер 1

 //Слайдер2

 var swiper = new Swiper('.swiper2', {
     direction: 'vertical',
     slidesPerView: 1,
     spaceBetween: 30,
     mousewheel: true,
     pagination: {
         el: '.swiper-pagination',
         clickable: true,
     },
 });

 // Показывать окно в sec 10

 const cards = document.querySelectorAll('.card');
 const cardInfo = document.querySelectorAll('.card__info');

 const toggleCard = (card) => {
     card.classList.toggle('active');
 }

 cards.forEach((card, i) => {
     card.addEventListener('click', () => {
         toggleCard(cardInfo[i]);
     });
 });


 // бургер меню
$(document).ready(function(){
 $('.burger-on').click(function () {
     $(".menu").fadeToggle(100);
     $('.menu').show(); // Показывает содержимое диалога.
 });
})
