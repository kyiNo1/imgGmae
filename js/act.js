/**
 * Created by Administrator on 2018/3/9.
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
    function start(){
        timerFct =  setInterval(timeAction,10);
    }


 var timeAction = function (){

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
    milliSecond < 100 ? showMilliSecond = "0" + milliSecond : showMilliSecond =  milliSecond;
    second < 10 ? showSecond = "0" + second : showSecond =  second;
    minute < 10 ? showMinute = "0" + minute : showMinute =  minute;
    hour < 10 ? showHour = "0" +  hour : showHour =   hour;
    var temp = showHour + " : " +  showMinute + " : " + showSecond + " : " +  showMilliSecond;
    var targetDiv = document.getElementById("time");
    targetDiv.innerHTML = temp;
}

function stopTimer(){
    window.clearInterval(timerFct)
}
function resetTimer(){
    window.clearInterval(timerFct);
    millisecond=hour=minute=second=0;
    document.getElementById("start").value='00:00:000';
}


function initGame(){
    var piece,
        targets,
        doc,
        targets;

    piece = [1, 2, 3, 4, 5, 6, 7, 8];
    divIndex = [0,1, 2, 3, 4, 5, 6, 7, 8];
    piece.sort(function(){ return 0.5 - Math.random() });
    divIndex.sort(function(){ return 0.5 - Math.random() });

    targets =  $(".img-piece").children('div');
    for(var i=0; i<9; i++){
       if(i>0){
           targets[divIndex[i]].className = "img-piece"+ piece[i-1];
       }else{
           targets[divIndex[i]].remove();
       }
    }

    //for(targ in targets){
    //    console.log()
    //}
    //for(var i = 0; i < 8; i++ ){
    //    console.log(targets);
    //
    //    //console.log(targets);
    //}
}


function moveImg(targetDiv){
    console.log(targetDiv);

    //console.log($('targetDiv').children('div'));
    $('targetDiv').children('div');
}



$(function(){
    initGame();

})

