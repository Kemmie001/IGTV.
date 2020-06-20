var element	= 	$('.navbar');
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $(element).removeClass('.navbar-light');
        $(element).addClass('navbar-transparant');	
        $(element).addClass('fadeInDown');
    } else {
        $(element).addClass('navbar-light');
        $(element).removeClass('navbar-transparant');	
        $(element).removeClass('.fadeInDown');			
    }
});
var slideIndex = 1;

var myTimer;

window.addEventListener("load", function(){
    showSlides(slideIndex);
    myTimer = setInterval(function(){
        plusSlides(1)
    }, 2000);
})
function plusSlides(n){
    clearInterval(myTimer);
    if(n < 0){
        showSlides(slideIndex -= 1);
    }else{
        showSlides(slideIndex += 1);
}
if (n === -1){
    myTimer = setInterval(function() {
        plusSlides(n + 2)
    }, 2000);
}else{
    myTimer = setInterval(function() {
        plusSlides(n + 1)
    }, 2000);
}
}
function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function() {plusSlides(n + 1)}, 2000);
    showSlides(slideIndex = n);
}
function showSlides (n){
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("do");
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className.replace(" activ", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activ";
}
$(function(){
    $(window).on("load-resize", function(){
        $(".fill-screen").css("height", window.innerHeight);
    });
});
