

function roller(){
    const myTextBox=document.getElementById("myTextBox");
    
    const resultcontent=document.getElementById("resultcontent");
    const resultImage=document.getElementById("resultImage");
    
    const values=[];
    const image=[];

    for(let i=0;i<myTextBox.value;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        image.push(`<img src="image/${values}.png">`);
    }

    resultcontent.textContent=`Dice : ${values.join( ', ')}`;
    resultImage.innerHTML=image.join('');

}
