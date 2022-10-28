let myImage = document.querySelector('img');
let myGreet = document.querySelector('p.greet');
let myComment = document.querySelector('p.comment');
let myButton = document.querySelector('button');
let crispyChips = document.querySelector('li.crispy');
let cheesyChips = document.querySelector('li.cheesy');
let storedName;
let promptStr = "Please enter your username:";
let chipsCondition = 0;
let chipsType = 0;
let chipsName = ['crispy_chips','crispy_chips_halved','cheesy_chips','cheesy_chips_halved'];
let commentTxt = ['!No chips on diet!','Yummy, yummy.'];
let commentStyle = ['color: rgb(255, 0, 0); text-align: left; font-size: 32px;','color: rgb(128, 128, 128); text-align: right; font-size: 24px; line-height: 53px;'];

if(!(storedName = localStorage.getItem('name')))
    localStorage.setItem('name', 'Guest');
else
    myGreet.textContent = "Hello, " + storedName + "!";

myButton.onclick = function() {
    setUserName();
}

myImage.onclick = function() {
    chipsCondition = 1 - chipsCondition;
    refreshImg();
}

crispyChips.onclick = function() {
    chipsType = 0;
    chipsCondition = 0;
    refreshImg();
}

cheesyChips.onclick = function() {
    chipsType = 1;
    chipsCondition = 0;
    refreshImg();
}

function refreshImg(){
    myImage.setAttribute('src', 'images/' + chipsName[2 * chipsType + chipsCondition] + '.jpg');
    myComment.textContent = commentTxt[chipsCondition];
    myComment.style.cssText = commentStyle[chipsCondition];
}

function setUserName() {
    let myName = prompt(promptStr);
    if (!myName || myName === null) {
        promptStr = "Inupt null. Please enter your username:";
        setUserName();
    }
    else{
        promptStr = "Please enter your username:";
        localStorage.setItem('name', myName);
        myGreet.textContent = "Hello, " + myName + ".";
    }
}
