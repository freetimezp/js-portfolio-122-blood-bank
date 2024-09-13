const userModel = require("../models/userModel");

//donars list
const getDonarsListController = async (req, res) => {
    try {
        const donarData = await userModel.find({ role: "donar" }).sort({ createdAt: -1 });

        return res.status(200).send({
            success: true,
            totalCount: donarData.length,
            message: "Donar List fetched success",
            donarData
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "getDonarsListController error",
            error
        });
    }
};

//hospital list
const getHospitalsListController = async (req, res) => {
    try {
        const hospitalData = await userModel.find({ role: "hospital" }).sort({ createdAt: -1 });

        return res.status(200).send({
            success: true,
            totalCount: hospitalData.length,
            message: "hospital List fetched success",
            hospitalData
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "getHospitalsListController error",
            error
        });
    }
};

//orgs list
const getOrgsListController = async (req, res) => {
    try {
        const orgData = await userModel.find({ role: "organization" }).sort({ createdAt: -1 });

        return res.status(200).send({
            success: true,
            totalCount: orgData.length,
            message: "org List fetched success",
            orgData
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "getOrgsListController error",
            error
        });
    }
};


//delete
const deleteController = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);

        return res.status(200).send({
            success: true,
            message: "delete success"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "deleteController error",
            error
        });
    }
};


module.exports = {
    getDonarsListController,
    getHospitalsListController,
    getOrgsListController,
    deleteController
};




