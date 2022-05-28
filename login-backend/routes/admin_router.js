'use strict' 

const express = require("express")
const adminControllers = require('../controllers/admin_ctrl')
const router = new express.Router();


// admin controllers

router.get("/getAll", adminControllers.getAll)
router.get("/getId/:id", adminControllers.getId)
router.post("/registrasi", adminControllers.registrasi)
router.post("/login", adminControllers.login)
// router.put("/update/:id", adminControllers.update)
// router.delete("/delete/:id", adminControllers.delete)

module.exports  = router