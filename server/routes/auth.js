const express = require('express');

const { userLogin, userRegister } = require('../helpers/auth');
const router = express.Router();

router.post('/register', (req, res) => {
    userRegister(req, res)
})

router.post('/login', (req, res) => {
    userLogin(req, res)
})

module.exports = router;