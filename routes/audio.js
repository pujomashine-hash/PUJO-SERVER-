const express = require ("express")
const router = express.Router({
  mergeParams: true
});
const {uploadAudio,getAudioFile} =
  require ("../controllers/audio")
router.get("/audio",uploadAudio)
router.get("/",getAudioFile)
module.exports= router