const images = document.querySelectorAll('.slideshow img');
let currentImage = 0;

setInterval(() => {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}, 3000);

function mybar(){
	var x = document.getElementById("mybar");
	if (x.style.display === "block"){
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
function myprofile(){
	var x = document.getElementById("myprofile");
	if (x.style.display === "block"){
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
function mycart(){
	var x = document.getElementById("mycart");
	if (x.style.display === "block"){
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
