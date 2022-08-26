var animalImg = document.querySelector('#fav-animal');
console.log(animalImg);

function PickCat(element){
    // element.stye.backgroundColor = "goldenrod";
    element.remove();
    animalImg.src = "assets/cat.png"
}

function PickDog(element){
    element.classList.add('btn');
    animalImg.src = "assets/dog.png"
}