/* 1)Un alert() espone 5 numeri generati casualmente.
2)Da li parte un timer di 30 secondi.
3)Dopo 30 secondi l'utente deve inserire, uno alla volta,
 i numeri che ha visto precedentemente, tramite il prompt().
4)Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
quali dei numeri da indovinare sono stati individuati.*/

var casualNumbers = []


for(var i = 0; i < 5;i++) {
    CasualNumGen();
    var casualNum = CasualNumGen();
    console.log(casualNum)
    casualNumbers.push(casualNum);
}

alert(casualNumbers)




function CasualNumGen(){
    var CasualN = Math.floor(Math.random() * 20)
    return CasualN
}





