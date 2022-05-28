'use strict' 

const express = require("express")
const customerControllers = require('../controllers/cust_ctrl')

const router = new express.Router();

router.get("/getAll", customerControllers.getAll)
router.get("/getId/:id", customerControllers.getId)
router.post("/registrasi", customerControllers.registrasi)
router.post("/login", customerControllers.login)

module.exports = router;