
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const player = require('../models/playerModel');

router.route('/player').post(async(req, res) => {

    const name = req.body.name;
    const age = req.body.age;
    const date = req.body.date;
    const url= req.body.url;

    const grandslam = req.body.grandslam

  
    const Player = new player({

        name,
        age,
        date,
        url, 
        grandslam
  
    });


    Player.save();
})


router.route('/player').get(async (req, res) => {
    try {
        res.send(await player.find());

    }
    catch (error) {
        res.send(error);
    }
});




module.exports = router;