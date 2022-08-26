function showDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json()) //Promise -> It will have a response, but doesn't know when, but you will get a response
        .then(data => {
            //data = {"message": "image.png"}
            var image_dog = '<img src="' + data['message'] + '" alt="dog">';
            //'<image src="image.png" alt"dog">'
            document.querySelector('.img').innerHTML = image_dog;
            //innerText -> Transforms everything into text
            //innerHTML -> Respect the tags that you have on your text
        });
}

async function showDogAsync() {
    var response = await fetch('https://dog.ceo/api/breeds/image/random');
    console.log(response);
    var data = await response.json();
    var image_dog = '<img src="' + data['message'] + '" alt="dog">';
    document.querySelector('.img').innerHTML = image_dog;
}