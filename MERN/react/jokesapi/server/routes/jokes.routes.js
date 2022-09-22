const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
    app.get('/api', JokeController.index);
    app.post('/api/joke', JokeController.createJoke);
    app.get('/api/joke', JokeController.getAllJokes);
    app.get('/api/joke/:id', JokeController.getJoke);
    app.put('/api/joke/:id', JokeController.updateJoke);
    app.delete('/api/joke/:id', JokeController.deleteJoke);

}

