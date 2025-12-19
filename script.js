let time = 59;
const timer = document.getElementById("timer");

setInterval(()=>{
  if(time>0){
    time--;
    timer.innerText = `0:${time<10?'0'+time:time}`;
  }else{
    window.location.href = "https://t.me/+5ZxYXy0zD9s4NzFl";
  }
},1000);
