function hereIsAlert(element) {
    var location = element.innerText;
    alert("Loading weather report of " + location);
}

function dismissCookie(element) {
    var elem = document.getElementById("cookie1");
    elem.parentNode.removeChild(elem);
}

//fOc = F
//i=1;
//#temp1
//tempElement = <span id="temp1" class="maxTemp"><strong>24</strong></span>
//temperature ="24"
//temperature = 24
//
//newTemp = 0
//newTemp = (24 * 9/5) +32 = 75.2
//
//<span id="temp1" class="maxTemp"><strong>75.2</strong></span>


function changeTemperature(selectElement) {
    var fOc = selectElement.value;
    console.log(fOc);

    for (let i = 1; i <= 8; i++) {
        var tempElement = document.querySelector('#temp' + i);
        var temperature = tempElement.innerText;
        temperature = parseInt(temperature); //Transforms text into integer
        console.log(temperature);
        var newTemp = 0;
        if (fOc === "C") {
            //F -> C 
            newTemp = Math.round((temperature - 32) * 5 / 9);
        } else {
            //c -> F
            newTemp = Math.round((temperature * 9 / 5) + 32);
        }
        tempElement.innerText = newTemp;
    }
}