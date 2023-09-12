const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                // res.status(401);
                // throw new Error({message:"Error"})
                res.json({ Error: "User is not Authorized" })
            }
            else {
                req.user = decoded.user;
                next();
            }
        })

    }
    if (!token) {
        // console.log("Error");
        // res.status(401);
        // throw new Error("msg");
        res.json({ Error: "Empty Token" })
    }
}

module.exports = validateToken