//Side Nav bar when clicking on menu icon
let menubar =document.getElementById("menubar")
let sidenavbar = document.getElementById("sidenavbar")
let closeicon = document.getElementById("closeicon")

menubar.addEventListener("click", function(){
    sidenavbar.style.left = "0"
})
closeicon.addEventListener("click", function(){
    sidenavbar.style.left = "-50%"
})