
// var idElement = document.querySelector('#id');
// var classElement = document.querySelector('.class');
// var element = document.querySelector('element');


function submitAlert() {
    alert("Thank you for submiting.");
}

function changeTitle(element) {
    console.log(element);
    element.innerText = "Different Text";
}

function changeImg(imageTag) {
    imageTag.src = "Images/Manage Billing.png";
}

function returnImg(imageTag) {
    imageTag.src = "Images/Using Abstract.png";
}

function changeColor(aTag) {
    aTag.style.color = "red";
}

function originalColor(aTag) {
    aTag.style.color = "#4C5FD5";
}

function returnTitle(element) {
    element.innerText = "Using Abstract";
}

function changeH2() {
    var elementH2 = document.querySelector('h2');
    elementH2.innerText = "How can we help you, Elena?"

    var submitButton = document.querySelector('#submit');
    submitButton.style.background = "blue";
}

function switchClasses() {
    var helpSpan = document.querySelector('#help-text');
    if (helpSpan.classList.contains('italic')) { /* I'm asking if the helpSpan has the italic class */
        helpSpan.classList.remove('italic');
    } else {
        helpSpan.classList.add('italic');
    }
    // helpSpan.classList.add('italic');
}

function searching(inputSearch){
    var valueInput = inputSearch.value;
    var spanLookingFor = document.querySelector('#looking-for');
    spanLookingFor.innerText = valueInput;
}

