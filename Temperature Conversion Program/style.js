const textBox=document.getElementById("textBox");
const toF=document.getElementById("toF");
const toC=document.getElementById("toC");
const mySubmit=document.getElementById("mySubmit");
const result=document.getElementById("result");

let temp;


function toConvert(){
    if(toF.checked){
        temp=Number(textBox.value);
        temp=temp *9/5 + 32;
        result.textContent=temp + "°F";
    }
    else if(toF.checked){
        temp=Number(textBox.value);
        temp=temp (temp-32)* (5/9);
        result.textContent=temp + "°C"; 
    }
    else{
        result.textContent="select a unit"; 
    }
}