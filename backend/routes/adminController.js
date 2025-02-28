const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const adminController = require("../controllers/adminController");
const adminAuthentication = require("../middlewares/admin");
const adminRoutes = express.Router();

adminRoutes.post("/add", userAuthentication,adminAuthentication,adminController.createClinic);
adminRoutes.put("/edit", userAuthentication,adminAuthentication,adminController.updateClinic);
adminRoutes.get("/viewall", userAuthentication,adminAuthentication,adminController.getClinics);
adminRoutes.get("/search", userAuthentication,adminAuthentication,adminController.getClinicById);
adminRoutes.delete("/delete", userAuthentication,adminAuthentication,adminController.deleteClinic);

module.exports = adminRoutes;