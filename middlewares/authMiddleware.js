const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const token = await req.headers['authorization'].split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: "Auth failed"
                });
            } else {
                req.body.userId = decode.userId;
                next();
            }
        });
    } catch (error) {
        console.log(error.message);
        return res.status(401).send({
            success: false,
            message: "Auth failed",
            error
        });
    }
};









