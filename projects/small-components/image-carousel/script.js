let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n){
    showSlides(slideIndex += n);
}

function currSlide(n){
    console.log("hop",n)

    showSlides(slideIndex = n);
}


function showSlides(n){

    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
    if(n > slides.length){
        slideIndex = 1;
        console.log("hop1");
    }
    if(n < 1){
        slideIndex = slides.length;
        console.log("hop2");
    }

    slides.forEach( (slide) => {
        slide.style.display = "none";
    });

    dots.forEach( (dot) => {
        dot.className = dot.className.replace(" active","");
    });

    console.log(slideIndex-1);

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    

}

showSlides();

function showSlidess() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlidess, 5000); // Change image every 2 seconds
}

showSlidess();

