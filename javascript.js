/* 1)Un alert() espone 5 numeri generati casualmente.
2)Da li parte un timer di 30 secondi.
3)Dopo 30 secondi l'utente deve inserire, uno alla volta,
 i numeri che ha visto precedentemente, tramite il prompt().
4)Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
quali dei numeri da indovinare sono stati individuati.*/

var casualNumbers = []
var userNumbers = []


var elem = document.getElementById('timer');

for (var i = 0; i < 5; i++) {
    CasualNumGen();
    var casualNum = CasualNumGen();
    console.log(casualNum)
    casualNumbers.push(casualNum);
}

alert(casualNumbers)

var timerId = setInterval(countdown, 1000);


for (let i = 0; i < 5; i++) {
    var userNum = parseInt(prompt("inserisci uno alla volta i numeri che hai visto prima"))
    userNumbers.push(userNum)
}
console.log(userNumbers)




var timeLeft = 30;

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function CasualNumGen() {
    var CasualN = Math.floor(Math.random() * 20)
    return CasualN
}