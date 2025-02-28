const express=require("express");
const userRoutes = require("./userRouter");
const animalRoutes = require("./animalRouter");
const shelterRoutes = require("./shelterRouter");
const adoptionRoutes = require("./adoptionRouter");
const contractRoutes = require("./adoptionContractRouter");
const clinicRoutes = require("./clinicRouter");
const medicalRoutes = require("./medicalRecordRouter");
const paymentRoutes = require("./paymentRoutes");
const resourceRouter = require("./resourceRouter");
const router=express()

router.use("/payment", paymentRoutes);

router.use(express.json())

router.use("/users", userRoutes);
router.use("/animals", animalRoutes);
router.use("/shelter", shelterRoutes);
router.use("/adoption", adoptionRoutes);
router.use("/contract", contractRoutes);
router.use("/clinic", clinicRoutes);
router.use("/records", medicalRoutes);
router.use("/resources", resourceRouter);
router.use("/admin", adoptionRoutes);


module.exports=router