var slideIndex = 1;
var pt_text = document.getElementById('us-pt'),
	fr_text = document.getElementById('us-fr'),
	pt_btn = document.getElementById('pt-click'),
	fr_btn = document.getElementById('fr-click');
var selected_language_class = "w3-opacity-max";

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function switchToPt() {
	pt_text.style.display = 'block';
	fr_text.style.display = 'none';

	pt_btn.classList.remove(selected_language_class);
	fr_btn.classList.add(selected_language_class);
}

function switchToFr() {
	pt_text.style.display = 'none';
	fr_text.style.display = 'block';

	pt_btn.classList.add(selected_language_class);
	fr_btn.classList.remove(selected_language_class);
}

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

function scrollToHome(){
  elmnt = document.getElementById("home");
  scrollTo(document.documentElement, elmnt.offsetTop, 200);
}

function scrollToUs(){
  elmnt = document.getElementById("us");
  scrollTo(document.documentElement, elmnt.offsetTop, 200);
}

function scrollToWedding(){
  elmnt = document.getElementById("wedding");
  scrollTo(document.documentElement, elmnt.offsetTop, 200);
}

function scrollToList(){
  elmnt = document.getElementById("list");
  scrollTo(document.documentElement, elmnt.offsetTop, 200);
}

function scrollToTourism(){
  elmnt = document.getElementById("tourism");
  scrollTo(document.documentElement, elmnt.offsetTop, 200);
}

function scrollToRsvp(){
  elmnt = document.getElementById("rsvp");
  scrollTo(document.documentElement, elmnt.offsetTop, 200);
}