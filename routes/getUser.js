const express = require('express')
const { getUsers, setUsers, putUsers, deleteUsers } = require("../controllers/getUsersController");
const validateToken = require('../Middlewares/validateToken');
const router = express.Router();
router.use(validateToken);
router.get("/show", getUsers)
router.post("/create", setUsers)
router.put("/update/:id", putUsers)
router.delete("/delete/:id", deleteUsers)



module.exports = router