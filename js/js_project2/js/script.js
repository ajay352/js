const clock=document.querySelector('.clock') 
function update(){
var my=new Date()
var hour=my.getHours()
var minute=my.getMinutes()
var second=my.getSeconds()
var txt="Am"

if(hour>12){
    hour=hour-12;
    txt="Pm";
}else if(hour==0){
    hour=12;
    txt="Am";
}

hour=hour<10?'0'+hour:hour
minute=minute<10?'0'+minute:minute
second=second<10?'0'+second:second
clock.innerHTML=`${hour}: ${minute} :${second}:${txt}`

}
update()

setInterval(update,1000)


