//Card close functionality

var offercard = document.getElementById("offercard")
var cardcloseicon = document.getElementById("cardcloseicon")

cardcloseicon.addEventListener("click", function(){
    offercard.style.display = "none"
})

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

//Search functionality for collection name and Price
let searchbox = document.getElementById("searchbox")
let collectioncontainer = document.getElementById("collectioncontainer")
let collectioncontainerList = collectioncontainer.querySelectorAll("div")

searchbox.addEventListener("keyup", function (event) {

    let searchedvalue = event.target.value.toUpperCase();

    for (let count = 0; count < collectioncontainerList.length; count++) {

        let collectionname = collectioncontainerList[count].querySelector("h1").textContent.toUpperCase();

        let price = collectioncontainerList[count].querySelector("p").textContent.toUpperCase();

        if (collectionname.indexOf(searchedvalue) >= 0 || price.indexOf(searchedvalue) >= 0) {

            collectioncontainerList[count].style.display = "block";

        } else {

            collectioncontainerList[count].style.display = "none";

        }

    }

});

//Filter Functionality by Occation


let occations = document.getElementsByName("occation");
let Products = document.querySelectorAll(".Product");

for (let count = 0; count < occations.length; count++) {

    occations[count].addEventListener("change", function () {
        occationfilterfunction();
    });

}

function occationfilterfunction() {

    let checked = false;
    for (let i = 0; i < occations.length; i++) {
        if (occations[i].checked) {
            checked = true;
        }
    }

    
    if (checked == false) {
        for (let i = 0; i < Products.length; i++) {
            Products[i].style.display = "block";
        }
        return;
    }

   
    for (let i = 0; i < Products.length; i++) {

        let productoccation = Products[i].dataset.occation;

        Products[i].style.display = "none";

        for (let j = 0; j < occations.length; j++) {

            if (occations[j].checked && productoccation == occations[j].value) {
                Products[i].style.display = "block";
            }

        }
    }

}

//Filter Functionality by Colour

let colors = document.getElementsByName("colors");

for (let count = 0; count < colors.length; count++) {

    colors[count].addEventListener("change", function () {
        colorfilterfunction();
    });

}

function colorfilterfunction() {

    let checked = false;
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].checked) {
            checked = true;
        }
    }

    
    if (checked == false) {
        for (let i = 0; i < Products.length; i++) {
            Products[i].style.display = "block";
        }
        return;
    }

   
    for (let i = 0; i < Products.length; i++) {

        let productoccation = Products[i].dataset.color;

        Products[i].style.display = "none";

        for (let j = 0; j < colors.length; j++) {

            if (colors[j].checked && productoccation == colors[j].value) {
                Products[i].style.display = "block";
            }

        }
    }

}


//Filter Functionality by Colour Arrivals

let arrivals = document.getElementsByName("arrivals");

for (let count = 0; count < arrivals.length; count++) {

    arrivals[count].addEventListener("change", function () {
        arrivalfilterfunction();
    });

}

function arrivalfilterfunction() {

    let checked = false;
    for (let i = 0; i < arrivals.length; i++) {
        if (arrivals[i].checked) {
            checked = true;
        }
    }

    
    if (checked == false) {
        for (let i = 0; i < Products.length; i++) {
            Products[i].style.display = "block";
        }
        return;
    }

   
    for (let i = 0; i < Products.length; i++) {

        let productoccation = Products[i].dataset.arrival;

        Products[i].style.display = "none";

        for (let j = 0; j < arrivals.length; j++) {

            if (arrivals[j].checked && productoccation == arrivals[j].value) {
                Products[i].style.display = "block";
            }

        }
    }

}