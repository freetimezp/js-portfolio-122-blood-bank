const express = require("express");
const {
    getDonarsListController,
    getHospitalsListController,
    getOrgsListController,
    deleteController
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

//delete donar, hospital, org
router.delete("/delete-donar/:id", authMiddleware, adminMiddleware, deleteController);
router.delete("/delete-hospital/:id", authMiddleware, adminMiddleware, deleteController);
router.delete("/delete-org/:id", authMiddleware, adminMiddleware, deleteController);

module.exports = router;



