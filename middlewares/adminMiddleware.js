const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.body.userId);

        if (user?.role !== "admin") {
            return res.status(401).send({
                success: false,
                message: "user not admin",
                error
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            success: false,
            message: "Auth failed Admin API",
            error
        });
    }
};

