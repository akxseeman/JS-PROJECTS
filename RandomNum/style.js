const rollBtn=document.getElementById("myBtn");
const myLbl=document.getElementById("myLbl");

let randomNum;

rollBtn.onclick=function(){
    randomNum=Math.floor(Math.random()*6)+1;
    myLbl.textContent=randomNum;
}