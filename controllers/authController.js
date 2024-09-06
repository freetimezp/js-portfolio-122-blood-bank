const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//register
const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });

        //validation
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "User already exists!"
            });
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        //data
        const user = new userModel(req.body);
        await user.save();

        return res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            user
        });
    } catch (error) {
        console.log("register controller error: ", error.message);
        res.status(500).send({
            success: false,
            message: "Error in register API",
            error
        });
    }
};

//login
const loginController = async (req, res) => {
    try {
        //try find user in database
        const user = await userModel.findOne({ email: req.body.email });

        //if user not found in database
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "user not found in db.."
            });
        }

        //compare password
        const comparePassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparePassword) {
            return res.status(500).send({
                success: false,
                message: "invalid credential"
            });
        }

        //create token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        //result 
        return res.status(200).send({
            success: true,
            message: "Login success",
            token,
            user
        })
    } catch (error) {
        console.log("login controller error: ", error.message);
        res.status(500).send({
            success: false,
            message: "invalid credential",
            error
        });
    }
};

module.exports = { registerController, loginController };