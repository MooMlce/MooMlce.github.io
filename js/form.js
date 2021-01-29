function applicationOpen(){
  document.getElementById("applicationClose").classList.toggle("application__active");

  window.onclick = function(event) {
    if (event.target.matches('.close-form')||event.target.matches('.application_wrap')) {
    document.getElementById("applicationClose").classList.toggle("application__active");
    }
  }
}
