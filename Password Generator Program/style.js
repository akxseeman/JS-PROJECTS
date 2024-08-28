

function generatePassword(passLength,includeupperCase,includelowerCase,includeNumbers,includeSysmbols){
    const lowercaseChars=`abcdefghijklmnopqrstuvwxyz`;
    const uppercaseChars=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numberChars=`0123456789`;
    const symbolschars=`!@#$%^&*()_+:"><?`;

    let allowedChars="";
    let password="";

    allowedChars+=includelowerCase? lowercaseChars:"";
    allowedChars+=includeupperCase? uppercaseChars:"";
    allowedChars+=includeNumbers? numberChars:"";
    allowedChars+=includeSysmbols? symbolschars:"";

    for(let i=0;i<passLength;i++){
        const randomNum=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomNum];
    }
    return password
}


let passLength=12;
let includeupperCase=true;
let includelowerCase=true;
let includeNumbers=true;
let includeSysmbols=true;

let pass=generatePassword(passLength,includeupperCase,includelowerCase,includeNumbers,includeSysmbols);

console.log(`Generate Password: ${pass}`)