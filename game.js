const currentminerals = document.getElementById('currentminerals');
const minemineralbtn = document.getElementById('minemineralbtn');
const upgradebtn1 = document.getElementById('upgradebtn1');
const upgradebtn2 = document.getElementById('upgradebtn2');
let minerals = 0;
let miningtime = 5000;
let miningpower = 1;
let probeamount = 0;
let probeminingpower = 1;
let currentlydoingaction = false;
setInterval(() => {
    minerals = minerals + (probeamount * probeminingpower) 
    updateminerals()
 }, 3000);

function updateminerals() {
    currentminerals.innerHTML = ('You have ' + minerals + ' minerals');
    valuetest(minerals);
}

function updateprobes() {
    document.getElementById('currentprobes').innerHTML = ('You have ' + probeamount + ' probes');
}

function minemineral() {
if(currentlydoingaction == false){
    currentlydoingaction = true
    minemineralbtn.setAttribute('disabled', '');
    minemineralbtn.innerHTML = ('Mining...');
    setTimeout(
        function () {
            minerals = minerals + miningpower
            minemineralbtn.removeAttribute('disabled');
            minemineralbtn.innerHTML = ('Mine minerals');
            updateminerals()
            currentlydoingaction = false
        }, miningtime)
    }
else
    alert('you are currently doing another action!')
}
function upgrade1(price,textvalue,disabledtime,upgradetype,upgradevalue,nexttext,nextitem,nexttitle){
   if(currentlydoingaction == false){
       currentlydoingaction = true
        upgradebtn1.setAttribute('disabled', '');
        upgradebtn1.innerHTML = (textvalue);
        minerals = minerals - price
        updateminerals()
        setTimeout(
            function () {
                upgradebtn1.setAttribute('title',nexttitle);
                upgradebtn1.setAttribute('hidden','');
                upgradebtn1.setAttribute('disabled', '');
                upgradebtn1.innerHTML = (nexttext);
                upgradebtn1.setAttribute('onClick',nextitem)
                if (upgradetype == 'miningtime')
                    miningtime = miningtime - upgradevalue
                if (upgradetype == 'miningpower')
                    miningpower = miningpower + upgradevalue
                updateminerals();
                currentlydoingaction = false
            }, disabledtime)
        }
    else
    alert('you are currently doing another action!')
}

function upgrade2(price,textvalue,disabledtime,upgradetype,upgradevalue,nexttext,nextitem,nexttitle){
    if(currentlydoingaction == false){
        currentlydoingaction = true
    upgradebtn2.setAttribute('disabled', '');
    upgradebtn2.innerHTML = (textvalue);
    minerals = minerals - price
    updateminerals()
    setTimeout(
        function () {
            upgradebtn2.setAttribute('title',nexttitle);
            upgradebtn2.setAttribute('hidden','');
            upgradebtn2.setAttribute('disabled', '');
            upgradebtn2.innerHTML = (nexttext);
            upgradebtn2.setAttribute('onClick',nextitem)
            if (upgradetype == 'miningtime')
                miningtime = miningtime - upgradevalue
            if (upgradetype == 'miningpower')
                miningpower = miningpower + upgradevalue
            updateminerals();
            currentlydoingaction = false
        }, disabledtime)
    }
    else
    alert('you are currently doing another action!')
}

function buyprobe() {
    if (minerals >= 50)
        minerals = minerals - 50;
        probeamount = probeamount + 1;
        updateminerals()
        updateprobes()
}
