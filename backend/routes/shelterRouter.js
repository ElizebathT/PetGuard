const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const  upload  = require("../middlewares/cloudinary");
const shelterController = require("../controllers/shelterController");
const shelterRoutes = express.Router();

shelterRoutes.post("/add", userAuthentication,upload.single("facilityImages"),shelterController.createProfile);
shelterRoutes.put("/edit", userAuthentication,shelterController.updateProfile);
shelterRoutes.get("/viewall", userAuthentication,shelterController.getVerifiedProfiles);
shelterRoutes.get("/search", userAuthentication,shelterController.getProfileById);
shelterRoutes.delete("/delete", userAuthentication,shelterController.deleteProfile);

module.exports = shelterRoutes;