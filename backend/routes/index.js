const express=require("express");
const userRoutes = require("./userRouter");
const animalRoutes = require("./animalRouter");
const router=express()

router.use("/users", userRoutes);
router.use("/animals", animalRoutes);

module.exports=router