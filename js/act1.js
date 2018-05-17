/**
 * Created by Administrator on 2018/3/10.
 */

var hour = 0,
    minute = 0,
    second = 0,
    milliSecond = 0,
    showHour,
    showMinute,
    showSecond,
    showMilliSecond,
    timerFct,
    temp;
function timer(){
    function start(divId){
        var tiAction =  setInterval("console.log(temp)",1000);
    }
}

function timeAction(divId){
    milliSecond += 10;

    if(milliSecond == 1000){
        second += 1;
        milliSecond = 0;
    }
    if(second == 60){
        minute += 1;
        second = 0;
    }
    if(minute == 60){
        hour += 1;
        minute = 0;
    }
    milliSecond < 1000 ? showMilliSecond = "0" + milliSecond : showMilliSecond =  milliSecond;
    second < 10 ? showSecond = "0" + second : showSecond =  second;
    minute < 10 ? showMinute = "0" + minute : showMinute =  minute;
    hour < 10 ? showHour = "0" +  hour : showHour =   hour;
    var temp = showHour + " : " +  showMinute + " : " + showSecond + " : " +  showMilliSecond;
    var a = document.getElementById(divId);
    var oDivText = document.createTextNode(temp);
    a.appendChild(oDivText);
    console.log(a.value = temp);
}

function stopTimer(){
    window.clearInterval(timerFct)
}
function resetTimer(divId){
    window.clearInterval(timerFct);
    millisecond=hour=minute=second=0;
    document.getElementById(divId).value='00:00:000';
}
