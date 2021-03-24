let days = 11; //starting number of days
let hours = 11; // starting number of hours
let minutes = 11; // starting number of minutes
let seconds = 11; // starting number of seconds

// converts all to seconds
let totalSeconds =
days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

//temporary seconds holder
let tempSeconds = totalSeconds;

// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
if (value > inSeconds) {
    let x = value % inSeconds;
    tempSeconds = x;
    return (value - x) / inSeconds;
} else {
    return 0;
}
};

//sets seconds
const setSeconds = (s) => {
    if (s>=10)
document.querySelector("#seconds").textContent = s;
else 
document.querySelector("#seconds").textContent = "0" +s;

};

//sets minutes
const setMinutes = (m) => {
    if (m>=10)
document.querySelector("#minutes").textContent = m ;
else
document.querySelector("#minutes").textContent ="0"+ m ;

};

//sets hours
const setHours = (h) => {
    if(h>=10)
document.querySelector("#hours").textContent = h;
else
document.querySelector("#minutes").textContent ="0"+ h ;

};

//sets Days
const setDays = (d) => {
    if (d>=10) 
document.querySelector("#days").textContent = d;
 else
 document.querySelector("#days").textContent = d;

};

// Update the count down every 1 second
var x = setInterval(() => {
//clears countdown when all seconds are counted
if (totalSeconds <= 0) {
    clearInterval(x);
}
setDays(convert(tempSeconds, 24 * 60 * 60));
setHours(convert(tempSeconds, 60 * 60));
setMinutes(convert(tempSeconds, 60));
setSeconds(tempSeconds === 60 ? 59 : tempSeconds);
totalSeconds--;
tempSeconds = totalSeconds;
}, 1000);