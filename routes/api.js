const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Admin = require("../models/admin");
const mongoose = require('mongoose');
const db = "mongodb+srv://mindset:simplon2021@cluster0.4lhvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('connecté sur mongodb')
    }
})
router.get('/', (req, res) => {
    res.send('From API route')
})

router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    if (userData.role == "admin") {
        let admin = new Admin(userData)
        admin.save((error, registeredUser) => {
            if (error) {
                console.log(error)
            } else {
                res.status(200).send(registeredUser)
            }
        });
    } else {
        let user = new User(userData)
        user.save((error, registeredUser) => {
            if (error) {
                console.log(error)
            } else {
                res.status(200).send(registeredUser)
            }
        });
    }
});

module.exports = router;