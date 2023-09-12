const authModel = require("../models/authModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


let register = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.json({ Error: "Enter all details" })
    }
    const userAvaliable = await authModel.findOne({ email })
    if (userAvaliable) {
        res.json({ Error: "User Already Register" })
        return
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await authModel.create({
        username,
        email,
        password: hashPassword,
    })
    res.json({
        id: user._id,
        email: user.email
    })
}

let login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.json({ message: "Enter Correct Address" })
        return
    }
    const user = await authModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "55m"
        })
        res.json({ accessToken })
    }
    else {
        res.json({
            Error: "User Not Found!!"
        })
    }
}

let current = async (req, res) => {
    res.json(req.user)
}

module.exports = { register, login, current }