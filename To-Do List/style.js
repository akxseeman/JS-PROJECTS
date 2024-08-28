let input=document.getElementById("input");
let ulcontainer=document.getElementById("ulcontainer");

function add(){
    let liitem=document.createElement("li")
    liitem.innerHTML=input.value +"<button id='dlt-btn' onClick='del(event)'>Del</button>" 

    ulcontainer.append(liitem)
}
function del(event){
    event.target.parentElement.remove();
}