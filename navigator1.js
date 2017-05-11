/**
 * Created by Ucenik on 11.5.2017..
 */
function Check1() {
    var prvicheck = document.getElementById("check1").checked;
    var drugicheck = document.getElementById("check2").checked;
    if (prvicheck && drugicheck ){
        document.getElementById("novip").innerHTML = window.innerHeight + ' ' + window.innerWidth;
    }else if (prvicheck){
        document.getElementById("novip").innerHTML = window.innerHeight;
    }else if (drugicheck){
        document.getElementById("novip").innerHTML = window.innerWidth;
    }else{
        document.getElementById("novip").innerHTML = '';
    }
}

function openSesami() {
    var url1  = window.open("","_blank","200,200");
}

function closeTheSesami() {
    url1.close();
}