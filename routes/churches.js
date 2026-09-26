const express = require ("express")
const router = express.Router()
const {getChurches}= require("../controllers/churches")
const {MyChurch} =require ("../controllers/churches")
const {uploadChurches} = require("../controllers/Uploader")
router.get("/", getChurches)
router.get("/songs", MyChurch)
router.get("/uploads/churches", uploadChurches)
module.exports= router