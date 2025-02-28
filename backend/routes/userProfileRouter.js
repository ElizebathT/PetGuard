const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const userProfileController = require("../controllers/userProfileController");
const profileRoutes = express.Router();

profileRoutes.put("/save", userAuthentication,userProfileController.createOrUpdateProfile);
profileRoutes.get("/edit", userAuthentication,userProfileController.getProfile);
profileRoutes.delete("/delete",userAuthentication,userProfileController.deleteProfile);

module.exports = profileRoutes;