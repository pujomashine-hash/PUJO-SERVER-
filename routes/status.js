const express = require ("express")
const router = express.Router()
const {serverStarter} = require ("../controllers/status")
router.get("/pujo/test/status",serverStarter)
module.exports = router