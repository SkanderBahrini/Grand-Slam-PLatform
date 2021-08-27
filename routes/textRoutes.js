
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const text = require('../models/textModel');

router.route('/text').post(async(req, res) => {

    const name = req.body.name;
   const textname = req.body.textname;
  console.log(req.body.textname)

  
    const Text = new text ({
        name,
        textname
    });


    Text.save();
 
})

router.route('/text').get(async (req, res) => {
    try {
        res.send(await text.find());

    }
    catch (error) {
        res.send(error);
    }
});

module.exports = router;
