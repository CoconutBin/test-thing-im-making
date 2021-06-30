const btnlight = document.getElementById('buttonmode');
const currentstyle = document.getElementById('currentmode');
var cmode = Cookies.get('mode')
    if (cmode == 'dark')
        change2()
function change1() {
    btnlight.setAttribute('onclick', 'change2()');
    btnlight.innerHTML=('Dark mode');
    currentstyle.setAttribute('href', 'lightmode.css');
    Cookies.set('mode','light') 
}

function change2() {
    btnlight.setAttribute('onclick', 'change1()');
    btnlight.innerHTML=('Light mode');
    currentstyle.setAttribute('href', 'darkmode.css');
    Cookies.set('mode','dark')
}