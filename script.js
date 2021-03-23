const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");

function runTheClock() {

/*    ===== code below tells our clock to move in the exact time not just a random time. using the Date object) ===== */

let date = new Date();
console.log(date);

// Pull out what you want (hour, minute, seconds) from the date object using methods.

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
console.log('Hour : ' + hour + ' Minute : ' + minute + ' Second : ' + second);

/* Conversion from hour, minute, second to degrees on the cirlce so that the arms are positioned correctly to show the time. a) Divide the correct number of clock face to show the time. */

let hourPosition = (hour*360/12)+(minute*(360/60)/12);
let minutePosition = (minute*360/60)+(second*(360/60)/60);
let secondPosition = second*360/60;


hourHand.style.transform = "rotate(" + hourPosition + "deg)";
minuteHand.style.transform = "rotate(" + minutePosition + "deg)";
secondHand.style.transform = "rotate(" + secondPosition + "deg)";


/* Updating the position of the second minute and hour arm. Using a set interval method : it repeatedly alls a function or execute a code snippet with a fixed time delay between each call. */

}

//so as to refer to a set interval later.

let interval = setInterval(runTheClock, 1000);

/*  The code written below should be implemented for the the fancy movement of clock. by placing the variables in the function outside of the function and working the math below : with this type of animation browser throtles the JavaScript*/

hourPosition = hourPosition+(3/360);
minutePosition = minPosition+(6/60);
secondPosition = secondPosition+6;


