

let element = document.getElementById('sidebar');
function ToggleMobileNavigation(){
    element.classList.toggle('active');
}



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function show1(){
  let element = document.getElementById('extra-nav-items');
  let icon = document.getElementById('user-chev1');
  if(icon.classList.contains('fa-chevron-down')){
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
  }
  else{
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');

  }
 
  element.classList.toggle('active');
}
function show2(){
  let element = document.getElementById('extra-nav-items2');
  let icon = document.getElementById('user-chev2');
  if(icon.classList.contains('fa-chevron-down')){
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
  }
  else{
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');

  }
 
  element.classList.toggle('active');
}


