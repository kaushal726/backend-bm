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
    let { name, particular, rate, quantity, discount } = req.body;
    // if (!name || !id || !age) {
    //     res.status(401);
    //     throw new Error["All fields are mandatory"];
    // }
    if (!name || !particular || !rate || !quantity) {
        res.json({ Error: "Enter all field" });
    }
    let created_at = new Date();
    let amount;
    if (discount) {
        amount = (rate * quantity) - discount
    }
    else {
        amount = rate * quantity;
        discount = 0;
    }
    let contact = await getUsersModel.create({
        user_id: req.user.id, name, particular, rate, quantity, discount, total: amount, created_at: created_at,

    });
    res.status(201).json(contact)
}

let putUsers = async (req, res) => {
    // console.log(req.params.id);
    let user = await getUsersModel.findById(req.params.id);
    // console.log(name, id, age);
    // if (!name || !id || !age) {
    //     res.status(401);
    //     throw new Error["All fields are mandatory"];
    // }
    if (req.user.id != user.user_id) {
        res.json({ Error: "Invalid Id" })
        return;
    }
    let contact = await getUsersModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }

    );
    res.status(201).json(contact);
}

let deleteUsers = async (req, res) => {
    let contact = await getUsersModel.findById(req.params.id);
    // console.log(contact);
    // console.log(name, id, age);
    // if (!name || !id || !age) {
    //     res.status(401);
    //     throw new Error["All fields are mandatory"];
    // }
    if (contact) {
        if (req.user.id != contact.user_id) {
            res.json({ Error: "Invalid Id" })
            return;
        }
    }
    else {
        res.json({ Error: "No Records Found" })
        return
    }

    await getUsersModel.deleteOne({ _id: req.params.id });
    res.status(201).json(contact)
}

module.exports = { getUsers, setUsers, putUsers, deleteUsers }