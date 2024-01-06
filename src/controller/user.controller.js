const UserModel = require('../model/user.model');


exports.createUser = async (req, res) => {
    const newUser = new UserModel(req.body);

    try {
        const userData = await newUser.save();
        res.status(200).json({message: "User created successfully", status: true,  UserInfo: userData});
    } catch (error) {
        res.status(500).json({message: error.message, status: false});
    }

};


exports.getAllUsers = async (req, res) => {
    try {
        const userData = await UserModel.find();
        res.status(200).json({message: "User fetched successfully", status: true,  UserInfo: userData});
    } catch (error) {
        res.status(500).json({message: error.message, status: false});
    }
}