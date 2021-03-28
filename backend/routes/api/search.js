const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();


router.get('/', asyncHandler(async function (req, res) { 
    const { name } = req.query
    console.log(name)
    res.json({ songs: [{name: 'a'}, {name: 'b'}]});
}))

module.exports = router;
