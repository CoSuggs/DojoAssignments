const { Joke } = require('../models/joke.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createJoke = (request, response) => {
    // const { firstName, lastName } = request.body;
    console.log(request.body);
    Joke.create(request.body)
        .then(joke => response.json({result:joke}))
        .catch(err => response.json(err))
}

module.exports.getAllJokes = (request, response) => {
    Joke.find()
        .then(jokes => response.json(jokes))
        .catch(err => response.json(err))
}

module.exports.getJoke = (request, response) => {
    Joke.findOne({ _id: request.params.id })
        .then(joke => response.json(joke))
        .catch(err => response.json(err))
}

module.exports.updateJoke = (request, response) => {
    Joke.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updatedJoke => response.json(updatedJoke))
        .catch(err => response.json(err))
}

module.exports.deleteJoke = (request, response) => {
    Joke.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

