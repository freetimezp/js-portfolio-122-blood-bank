const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
    createInventoryController,
    getInventoryController,
    getDonarsController,
    getHospitalsController,
    getOrganizationController
} = require("../controllers/inventoryController");

const router = express.Router();

//routes 
//ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL RECORDS INVENTORY || GET
router.get("/get-inventory", authMiddleware, getInventoryController);

//GET DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);


//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalsController);

//GET ORGANIZATION RECORD
router.get("/get-organization", authMiddleware, getOrganizationController);


module.exports = router;
