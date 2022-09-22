const mongoose = require('mongoose');

const db_name = "jokedb";

mongoose.connect(`mongodb://127.0.0.1/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connection established"))
    .catch(err => console.log("There was an error", err))