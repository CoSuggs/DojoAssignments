const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/persondb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connection established") )
    .catch(err=>console.log("There was an error", err))