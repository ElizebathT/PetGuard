const express=require("express");
const userRoutes = require("./userRouter");
const animalRoutes = require("./animalRouter");
const shelterRoutes = require("./shelterRouter");
const router=express()

router.use("/users", userRoutes);
router.use("/animals", animalRoutes);
router.use("/shelter", shelterRoutes);

module.exports=router