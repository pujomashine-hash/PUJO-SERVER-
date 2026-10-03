const express= require("express")
const router= express.Router({
  mergeParams:true
})
const {downloadFile} =
  require ("../controllers/download")
router.get("/songs/:id/download",downloadFile)
module.exports=router