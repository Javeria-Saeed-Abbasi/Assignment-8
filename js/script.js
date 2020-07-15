var hrs = 0;
var min = 0;
var sec = 0;
var msec = 0;

var hrsGet = document.getElementById("hrs");
var minGet = document.getElementById("min");
var secGet = document.getElementById("sec");
var msecGet = document.getElementById("msec");

var status ="stopped";

var interval;
function timer(){
    msec++
msecGet.innerHTML = msec;
if(msec >=100){
    sec++;
    secGet.innerHTML = sec;
    msec= 0;
}
else if(sec >= 60){
    min++
    minGet.innerHTML=min;
    sec = 0
}
else if (min >=60){
    hrs++
    hrsGet.innerHTML=hrs;
    min = 0
}
}

function startstop(){
    if(status === "stopped"){
interval = window.setInterval(timer,10);
document.getElementById("label-start-stop").innerHTML = "stop";
status="started";
    }
else{
    window.clearInterval(interval);
    document.getElementById("label-start-stop").innerHTML = "start";
    status = "stopped";
}
}

function stop(){
clearInterval(interval)

}

function reset(){
    min = 00 ;
    sec= 00;
    msec= 00;
    minGet.innerHTML = min ;
    secGet.innerHTML = sec;
    msecGet.innerHTML= msec;
    stop()
  
}



