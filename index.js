const day=document.getElementById("day");
const hours=document.getElementById("hour");
const mins=document.getElementById("min");
const secs=document.getElementById("sec");
const item=document.getElementById("item");
const cont=document.getElementById("cont");
const inp1=document.getElementById("text11");
const inp2=document.getElementById("text22");
const inp3=document.getElementById("text33");
const btn=document.getElementById("mybtn");
const input=document.getElementById("input");
const title=document.getElementById("days");
const ashu=document.getElementById("ashu");
const audio=document.getElementById("audio");
console.log(day);
const sec=1000,min=60*sec,hour=min*60,days=hour*24,month=days*30;
let event_date;
let current_date;
let a; 
let b;

// ------------get date from the user------------------
function myfunc(){
     a=Number(inp1.value);
     b=Number(inp2.value);
     input.style.display="none";
    
}

// -----------------correct formate of date time--------------

function myfunc2(){
   const intervalid= setInterval(() => {
     title.innerText="Time left ";
        event_date=new Date(2022,a-1,b);
    current_date=new Date();
    console.log(current_date);
    console.log(event_date-current_date);
let diff=event_date-current_date;
let month1=Math.floor(diff/month);
let rem1=diff%month;
let rem2=rem1%days;
let days1=Math.floor(rem1/days);
let hour1=Math.floor(rem2/hour);
let rem3=rem2%hour;
let min1=Math.floor(rem3/min);
let rem4=rem3%min;
let sec1=Math.floor(rem4/sec)
day.innerText=days1;
hours.innerText=hour1;
mins.innerText=min1;
secs.innerText=sec1;


if(diff<=0){
  audio.play();
item.style.display="none";
cont.innerText=inp3.value;
cont.style.fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
ashu.style.display="none";

clearInterval(intervalid);
}
  }, 1);
}; 


