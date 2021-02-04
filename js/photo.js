var photoGl = document.getElementById('photoGl');
var imgGl = document.getElementById('imgGl');
var imgClass = document.getElementsByClassName("clickable");

for (var i = 0; i < imgClass.length; i++) {
  imgClass[i].addEventListener('click', imageClick, false);
};
function imageClick(e) {
  imgGl.setAttribute('src', e.target.src);
  photoGl.classList.toggle("photo_active");

  window.onclick = function(event) {
    if (event.target.matches('.photo')||event.target.matches('.img-close')) {
      photoGl.classList.toggle("photo_active");
      imgGl.style.height = "";
      imgGl.style.width = "";
    }
  }
  if (imgGl.width > window.innerHeight){
    imgGl.style.height = "100%";
    imgGl.style.width = "auto";
  }
};
