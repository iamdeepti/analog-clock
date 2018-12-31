let hourHand=document.querySelector("#hour");
let minuteHand=document.querySelector("#minute");
let secondHand=document.querySelector("#second");

function clock(){
 var date= new Date();
 
 let hr= date.getHours();
 let min= date.getMinutes();
 let sec= date.getSeconds();
 
 let hrPosition = (hr*360/12) + (min/60)*360/12;
 let minPosition = (min*360/60) + (sec/60)*360/60;
 let secPosition = sec*360/60;
 
 hourHand.style.transform= "rotate("+ hrPosition + "deg)";
 minuteHand.style.transform= "rotate("+ minPosition + "deg)";
 secondHand.style.transform= "rotate("+ secPosition + "deg)";
 
}
var interval = setInterval(clock, 1000);