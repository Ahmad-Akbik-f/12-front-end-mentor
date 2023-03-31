import data from './data.json' assert { type: 'json' }; 
//varibles
let dailyBtn = document.querySelector(".report__opt span.opt__daily")
let weeklyBtn = document.querySelector(".report__opt span.opt__weekly")
let monBtn = document.querySelector(".report__opt span.opt__monthly")
let btns = document.querySelectorAll(".report__opt span")
let currentTime = document.querySelectorAll(".grid__box .content h2")
let prevTime = document.querySelectorAll(".grid__box .content span")
//
btn(dailyBtn,"daily")
btn(weeklyBtn,"weekly")
btn(monBtn,"monthly")
//Functions
function btn(btn,time){
    btn.onclick = ()=>{
        btns.forEach(elem=>{
            elem.classList.remove("active")
        })
        data.forEach(el => {
            currentTime.forEach(ele=>{
                if(ele.parentElement.parentElement.classList[0] == el.title){
                    if(time == "daily"){
                        ele.textContent = `${el.timeframes.daily.current}hrs`;
                    }else if(time == "weekly"){
                        ele.textContent = `${el.timeframes.weekly.current}hrs`;
                    }else{
                        ele.textContent = `${el.timeframes.monthly.current}hrs`;
                    }
                }
            })
            prevTime.forEach(ele=>{
                if(ele.parentElement.parentElement.classList[0] == el.title){
                    if(time == "daily"){
                        ele.textContent = `Last Week - ${el.timeframes.daily.previous}hrs`;
                    }else if(time == "weekly"){
                        ele.textContent = `Last Week - ${el.timeframes.weekly.previous}hrs`;
                    }else{
                        ele.textContent = `Last Week - ${el.timeframes.monthly.previous}hrs`;
                    }
                }
            })
        });
        btn.classList.add("active")
    }
}
//