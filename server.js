const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const textRoutes =require("./routes/textRoutes");
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/Finalproject', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.use(express.json());

app.use(router);



app.use("/", require("./routes/playerRoutes"));
app.use('/', textRoutes);







app.listen(3001, () => {

    console.log(" we are connected");
})

