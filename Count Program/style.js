const inncreaseBtn=document.getElementById("inBtn");
const decreaseBtn=document.getElementById("deBtn");
const resetBtn=document.getElementById("reBtn");

const counterNum=document.getElementById("numCount");

let count=0;

inncreaseBtn.onclick=function(){
    count++;
    counterNum.textContent=count;
}


decreaseBtn.onclick=function(){
    count--;
    counterNum.textContent=count;
}


resetBtn.onclick=function(){
    count=0;
    counterNum.textContent=count;
}