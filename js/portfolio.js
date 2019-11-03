

// Activates Tooltiips on welcome page icons 
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


// Keeps the year in the footer up to date
var today = new Date();
var year = today.getFullYear();

var el = document.getElementById("footer");
el.innerHTML = "<p> &copy;" + year + " Angelina Opoku. All rights reserved.</p>"; 