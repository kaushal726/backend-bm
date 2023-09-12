const express = require('express');
const { register, login, current } = require('../controllers/authController');
const validateToken = require('../Middlewares/validateToken');
const router = express.Router();


router.post("/register", register)

router.post("/login", login)

router.get("/current", validateToken, current)


module.exports = router