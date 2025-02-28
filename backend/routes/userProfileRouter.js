const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const userProfileController = require("../controllers/userProfileController");
const profileRoutes = express.Router();

profileRoutes.put("/save", userAuthentication,userProfileController.createOrUpdateProfile);
profileRoutes.put("/add", userAuthentication,userProfileController.addToWishlist);
profileRoutes.put("/remove", userAuthentication,userProfileController.removeFromWishlist);
profileRoutes.get("/edit", userAuthentication,userProfileController.getProfile);
profileRoutes.get("/wishlist", userAuthentication,userProfileController.getWishlist);
profileRoutes.delete("/delete",userAuthentication,userProfileController.deleteProfile);

module.exports = profileRoutes;