const clock = document.getElementById("clock");
//main logic
setInterval(function(){
const date = new Date();
clock.innerHTML = date.toLocaleTimeString();
},1000);