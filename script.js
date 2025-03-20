const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');
const monthElement = document.getElementById('month');
const calender = document.getElementById('calendar');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const allMoods = document.querySelectorAll('.mood-item');
let monthNo = 0;


function findMoodItem(year,month,day){
    const dateKey = `${year}-${(month+1).toString().padStart(2,'0')}-${day.toString().padStart(2,'0')}`;

    return localStorage.getItem(dateKey);

}


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

// calender logic

const weekDays = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday']; 


function renderCalendar(){
    const now = new Date();

    if(monthNo != 0){
        now.setMonth(new Date().getMonth()+ monthNo);
    }
    const day = now.getDate();
    const month = now.getMonth()
    const year = now.getFullYear();
    // console.log(month)

    
    monthElement.innerText = `${now.toLocaleDateString('en-US',{month: "long"})} ${year}`
    
    const daysInMonth = new Date(year,month+1,0).getDate();
    const firstDayOfMonth = new Date(year,month,1).toLocaleDateString('en-US',{
        weekday : 'long'
    })
    
    const paddingDays = weekDays.indexOf(firstDayOfMonth);

    calender.innerText = ''
    
    for(let i = 1 ; i <= daysInMonth + paddingDays; i++){
        const dayItem = document.createElement('div');
        dayItem.classList.add('day');
    
        // matlab ye days previous month ke hain
        if(i <= paddingDays){
            dayItem.classList.add('padding')
        }
        else{
                const currentDay = i - paddingDays;
                dayItem.innerText = currentDay;
                const moodItem = findMoodItem(year,month,currentDay);

                if(moodItem){

                    const moodElement = document.getElementById(moodItem)
                    dayItem.innerText = currentDay + moodElement.innerText.split(' ')[0];
                    dayItem.setAttribute('title',`${moodElement.innerText.split(' ')[1]}`);
                }

                
                if(((i - paddingDays) == day) && monthNo == 0 ){
                dayItem.id = 'currentDay'
                }
        }
        calender.appendChild(dayItem);
    }  
}

renderCalendar();


nextBtn.addEventListener('click',()=>{
    monthNo++;
    renderCalendar();
})

backBtn.addEventListener('click',()=>{
    monthNo--;
    renderCalendar();
})

// adding click event on all moods

allMoods.forEach((item)=>{
    item.addEventListener('click',()=>{
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();

        const dateKey = `${year}-${(month+1).toString().padStart(2,'0')}-${day.toString().padStart(2,'0')}`;
        localStorage.setItem(dateKey,item.id);

        renderCalendar()
    })
})