var i = 0;
var a = 0;
var txt = "Hi, I am Diekola Ayomide."
var txt2 = "I am a Full-stack Web Developer. A tech enthusiast !!!"
var speed = 100;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
   }

  if (i == txt.length) {
   	if (a < txt2.length) {
   		document.getElementById("intro2").innerHTML += txt2.charAt(a);
	    a++;
	    setTimeout(typeWriter, speed);
   		}
	}
}