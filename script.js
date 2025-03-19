const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');




// to update date and time
function updateTime(){
    const now =  new Date();
// console.log(now)
const dateOptions =  {
    month : 'long',
    day : 'numeric'
}
const timeOptions = {
    hour : '2-digit',
    minute : '2-digit',
    second : 'numeric',
    hour12 : true

}
dateElement.innerText = now.toLocaleDateString('en-US',dateOptions);

timeElement.innerText = now.toLocaleTimeString('en-US',timeOptions);

}

setInterval(updateTime,1000);
updateTime();




