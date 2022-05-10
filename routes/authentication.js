var express = require('express');
var router = express.Router();
const { userRegister } = require('../services/authentication.service')

router.post('/register', function (req, res, next) {
    let body = req.body
    userRegister(body)
    console.log(body)
    res.json(body)
});

module.exports = router;
