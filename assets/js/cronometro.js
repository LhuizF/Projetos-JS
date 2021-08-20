function getTime(seg){
    const time = new Date(seg * 1000);
    return time.toLocaleTimeString("pt-br",{
        hour12: false,
        timeZone: "GMT"
    });
};

document.querySelectorAll("button").forEach((btn, i) => {
    btn.addEventListener("click",() => {
        i === 0 ? startTime() : null;
        i === 1 ? stopTime(): null;
        i === 2 ? resetTime() : null;
    });
});

let cont = 0;
let stopWatch;
const displayTime = document.querySelector(".timer p");

function  startTime(){
    clearInterval(stopWatch)
    stopWatch = setInterval(() => {
        displayTime.innerHTML = getTime(cont++);
    }, 1000);

    displayTime.classList.remove("pause");
}

function stopTime(){
    clearInterval(stopWatch);
    if(displayTime.innerHTML !== "00:00:00"){
        displayTime.classList.add("pause");
    };
};

function resetTime(){
    cont = 0;
    clearInterval(stopWatch);
    displayTime.innerHTML = "00:00:00";
    displayTime.classList.remove("pause");
};