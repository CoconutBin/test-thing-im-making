function valuetest(x){
    if (currentupgrade == 1){
        if(x>=1)
        upgradebtn1.removeAttribute('hidden');
        if(x>=3)
        upgradebtn1.removeAttribute('disabled');
    }
    if (currentupgrade == 2){
        if(x>=2)
        upgradebtn1.removeAttribute('hidden');
        if(x>=5)
        upgradebtn1.removeAttribute('disabled');
    }
    if (currentupgrade == 3){
        if(x>=3)
        upgradebtn1.removeAttribute('hidden');
        if(x>=10)
        upgradebtn1.removeAttribute('disabled');
    }

}


//if (x>=25) {
//    document.getElementById('currentprobes').removeAttribute('hidden');
//    document.getElementById('buyprobebtn').removeAttribute('hidden');
//}
//if (x<50)
//    document.getElementById('buyprobebtn').setAttribute('disabled','');
//if (x>=50)
//    document.getElementById('buyprobebtn').removeAttribute('disabled');

