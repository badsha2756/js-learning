/*let myName = document.querySelector("h1");

myName.addEventListener("mouseover", function () {

    myName.classList.add("my-style") ;

})
myName.addEventListener("mouseover", function () {

    myName.classList.remove("my-style") ;
 
 }) */
 
 for (let i=0; i<3; i++) {
 
 document.querySelectorAll(".myclass")[i].addEventListener("click", function() {
    let text= this.innerHTML;
 document.querySelector("h1").innerHTML= text + " is clicked";
 })
}


