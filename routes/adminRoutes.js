const express = require("express");
const {
    getDonarsListController,
    getHospitalsListController,
    getOrgsListController
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


//get || donar list
router.get("/donar-list", authMiddleware, adminMiddleware, getDonarsListController);

//get || hospital list
router.get("/hospital-list", authMiddleware, adminMiddleware, getHospitalsListController);

//get || org list
router.get("/org-list", authMiddleware, adminMiddleware, getOrgsListController);

module.exports = router;



