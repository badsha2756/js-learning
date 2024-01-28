//getElementById
let nam =document.getElementById("name");

nam.innerHTML="Wasim Akram";

//getElementsByTagName

let paratag = document.getElementById("para2");
paratag.innerHTML="this is my web";

//document.getElementsByTagName("p")[0].innerHTML="I am a programer"
//get element by className
 
document.getElementsByClassName("cls")[0].innerHTML="Change by js"
document.querySelector("#para").innerHTML="this is id queryselector";
document.querySelector(".cls").innerHTML="this is class queryseletor"
// Qiueryselectorall 
document.querySelectorAll("a")[0].innerHTML="Menu";
document.querySelectorAll("li")[0].innerHTML="Home";
document.querySelectorAll("li")[1].innerHTML="Contact";
//document.querySelectorAll("button")[0].innerHTML="Reset";

//button click show on alert
function msg() {
    let myMsg=document.querySelector("#saveid");
    myMsg.innerHTML="save your data";
}

function msg2(){
    ("next your page");
}