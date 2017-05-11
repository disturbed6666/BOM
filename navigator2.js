/**
 * Created by Ucenik on 11.5.2017..
 */
function Check2() {
    document.getElementById("novip2").innerHTML = "";
    var prvicheck = document.getElementById("check1").checked;
    var drugicheck = document.getElementById("check2").checked;
    var trecicheck = document.getElementById("check3").checked;
    var cetvrticheck = document.getElementById("check4").checked;
    console.log(prvicheck || drugicheck || trecicheck || cetvrticheck);
    if (prvicheck || drugicheck || trecicheck || cetvrticheck){
        if (prvicheck) {
            document.getElementById("novip2").innerHTML += screen.height;
        }
        if (drugicheck) {
            document.getElementById("novip2").innerHTML += screen.width;
        }
        if (trecicheck) {
            document.getElementById("novip2").innerHTML += screen.availWidth;
        }
        if (cetvrticheck){
            document.getElementById("novip2").innerHTML += screen.availHeight;
        }
    }else{
        document.getElementById("novip2").innerHTML = '';
    };
}
