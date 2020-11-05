// $(document).ready(function() {
// 	var work = $("#work");
// 	var slides = work.children();

// 	var next = 1;

// 	setInterval(function(){
// 		if (next >= 8) {
// 			next = 0;
// 		}
// 		else {
// 			for (var i = 0; i < slides.length; i++) {
// 				slides[next].scrollIntoView();
// 				slides[next].style.marginTop = "-30px";
// 				if (next > 0) {
// 					slides[next - 1].style.marginTop = "0px";
// 				}
// 			}
// 			next++
// 		}
// 	}, 3000) 

// })


// Easing function used for `translateX` animation
// From: https://gist.github.com/gre/1650294
// function easeOutQuad (t) {
//   return t *_ (2 - t)
// }

// // Returns a random number (integer) between __`min`__ and __`max`__
// function random (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min_
// }

// // Returns a random number as well, but it could be negative also
// function randomPositiveOrNegative (min, max) {
//   return random(min, max) * (Math.random() > 0.5 ? 1 : -1)
// }

// // Set CSS `tranform` property for an element
// function setTransform (el, transform) {
//   el.style.transform = transform
//   el.style.WebkitTransform = transform
// }

// var work = ""
// var position = ""

// window.addEventListener('scroll', function() {
// 	work = document.querySelector('#work');
// 	position = work.getBoundingClientRect();

	// checking whether fully visible
	

	// checking for partial visibility
	// if(position.top < window.innerHeight && position.bottom >= 0) {
	// 	alert('Element is partially visible in screen');
	// }
// });

// function slide(){
// 	if(position.top >= 0 && position.bottom <= window.innerHeight || position.top < window.innerHeight && position.bottom >= 0) {
// 		var work = $("#work");
// 		var slides = work.children();

// 		var next = 1;


// 		if (next >= 8) {
// 			next = 0;
// 		}
// 		else {
// 			for (var i = 0; i < slides.length; i++) {
// 				slides[next].scrollLeft = slides[next].offsetLeft;
// 				if (next > 0) {
					
// 				}
// 			}
// 			next++
// 		}
// 	}
// }

// setInterval(slide, 1000)