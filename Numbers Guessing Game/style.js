const min=1;
const max=5;
const result=Math.floor(Math.random()*(max - min + 1))+min;

let guessNum;
let attemps=0;
let running=true;


while(running){
    guessNum=window.prompt(`Guess Number Between ${min} to ${max}`);
    guessNum=Number(guessNum);

    if(isNaN(guessNum)){
        window.alert(`Please Neter the Valdi Number`);
    }
    else if(guessNum<min || guessNum>max){
        window.alert(`please enter a valid number`);
    }
    else{
        attemps++;
        if(guessNum<result){
            window.alert(`TOO LOW! TRY AGAIN!`);
        }
        else if(guessNum>result){
            window.alert(`TOO HIGH! TRY AGAIN!`);
        }
        
        else{
            window.alert(`YOUR ANSWER IS CORRECT .THE ANSWER WAS ${result} ND IT TOOK ${attemps}`);
                
            running=false;
        }
    }
}
