//Welcome Screen removal

const welcome = document.querySelector(".welcome");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
      welcome.classList.add("invisible");
      welcome.classList.add("fading");
    }, 2500);
  })
    


// Activates Tooltiips on title icons 
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});



// Bootstrap form validation
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



 // Keeps the year in the footer up to date
var today = new Date();
var year = today.getFullYear();

var copyright = document.getElementById("footer");
copyright.innerHTML = "<p> &copy;" + year + " Angelina Opoku. All rights reserved.</p>"; 


