const express = require('express')
const router = express.Router();


const middleware = (req, res, next) => {
    console.log("Inside Middleware");
    next();
}
router.get("/detail/:name", (req, res) => {
    res.send(`You entered :- ${req.params.name}`)
})

router.get("/detail", middleware, (req, res) => {
    console.log("Inside Api");
    res.send("Name route Called")
})


router.get("/detail/:id[0-7]{1}", (req, res) => {
    res.send(`You entered :- ${req.params.name}`)
})

router.get("*", (req, res) => {
    res.send("Error")
})




module.exports = router