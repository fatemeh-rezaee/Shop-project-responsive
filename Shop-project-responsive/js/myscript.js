// let slideIndex = 1;
// function setSlide(input , index){
// slideIndex = index;
// let item = document.querySelector(`#${input}`)
// let slides = [...document.querySelector('.slides').children];
// slides.forEach((element)=>{
//     element.classList.remove('active');
// })
// item.classList.add('active');
// }

// setInterval(()=>{
//     slideIndex +=1;
//     if(slideIndex==4){
//         slideIndex=1;
//     }
// setSlide(`slide${slideIndex}`,slideIndex)
// }, 3000)
let hours = 19,
	minutes = 15,
	seconds = 55;
setInterval(function () {
	seconds -= 1;
	if (seconds <= 0) {
		seconds = 60
		minutes -= 1;
	}
	if (minutes <= 0) {
		minutes = 60;
		hours -= 1;
	}
	document.getElementById('seconds').innerHTML = seconds;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('hours').innerHTML = hours;
}, 1000);

//functions
function classSwitcher() {
	slides.forEach((item) => item.classList.remove("active"));
	points.forEach((button) => button.classList.remove("active"));
	slides[active].classList.add("active");
	points[active].classList.add("active");
}

let goNext = () => {
	active = active == slides.length - 1 ? 0 : active + 1;
	classSwitcher();
};
let goPrev = () => {
	active = active == 0 ? slides.length - 1 : active - 1;
	classSwitcher();
};
//variables
let active = 0;
let timer = 3000;

// let slider = document.querySelector(".slider")
let slides = document.querySelectorAll(".item");
let points = document.querySelectorAll(".buttons > i");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

// setInterval
setInterval(goNext, timer);

// point event
points.forEach((button, index) => {
	button.addEventListener("click", (e) => {
		active = index;
		classSwitcher();
	});
});
// next event
next.addEventListener("click", (e) => goNext());

// prev event
prev.addEventListener("click", (e) => goPrev());




// $(document).ready(function(){
// 	$(".owl-carousel").owlCarousel(
// 		{
// 			autoplay:true,
// 			items:4,
// 			loop:true
// 		}
// 	);
//   });

  $('.owl-carousel').owlCarousel({
	autoplay:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})