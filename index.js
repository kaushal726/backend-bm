const express = require('express')
const app = express();
const cors = require('cors');
const dotenv = require("dotenv").config();
const getUsers = require("./routes/getUser");
const showUsers = require("./routes/showUsers");
const errorHandler = require('./Middlewares/errorHandler');
const connectDb = require('./config/dbConnection');
const authUsers = require('./routes/auth')
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(cors());
connectDb();

app.use("/users", getUsers);
// app.use(errorHandler);
// app.use("/show", showUsers);
app.use("/auth", authUsers);



app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
})