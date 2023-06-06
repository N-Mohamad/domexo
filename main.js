let rewards = ["girafe", "vélo", "mug", "télévision (cathodique)", "pc portable", "voiture thermique sans essence", "babouche usé", "un chien qui hoche la tête sur la plage arrière de la voiture", "1 million de pesos philippin (PHP)"];

let btn = document.getElementById('btn');
let numlike = document.getElementById('textbelike');
let btnreset = document.getElementById('reset');
let focusInput = document.getElementById('usernum');
let focusbtn = document.getElementById('focusin');

focusInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    event.preventDefault();
    validateNumber();
    }
});

let number = Math.floor(Math.random()* 100);
let tries = 0;
let maxTries = 7;

function validateNumber(){
    let input = parseInt(focusInput.value);
    tries++;

    if (input === number){
        let onereward = rewards[Math.floor(Math.random() * rewards.length)];
        numlike.innerHTML = `Finally you did it the right number is ${number} you won ${onereward} `
        btn.disabled = true;
        btnreset.disabled = false;
    } else if (input < number){
        numlike.innerHTML = `the right num is bigger than what u think u still got ${maxTries - tries} attempts to go `;
    } else if (input > number) {
        numlike.innerHTML = `the right num is lower than what u think u still got ${maxTries - tries} attempts to go `;
    }
    
    if(tries >= maxTries){
        numlike.innerHTML += `you reached the maximum tries`
        btn.disabled = true
        btnreset.disabled = false;
        focusInput.disabled = true;
    }
    
    focusInput.value = '';
    
};

btn.addEventListener('click', validateNumber);

btnreset.addEventListener('click', function(){
    number = Math.floor(Math.random() * 100);
    tries = 0; 
    btn.disabled = false;
    btnreset.disabled = true;
    numlike.innerHTML = '';
    focusInput.value = '';
    
    focusInput.disabled = false;
});

focusbtn.addEventListener ('click',() => {
    focusInput.focus();
});

