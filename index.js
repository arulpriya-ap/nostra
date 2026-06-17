//Js to close the top card

var offercard = document.getElementById("offercard")
var cardcloseicon = document.getElementById("cardcloseicon")

cardcloseicon.addEventListener("click", function(){
    offercard.style.display = "none"
})


//Carosal
var slider = document.getElementById("slider")
var leftarrow = document.getElementById("leftarrow")
var rightarrow = document.getElementById("rightarrow")

var currentImage=0;

rightarrow.addEventListener("click", function(){
    if(currentImage < 2){
        currentImage = currentImage+1;

    }
    else
    {
        currentImage=0
    }
    slider.style.transform = "translateX(-"+(currentImage*100)+"%)"
})

leftarrow.addEventListener("click", function(){
    if(currentImage>0){
        currentImage = currentImage-1;
    }
    else
    {
        currentImage = 2
}   slider.style.transform = "translateX(-"+(currentImage * 100) + "%)";
})


//Like button
var whiteheart = document.querySelectorAll(".whiteheart")
var redheart = document.querySelectorAll(".redheart")

for(let count=0;count<whiteheart.length; count++)
{

whiteheart[count].addEventListener("click", function(){
    redheart[count].classList.remove("hidden")
    whiteheart[count].classList.add("hidden")
})

redheart[count].addEventListener("click", function(){
    redheart[count].classList.add("hidden")
    whiteheart[count].classList.remove("hidden")
})
}

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