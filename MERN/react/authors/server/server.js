const express = require('express');
const cors = require('cors') // This is new
const app = express();

app.use(cors()) // This is new

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/author.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

