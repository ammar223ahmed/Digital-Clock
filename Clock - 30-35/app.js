var Hours = document.getElementById("Hours");
var Minutes = document.getElementById("Minutes");
var Seconds = document.getElementById("Seconds");

setInterval(function(){
    var currentDate =  new Date();
    var currentHours =  currentDate.getHours();
   
   Hours.innerText = currentDate.getHours();
   Minutes.innerText = currentDate.getMinutes();
   Seconds.innerText = currentDate.getSeconds();
}, 1000);

var date = document.getElementById("date");
var currentDate = new Date();
date.innerText = currentDate.toLocaleDateString();











