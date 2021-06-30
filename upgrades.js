let currentupgrade = 1
let currentupgrade2 = 1
function upgrade_fix_damaged_internal_generator() {
    upgrade1(3,'repairing...',10000,'miningtime',1000,'Repair damaged mining laser <br> 5 minerals, increase mineral gain','upgrade_fix_damaged_mining_laser()','Dont ask how you where able to cut up those rocks without your mining laser')
    currentupgrade++
}

function upgrade_fix_damaged_mining_laser(){
    upgrade1(5,'repairing...',10000,'miningpower',1,'Repair damaged engine <br> 10 minerals, increase mining speed','upgrade_fix_damaged_engine()','ok, how did you move without your engine?')
    currentupgrade++
}

function upgrade_fix_damaged_engine(){
    upgrade1(10,'repairing...',10000,'miningtime',1500,'placeholder','placeholder','placeholder');
    currentupgrade++
}