const express=require("express");
const userRoutes = require("./userRouter");
const animalRoutes = require("./animalRouter");
const shelterRoutes = require("./shelterRouter");
const adoptionRoutes = require("./adoptionRouter");
const contractRoutes = require("./adoptionContractRouter");
const router=express()

router.use("/users", userRoutes);
router.use("/animals", animalRoutes);
router.use("/shelter", shelterRoutes);
router.use("/adoption", adoptionRoutes);
router.use("/contract", contractRoutes);

module.exports=router