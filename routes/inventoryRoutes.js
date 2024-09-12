const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
    createInventoryController,
    getInventoryController,
    getInventoryHospitalController,
    getDonarsController,
    getHospitalsController,
    getOrganizationController,
    getOrganizationForHospitalController,
    getRecentInventoryController
} = require("../controllers/inventoryController");

const router = express.Router();

//routes 
//ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL RECORDS INVENTORY || GET
router.get("/get-inventory", authMiddleware, getInventoryController);

//GET recent blood records
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

//GET ALL HOSPITAL RECORDS INVENTORY 
router.post("/get-inventory-hospital", authMiddleware, getInventoryHospitalController);

//GET DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);


//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalsController);

//GET ORGANIZATION RECORD
router.get("/get-organization", authMiddleware, getOrganizationController);


//GET ORGANIZATION RECORD FOR HOSPITAl
router.get("/get-organization-for-hospital", authMiddleware, getOrganizationForHospitalController);

module.exports = router;
