const express = require ("express")
const router = express.Router()
const {getChurches}= require("../controllers/churches")
const {MyChurch} =require ("../controllers/churches")
router.get("/", getChurches)
router.get("/songs", MyChurch)
module.exports= router