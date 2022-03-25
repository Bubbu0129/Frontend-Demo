let myImage = document.querySelector('img');
let myGreet = document.querySelector('p.greet');
let myButton = document.querySelector('button');
let promptString = "Please enter your username:";

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/crisps.jpg') {
      myImage.setAttribute('src', 'images/crisps_halved.jpg');
    } else {
      myImage.setAttribute('src', 'images/crisps.jpg');
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myGreet.textContent = "Hello, " + storedName + ".";
}

function setUserName() {
    let myName = prompt(promptString);
    if (!myName || myName === null) {
        promptString = "Inupt null. Please enter your username:";
        setUserName();
    }
    else{
    promptString = "Please enter your username:";
    localStorage.setItem('name', myName);
    myGreet.textContent = "Hello, " + myName + ".";
    }
}

myButton.onclick = function() {
    setUserName();
}