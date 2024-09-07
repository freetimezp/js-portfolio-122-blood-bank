const userModel = require("../models/userModel");
const inventoryModel = require("../models/inventoryModel");


//create
const createInventoryController = async (req, res) => {
    try {
        const { email, inventoryType } = req.body;

        //validation
        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        if (inventoryType === "in" && user.role !== "donar") {
            throw new Error("Not a donar account");
        }
        if (inventoryType === "out" && user.role !== "hospital") {
            throw new Error("Not a hospital");
        }


        //save
        const inventory = new inventoryModel(req.body);
        await inventory.save();

        return res.status(201).send({
            success: true,
            message: "New record added"
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({
            success: false,
            message: "Error create inventory API",
            error
        });
    }
};


//get all inventory records 
const getInventoryController = async (req, res) => {
    try {
        const inventory = await inventoryModel.find({ organization: req.body.userId });

        return res.status(200).send({
            success: true,
            message: "get all records inventory success",
            inventory
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({
            success: false,
            message: "Error get all inventory API",
            error
        });
    }
};

module.exports = { createInventoryController, getInventoryController };