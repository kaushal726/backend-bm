const getUsersModel = require("../models/getUsersModel")

let getUsers = async (req, res) => {
    // let { name, id, age } = req.body;
    // console.log(name, id, age);
    // if (!name || !id || !age) {
    //     res.status(401);
    //     throw new Error["All fields are mandatory"];
    // }
    // console.log(req.user);
    let user = await getUsersModel.find({ user_id: req.user.id });
    res.status(201).json(user)
}

let setUsers = async (req, res) => {
    let { id, name, email, age } = req.body;
    // console.log(name, age);
    // if (!name || !id || !age) {
    //     res.status(401);
    //     throw new Error["All fields are mandatory"];
    // }
    if (!name || !id || !age) {
        res.json({ Error: "Enter all field" });
    }
    let created_at = new Date();
    let contact = await getUsersModel.create({
        user_id: req.user.id, name, email, age, created_at,

    });
    res.status(201).json(contact)
}

let putUsers = async (req, res) => {
    console.log(req.params.id);
    let id = await getUsersModel.findById(req.params.id);
    // console.log(name, id, age);
    // if (!name || !id || !age) {
    //     res.status(401);
    //     throw new Error["All fields are mandatory"];
    // }




    let contact = await getUsersModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }

    );
    res.status(201).json(contact)
}

let deleteUsers = async (req, res) => {
    let contact = await getUsersModel.findById(req.params.id);
    // console.log(contact);
    // console.log(name, id, age);
    // if (!name || !id || !age) {
    //     res.status(401);
    //     throw new Error["All fields are mandatory"];
    // }

    await getUsersModel.deleteOne({ _id: req.params.id });
    res.status(201).json(contact)
}

module.exports = { getUsers, setUsers, putUsers, deleteUsers }