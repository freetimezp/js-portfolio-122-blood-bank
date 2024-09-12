const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const inventoryModel = require("../models/inventoryModel");


//create
const createInventoryController = async (req, res) => {
    try {
        const { email } = req.body;

        //validation
        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        // if (inventoryType === "in" && user.role !== "donar") {
        //     throw new Error("Not a donar account");
        // }
        // if (inventoryType === "out" && user.role !== "hospital") {
        //     throw new Error("Not a hospital");
        // }

        if (req.body.inventoryType == "out") {
            const requestedBloodGroup = req.body.bloodGroup;
            const requestedQuantityOfBlood = req.body.quantity;

            //console.log(requestedBloodGroup);

            const organization = new mongoose.Types.ObjectId(req.body.userId);
            //calculate blood quantity
            const totalInOfRequestedBlood = await inventoryModel.aggregate([
                {
                    $match: {
                        organization,
                        inventoryType: "in",
                        bloodGroup: requestedBloodGroup,
                    }
                },
                {
                    $group: {
                        _id: "$bloodGroup",
                        total: { $sum: "$quantity" },
                    }
                }
            ]);

            //console.log("total in: ", totalInOfRequestedBlood);
            const totalIn = totalInOfRequestedBlood[0]?.total || 0;

            //total blood out quantity
            const totalOutOfRequestedBlood = await inventoryModel.aggregate([
                {
                    $match: {
                        organization,
                        inventoryType: "out",
                        bloodGroup: requestedBloodGroup,
                    }
                },
                {
                    $group: {
                        _id: "$bloodGroup",
                        total: { $sum: "$quantity" },
                    }
                }
            ]);

            //console.log("total out: ", totalOutOfRequestedBlood);
            const totalOut = totalOutOfRequestedBlood[0]?.total || 0;


            //in & out calculation blood
            const availableQuantityOfBlood = totalIn - totalOut;
            //quantity validation
            if (availableQuantityOfBlood < requestedQuantityOfBlood) {
                return res.status(500).send({
                    success: false,
                    message: `Only ${availableQuantityOfBlood}ML of ${requestedBloodGroup} is available`
                });
            }

            req.body.hospital = user?._id;
        } else {
            req.body.donar = user?._id;
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
        const inventory = await inventoryModel
            .find({
                organization: req.body.userId
            })
            .populate('donar')
            .populate('hospital').sort({ createdAt: -1 });

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


//get donar records 
const getDonarsController = async (req, res) => {
    try {
        const organization = req.body.userId;
        //console.log(organization);

        //find donars
        const donarId = await inventoryModel.distinct("donar", {
            organization
        });

        //console.log(donarId);
        const donars = await userModel.find({ _id: { $in: donarId } });

        return res.status(200).send({
            success: true,
            message: "Donar records fetched successfully",
            donars
        });
    } catch (error) {
        console.log("getDonarsController:", error);
        return res.status(500).send({
            success: false,
            message: "Error in Donar records",
            error
        });
    }
};

//get hospital records 
const getHospitalsController = async (req, res) => {
    try {
        const organization = req.body.userId;
        //console.log(organization);

        //find hospital
        const hospitalId = await inventoryModel.distinct("hospital", {
            organization
        });

        const hospitals = await userModel.find({ _id: { $in: hospitalId } });

        return res.status(200).send({
            success: true,
            message: "Hospitals fetched successfully",
            hospitals
        });
    } catch (error) {
        console.log("getHospitalsController:", error);
        return res.status(500).send({
            success: false,
            message: "Error in fetch Hospital records",
            error
        });
    }
};


//get Organization records 
const getOrganizationController = async (req, res) => {
    try {
        const donar = req.body.userId;

        const orgId = await inventoryModel.distinct("organization", {
            donar
        });

        //find organizations
        const organizations = await userModel.find({ _id: { $in: orgId } });

        return res.status(200).send({
            success: true,
            message: "Orgs fetched successfully",
            organizations
        });
    } catch (error) {
        console.log("getOrganizationController:", error);
        return res.status(500).send({
            success: false,
            message: "Error in fetch Organization records",
            error
        });
    }
};


//get Organization for hospital 
const getOrganizationForHospitalController = async (req, res) => {
    try {
        const hospital = req.body.userId;
        const orgId = await inventoryModel.distinct("organization", { hospital });
        console.log(orgId);

        //find organizations
        const organizations = await userModel.find({ _id: { $in: orgId } });

        return res.status(200).send({
            success: true,
            message: "Hospital Org fetched successfully",
            organizations
        });
    } catch (error) {
        console.log("getOrganizationForHospitalController:", error);
        return res.status(500).send({
            success: false,
            message: "Error in fetch Organization for Hospital records",
            error
        });
    }
};

module.exports = {
    createInventoryController,
    getInventoryController,
    getDonarsController,
    getHospitalsController,
    getOrganizationController,
    getOrganizationForHospitalController
};